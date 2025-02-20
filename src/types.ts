export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'upcoming' | 'past';
  status: 'open' | 'completed';
  participants?: number;
  image?: string;
}

export interface EventRegistration {
  fullName: string;
  email: string;
  institution: string;
  eventId: string;
  requirements?: string;
}

export interface ContactForm {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}