
import { GoogleGenAI, GenerateContentResponse, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

const API_KEY = process.env.API_KEY || '';

export const getDiagnosticAdvice = async (issue: string) => {
  if (!API_KEY) {
    console.error("API Key not found");
    return "I'm having trouble connecting to my plumbing knowledge base. Please call us directly at (251) 765-0333 for immediate assistance!";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: issue, // User's input is the content
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION, // Persona and guardrails are here
        temperature: 0.7,
        maxOutputTokens: 300,
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
          },
        ],
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response. Please give us a call at (251) 765-0333!";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I'm experiencing some technical difficulties. Please call Aardee Plumbing at (251) 765-0333.";
  }
};

export const chatWithBot = async (messages: {role: string, parts: {text: string}[]}[]) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: AI_SYSTEM_INSTRUCTION,
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
      ],
    }
  });

  const lastMessage = messages[messages.length - 1].parts[0].text;
  const result = await chat.sendMessage({ message: lastMessage });
  return result.text;
};
