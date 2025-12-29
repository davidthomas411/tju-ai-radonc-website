import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"
import TeamMemberCard from "@/components/team-member-card"
import { featuredTeamSlugs, getMembersBySlugs } from "@/lib/team-structure"

export default function TeamSection() {
  const featuredMembers = getMembersBySlugs(featuredTeamSlugs)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-silver">
      <div className="container px-4 md:px-6">
        <FadeInSection>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-jefferson-deep-blue">
              Meet the Team
            </h2>
            <p className="max-w-[85%] leading-relaxed text-slate text-base sm:text-lg">
              A curated view of the clinicians and researchers advancing AI in radiation oncology.
            </p>
          </div>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto">
          {featuredMembers.map((member) => (
            <TeamMemberCard key={member.slug} member={member} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-2 border-jefferson-deep-blue text-jefferson-deep-blue hover:bg-jefferson-deep-blue hover:text-white transition-all duration-300 text-base px-8 py-6 shadow-md hover:shadow-lg font-medium bg-transparent"
          >
            <Link href="/team">
              View Full Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
