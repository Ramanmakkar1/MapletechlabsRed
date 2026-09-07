import type { ReactNode } from 'react';
export interface Stat { value: string; label: string }
export interface ServiceCard { title: string; desc: string; tag?: string; icon?: string; chips?: string[] }
export interface Step { num: string; title: string; desc: string; deliverables?: string[]; duration?: string }
export interface TechCategory { label: string; chips: string[] }
export interface IndustryCard { icon?: string; title: string; desc: string }
export interface Faq { q: string; a: string }
export interface Crumb { label: string; href?: string }
export interface HeroCopy { badge: string; title: ReactNode; desc: ReactNode }
