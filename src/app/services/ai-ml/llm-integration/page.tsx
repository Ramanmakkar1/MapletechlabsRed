import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'LLM Integration Services',
  description: 'LLM and large language model integration services. Mapletech Labs helps you integrate GPT, Claude, and custom AI models into your applications.',
  openGraph: {
    title: 'LLM Integration Services | Mapletech Labs',
    description: 'LLM and large language model integration services. Mapletech Labs helps you integrate GPT, Claude, and custom AI models into your applications.',
    url: 'https://www.mapletechlabs.com/services/ai-ml/llm-integration',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/ai-ml/llm-integration',
  },
};

export default function Page() {
  return <PageClient />;
}
