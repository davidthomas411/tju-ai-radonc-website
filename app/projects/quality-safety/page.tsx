import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import FadeInSection from "@/components/fade-in-section"
import ScrollToTop from "@/components/scroll-to-top"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ParticleHeroBackground from "@/components/particle-hero-background"

export const metadata: Metadata = {
  title: "Quality & Safety Projects | Jefferson Radiation Oncology AI Research",
  description:
    "AI and machine learning projects improving treatment quality, safety, and efficiency in radiation oncology.",
}

function ExpandableImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div className="relative">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={800}
        height={400}
        className="w-full h-auto object-contain rounded-md"
      />
      {caption && <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">{caption}</div>}
    </div>
  )
}

export default function QualitySafetyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-jefferson-deep-blue via-jefferson-deep-blue/95 to-jefferson-bright-blue text-white overflow-hidden isolate">
          <div className="absolute inset-0 opacity-25 mix-blend-screen">
            <ParticleHeroBackground />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <BreadcrumbNav
              variant="dark"
              items={[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "Quality & Safety" },
              ]}
            />
            <Button
              variant="outline"
              size="sm"
              className="mb-6 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white transition-colors"
              asChild
            >
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-white">
                AI & ML Projects for Quality and Safety
              </h1>
              <p className="text-white/80 mb-8">
                Our quality and safety projects leverage AI and ML to improve the accuracy, efficiency, and safety of
                radiation therapy treatments.
              </p>
            </div>
          </div>
        </section>

        <FadeInSection>
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl space-y-16">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. AI Automated Contouring</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-3/5">
                          <p className="mb-4">
                            Contouring of organs is an essential part of the radiation treatment planning process that
                            is used to determine how much dose is being deposited into each part of the body. Up until
                            2023, the process of contouring was manually performed by physicians, taking an average of
                            30 minutes per patient.
                          </p>
                          <p>
                            In the summer of 2023, we implemented an AI-based automated contouring tool for generating
                            auto contours and quality assurance of the developed contours. Since the AI-based automated
                            contouring tool has been in place, {">"}95% of patients have their contours generated
                            automatically in five minutes, resulting in a six-fold improvement in efficiency.
                          </p>
                        </div>
                        <div className="md:w-2/5">
                          <div className="aspect-video overflow-hidden rounded-lg h-full">
                            <Image
                              src="/images/brain-segmentation.jpeg"
                              alt="AI-based automated contouring"
                              width={800}
                              height={400}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. AI Automated Radiation Treatment Planning</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <p className="mb-4">
                        The radiation treatment planning process has traditionally been considered a manual process
                        where the user selects radiation machine parameters to produce an optimal treatment plan for the
                        patient.
                      </p>
                      <p>
                        In 2022, the department implemented an AI-based automated treatment planning solution. The
                        AI-automated treatment planning tool improves the quality of radiation treatment plans by
                        reducing doses to organs surrounding the tumor. It improves efficiency by reducing the time by
                        50% that it takes to generate a treatment plan for any patient.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. ML Solutions for Adaptive Radiotherapy</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <p className="mb-4">
                        The typical radiation therapy planning process takes two weeks from when a patient is seen in
                        consultation and when they can begin their radiation treatment. Adaptive radiotherapy is a
                        process where a patient's treatment plan is adapted on the day of treatment based on the
                        patient's daily anatomy.
                      </p>
                      <p className="mb-4">
                        The adaptive process typically takes an hour and occurs while the patient lies on the treatment
                        machine (Linear Accelerator). Using ML methods, Radiation Oncology researchers have developed
                        automated methods to reduce the adaptive process by 50% to 30 minutes.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    4. Computer Vision Assisted Surface-Guided Radiation Therapy
                  </h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <p className="mb-4">
                        Standard radiotherapy approaches rely on marks on the skin to reproducibly set up a patient for
                        radiotherapy. Recent approaches have proposed using patient surface guidance and optical imaging
                        to improve patient set-up accuracy.
                      </p>
                      <p className="mb-4">
                        Although surface-guided approaches improve patient set-up accuracy, the methods often fail for
                        patients of different skin color, body mass index, body habitus, and body type. Jefferson
                        investigators have designed a novel AI approach to enhance surface-guided radiotherapy.
                      </p>
                      <p className="mb-4">
                        The concept is called 'Avatar guided radiotherapy' and employs AI-driven patient-specific
                        "avatars" to improve the internal and external correspondence from a given surface scan. The
                        impact of Avatar-guided RT is that it can enhance radiotherapy set-up accuracy for a diverse
                        population, including patients with different skin colors and body habitus.
                      </p>
                      <p>
                        The work was recognized at the 2024 annual American Association of Physics in Medicine meeting
                        as a "Best in Physics" abstract (given to the top 1% of submissions), and the investigators have
                        filed a complete patent for the work.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. ML for Radiation Treatment Machine Quality Assurance</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <p className="mb-4">
                        Radiation therapy treatment machines, known as Linear Accelerators, are complex hardware and
                        software systems that produce thousands of data points for every patient treatment.
                      </p>
                      <p className="mb-4">
                        Quality assurance of Linear Accelerators has been a manual process that is 1) time-consuming, 2)
                        able to evaluate only a finite amount of data, and therefore 3) not able to predict imminent
                        machine failures.
                      </p>
                      <p>
                        Radiation Oncology researchers have developed a convolution neural network (CNN) that
                        prospectively identifies which machine components may perform sub-optimally. The neural
                        network's ability can significantly improve error detection rates, reduce the amount of patient
                        treatment delays, and improve clinical outcomes.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    6. AI Model for Mono-isocenter Multiple Brain Metastasis SRS
                  </h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-3/5">
                          <p className="mb-4">
                            Brain metastasis is the most common intracranial cancer in adults. Radiation plays a central
                            role in the management of brain metastasis. Currently, stereotactic radiosurgery (SRS) is
                            the treatment of choice for patients with limited brain metastasis based on multiple phase 3
                            randomized trials.
                          </p>
                          <p className="mb-4">
                            SRS is also a standard-of-care option for patients with multiple brain metastasis ({">"}4).
                            Mono-isocenter multiple brain metastasis SRS is gaining popularity to improve efficiency and
                            patient comfort. However, well-established criteria are needed to evaluate radiation plan
                            optimization. Numerous studies demonstrated there is high interobserver variability.
                          </p>
                          <p className="mb-4">
                            Our group developed a deep-learning model for optimized SRS plans to predict
                            patient-specific 3D dose distribution. The current model is being validated with an expanded
                            cohort of patients. Our AI model can be used for efficient plan quality evaluation to
                            identify sub-optimal plans.
                          </p>
                          <p>
                            The work is funded by philanthropic funding with plans for a National Cancer Institute (NCI)
                            R21 submission in 2025.
                          </p>
                        </div>
                        <div className="md:w-2/5">
                          <div className="aspect-video overflow-hidden rounded-lg h-full">
                            <Image
                              src="/images/radiomics-brain.jpeg"
                              alt="AI model for brain metastasis SRS"
                              width={800}
                              height={400}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <ExpandableImage
                          src="/images/brain-metastases-srs.png"
                          alt="AI model for brain metastasis SRS treatment planning showing multiple metastases with radiation dose contours"
                          caption="Brain metastasis SRS treatment planning with AI-optimized dose distributions for multiple lesions. The colored contours represent different radiation dose levels targeting multiple brain metastases."
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>

      <SiteFooter />

      <ScrollToTop />
    </div>
  )
}
