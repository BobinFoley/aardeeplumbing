
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { getDiagnosticAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { AI_SYSTEM_INSTRUCTION } from '../constants';

// Updated Operator Image for Gracie
const OPERATOR_IMAGE = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300";

const QUICK_REPLIES = [
  "Leaky Faucet",
  "Running Toilet",
  "Clogged Drain",
  "No Hot Water",
  "Low Water Pressure",
  "Sewer Smell"
];

// Audio helpers
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function createBlob(data: Float32Array): { data: string; mimeType: string } {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    int16[i] = data[i] * 32768;
  }
  return {
    data: encode(new Uint8Array(int16.buffer)),
    mimeType: 'audio/pcm;rate=16000',
  };
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi, this is Gracie with Aardee Plumbing. How can I make your day better?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  
  // Voice State
  const [isConnecting, setIsConnecting] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Live API refs
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null); // Output context
  const inputAudioContextRef = useRef<AudioContext | null>(null); // Input context
  const mediaStreamRef = useRef<MediaStream | null>(null); // Microphone stream
  const nextStartTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isVoiceMode]);

  const cleanupCall = () => {
    // Close Live API Session
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }

    // Stop Microphone Stream
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }

    // Close Input Audio Context (Mic processing)
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }

    // Close Output Audio Context (Speaker)
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    // Stop any playing audio sources
    activeSourcesRef.current.forEach(source => {
      try { source.stop(); } catch(e) {}
    });
    activeSourcesRef.current.clear();
    
    // Reset State
    setIsCallActive(false);
    setIsVoiceMode(false);
    setIsConnecting(false);
    setIsAiSpeaking(false);
    nextStartTimeRef.current = 0;
  };

  const startVoiceCall = async () => {
    setIsConnecting(true);
    setIsVoiceMode(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const inputAudioContext = new AudioContext({ sampleRate: 16000 });
      inputAudioContextRef.current = inputAudioContext;

      const outputAudioContext = new AudioContext({ sampleRate: 24000 });
      audioContextRef.current = outputAudioContext;
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            setIsConnecting(false);
            setIsCallActive(true);
            
            // Initiate the conversation immediately as requested
            sessionPromise.then(session => {
              session.sendRealtimeInput({ 
                text: "Please start the conversation by exactly saying: 'Hi, this is Gracie with Aardee Plumbing. How can I make your day better?'"
              } as any);
            });

            const source = inputAudioContext.createMediaStreamSource(stream);
            const scriptProcessor = inputAudioContext.createScriptProcessor(4096, 1, 1);
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputAudioContext.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio) {
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContext.currentTime);
              const audioBuffer = await decodeAudioData(decode(base64Audio), outputAudioContext, 24000, 1);
              const source = outputAudioContext.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputAudioContext.destination);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              activeSourcesRef.current.add(source);
              setIsAiSpeaking(true);
              source.onended = () => {
                activeSourcesRef.current.delete(source);
                if (activeSourcesRef.current.size === 0) {
                  setIsAiSpeaking(false);
                }
              };
            }
            if (message.serverContent?.interrupted) {
              activeSourcesRef.current.forEach(s => s.stop());
              activeSourcesRef.current.clear();
              nextStartTimeRef.current = 0;
              setIsAiSpeaking(false);
            }
          },
          onclose: () => {
             // We handle cleanup explicitly, but this callback might fire if the server closes.
             // We can safely call cleanupCall as it checks for nulls.
             cleanupCall();
          },
          onerror: (e) => {
            console.error(e);
            cleanupCall();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
          },
          systemInstruction: AI_SYSTEM_INSTRUCTION
        }
      });
      
      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error(err);
      cleanupCall(); // Ensure cleanup on error during setup
    }
  };

  const processMessage = async (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: text }]);
    setIsTyping(true);
    const diagnosis = await getDiagnosticAdvice(text);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: diagnosis }]);
  };

  const handleSend = () => {
    const text = input;
    setInput('');
    processMessage(text);
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[calc(100vw-3rem)] md:w-[450px] mb-4 border border-gray-200 overflow-hidden flex flex-col h-[70vh] md:h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={OPERATOR_IMAGE} 
                  alt="Gracie - Aardee AI Assistant" 
                  className="w-12 h-12 rounded-full border-2 border-white/50 object-cover shadow-md"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold leading-none mb-1 text-white">Gracie</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-80 text-blue-100">
                  {isCallActive ? 'Live AI Voice Connection' : '24/7 AI Assistant | Aardee Plumbing'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {!isVoiceMode && (
                <button 
                  onClick={startVoiceCall}
                  className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-blue-950 px-4 py-2 rounded-xl transition-all flex items-center space-x-2 shadow-lg animate-shake border border-amber-300/50 group"
                  title="Start AI Voice Chat"
                >
                  <i className="fa-solid fa-microphone-lines text-blue-900 group-hover:scale-110 transition-transform"></i>
                  <span className="text-[11px] font-black uppercase tracking-tight">AI Voice</span>
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-lg transition-colors">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 relative bg-gray-50/50" ref={scrollRef}>
            {isVoiceMode ? (
              <div className="h-full flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="relative">
                  <div className={`w-40 h-40 rounded-full border-4 flex items-center justify-center transition-all duration-500 overflow-hidden ${
                    isCallActive ? 'scale-110 shadow-2xl' : 'border-blue-100'
                  } ${
                    isAiSpeaking ? 'border-blue-400 shadow-blue-400/50' : 'border-blue-100 shadow-blue-500/20'
                  }`}>
                    <img src={OPERATOR_IMAGE} className="w-full h-full object-cover" alt="Operator" />
                  </div>
                  {isCallActive && (
                    <>
                      <div className={`absolute inset-0 rounded-full border-4 ${isAiSpeaking ? 'border-blue-400 opacity-40 duration-1000' : 'border-blue-500 opacity-20'} animate-ping`}></div>
                      {isAiSpeaking && (
                        <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-ping [animation-duration:1.5s] opacity-30"></div>
                      )}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest flex items-center gap-1">
                        {isAiSpeaking ? (
                          <>
                            <span>Speaking</span>
                            <span className="flex gap-0.5 h-2 items-end">
                              <span className="w-0.5 bg-white animate-[bounce_1s_infinite] h-1"></span>
                              <span className="w-0.5 bg-white animate-[bounce_1s_infinite_0.2s] h-2"></span>
                              <span className="w-0.5 bg-white animate-[bounce_1s_infinite_0.4s] h-1"></span>
                            </span>
                          </>
                        ) : 'Live'}
                      </div>
                    </>
                  )}
                </div>
                
                <div className="text-center px-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">
                    {isConnecting ? 'Initializing AI Voice...' : 'AI Voice Line Connected'}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {isConnecting 
                      ? 'Gracie is getting on the line for you...' 
                      : 'Go ahead, speak with Gracie. She’s listening and ready to help with your plumbing.'}
                  </p>
                </div>

                <button 
                  onClick={cleanupCall}
                  className="bg-red-500 text-white px-10 py-4 rounded-full font-bold flex items-center space-x-3 hover:bg-red-600 transition-all shadow-xl hover:shadow-red-200"
                >
                  <i className="fa-solid fa-phone-slash"></i>
                  <span>End AI Call</span>
                </button>
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-[90%] px-5 py-3.5 rounded-2xl text-[13.5px] leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                    }`}>
                      {msg.text}
                    </div>
                    
                    {i === 0 && messages.length === 1 && msg.role === 'model' && (
                      <div className="mt-4 flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2 duration-500">
                        {QUICK_REPLIES.map((reply) => (
                          <button
                            key={reply}
                            onClick={() => processMessage(reply)}
                            className="bg-white text-blue-700 border border-blue-100 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm active:scale-95"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-100 px-5 py-3 rounded-2xl flex space-x-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {!isVoiceMode && (
            <div className="p-4 bg-white border-t border-gray-100 flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message Gracie..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isTyping}
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          )}

          {/* Attribution Footer */}
          <div className="bg-gray-50 py-2 text-center border-t border-gray-100">
            <a 
              href="https://thisisgracie.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] text-gray-400 hover:text-blue-600 transition-colors font-medium"
            >
              AI answering and chatbot provided by <span className="font-bold text-blue-600">This Is Gracie</span>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full shadow-2xl shadow-red-900/30 border-2 border-white/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 z-50 ${!isOpen ? 'animate-shake' : ''}`}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="font-black text-sm uppercase tracking-widest">24/7 AI Chat</span>
      </button>
    </div>
  );
};

export default AIChatbot;
