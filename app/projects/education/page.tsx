import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollToTop from "@/components/scroll-to-top"
import ParticleHeroBackground from "@/components/particle-hero-background"

export const metadata: Metadata = {
  title: "AI & ML Education | Jefferson Radiation Oncology AI Research",
  description:
    "Education initiatives and training programs in AI, machine learning, and digital health within radiation oncology.",
}

export default function EducationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-jefferson-deep-blue via-jefferson-deep-blue/95 to-jefferson-bright-blue text-white relative overflow-hidden isolate">
          <div className="absolute inset-0 opacity-25 mix-blend-screen">
            <ParticleHeroBackground />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <BreadcrumbNav
              variant="dark"
              items={[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "AI & ML Education", href: "/projects/education" },
              ]}
            />
            <Button
              variant="outline"
              size="sm"
              className="mb-6 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white transition-all duration-200"
              asChild
            >
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-white">
                AI & ML Education Initiatives
              </h1>
              <p className="text-white/80 mb-8">
                Our educational programs and initiatives focused on training the next generation of clinicians and
                researchers in AI and ML applications for radiation oncology.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">AI and ML Education</h2>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <p className="mb-4">
                      AI and ML are ingrained in the Department of Radiation Oncology's educational mission. The
                      computational physicist (Dr. Choi) has become an NVIDIA-certified Deep Learning trainer, providing
                      AI and ML instruction to faculty, staff, medical residents, and medical physics residents.
                    </p>
                    <p>
                      AI and ML lectures are a standard aspect of our department's medical resident and medical physics
                      resident curricula. We acknowledge this is unusual and take pride in leading the field in the
                      education of our trainees.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">AI and Undergraduate Medical Education</h2>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <p className="mb-4">
                      Digital health refers to a convergence of technology and data in healthcare and medicine designed
                      to improve healthcare delivery and outcomes, engage patients, expand population-based research,
                      create and mine new data repositories, and support positive health behaviors.
                    </p>
                    <p className="mb-4">
                      These are applied through hardware, software, and analytics-enabled solutions that can frequently
                      be delivered virtually through the Internet or other transmission. Digital health has rapidly
                      become a multidisciplinary domain involving healthcare providers, behavioral psychologists, data
                      scientists, technologists, implementation scientists, engineers, designers, social scientists, and
                      participants from public health, health economies, and healthcare management disciplines.
                    </p>
                    <p>
                      We created a course in the Scholarly Inquiry track in Sidney Kimmel Medical College, Digital
                      Health, which is now in its fifth year. A third of the medical students' projects are AI-related.
                      We have rebranded and reformulated the course for Academic 2025, "AI and Digital Health," with the
                      goal that 100% of the curriculum and student projects will be AI-focused.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Student Projects in AI and Digital Health</h2>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <p className="mb-4">Below is a representation of student projects in AI and Digital Health:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Automatic Classification of Head CT scans Using 3D Convolutional Neural Networks</li>
                      <li>Automated Assessment of Cardiothoracic Ratios on Chest Radiographs Using Deep Learning</li>
                      <li>Assessment of Critical Feeding Tube Malposition on Radiographs using Deep Learning</li>
                      <li>Fully Automated Tube and Line Detection in Chest X-Ray with Convolutional Neural Networks</li>
                      <li>
                        Deep Learning in Modeling Survival Outcomes for Brain Metastases
                        <ul className="list-disc pl-6 mt-1">
                          <li>Patrick Nguyen, SKMC 2023</li>
                        </ul>
                      </li>
                      <li>
                        Impact of Algorithmic Bias on Hospital Risk Stratification Scores Among Insurance Recipients
                        <ul className="list-disc pl-6 mt-1">
                          <li>Peter Zdunek, SKMC 2023</li>
                        </ul>
                      </li>
                      <li>
                        Artificial Intelligence Strategies for Prognostication of Meningioma
                        <ul className="list-disc pl-6 mt-1">
                          <li>Eric Huttler, SKMC 2023</li>
                        </ul>
                      </li>
                      <li>
                        Artificial Intelligence in the Detection of Macular Degeneration
                        <ul className="list-disc pl-6 mt-1">
                          <li>Jeffrey Gray MSKMC 2023</li>
                        </ul>
                      </li>
                      <li>
                        Readmission Risk Assessment Tool for Stroke Patients
                        <ul className="list-disc pl-6 mt-1">
                          <li>Siman Rahi, SKMC 2023</li>
                        </ul>
                      </li>
                      <li>
                        Machine Learning Models for 6-Month Survival Prediction after Surgical Resection of Glioblastoma
                        <ul className="list-disc pl-6 mt-1">
                          <li>Jeffrey Gray, SKMC 2023</li>
                        </ul>
                      </li>
                      <li>
                        Machine learning algorithm improves renal transplantation prediction outcomes
                        <ul className="list-disc pl-6 mt-1">
                          <li>Alexander Tam, SKMC 2024</li>
                        </ul>
                      </li>
                      <li>
                        Meta-Learning for Medical Imaging Diagnostics
                        <ul className="list-disc pl-6 mt-1">
                          <li>Charlotte Zuber, SKMC 2024</li>
                        </ul>
                      </li>
                      <li>
                        Predicting survival curve in NSCLC using Hittboost model a comparative study
                        <ul className="list-disc pl-6 mt-1">
                          <li>Brittany Fisher, SKMC 2024</li>
                        </ul>
                      </li>
                      <li>
                        Machine Learning Prediction of Parkinson's Symptoms/ Prediction of Symptom Reduction from DBS
                        Implantation
                        <ul className="list-disc pl-6 mt-1">
                          <li>Christian Raimondo, SKMC 2026</li>
                        </ul>
                      </li>
                      <li>
                        Applications of Machine Learning in Traumatic Brain Injury Imaging
                        <ul className="list-disc pl-6 mt-1">
                          <li>Andrew Sam, SKMC 2027</li>
                        </ul>
                      </li>
                      <li>
                        Development of novel AI imaging techniques to improve lung cancer resection procedures
                        <ul className="list-disc pl-6 mt-1">
                          <li>Annie Ho, SKMC 2027</li>
                        </ul>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">AI and ML Intellectual Property</h2>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <p className="mb-4">
                      In the last year, Jefferson faculty have submitted two intellectual property patent applications
                      related to AI:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        <p className="font-medium">
                          Systems, Devices, and Associated Methods for Determining a Desired Radiation Dose Distribution
                          from Diagnostic Imaging
                        </p>
                        <p>
                          Aims to use AI to predict a radiation dose distribution from diagnostic imaging (a PET scan or
                          MRI imaging, for example).
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Methods and Systems for the Prediction of Cardiotoxicity</p>
                        <p>
                          Use AI methods and PET imaging to provide early identification of which patients may be at
                          risk of developing cardiac toxicity.
                        </p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
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
