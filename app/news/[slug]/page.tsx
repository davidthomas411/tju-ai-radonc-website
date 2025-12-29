import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaceTracker } from "@/components/face-tracker"
import { getAllNews } from "@/lib/news-data"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollToTop from "@/components/scroll-to-top"
import ParticleHeroBackground from "@/components/particle-hero-background"

export async function generateStaticParams() {
  const newsItems = getAllNews()
  return newsItems.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const newsItems = getAllNews()
  const article = newsItems.find((item) => item.slug === params.slug)

  if (!article) {
    return {
      title: "News Article Not Found",
    }
  }

  return {
    title: `${article.title} | Jefferson Radiation Oncology`,
    description: article.description,
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const newsItems = getAllNews()
  const article = newsItems.find((item) => item.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-jefferson-deep-blue via-jefferson-deep-blue/95 to-jefferson-bright-blue text-white py-12 relative overflow-hidden isolate">
          <div className="absolute inset-0 opacity-25 mix-blend-screen">
            <ParticleHeroBackground />
          </div>
          <div className="container relative z-10 px-4 md:px-6 max-w-4xl">
          <Button asChild variant="ghost" className="mb-6 text-white hover:bg-white/10">
            <Link href="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>

          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-white/20 rounded-full">
            {article.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>

          <div className="flex items-center text-cyan-100">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container px-4 md:px-6 max-w-4xl">
          {/* Faculty Photo */}
          {article.blobFaceId && (
            <div className="flex justify-center mb-12">
              <div className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-[#005A9C] shadow-2xl">
                <FaceTracker
                  blobFaceId={article.blobFaceId}
                  fallbackImage={article.fallbackImage || ""}
                  alt={article.facultyMember || "Faculty member"}
                  size={256}
                  className="rounded-full"
                />
              </div>
            </div>
          )}

          {article.facultyMember && (
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#003A70]">{article.facultyMember}</h2>
              <p className="text-gray-600">Department of Radiation Oncology, Thomas Jefferson University</p>
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {article.fullContent.split("\n\n").map((paragraph, index) => {
              // Check if paragraph is a heading (starts with **)
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                const heading = paragraph.replace(/\*\*/g, "")
                return (
                  <h3 key={index} className="text-2xl font-bold text-[#003A70] mt-8 mb-4">
                    {heading}
                  </h3>
                )
              }

              // Check if it's a list item (starts with -)
              if (paragraph.includes("\n-")) {
                const items = paragraph.split("\n-").filter((item) => item.trim())
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-gray-700 my-6">
                    {items.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item.trim()}
                      </li>
                    ))}
                  </ul>
                )
              }

              // Regular paragraph
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* External Link */}
          {article.externalLink && (
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-[#003A70] mb-3">Learn More</h3>
              <a
                href={article.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#005A9C] hover:text-[#003A70] hover:underline"
              >
                Read the full announcement
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          )}

          {/* Back to News Button */}
          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-2 border-[#003A70] text-[#003A70] hover:bg-[#003A70] hover:text-white bg-transparent"
            >
              <Link href="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All News
              </Link>
            </Button>
          </div>
          </div>
        </article>
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
