import type { FacultyMember } from "@/lib/faculty-data"
import { facultyData } from "@/lib/faculty-data"

export type TeamGroupLayout = "two-column" | "three-column"

export interface TeamGroup {
  id: string
  title: string
  memberSlugs: string[]
  layout: TeamGroupLayout
}

export const teamGroups: TeamGroup[] = [
  {
    id: "leadership",
    title: "Leadership",
    memberSlugs: ["dicker", "vinogradskiy"],
    layout: "two-column",
  },
  {
    id: "radiation-oncology-faculty",
    title: "Radiation Oncology Faculty",
    memberSlugs: ["dicker", "shi"],
    layout: "two-column",
  },
  {
    id: "medical-physics-faculty",
    title: "Medical Physics Faculty",
    memberSlugs: ["vinogradskiy", "choi", "wang", "chen", "wilson", "thomas", "nourzadeh", "mourtada", "taleei"],
    layout: "three-column",
  },
]

export const featuredTeamSlugs = ["dicker", "vinogradskiy", "shi", "choi"]

export const getMemberBySlug = (slug: string): FacultyMember | undefined =>
  facultyData.find((member) => member.slug === slug)

export const getMembersBySlugs = (slugs: string[]): FacultyMember[] =>
  slugs.map((slug) => getMemberBySlug(slug)).filter(Boolean) as FacultyMember[]
