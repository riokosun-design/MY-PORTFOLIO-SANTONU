import { Project, ClientSummary, Service, Testimonial, FaqItem } from './types';
import { 
  Bot, 
  Workflow, 
  Zap, 
  LineChart, 
  Code2, 
  BrainCircuit,
  MessageSquare
} from 'lucide-react';

export const EMAIL_CONTACT = "santonusafi171@gmail.com";

// --- Featured Case Studies (Detailed) ---
export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'p1',
    clientName: 'FinTech Nova',
    industry: 'Financial Services',
    title: 'Automated Customer Support & Onboarding Agent',
    description: 'Replaced a 12-person Tier 1 support team with a custom neural agent.',
    challenge: 'High support costs and slow response times during peak trading hours.',
    solution: 'Developed a custom LLM-based agent integrated with their internal knowledge base and CRM.',
    outcome: 'Reduced support tickets by 78% and cut onboarding time from 3 days to 4 hours.',
    stats: [
      { label: 'Cost Reduction', value: '65%' },
      { label: 'Response Time', value: '< 2s' },
      { label: 'User Satisfaction', value: '4.9/5' }
    ],
    tags: ['AI Agent', 'Automation', 'FinTech'],
    // Financial/Trading Dashboard UI
    imageUrl: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
    rating: 5
  },
  {
    id: 'p2',
    clientName: 'EstateFlow',
    industry: 'Real Estate',
    title: 'Lead Qualification & Booking Engine',
    description: 'An AI sales agent that converses with leads via SMS and WhatsApp to book showings.',
    challenge: 'Realtors were wasting 20+ hours a week filtering unqualified leads.',
    solution: 'Built a multi-channel AI agent that qualifies leads against budget/location criteria and syncs with Calendly.',
    outcome: 'Generated $2.4M in pipeline value in the first 90 days.',
    stats: [
      { label: 'Pipeline Added', value: '$2.4M' },
      { label: 'Hours Saved/Wk', value: '25+' },
      { label: 'Conversion Rate', value: '+40%' }
    ],
    tags: ['Sales AI', 'Real Estate', 'Lead Gen'],
    // Analytics/Data Dashboard UI
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    rating: 5
  },
  {
    id: 'p3',
    clientName: 'MediCore Health',
    industry: 'Healthcare',
    title: 'HIPAA-Compliant Patient Intake System',
    description: 'Secure AI workflow for processing patient forms and insurance verification.',
    challenge: 'Manual data entry errors caused claim rejections and patient delays.',
    solution: 'Architected a secure, private cloud AI system to extract and validate data from intake forms.',
    outcome: 'Eliminated manual entry errors and reduced insurance verification time by 90%.',
    stats: [
      { label: 'Error Rate', value: '0%' },
      { label: 'Processing Speed', value: '10x' },
      { label: 'Compliance', value: '100%' }
    ],
    tags: ['Healthcare', 'Security', 'Automation'],
    // Medical/Tech Interface
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&w=800&q=80',
    rating: 5
  },
  {
    id: 'p4',
    clientName: 'ShopScale',
    industry: 'E-Commerce',
    title: 'Dynamic Pricing & Inventory AI',
    description: 'Real-time inventory management and dynamic pricing adjustment system.',
    challenge: 'Stockouts and pricing lags were losing margin against competitors.',
    solution: 'Integrated predictive AI to forecast demand and adjust pricing based on competitor data.',
    outcome: 'Increased average order value by 15% and reduced overstock by 22%.',
    stats: [
      { label: 'Revenue Lift', value: '+15%' },
      { label: 'Stock Efficiency', value: '+22%' },
      { label: 'ROI', value: '8x' }
    ],
    tags: ['E-Commerce', 'Predictive AI', 'Retail'],
    // E-commerce/Payment UI
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80',
    rating: 4.8
  }
];

// --- 50+ Client Archive Generator ---
// In a real app, this would come from a DB. We generate the list here.
const industries = ['SaaS', 'Legal', 'Retail', 'Logistics', 'Education', 'Construction', 'Marketing'];
const projectTypes = ['Chatbot', 'Workflow Auto', 'CRM Integration', 'Data Pipeline', 'Sales Agent'];

