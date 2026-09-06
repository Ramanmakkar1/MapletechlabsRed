import Image from 'next/image';
import type { Media } from '@/data/media';

/**
 * Full-width image band. Sits directly under a page hero, which is where both
 * reference sites put their first large visual, and gives every inner page the
 * imagery it was missing.
 */
export default function MediaBand({
  media,
  caption,
  ratio = '21 / 8',
  priority = false,
}: {
  media: Media;
  caption?: string;
  ratio?: string;
  priority?: boolean;
}) {
  return (
    <section style={{ padding: 'var(--section-y-sm) 0' }}>
      <div className="cb-container">
        <div className="media media--lg" style={{ aspectRatio: ratio }}>
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority={priority}
            sizes="(max-width: 1023px) 100vw, 1224px"
            style={{ objectFit: 'cover' }}
          />
          {caption && (
            <>
              <div className="media__scrim" aria-hidden />
              <p
                style={{
                  position: 'absolute', left: 'clamp(20px, 3vw, 34px)', bottom: 'clamp(18px, 2.5vw, 28px)',
                  margin: 0, zIndex: 1, maxWidth: '46ch',
                  fontSize: 'clamp(14px, 1.4vw, 16px)', fontWeight: 600, color: '#fff',
                  textShadow: '0 1px 10px rgba(0,0,0,.45)',
                }}
              >
                {caption}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
