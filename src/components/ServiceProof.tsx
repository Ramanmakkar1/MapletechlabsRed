import Link from 'next/link';
import { work } from '@/data/work';

const serviceProjects: Record<string, { slug: string; metric: number }[]> = {
  'ai-ml': [
    { slug: 'fintech-trading-platform', metric: 0 },
    { slug: 'real-estate-portal', metric: 0 },
  ],
  'web-development': [
    { slug: 'ecommerce-platform', metric: 1 },
    { slug: 'payments-api-platform', metric: 0 },
  ],
  'product-design': [{ slug: 'ecommerce-platform', metric: 1 }],
};

export default function ServiceProof({ slug, name }: { slug: string; name: string }) {
  const projects = serviceProjects[slug];
  if (!projects) return null;

  return (
    <section style={{ padding: 'var(--section-y-sm) 0' }}>
      <div className="cb-container">
        <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 18 }}>Relevant project results</h2>
        <div className="grid grid--2" style={{ gap: 20 }}>
          {projects.map(({ slug: projectSlug, metric }) => {
            const project = work.find(item => item.slug === projectSlug);
            if (!project) return null;
            return (
              <article key={project.slug} className="tile" style={{ minWidth: 0 }}>
                <h3>{project.client}</h3>
                <p>{project.desc}</p>
                <p><strong>{project.metrics[metric].value}</strong> {project.metrics[metric].label}</p>
                <Link href={project.href}>Read the {project.title} case study</Link>
              </article>
            );
          })}
        </div>
        <Link href="/contact" className="btn btn--primary" style={{ marginTop: 24 }}>Discuss your {name} project</Link>
      </div>
    </section>
  );
}
