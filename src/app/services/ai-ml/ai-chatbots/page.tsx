import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AI Chatbot Development',
  description: 'Custom AI chatbot development services. Mapletech Labs builds intelligent conversational agents for customer support, sales, and internal operations.',
  openGraph: {
    title: 'AI Chatbot Development | Mapletech Labs',
    description: 'Custom AI chatbot development services. Mapletech Labs builds intelligent conversational agents for customer support, sales, and internal operations.',
    url: 'https://mapletechlabs.com/services/ai-ml/ai-chatbots',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/ai-ml/ai-chatbots',
  },
};

export default function Page() {
  return <PageClient />;
}
