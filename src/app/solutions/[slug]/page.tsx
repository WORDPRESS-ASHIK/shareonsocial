import { notFound } from 'next/navigation';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { solutionsData } from "@/data/solutions";

import { SolutionHeroNew } from "@/components/solution/SolutionHeroNew";
import { SolutionWhoForNew } from "@/components/solution/SolutionWhoForNew";
import { SolutionProblemNew } from "@/components/solution/SolutionProblemNew";
import { SolutionMethodology } from "@/components/solution/SolutionMethodology";
import { SolutionFeatures } from "@/components/solution/SolutionFeatures";
import { SolutionProcessTimeline } from "@/components/solution/SolutionProcessTimeline";
import { SolutionMetrics } from "@/components/solution/SolutionMetrics";
import { SolutionRelatedWork } from "@/components/solution/SolutionRelatedWork";
import { SolutionFaqNew } from "@/components/solution/SolutionFaqNew";
import { SolutionFinalCta } from "@/components/solution/SolutionFinalCta";

export async function generateStaticParams() {
  const slugs = Object.keys(solutionsData);
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = solutionsData[slug];

  if (!data) {
    return {
      title: 'Solution Not Found',
    };
  }

  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = solutionsData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-dvh">
      <Header />
      <main className="min-h-dvh">
        <SolutionHeroNew data={data.hero} />
        <SolutionWhoForNew data={data.whoFor} />
        <SolutionProblemNew data={data.problem} />
        <SolutionMethodology data={data.ourSolution} />
        <SolutionFeatures data={data.included} />
        <SolutionProcessTimeline data={data.process} />
        <SolutionMetrics data={data.outcomes} />
        <SolutionRelatedWork slug={slug} />
        <SolutionFaqNew data={data.faq} />
        <SolutionFinalCta data={data.cta} />
      </main>
      <Footer />
    </div>
  );
}
