import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import FadeInSection from "@/components/fade-in-section"

export default function AboutContent() {
  return (
    <div className="space-y-10">
      <FadeInSection>
        <Card className="overflow-hidden border border-gray-200/80 border-t-4 border-t-jefferson-bright-blue shadow-lg bg-white">
          <CardContent className="p-8">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <h3 className="text-xl font-bold mb-4 text-jefferson-deep-blue">AI in Radiation Oncology</h3>
                <p className="text-slate leading-relaxed">
                  The development and integration of artificial intelligence (AI) and machine learning (ML) have been a
                  programmatic focus for the Department of Radiation Oncology since 2020. Jefferson Radiation Oncology
                  faculty have successfully developed and integrated AI and ML methods to improve cancer patients'
                  quality, safety, and clinical outcomes.
                </p>
              </div>
              <div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/patient-centered-ai.jpeg"
                    alt="Patient-centered AI approach"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Patient-centered AI approach for radiation therapy planning
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <Card className="overflow-hidden border border-gray-200/80 border-t-4 border-t-volt-green shadow-lg bg-white">
          <CardContent className="p-8">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] items-center">
              <div className="md:order-2">
                <h3 className="text-xl font-bold mb-4 text-jefferson-deep-blue">Computational Infrastructure</h3>
                <p className="text-slate leading-relaxed">
                  The department has established a computational framework for developing AI and ML algorithms and has
                  emphasized AI and ML expertise in faculty and trainee recruiting. AI and ML initiatives have improved
                  patient care, efficiency, and academic productivity.
                </p>
              </div>
              <div className="md:order-1">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/computational-infrastructure.jpeg"
                    alt="Computational infrastructure for AI"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Advanced computational infrastructure supporting AI research
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <Card className="overflow-hidden border border-gray-200/80 border-t-4 border-t-academic-red shadow-lg bg-white">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-jefferson-deep-blue">Research Impact</h3>
              <p className="text-slate mb-8">
                The Radiation Oncology faculty has 11 AI and ML-related grants totaling over $8 million, with funding
                from NIH, NCI, AHRQ, MIM Software, Varian, Elekta, ACS, and SKCCC. The program has 4 prospective clinical
                trials and 15 invention disclosures.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex flex-col items-center shadow-sm">
                <p className="text-3xl font-bold text-blue-600 mb-1">$8M+</p>
                <p className="text-xs text-gray-600 text-center">in AI-related grants</p>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-lg p-6 flex flex-col items-center shadow-sm">
                <p className="text-3xl font-bold text-green-600 mb-1">11</p>
                <p className="text-xs text-gray-600 text-center">active AI/ML grants</p>
              </div>
              <div className="bg-purple-50 border border-purple-100 rounded-lg p-6 flex flex-col items-center shadow-sm">
                <p className="text-3xl font-bold text-purple-600 mb-1">4</p>
                <p className="text-xs text-gray-600 text-center">prospective clinical trials</p>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 flex flex-col items-center shadow-sm">
                <p className="text-3xl font-bold text-orange-600 mb-1">15</p>
                <p className="text-xs text-gray-600 text-center">invention disclosures</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeInSection>
    </div>
  )
}
