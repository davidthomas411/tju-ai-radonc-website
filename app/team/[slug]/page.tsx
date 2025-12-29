import { notFound } from "next/navigation"
import { getFacultyBySlug, getAllFacultySlugs } from "@/lib/faculty-data"
import FacultyPageClient from "./FacultyPageClient"

export function generateStaticParams() {
  return getAllFacultySlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const faculty = getFacultyBySlug(params.slug)

  if (!faculty) {
    return {
      title: "Faculty Not Found",
    }
  }

  return {
    title: `${faculty.name} | Center for Excellence in AI`,
    description: `${faculty.title} - ${faculty.subtitle || ""}`,
  }
}

export default function FacultyPage({ params }: { params: { slug: string } }) {
  const faculty = getFacultyBySlug(params.slug)

  if (!faculty) {
    notFound()
  }

  return <FacultyPageClient faculty={faculty} />
}
