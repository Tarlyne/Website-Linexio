import { FeatureDetail } from '@/components/Sections/FeatureDetail';
import { content } from '@/lib/content';
import { Metadata } from 'next';

// Generate segments for all features
export function generateStaticParams() {
    return Object.keys(content.pages).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const pageData = content.pages[slug];
    if (!pageData) return {};
    return {
        title: `Linexio - ${pageData.hero.headline}`,
        description: pageData.hero.subheadline,
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <FeatureDetail slug={slug} />;
}
