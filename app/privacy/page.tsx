import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Privacy Policy | Jefferson Radiation Oncology AI Research",
  description: "Privacy information for the Center for Excellence in AI research website.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-jefferson-deep-blue mb-6">
              Privacy Policy
            </h1>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This site provides information about the Center for Excellence in AI within the Department of Radiation
                Oncology at Thomas Jefferson University.
              </p>
              <p>
                A detailed privacy policy will be published here. If you have questions about privacy or data practices,
                please contact the department directly.
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
