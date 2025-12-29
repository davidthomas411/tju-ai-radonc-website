import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Terms of Service | Jefferson Radiation Oncology AI Research",
  description: "Terms of service for the Center for Excellence in AI research website.",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-jefferson-deep-blue mb-6">
              Terms of Service
            </h1>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This website is intended for informational and academic purposes related to the Center for Excellence
                in AI at Thomas Jefferson University.
              </p>
              <p>
                Terms of service will be published here. For questions about content use or permissions, please contact
                the department directly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
