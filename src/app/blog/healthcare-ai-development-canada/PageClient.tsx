'use client';

import ArticleTemplate from '@/components/blog/ArticleTemplate';
import RelatedServices from '@/components/RelatedServices';
import { getArticle, getRelatedArticles } from '@/data/articles';

const a = getArticle('healthcare-ai-development-canada')!;

export default function HealthcareAiDevelopmentCanadaClient() {
  return (
    <ArticleTemplate
      a={a}
      related={getRelatedArticles(a.slug)}
      relatedServices={
        <RelatedServices
          links={[
            { href: '/services/ai-ml', label: 'AI and machine learning development services' },
            { href: '/services/software-development/healthcare-software', label: 'Healthcare software development services' },
            { href: '/industries/healthcare', label: 'Healthcare software development in Canada' },
            { href: '/blog/ai-development-cost-canada', label: 'AI development cost guide for Canada' },
            { href: '/case-studies/healthcare-telehealth', label: 'Healthcare telehealth platform case study' },
          ]}
        />
      }
    />
  );
}
