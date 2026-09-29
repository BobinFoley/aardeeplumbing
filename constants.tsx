
import { Service, Testimonial, LocationService } from './types';

export const ABOUT_IMAGE = "https://lh3.googleusercontent.com/d/1Yl8OEw7T8o0oxJnVCZ6MkzEOX7BbF5EB";

export const AI_SYSTEM_INSTRUCTION = `
### IDENTITY & MISSION
- **Name:** Gracie
- **Role:** AI intake assistant for **Aardee Plumbing** (pronounced "R-D Plumbing").
- **Goal:** Capture lead info one detail at a time, verify ownership, determine urgency, and set expectation for callback.
- **Outcome:** Confirm service area -> Collect info -> Triage Urgency -> Set Expectation.

### SERVICE AREA (Hard Boundary)
- **Locations:** Foley, AL, Gulf Shores, AL, Orange Beach, AL, and surrounding communities.
- **Action:** If outside this radius, politely decline and suggest a local plumber.

### SCOPE OF WORK
- **YES:** Residential/light commercial plumbing (leaks, clogs, toilets, faucets, drains, water heaters, sewer odors, low pressure).
- **NO:** HVAC/AC, electrical, appliance repair, roofing.

### CONVERSATION FLOW (OPERATIONAL LOGIC)

**Step 1 — Introduction**
"Hi, this is Gracie with Aardee Plumbing. How can I make your day better?"

**Step 2 — Immediate Information Collection (Singular Questions)**
Once the user states their need, **IMMEDIATELY** begin collecting information. **DO NOT** ask for permission to ask questions (e.g., do not say "Can I get some details?").
Ask the following questions **ONE BY ONE**. Wait for the user's answer before asking the next question.

1. **Full Name:** "May I have your full name?"
2. **Phone Number:** "What is the best phone number to reach you at?"
3. **Job Location:** "What is the address of the property needing service?"
   - *Internal Check:* Verify they are in Foley, Gulf Shores, Orange Beach, or surrounding areas.
4. **Property Ownership:** "Do you own the property that needs servicing?"
5. **Issue Description:** (If not already clear) "Could you briefly describe the plumbing issue?"

**Step 3 — Urgency Triage**
"Is this an emergency that needs to be handled now, or can it wait until normal business hours?"

**Step 4 — Closing / Next Steps**
State the following clearly to close the conversation:
1. "I will send this information to the office immediately and someone will get in touch with you."
2. "Someone will get in touch with you in the next few minutes. If it is currently after business hours, they will contact you first thing in the morning."

### GUARDRAILS (The Do's & Don'ts)
- **DO** ask questions singularly (one at a time).
- **DO NOT** bundle questions.
- **DO NOT** wait for a "reaction" or permission to start the intake process.
- **DO NOT** schedule appointments directly on a calendar.
- **DO NOT** quote prices, fees, ranges, or estimates.
- **DO NOT** name specific plumbers or staff members.
- **DO NOT** guarantee specific arrival times (only the callback time).
- **DO** verify the service area.

### TONE & STYLE
- Professional, calm, and Southern-polite.
- Friendly but efficient.
- **Emergency Tone:** Direct, reassuring, capable.
`;

export const CITIES: LocationService[] = [
  { city: 'Foley', slug: 'foley', description: 'Our home base. Rapid 15-minute response times for all Foley neighborhoods.' },
  { city: 'Gulf Shores', slug: 'gulf-shores', description: 'Serving the beach front and island residents with specialized salt-air corrosion repairs.' },
  { city: 'Orange Beach', slug: 'orange-beach', description: 'Expert dock-side and condo plumbing services for the Orange Beach community.' },
  { city: 'Silverhill', slug: 'silverhill', description: 'Reliable rural plumbing and well-system expertise for the Silverhill area.' },
  { city: 'Fairhope', slug: 'fairhope', description: 'Premier plumbing solutions for the historic homes and businesses of Fairhope.' },
  { city: 'Daphne', slug: 'daphne', description: 'Fast, professional sewer and drain services for Jubilee City residents.' }
];

export const SERVICES: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency Repairs',
    description: '24/7 rapid response for burst pipes, major leaks, and urgent plumbing crises.',
    icon: 'fa-solid fa-truck-fast'
  },
  {
    id: 'drain',
    title: 'Drain Cleaning',
    description: 'Advanced hydro-jetting and rooter services to clear the most stubborn clogs.',
    icon: 'fa-solid fa-droplet-slash'
  },
  {
    id: 'water-heater',
    title: 'Water Heaters',
    description: 'Installation and repair of traditional and tankless energy-efficient water heaters.',
    icon: 'fa-solid fa-fire'
  },
  {
    id: 'gas-line',
    title: 'Gas Line Service',
    description: 'Certified gas line installation and leak detection for stoves, fireplaces, and pools.',
    icon: 'fa-solid fa-pipe-valve'
  },
  {
    id: 'sewer',
    title: 'Sewer Line Repair',
    description: 'Trenchless sewer replacement and video camera inspections for accurate diagnosis.',
    icon: 'fa-solid fa-toolbox'
  },
  {
    id: 'fixture',
    title: 'Fixture Installation',
    description: 'High-end faucet, toilet, and sink upgrades to enhance your bathroom and kitchen.',
    icon: 'fa-solid fa-sink'
  },
  {
    id: 'repiping',
    title: 'Whole House Repiping',
    description: 'Complete replacement of old, corroded, or leaking pipes with modern, durable materials.',
    icon: 'fa-solid fa-house-chimney-crack'
  }
];

export const WATER_HEATER_BRANDS = [
  { name: "Rheem", slug: "rheem" },
  { name: "Bradford White", slug: "bradford-white" },
  { name: "A.O. Smith", slug: "ao-smith" },
  { name: "Rinnai", slug: "rinnai" },
  { name: "Navien", slug: "navien" },
  { name: "State Water Heaters", slug: "state-water-heaters" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Aardee Plumbing saved us when a pipe burst at 2 AM. They were professional, fast, and didn\'t overcharge for the emergency visit.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Property Manager',
    content: 'I use Aardee for all my rental properties. Their communication is excellent and the quality of work is consistently top-notch.',
    rating: 5
  },
  {
    id: '3',
    name: 'Robert Miller',
    role: 'Local Business Owner',
    content: 'Installed our commercial water heater system. Extremely knowledgeable team and clean work site.',
    rating: 5
  }
];
