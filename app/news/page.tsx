import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getAllNews } from "@/lib/news-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import { FaceTracker } from "@/components/face-tracker" // Import FaceTracker component
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollToTop from "@/components/scroll-to-top"
import ParticleHeroBackground from "@/components/particle-hero-background"

export const metadata: Metadata = {
  title: "News & Updates | Jefferson Radiation Oncology AI Research",
  description: "Latest news, awards, and research updates from Jefferson Radiation Oncology's AI and ML programs.",
}

export default function NewsPage() {
  const newsItems = getAllNews()

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

          <h1 className="text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl text-cyan-100 max-w-3xl">
            Recent achievements, awards, and research milestones from the Jefferson Radiation Oncology AI & ML Program.
          </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`} // Updated link to point to individual article pages
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Featured Image with FaceTracker */}
                <div className="relative h-64 bg-gradient-to-br from-[#003A70]/5 to-[#005A9C]/5 overflow-hidden flex items-center justify-center">
                  {item.blobFaceId ? (
                    <div className="w-48 h-48 overflow-hidden rounded-full ring-4 ring-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <FaceTracker
                        blobFaceId={item.blobFaceId}
                        fallbackImage={item.fallbackImage || ""}
                        alt={item.facultyMember || "Faculty member"}
                        size={192}
                        className="rounded-full"
                      />
                    </div>
                  ) : (
                    <Image
                      src={item.facultyImage || "/placeholder.svg?height=400&width=600"}
                      alt={item.facultyMember || item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{item.description}</p>

                  {item.facultyMember && <div className="text-sm font-medium text-cyan-600">{item.facultyMember}</div>}
                </div>
              </Link>
            ))}
          </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
