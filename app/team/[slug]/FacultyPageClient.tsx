"use client"

import { useEffect } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Mail, ExternalLink, Globe } from "lucide-react"
import { FaceTracker } from "@/components/face-tracker"
import { Button } from "@/components/ui/button"
import ParticleHeroBackground from "@/components/particle-hero-background"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollToTop from "@/components/scroll-to-top"

interface FacultyPageClientProps {
  faculty: {
    blobFaceId: string
    fallbackImage: string
    name: string
    title: string
    subtitle?: string
    description?: string
    email?: string
    linkedin?: string
    website?: string
    jeffersonUrl: string
    bioSections?: {
      personalStatement?: string
      education?: string
      expertise?: string[]
    }
    address?: string
    phone?: string
    fax?: string
  }
}

export default function FacultyPageClient({ faculty }: FacultyPageClientProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  // This check is technically redundant if the server component handles notFound,
  // but it's good practice for client components that might receive partial data.
  if (!faculty) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 relative">
        {/* Hero Section with Particle Background */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-br from-jefferson-deep-blue via-jefferson-deep-blue/95 to-jefferson-bright-blue relative overflow-hidden isolate">
          <div className="absolute inset-0 opacity-25 mix-blend-screen">
            <ParticleHeroBackground />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <Link
              href="/team"
              className="inline-flex items-center mb-8 px-4 py-2 text-sm font-medium rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
            </Link>

            <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
              {/* Face Tracker Image */}
              <div className="flex justify-center md:justify-start">
                <FaceTracker
                  blobFaceId={faculty.blobFaceId}
                  fallbackImage={faculty.fallbackImage}
                  alt={faculty.name}
                  size={320}
                  className="ring-4 ring-white/30 shadow-2xl"
                />
              </div>

              {/* Faculty Info */}
              <div className="text-white space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-balance">{faculty.name}</h1>
                <p className="text-xl md:text-2xl text-white/90 font-medium">{faculty.title}</p>
                {faculty.subtitle && <p className="text-lg text-white/80">{faculty.subtitle}</p>}
                {faculty.description && <p className="text-base text-white/70 max-w-3xl">{faculty.description}</p>}

                <div className="flex gap-4 pt-4 flex-wrap">
                  {faculty.email && (
                    <Button asChild variant="secondary" size="lg">
                      <a href={`mailto:${faculty.email}`} className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        Email
                      </a>
                    </Button>
                  )}
                  {faculty.linkedin && (
                    <Button asChild variant="secondary" size="lg">
                      <a
                        href={faculty.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </a>
                    </Button>
                  )}
                  {faculty.website && (
                    <Button asChild variant="secondary" size="lg">
                      <a
                        href={faculty.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Globe className="h-5 w-5" />
                        Lab Website
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                  >
                    <a
                      href={faculty.jeffersonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-5 w-5" />
                      TJU Profile
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content from Jefferson Page */}
        <section className="w-full py-12 md:py-20 bg-white relative">
          <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 scale-50 origin-bottom-right">
              <ParticleHeroBackground />
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {faculty.bioSections?.personalStatement && (
                  <>
                    <h2 className="text-3xl font-bold text-jefferson-deep-blue mb-6">About</h2>
                    <div className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
                      {faculty.bioSections.personalStatement}
                    </div>
                  </>
                )}

                {faculty.bioSections?.education && (
                  <>
                    <h2 className="text-3xl font-bold text-jefferson-deep-blue mb-6 mt-12">Education</h2>
                    <div className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
                      {faculty.bioSections.education}
                    </div>
                  </>
                )}

                {faculty.bioSections?.expertise && faculty.bioSections.expertise.length > 0 && (
                  <>
                    <h2 className="text-3xl font-bold text-jefferson-deep-blue mb-6 mt-12">Areas of Expertise</h2>
                    <ul className="grid md:grid-cols-2 gap-3 mb-8">
                      {faculty.bioSections.expertise.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700 bg-gray-50 p-3 rounded-lg">
                          <span className="text-jefferson-bright-blue mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <h2 className="text-3xl font-bold text-jefferson-deep-blue mb-6 mt-12">Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  {faculty.address && (
                    <p className="text-gray-700">
                      <strong className="text-jefferson-deep-blue">Address:</strong> {faculty.address}
                    </p>
                  )}
                  {faculty.email && (
                    <p className="text-gray-700">
                      <strong className="text-jefferson-deep-blue">Email:</strong>{" "}
                      <a href={`mailto:${faculty.email}`} className="text-jefferson-bright-blue hover:underline">
                        {faculty.email}
                      </a>
                    </p>
                  )}
                  {faculty.phone && (
                    <p className="text-gray-700">
                      <strong className="text-jefferson-deep-blue">Phone:</strong>{" "}
                      <a href={`tel:${faculty.phone}`} className="text-jefferson-bright-blue hover:underline">
                        {faculty.phone}
                      </a>
                    </p>
                  )}
                  {faculty.fax && (
                    <p className="text-gray-700">
                      <strong className="text-jefferson-deep-blue">Fax:</strong> {faculty.fax}
                    </p>
                  )}
                  {faculty.linkedin && (
                    <p className="text-gray-700">
                      <strong className="text-jefferson-deep-blue">LinkedIn:</strong>{" "}
                      <a
                        href={faculty.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-jefferson-bright-blue hover:text-jefferson-deep-blue font-medium"
                      >
                        View Profile
                      </a>
                    </p>
                  )}
                </div>

                <div className="bg-gradient-to-r from-jefferson-deep-blue/5 to-jefferson-bright-blue/5 border-l-4 border-jefferson-bright-blue p-6 rounded-r-lg mt-8">
                  <p className="text-lg text-gray-700 italic mb-0">
                    Full faculty profile and publications are available on the{" "}
                    <a
                      href={faculty.jeffersonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-jefferson-bright-blue hover:text-jefferson-deep-blue font-medium"
                    >
                      Thomas Jefferson University website
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
