import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ModernHeroSection from "@/components/modern-hero-section"
import ScrollToTop from "@/components/scroll-to-top"
import FadeInSection from "@/components/fade-in-section"
import ParticleHeroBackground from "@/components/particle-hero-background"
import TeamSection from "@/components/team-section"
import PartnersShowcase from "@/components/partners-showcase"
import { NewsPreviewSection } from "@/components/news-preview-section"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AboutContent from "@/components/about-content"
import ProjectsPreviewSection from "@/components/projects-preview-section"

export const metadata: Metadata = {
  title: "Center for Excellence in AI | Thomas Jefferson University",
  description:
    "The Center for Excellence in AI advances radiation oncology research through clinical AI, machine learning, and translational collaboration.",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-jefferson-deep-blue via-jefferson-deep-blue/95 to-jefferson-bright-blue text-white relative overflow-hidden isolate min-h-[600px] md:min-h-[700px]">
          {/* Particle "J" Background */}
          <div className="absolute inset-0 opacity-25 mix-blend-screen">
            <ParticleHeroBackground />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="w-full md:w-1/2 lg:w-5/12">
                <h1 className="tracking-tight leading-tight">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 text-balance">
                    Center for Excellence in AI
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl text-jefferson-bright-blue font-medium mt-3">
                    Department of Radiation Oncology
                  </div>
                </h1>
                <p className="mt-6 max-w-[600px] text-white/90 text-base md:text-lg leading-relaxed">
                  Pioneering AI and machine learning solutions to transform radiation oncology, improve cancer care, and
                  enhance patient outcomes.
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-6/12 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <ModernHeroSection />
              </div>
            </div>
          </div>
        </section>

        {/* News Preview Section */}
        <NewsPreviewSection />
        <ProjectsPreviewSection />

        <TeamSection />

        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 jefferson-point-grid opacity-10 pointer-events-none" />
          <div className="container px-4 md:px-6 relative">
            <FadeInSection>
              <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-jefferson-deep-blue">
                  About the Center
                </h2>
                <p className="max-w-[85%] leading-relaxed text-slate text-base sm:text-lg">
                  Building clinically grounded AI that improves safety, outcomes, and access across radiation oncology.
                </p>
              </div>
            </FadeInSection>
            <div className="mx-auto max-w-5xl">
              <AboutContent />
            </div>
            <div className="mt-12 text-center">
              <Button
                asChild
                variant="outline"
                className="border-2 border-jefferson-deep-blue text-jefferson-deep-blue hover:bg-jefferson-deep-blue hover:text-white transition-all duration-300 text-base px-8 py-6 shadow-md hover:shadow-lg bg-transparent font-medium"
              >
                <Link href="/about">Learn More About the Center</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <PartnersShowcase />
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
