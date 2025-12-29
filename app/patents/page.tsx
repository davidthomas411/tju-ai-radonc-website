import type { Metadata } from "next"
import Link from "next/link"
import { getAllPatents } from "@/lib/patents-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lightbulb, FileText } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollToTop from "@/components/scroll-to-top"
import ParticleHeroBackground from "@/components/particle-hero-background"

export const metadata: Metadata = {
  title: "Patents & Intellectual Property | Jefferson Radiation Oncology AI Research",
  description: "Patents and intellectual property from Jefferson Radiation Oncology's AI and ML research programs.",
}

export default function PatentsPage() {
  const patents = getAllPatents()

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Granted":
        return "bg-green-50 text-green-700 border-green-200"
      case "Pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200"
      case "Filed":
        return "bg-blue-50 text-blue-700 border-blue-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Treatment Planning":
        return "bg-purple-50 text-purple-700 border-purple-200"
      case "Clinical Decision Support":
        return "bg-cyan-50 text-cyan-700 border-cyan-200"
      case "Imaging":
        return "bg-green-50 text-green-700 border-green-200"
      case "AI":
        return "bg-blue-50 text-blue-700 border-blue-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-jefferson-deep-blue via-jefferson-deep-blue/95 to-jefferson-bright-blue text-white py-16 relative overflow-hidden isolate">
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

          <div className="flex items-center gap-4 mb-6">
            <Lightbulb className="h-12 w-12" />
            <div>
              <h1 className="text-5xl font-bold mb-2">Patents & Intellectual Property</h1>
              <p className="text-xl text-cyan-100">
                Intellectual property and innovations from our AI and Machine Learning research.
              </p>
            </div>
          </div>

          <div className="flex gap-12 mt-8">
            <div>
              <div className="text-4xl font-bold">15</div>
              <div className="text-sm text-cyan-200">Total Invention Disclosures</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{patents.length}</div>
              <div className="text-sm text-cyan-200">Patent Applications</div>
            </div>
          </div>
          </div>
        </section>

        {/* Patents Content */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
          <div className="bg-gradient-to-r from-jefferson-deep-blue/5 to-jefferson-bright-blue/5 border-l-4 border-jefferson-bright-blue p-6 rounded-r-lg mb-12">
            <p className="text-lg text-gray-700">
              <FileText className="inline h-6 w-6 mr-2 text-jefferson-bright-blue" />
              In the last year, Jefferson faculty have submitted <strong>15 invention disclosures</strong> related to AI
              and machine learning applications in radiation oncology. These innovations represent cutting-edge
              advancements in treatment planning, imaging, and clinical decision support systems.
            </p>
          </div>

          <div className="space-y-8">
            {patents.map((patent) => (
              <div
                key={patent.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-cyan-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 leading-snug flex-1">{patent.title}</h2>
                  <div className="flex flex-col gap-2">
                    <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(patent.status)}`}>
                      {patent.status}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full border ${getCategoryColor(patent.category)}`}>
                      {patent.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{patent.description}</p>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-jefferson-deep-blue mb-2">Inventors</p>
                    <p className="text-gray-700">{patent.inventors.join(", ")}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-jefferson-deep-blue mb-2">Filed</p>
                    <p className="text-gray-700">{patent.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-jefferson-deep-blue to-jefferson-bright-blue text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Innovation Pipeline</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Our robust innovation pipeline includes 15 total invention disclosures spanning various aspects of AI and
              ML in radiation oncology. These inventions represent the cutting edge of computational healthcare and
              demonstrate Jefferson's commitment to translating research into clinical impact.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-3xl font-bold mb-2">2</p>
                <p className="text-sm text-white/80">Patent Applications Filed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-3xl font-bold mb-2">13</p>
                <p className="text-sm text-white/80">Invention Disclosures In Development</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-3xl font-bold mb-2">4</p>
                <p className="text-sm text-white/80">Key Focus Areas</p>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
