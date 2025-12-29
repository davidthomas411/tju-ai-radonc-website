import type { Metadata } from "next"
import Link from "next/link"
import { getAllStudentProjects } from "@/lib/students-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GraduationCap, Users } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollToTop from "@/components/scroll-to-top"
import ParticleHeroBackground from "@/components/particle-hero-background"

export const metadata: Metadata = {
  title: "Student Research | Jefferson Radiation Oncology AI Research",
  description:
    "Student research projects in AI and Digital Health at Jefferson Radiation Oncology's AI and ML programs.",
}

export default function StudentsPage() {
  const projects = getAllStudentProjects()
  const projectsByYear = projects.reduce(
    (acc, project) => {
      if (!acc[project.year]) {
        acc[project.year] = []
      }
      acc[project.year].push(project)
      return acc
    },
    {} as Record<string, typeof projects>,
  )

  const years = Object.keys(projectsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Machine Learning":
        return "bg-purple-50 text-purple-700 border-purple-200"
      case "Medical Imaging":
        return "bg-green-50 text-green-700 border-green-200"
      case "Digital Health":
        return "bg-orange-50 text-orange-700 border-orange-200"
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
            <GraduationCap className="h-12 w-12" />
            <div>
              <h1 className="text-5xl font-bold mb-2">Student Research</h1>
              <p className="text-xl text-cyan-100">
                Student research projects in AI and Digital Health at Jefferson Radiation Oncology.
              </p>
            </div>
          </div>

          <div className="flex gap-12 mt-8">
            <div>
              <div className="text-4xl font-bold">{projects.length}</div>
              <div className="text-sm text-cyan-200">Student Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{years.length}</div>
              <div className="text-sm text-cyan-200">Years</div>
            </div>
          </div>
          </div>
        </section>

        {/* Student Projects */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
          <div className="bg-gradient-to-r from-jefferson-deep-blue/5 to-jefferson-bright-blue/5 border-l-4 border-jefferson-bright-blue p-6 rounded-r-lg mb-12">
            <p className="text-lg text-gray-700">
              <Users className="inline h-6 w-6 mr-2 text-jefferson-bright-blue" />
              These projects represent a diverse range of AI and machine learning applications in healthcare, developed
              by students at Sidney Kimmel Medical College. Each project demonstrates the innovative work being done at
              the intersection of medicine, technology, and data science.
            </p>
          </div>

          {years.map((year) => (
            <div key={year} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gray-200 flex-1" />
                <h2 className="text-4xl font-bold text-gray-900">{year}</h2>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {projectsByYear[year].map((project) => (
                  <div
                    key={project.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:border-cyan-500 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 leading-snug flex-1">{project.title}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full border ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        <strong className="text-jefferson-deep-blue">Student:</strong> {project.student}
                      </p>
                      <p>
                        <strong className="text-jefferson-deep-blue">School:</strong> {project.school} {project.year}
                      </p>
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
