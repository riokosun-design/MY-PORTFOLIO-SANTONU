import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  clientName: string;
  industry: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  stats: {
    label: string;
    value: string;
  }[];
  tags: string[];
  imageUrl: string;
  rating: number;
}

export interface ClientSummary {
  id: string;
  name: string;
  industry: string;
  projectType: string;
  rating: number;
  testimonialShort: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}