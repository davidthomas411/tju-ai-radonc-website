import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaceTracker } from "@/components/face-tracker"
import { getLatestNews } from "@/lib/news-data"
import { FadeInSection } from "@/components/fade-in-section"

export function NewsPreviewSection() {
  const latestNews = getLatestNews(3)

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 lg:px-12 xl:px-20 2xl:px-32">
        <FadeInSection>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-gray-900">
              Latest News & Updates
            </h2>
            <p className="max-w-[85%] leading-relaxed text-gray-600 text-base sm:text-lg">
              Recent achievements and announcements from our faculty and research teams.
            </p>
          </div>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
          {latestNews.map((news, index) => (
            <FadeInSection key={news.id} delay={0.1 * (index + 1)}>
              <Link href={`/news/${news.slug}`} className="block group h-full">
                <Card className="flex flex-col h-full overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0">
                  <div className="h-3 bg-gradient-to-r from-jefferson-deep-blue via-jefferson-bright-blue to-white" />

                  {news.blobFaceId && (
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-jefferson-deep-blue/5 to-jefferson-bright-blue/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 overflow-hidden rounded-full ring-4 ring-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <FaceTracker
                            blobFaceId={news.blobFaceId}
                            fallbackImage={news.fallbackImage || ""}
                            alt={news.facultyMember || "Faculty member"}
                            size={192}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-jefferson-deep-blue bg-jefferson-bright-blue/10 rounded-full w-fit">
                      {news.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-jefferson-deep-blue transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">{news.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-600">
                        {new Date(news.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <ArrowRight className="h-5 w-5 text-jefferson-bright-blue group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeInSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-2 border-jefferson-deep-blue text-jefferson-deep-blue hover:bg-jefferson-deep-blue hover:text-white transition-all duration-300 text-base px-8 py-6 shadow-md hover:shadow-lg font-medium bg-transparent"
          >
            <Link href="/news">
              View All News <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