export const CLIENT_ARCHIVE: ClientSummary[] = Array.from({ length: 50 }, (_, i) => ({
  id: `c${i}`,
  name: `Client ${String.fromCharCode(65 + (i % 26))}${i + 1} Solutions`, // e.g., Client A1 Solutions
  industry: industries[i % industries.length],
  projectType: projectTypes[i % projectTypes.length],
  rating: i % 10 === 0 ? 4 : 5, // Mostly 5 stars, some 4s for realism
  testimonialShort: "Incredible efficiency boost. San delivered exactly what we needed."
}));


// --- Services ---
export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'AI Agent Integration',
    description: 'Deploy intelligent agents that handle support, onboarding, and internal queries autonomously.',
    icon: Bot,
    benefits: ['24/7 Availability', 'Reduced Headcount Costs', 'Instant Response Times']
  },
  {
    id: 's2',
    title: 'Website-to-AI Transformation',
    description: 'Turn static brochures into interactive, conversation-driven experiences that capture leads.',
    icon: Code2,
    benefits: ['Higher Engagement', 'Personalized UX', 'Data-Driven Insights']
  },
  {
    id: 's3',
    title: 'Lead Automation Systems',
    description: 'End-to-end pipelines that capture, qualify, and book meetings with your ideal clients automatically.',
    icon: LineChart,
    benefits: ['Auto-Qualification', 'CRM Sync', 'Increased Conversion']
  },
  {
    id: 's4',
    title: 'Neural Workflow Automation',
    description: 'Connect your fragmented tools (Slack, Notion, CRM) into a cohesive, self-driving operating system.',
    icon: Workflow,
    benefits: ['Eliminate Busywork', 'Unified Data', 'Scalable Operations']
  },
  {
    id: 's5',
    title: '24/7 Sales Support',
    description: 'AI Sales representatives that nurture leads via SMS, Email, and Chat until they are ready to buy.',
    icon: MessageSquare,
    benefits: ['Never Miss a Lead', 'Consistent Follow-up', 'Multi-channel']
  },
  {
    id: 's6',
    title: 'Custom AI Architecture',
    description: 'Besopke LLM solutions tailored to specific enterprise problems requiring high security and precision.',
    icon: BrainCircuit,
    benefits: ['Private Models', 'Custom Fine-tuning', 'Enterprise Security']
  }
];

// --- Testimonials ---
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'COO',
    company: 'FinTech Nova',
    content: "San didn't just build a bot; he architected a complete operational overhaul. Our efficiency has doubled.",
    rating: 5,
    imageUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'Founder',
    company: 'EstateFlow',
    content: "The ROI was immediate. We paid for the development cost in week 3 via new leads generated by the AI.",
    rating: 5,
    imageUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'VP of Sales',
    company: 'LogiChain',
    content: "Professional, futuristic, and highly effective. San acts more like a partner than a freelancer.",
    rating: 5,
    imageUrl: 'https://picsum.photos/100/100?random=12'
  }
];

// --- FAQ ---
export const FAQS: FaqItem[] = [
  {
    question: "What exactly is an AI Agent vs a Chatbot?",
    answer: "A chatbot follows a rigid script. An AI Agent has 'agency'—it understands context, can access tools (like your calendar or CRM), makes decisions, and performs actions to achieve a specific goal without constant human supervision."
  },
  {
    question: "How long does a typical integration take?",
    answer: "Simple automations can be deployed in 48 hours. Complex, enterprise-grade architectures typically take 2-4 weeks to design, build, test, and deploy to ensure 99.9% reliability."
  },
  {
    question: "Do you work with non-tech businesses?",
    answer: "Absolutely. 70% of my clients are in traditional industries like Construction, Real Estate, and Logistics looking to modernize their operations and reduce manual overhead."
  },
  {
    question: "What is the pricing model?",
    answer: "I operate on a project-basis or retainer for ongoing optimization. Because every system is bespoke to your business bottlenecks, I offer a custom quote after our initial discovery call."
  }
];