import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import ParticleHeroBackground from "@/components/particle-hero-background"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import TeamMemberCard from "@/components/team-member-card"
import { getMembersBySlugs, teamGroups } from "@/lib/team-structure"

export const metadata: Metadata = {
  title: "Team | Jefferson Radiation Oncology AI Research",
  description:
    "Meet the faculty, researchers, and collaborators advancing AI and machine learning in radiation oncology.",
}

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <FadeInSection>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-jefferson-deep-blue via-jefferson-deep-blue/95 to-jefferson-bright-blue relative overflow-hidden isolate">
            <div className="absolute inset-0 opacity-25 mix-blend-screen">
              <ParticleHeroBackground />
            </div>
            <div className="container px-4 md:px-6 relative z-10">
              <Link
                href="/"
                className="inline-flex items-center mb-6 px-4 py-2 text-sm font-medium rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-white">
                  Our Team
                </h1>
                <p className="text-white/80 mb-8 text-lg">
                  Meet the dedicated researchers, clinicians, and staff who make up the Center for Excellence in AI at
                  Thomas Jefferson University's Department of Radiation Oncology.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-7xl space-y-20">
              {teamGroups.map((group) => {
                const members = getMembersBySlugs(group.memberSlugs)
                const isTwoColumn = group.layout === "two-column"
                const gridClasses = isTwoColumn
                  ? "grid gap-8 md:grid-cols-2 max-w-4xl w-full"
                  : "grid gap-8 md:grid-cols-2 lg:grid-cols-3"

                return (
                  <FadeInSection key={group.id}>
                    <div>
                      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-jefferson-deep-blue to-jefferson-bright-blue bg-clip-text text-transparent">
                        {group.title}
                      </h2>
                      <div className={isTwoColumn ? "flex justify-center" : ""}>
                        <div className={gridClasses}>
                          {members.map((member) => (
                            <TeamMemberCard
                              key={member.slug}
                              member={member}
                              showDescription={group.id === "leadership"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
