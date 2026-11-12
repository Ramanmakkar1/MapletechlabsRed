'use client';

import { BUSINESS } from '@/lib/seo/business';

export default function StickySidebar() {
  return (
    <div style={{
      position: 'fixed',
      right: 20,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 15,
      zIndex: 1000,
    }} className="hide-mobile">
      <a href={`tel:${BUSINESS.telephone.replace(/[^+\d]/g, '')}`} aria-label="Call us" style={{
        width: 54, height: 54, borderRadius: '50%', background: '#E11900',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 10px 25px transparent', transition: '0.3s'
      }} onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.1)')} onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </div>
  );
}
