import { notFound } from 'next/navigation';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { industriesData } from "@/data/industries";
import { IndustryHero } from "@/components/industry/IndustryHero";
import { IndustryChallenges } from "@/components/industry/IndustryChallenges";
import { IndustryIncluded } from "@/components/industry/IndustryIncluded";
import { IndustryWhyUs } from "@/components/industry/IndustryWhyUs";
import { IndustryProcess } from "@/components/industry/IndustryProcess";
import { IndustryCta } from "@/components/industry/IndustryCta";

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    industry: slug,
  }));
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.industry;
  const data = industriesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-dvh">
      <Header />
      <main className="min-h-dvh">
        <IndustryHero data={data.hero} slug={slug} />
        <IndustryChallenges data={data.challenges} />
        <IndustryIncluded data={data.included} />
        <IndustryWhyUs data={data.whyUs} slug={slug} />
        <IndustryProcess data={data.process} />
        <IndustryCta data={data.cta} />
      </main>
      <Footer />
    </div>
  );
}
