import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { MOCK_PROJECTS } from "@/components/portfolio/types";
import { CASE_STUDY_DATA } from "@/components/portfolio/caseStudyData";
import { CaseStudyHero } from "@/components/portfolio/CaseStudyHero";
import { CaseStudyChallenge } from "@/components/portfolio/CaseStudyChallenge";
import { CaseStudyResults } from "@/components/portfolio/CaseStudyResults";

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Handle async params in Next.js 15+ if applicable
  const resolvedParams = await Promise.resolve(params);
  const project = MOCK_PROJECTS.find(p => p.id === resolvedParams.id);
  
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} - ${project.client} | ShareOnSocial`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: { id: string } }) {
  // Handle async params in Next.js 15+ if applicable
  const resolvedParams = await Promise.resolve(params);
  const project = MOCK_PROJECTS.find(p => p.id === resolvedParams.id);
  
  if (!project) {
    notFound();
  }

  const industryData = CASE_STUDY_DATA[project.industry];
  if (!industryData) {
    notFound();
  }

  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main className="min-h-dvh">
        <CaseStudyHero project={project} />
        <CaseStudyChallenge project={project} content={industryData.challenge} />
        <CaseStudyResults project={project} content={industryData.strategy} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
