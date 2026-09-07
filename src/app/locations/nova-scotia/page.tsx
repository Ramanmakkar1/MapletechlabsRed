import type { Metadata } from 'next';
import ProvincePageTemplate from '@/components/page/ProvincePageTemplate';
import { getProvince } from '@/data/provinces';
import { canonicalUrl } from '@/lib/seo/canonical';

const province = getProvince('nova-scotia')!;

export const metadata: Metadata = {
  title: province.metaTitle,
  description: province.metaDescription,
  openGraph: {
    title: province.metaTitle,
    description: province.metaDescription,
    url: 'https://mapletechlabs.ca/locations/nova-scotia',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/locations/nova-scotia') },
};

export default function Page() {
  return <ProvincePageTemplate p={province} />;
}
