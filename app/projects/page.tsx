import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Shield, Heart, Target, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import FadeInSection from "@/components/fade-in-section"
import ScrollToTop from "@/components/scroll-to-top"
import { MedicalBodyVideo } from "@/components/medical-body-video"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ParticleHeroBackground from "@/components/particle-hero-background"

export const metadata: Metadata = {
  title: "Projects | Jefferson Radiation Oncology AI Research",
  description:
    "Explore AI and machine learning research projects focused on quality and safety, side effect reduction, and improving cure rates in radiation oncology.",
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden isolate">
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] opacity-25 pointer-events-none">
            <MedicalBodyVideo className="h-full" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-jefferson-deep-blue via-jefferson-deep-blue/95 to-jefferson-bright-blue" />
          <div className="absolute inset-0 opacity-25 mix-blend-screen">
            <ParticleHeroBackground />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Left side - Content */}
              <div className="flex-1 space-y-8 text-white lg:w-[55%]">
                <Button
                  variant="ghost"
                  size="sm"
                  className="mb-6 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <div className="max-w-3xl">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-white">
                    AI & ML Research Projects
                  </h1>
                  <p className="text-white/90 mb-8 leading-relaxed">
                    Our comprehensive portfolio of AI and ML projects spans three key areas: improving quality and
                    safety, reducing treatment side effects, and enhancing cancer cure rates. Together, these
                    initiatives represent our commitment to transforming radiation oncology through computational
                    innovation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 hover:border-blue-200 transition-all duration-300 cursor-default">
                      <p className="text-3xl font-bold text-blue-600 mb-1">$8M+</p>
                      <p className="text-xs text-gray-600 text-center">in AI-related grants</p>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 hover:border-green-200 transition-all duration-300 cursor-default">
                      <p className="text-3xl font-bold text-green-600 mb-1">11</p>
                      <p className="text-xs text-gray-600 text-center">active AI/ML grants</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 hover:border-purple-200 transition-all duration-300 cursor-default">
                      <p className="text-3xl font-bold text-purple-600 mb-1">4</p>
                      <p className="text-xs text-gray-600 text-center">prospective clinical trials</p>
                    </div>
                    <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 hover:border-orange-200 transition-all duration-300 cursor-default">
                      <p className="text-3xl font-bold text-orange-600 mb-1">15</p>
                      <p className="text-xs text-gray-600 text-center">invention disclosures</p>
                    </div>
                  </div>

                  <p className="text-center text-sm text-white/80 mt-4">
                    Funded by: NIH, NCI, AHRQ, MIM Software, Varian, Elekta, ACS, and SKCCC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FadeInSection>
          <section className="w-full py-12 md:py-24 bg-gray-50">
            <div className="container px-4 md:px-6">
              <Tabs defaultValue="quality-safety" className="mx-auto max-w-4xl">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-white/90 border border-gray-200 p-1 shadow-sm">
                  <TabsTrigger
                    value="quality-safety"
                    className="text-gray-700 data-[state=active]:bg-jefferson-deep-blue data-[state=active]:text-white"
                  >
                    Quality & Safety
                  </TabsTrigger>
                  <TabsTrigger
                    value="reducing-side-effects"
                    className="text-gray-700 data-[state=active]:bg-jefferson-deep-blue data-[state=active]:text-white"
                  >
                    Reducing Side Effects
                  </TabsTrigger>
                  <TabsTrigger
                    value="improving-cure-rates"
                    className="text-gray-700 data-[state=active]:bg-jefferson-deep-blue data-[state=active]:text-white"
                  >
                    Improving Cure Rates
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="text-gray-700 data-[state=active]:bg-jefferson-deep-blue data-[state=active]:text-white"
                  >
                    AI & ML Education
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="quality-safety" id="quality-safety" className="mt-10">
                  <div className="flex items-center gap-4 mb-8">
                    <Shield className="h-8 w-8 text-primary hover:scale-110 transition-transform duration-300" />
                    <h2 className="text-3xl font-bold">Quality & Safety Projects</h2>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 mb-12">
                    Our quality and safety projects leverage AI and ML to improve the accuracy, efficiency, and safety
                    of radiation therapy treatments, enhancing patient outcomes while reducing treatment time and
                    errors.
                  </p>

                  <div className="space-y-12">
                    <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold mb-4 group-hover:text-[#00539B] transition-colors duration-300">
                          1. AI Automated Contouring
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-3/5">
                            <p className="mb-4">
                              Contouring of organs is an essential part of the radiation treatment planning process
                              that is used to determine how much dose is being deposited into each part of the body. Up
                              until 2023, the process of contouring was manually performed by physicians, taking an
                              average of 30 minutes per patient.
                            </p>
                            <p>
                              In the summer of 2023, we implemented an AI-based automated contouring tool for generating
                              auto contours and quality assurance of the developed contours. Since the AI-based
                              automated contouring tool has been in place, {">"}95% of patients have their contours
                              generated automatically in five minutes, resulting in a six-fold improvement in
                              efficiency.
                            </p>
                          </div>
                          <div className="md:w-2/5">
                            <div className="aspect-video overflow-hidden rounded-lg h-full">
                              <Image
                                src="/images/brain-segmentation.jpeg"
                                alt="AI-based automated contouring"
                                width={800}
                                height={400}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold mb-4 group-hover:text-[#00539B] transition-colors duration-300">
                          2. AI Automated Radiation Treatment Planning
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="mb-4">
                          The radiation treatment planning process has traditionally been considered a manual process
                          where the user selects radiation machine parameters to produce an optimal treatment plan for
                          the patient.
                        </p>
                        <p>
                          In 2022, the department implemented an AI-based automated treatment planning solution. The
                          AI-automated treatment planning tool improves the quality of radiation treatment plans by
                          reducing doses to organs surrounding the tumor. It improves efficiency by reducing the time by
                          50% that it takes to generate a treatment plan for any patient.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold mb-4 group-hover:text-[#00539B] transition-colors duration-300">
                          3. AI Model for Mono-isocenter Multiple Brain Metastasis SRS
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-3/5">
                            <p className="mb-4">
                              Brain metastasis is the most common intracranial cancer in adults. Radiation plays a
                              central role in the management of brain metastasis. Currently, stereotactic radiosurgery
                              (SRS) is the treatment of choice for patients with limited brain metastasis based on
                              multiple phase 3 randomized trials.
                            </p>
                            <p className="mb-4">
                              Our group developed a deep-learning model for optimized SRS plans to predict
                              patient-specific 3D dose distribution. The current model is being validated with an
                              expanded cohort of patients. Our AI model can be used for efficient plan quality
                              evaluation to identify sub-optimal plans.
                            </p>
                          </div>
                          <div className="md:w-2/5">
                            <div className="aspect-video overflow-hidden rounded-lg h-full">
                              <Image
                                src="/images/brain-metastases-srs.png"
                                alt="AI model for brain metastasis SRS treatment planning"
                                width={800}
                                height={400}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 text-right">
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="hover:bg-[#00539B] hover:text-white transition-colors duration-300"
                          >
                            <Link href="/projects/quality-safety">
                              View All Quality & Safety Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="reducing-side-effects" id="reducing-side-effects" className="mt-10">
                  <div className="flex items-center gap-4 mb-8">
                    <Heart className="h-8 w-8 text-primary hover:scale-110 transition-transform duration-300" />
                    <h2 className="text-3xl font-bold">Reducing Side Effects Projects</h2>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 mb-12">
                    Our projects focused on reducing toxicity and side effects from cancer treatments through
                    innovative AI and ML approaches, improving quality of life for cancer survivors.
                  </p>

                  <div className="space-y-12">
                    <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold mb-4 group-hover:text-[#00539B] transition-colors duration-300">
                          1. AI-based Functional Imaging for Toxicity Reduction
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-3/5">
                            <p className="mb-4">
                              Based on NCI-funded work, department researchers have developed an AI algorithm to
                              repurpose standard-of-care chest computed tomography (CT) imaging to produce functional
                              lung images.
                            </p>
                            <p>
                              Functional imaging has been incorporated into the radiation treatment planning paradigm
                              for lung cancer patients to reduce toxicity. The AI, imaging-based technology, has been
                              evaluated in a phase II clinical trial (NCT02528942) led by Jefferson investigators, with
                              trial data showing reduced toxicity by 50% compared to standard thoracic radiation.
                            </p>
                          </div>
                          <div className="md:w-2/5">
                            <div className="aspect-video overflow-hidden rounded-lg h-full">
                              <Image
                                src="/images/functional-imaging.jpeg"
                                alt="AI-based functional imaging"
                                width={800}
                                height={400}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold mb-4 group-hover:text-[#00539B] transition-colors duration-300">
                          2. AI and Standard of Care PET Imaging to Predict Cardiotoxicity
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-3/5">
                            <p className="mb-4">
                              Twenty percent of patients receiving radiation to the chest experience clinically
                              significant cardiac toxicity. Models for predicting which patients are at higher risk of
                              developing cardiac toxicity are population-based and lacking in accuracy and robustness.
                            </p>
                            <p>
                              Funded by SKCCC seed grants, Jefferson Radiation Oncology researchers have developed an AI
                              algorithm to repurpose standard-of-care staging PET scans to extract clinically
                              significant cardiac information to improve the prediction of cardiotoxicity.
                            </p>
                          </div>
                          <div className="md:w-2/5">
                            <div className="aspect-video overflow-hidden rounded-lg h-full">
                              <Image
                                src="/images/cardiac-pet-survival.png"
                                alt="PET imaging for cardiotoxicity prediction"
                                width={800}
                                height={400}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold mb-4 group-hover:text-[#00539B] transition-colors duration-300">
                          3. Breast Voxel-based Analysis for Toxicity Prediction
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-3/5">
                            <p className="mb-4">
                              Nine in ten women diagnosed with breast cancer survive five years or more, but most are
                              left with long-lasting side effects of their curative treatments. Our AI-based project
                              proposes leveraging novel voxel-based computational analysis to identify which tissues
                              are most radiosensitive and critical in predicting which patients may get side effects.
                            </p>
                            <p>
                              The developed methods will identify the tissues most sensitive to radiation and reveal
                              how to treat breast cancer more effectively by avoiding the identified tissues.
                            </p>
                          </div>
                          <div className="md:w-2/5">
                            <div className="aspect-video overflow-hidden rounded-lg h-full">
                              <Image
                                src="/images/breast-voxel-analysis.png"
                                alt="Breast voxel-based analysis"
                                width={800}
                                height={400}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 text-right">
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="hover:bg-[#00539B] hover:text-white transition-colors duration-300"
                          >
                            <Link href="/projects/reducing-side-effects">
                              View All Side Effects Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="improving-cure-rates" id="improving-cure-rates" className="mt-10">
                  <div className="flex items-center gap-4 mb-8">
                    <Target className="h-8 w-8 text-primary hover:scale-110 transition-transform duration-300" />
                    <h2 className="text-3xl font-bold">Improving Cure Rates Projects</h2>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 mb-12">
                    Our projects focused on improving cancer cure rates and treatment outcomes through innovative AI
                    and ML approaches, from early detection to personalized treatment planning.
                  </p>

                  <div className="space-y-12">
                    <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold mb-4 group-hover:text-[#00539B] transition-colors duration-300">
                          1. Generalizable Quantitative Imaging and Machine Learning Signatures in Glioblastoma
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-3/5">
                            <p className="mb-4">
                              The current state of magnetic resonance imaging (MRI) methods in neurooncology offers
                              excellent potential for providing rich characterizations of brain tumor structural,
                              physiological, and metabolic characteristics, especially in brain gliomas, which are
                              complex and highly heterogeneous cancers.
                            </p>
                            <p>
                              Our group is part of the Respond consortium NCI R01 grant. We contribute MRI and patient
                              data to the consortium. We subcontract to lead the investigation using AI/radiomics
                              techniques to evaluate GBM patient characteristics of long-term survival and prediction
                              of treatment response to re-irradiation.
                            </p>
                          </div>
                          <div className="md:w-2/5">
                            <div className="aspect-video overflow-hidden rounded-lg h-full">
                              <Image
                                src="/images/radiomics-workflow.png"
                                alt="Radiomics workflow for brain tumor analysis"
                                width={800}
                                height={400}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold mb-4 group-hover:text-[#00539B] transition-colors duration-300">
                          2. Early Detection of Recurrence in Locally Advanced Non-Small Cell Lung Cancer
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-3/5">
                            <p className="mb-4">
                              Despite improved treatment options and outcomes in recent years, recurrence rates in
                              locally advanced non-small cell lung cancer remain high. If recurrence can be detected
                              earlier, there may be an opportunity to intervene sooner, improving outcomes for this
                              patient population.
                            </p>
                            <p>
                              In collaboration with a computational biology company (OncoHost), our group has developed
                              a machine-learning algorithm using pretreatment proteomic profiles to predict treatment
                              resistance and early recurrence in patients with locally advanced non-small cell lung
                              cancer.
                            </p>
                          </div>
                          <div className="md:w-2/5">
                            <div className="aspect-video overflow-hidden rounded-lg h-full">
                              <Image
                                src="/images/lung-function-imaging.png"
                                alt="Functional lung imaging used in NSCLC recurrence analysis"
                                width={800}
                                height={400}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold mb-4 group-hover:text-[#00539B] transition-colors duration-300">
                          4. Using AI for Early Detection of Small Brain Metastasis
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-3/5">
                            <p className="mb-4">
                              Stereotactic radiosurgery is being used to treat small brain metastasis. Due to the
                              development of radiotherapy treatment planning and delivery technologies, clinicians are
                              comfortable treating more brain metastases per episode of care.
                            </p>
                            <p>
                              The challenge is that many lesions are too small to be picked up by radiologists and
                              radiation oncologists. Our group is validating an AI-based software that produces
                              automatic detection of small brain metastasis.
                            </p>
                          </div>
                          <div className="md:w-2/5">
                            <div className="aspect-video overflow-hidden rounded-lg h-full">
                              <Image
                                src="/images/ai-lesion-detection.png"
                                alt="AI detection of small brain lesions"
                                width={800}
                                height={400}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold mb-4 group-hover:text-[#00539B] transition-colors duration-300">
                          3. AI for Clinical Decision Support (Computational Plasma Proteomics)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-3/5">
                            <p className="mb-4">
                              Immune checkpoint inhibitors (ICIs) have revolutionized the cancer therapy landscape due
                              to long-term benefits in patients with advanced metastatic disease. However, robust
                              predictive biomarkers for response are still lacking, and treatment resistance is not
                              fully understood.
                            </p>
                            <p>
                              In collaboration with a computational biology company (OncoHost), we developed and
                              subsequently blindly validated a machine-learning algorithm employing pretreatment plasma
                              proteomic profiles for personalized treatment decisions.
                            </p>
                          </div>
                          <div className="md:w-2/5">
                            <div className="aspect-video overflow-hidden rounded-lg h-full">
                              <Image
                                src="/images/proteomics-workflow.png"
                                alt="Proteomics workflow"
                                width={800}
                                height={400}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 text-right">
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="hover:bg-[#00539B] hover:text-white transition-colors duration-300"
                          >
                            <Link href="/projects/improving-cure-rates">
                              View All Cure Rate Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="education" id="education" className="mt-10">
                  <div className="flex items-center gap-4 mb-8">
                    <BookOpen className="h-8 w-8 text-primary hover:scale-110 transition-transform duration-300" />
                    <h2 className="text-3xl font-bold">AI & ML Education Initiatives</h2>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 mb-12">
                    Our educational programs and initiatives focused on training the next generation of clinicians and
                    researchers in AI and ML applications for radiation oncology.
                  </p>

                  <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold mb-4 group-hover:text-[#00539B] transition-colors duration-300">
                        AI and ML Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="mb-4">
                        AI and ML are ingrained in the Department of Radiation Oncology's educational mission. The
                        computational physicist (Dr. Choi) has become an NVIDIA-certified Deep Learning trainer,
                        providing AI and ML instruction to faculty, staff, medical residents, and medical physics
                        residents.
                      </p>
                      <p className="mb-4">
                        AI and ML lectures are a standard aspect of our department's medical resident and medical
                        physics resident curricula. We acknowledge this is unusual and take pride in leading the field
                        in the education of our trainees.
                      </p>
                      <p>
                        We created a course in the Scholarly Inquiry track in Sidney Kimmel Medical College, Digital
                        Health, which is now in its fifth year. A third of the medical students' projects are AI-related.
                        We have rebranded and reformulated the course for Academic 2025, "AI and Digital Health," with the
                        goal that 100% of the curriculum and student projects will be AI-focused.
                      </p>

                      <div className="mt-4 text-right">
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="hover:bg-[#00539B] hover:text-white transition-colors duration-300"
                        >
                          <Link href="/projects/education">
                            View All Education Initiatives <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </FadeInSection>

        {/* Call to Action */}
        <FadeInSection>
          <section className="w-full py-12 md:py-24 bg-gradient-to-br from-jefferson-deep-blue to-jefferson-bright-blue/30 text-white">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold mb-6">Advancing Cancer Care Through AI</h2>
                <p className="text-white/90 mb-8 max-w-3xl mx-auto">
                  Our AI and ML initiatives have secured over $8 million in grant funding, launched 4 prospective
                  clinical trials, and engaged 17 faculty members in cutting-edge research. Join us in our mission to
                  transform radiation oncology.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#00539B] hover:bg-[#003d73] hover:shadow-lg transition-all duration-300"
                  >
                    <Link href="/team">Meet Our Team</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-white/80 hover:bg-[#00539B] hover:text-white hover:border-[#00539B] transition-all duration-300"
                  >
                    <a href="mailto:David.thomas2@jefferson.edu">Contact Us</a>
                  </Button>
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
