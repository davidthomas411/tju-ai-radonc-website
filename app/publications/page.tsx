import type { Metadata } from "next"
import Link from "next/link"
import { getAllPublications } from "@/lib/publications-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, ExternalLink, Filter } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollToTop from "@/components/scroll-to-top"
import ParticleHeroBackground from "@/components/particle-hero-background"

export const metadata: Metadata = {
  title: "Publications | Jefferson Radiation Oncology AI Research",
  description:
    "Peer-reviewed publications from Jefferson Radiation Oncology's AI and Machine Learning research programs.",
}

export default function PublicationsPage() {
  const publications = getAllPublications()
  const publicationsByYear = publications.reduce(
    (acc, pub) => {
      if (!acc[pub.year]) {
        acc[pub.year] = []
      }
      acc[pub.year].push(pub)
      return acc
    },
    {} as Record<number, typeof publications>,
  )

  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "quality-safety":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "side-effects":
        return "bg-green-50 text-green-700 border-green-200"
      case "cure-rates":
        return "bg-purple-50 text-purple-700 border-purple-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const getTagLabel = (tag: string) => {
    switch (tag) {
      case "quality-safety":
        return "Quality & Safety"
      case "side-effects":
        return "Reducing Side Effects"
      case "cure-rates":
        return "Improving Cure Rates"
      default:
        return tag
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
            <BookOpen className="h-12 w-12" />
            <div>
              <h1 className="text-5xl font-bold mb-2">Publications</h1>
              <p className="text-xl text-cyan-100">Peer-reviewed research from our AI and Machine Learning programs.</p>
            </div>
          </div>

          <div className="flex gap-12 mt-8">
            <div>
              <div className="text-4xl font-bold">{publications.length}</div>
              <div className="text-sm text-cyan-200">Total Publications</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{years.length}</div>
              <div className="text-sm text-cyan-200">Years</div>
            </div>
          </div>
          </div>
        </section>

        {/* Filter Tags */}
        <section className="bg-gray-50 border-b py-6 sticky top-24 z-10">
          <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                <Link href="/projects/quality-safety">Quality & Safety</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-green-200 hover:bg-green-50 bg-transparent">
                <Link href="/projects/reducing-side-effects">Reducing Side Effects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-purple-200 hover:bg-purple-50 bg-transparent"
              >
                <Link href="/projects/improving-cure-rates">Improving Cure Rates</Link>
              </Button>
            </div>
          </div>
          </div>
        </section>

        {/* Publications by Year */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
          {years.map((year) => (
            <div key={year} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gray-200 flex-1" />
                <h2 className="text-4xl font-bold text-gray-900">{year}</h2>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              <div className="space-y-6">
                {publicationsByYear[year].map((pub) => (
                  <div
                    key={pub.id}
                    className="bg-white border border-gray-200 rounded-lg p-8 hover:border-cyan-500 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">{pub.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{pub.authors}</p>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="font-medium text-cyan-600">{pub.journal}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{pub.year}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {pub.tags.map((tag) => (
                            <span key={tag} className={`text-xs px-3 py-1 rounded-full border ${getTagColor(tag)}`}>
                              {getTagLabel(tag)}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        {pub.pubmedUrl && (
                          <a
                            href={pub.pubmedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium text-sm whitespace-nowrap"
                          >
                            PubMed
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium text-sm whitespace-nowrap"
                          >
                            DOI
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
