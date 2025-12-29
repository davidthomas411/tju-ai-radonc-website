import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FadeInSection from "@/components/fade-in-section"
import { projectAreas } from "@/lib/project-areas"

const toneStyles = {
  blue: {
    icon: "text-jefferson-bright-blue",
    border: "border-t-jefferson-bright-blue",
    bullet: "text-jefferson-bright-blue",
    link: "text-jefferson-bright-blue hover:text-jefferson-deep-blue",
  },
  green: {
    icon: "text-volt-green",
    border: "border-t-volt-green",
    bullet: "text-volt-green",
    link: "text-volt-green hover:text-jefferson-deep-blue",
  },
  red: {
    icon: "text-academic-red",
    border: "border-t-academic-red",
    bullet: "text-academic-red",
    link: "text-academic-red hover:text-jefferson-deep-blue",
  },
  navy: {
    icon: "text-jefferson-deep-blue",
    border: "border-t-jefferson-deep-blue",
    bullet: "text-jefferson-deep-blue",
    link: "text-jefferson-deep-blue hover:text-jefferson-bright-blue",
  },
}

export default function ProjectsPreviewSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 lg:px-12 xl:px-20 2xl:px-32">
        <FadeInSection>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-jefferson-deep-blue">
              Projects at a Glance
            </h2>
            <p className="max-w-[85%] leading-relaxed text-slate text-base sm:text-lg">
              A curated snapshot of the programs shaping safer, smarter radiation oncology.
            </p>
          </div>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 max-w-[1200px] mx-auto">
          {projectAreas.map((area, index) => {
            const Icon = area.icon
            const tone = toneStyles[area.tone]

            return (
              <FadeInSection key={area.id} delay={0.05 * (index + 1)}>
                <Card
                  className={`h-full border-t-4 ${tone.border} shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className={`h-9 w-9 ${tone.icon}`} />
                      <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{area.description}</p>
                    <ul className="space-y-2 text-sm text-gray-600 mb-6">
                      {area.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className={`${tone.bullet} mt-1`}>•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Link
                        href="/projects"
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${tone.link}`}
                      >
                        Explore {area.navLabel ?? area.title}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-2 border-jefferson-deep-blue text-jefferson-deep-blue hover:bg-jefferson-deep-blue hover:text-white transition-all duration-300 text-base px-8 py-6 shadow-md hover:shadow-lg font-medium bg-transparent"
          >
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
