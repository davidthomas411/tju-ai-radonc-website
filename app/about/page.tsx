import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollToTop from "@/components/scroll-to-top"
import AboutContent from "@/components/about-content"
import ParticleHeroBackground from "@/components/particle-hero-background"

export const metadata: Metadata = {
  title: "About the Center | Jefferson Radiation Oncology AI Research",
  description:
    "Learn about the Center for Excellence in AI, its mission, infrastructure, and research impact in radiation oncology.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden isolate bg-gradient-to-br from-jefferson-deep-blue via-jefferson-deep-blue/95 to-jefferson-bright-blue text-white py-16">
          <div className="absolute inset-0 opacity-25 mix-blend-screen">
            <ParticleHeroBackground />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <Button asChild variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Center</h1>
            <p className="text-lg md:text-xl text-cyan-100 max-w-3xl">
              The Center for Excellence in AI advances clinically grounded machine learning to improve safety,
              outcomes, and efficiency in radiation oncology.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 jefferson-point-grid opacity-10 pointer-events-none" />
          <div className="container px-4 md:px-6 relative">
            <div className="mx-auto max-w-5xl">
              <AboutContent />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
