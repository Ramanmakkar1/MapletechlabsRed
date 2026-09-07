import Image from 'next/image';
import { humanMedia } from '@/data/media';

/**
 * Six named groups. As divider rows the labels and their technologies ran
 * together into one grey block; as tiles beside a photograph each group is
 * legible on its own and the section stops being a wall of text.
 */
const groups = [
  { g: 'Frontend',       t: ['React', 'Next.js', 'TypeScript', 'Vue', 'Tailwind'] },
  { g: 'Backend',        t: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'GraphQL', 'Redis'] },
  { g: 'Mobile',         t: ['Swift', 'Kotlin', 'Flutter', 'React Native'] },
  { g: 'Cloud',          t: ['AWS', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'] },
  { g: 'AI & data',      t: ['OpenAI', 'LangChain', 'PyTorch', 'dbt', 'Snowflake'] },
  { g: 'Infrastructure', t: ['GitHub Actions', 'Datadog', 'Cloudflare', 'Vercel'] },
];

export default function TechStack() {
  const m = humanMedia.whiteboard;
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2>The stack behind the work</h2>
            <p className="lede">
              Chosen per project for what it has to do, not for what is fashionable.
              Every one of these is in production for a client today.
            </p>
          </div>
        </div>

        <div className="stack-split">
          <div className="media media--lg fade" style={{ minHeight: 340 }}>
            <Image src={m.src} alt={m.alt} fill sizes="(max-width: 1023px) 100vw, 38vw" style={{ objectFit: 'cover' }} />
          </div>

          <div className="grid grid--2">
            {groups.map(g => (
              <article key={g.g} className="tile rise" style={{ padding: 'clamp(20px, 2vw, 26px)' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>{g.g}</h3>
                <div className="chips">
                  {g.t.map(t => <span key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
