import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ExpandableImage from "@/components/expandable-image"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import FadeInSection from "@/components/fade-in-section"
import ScrollToTop from "@/components/scroll-to-top"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ParticleHeroBackground from "@/components/particle-hero-background"

export const metadata: Metadata = {
  title: "Improving Cure Rates Projects | Jefferson Radiation Oncology AI Research",
  description:
    "AI and ML research focused on early detection, decision support, and improved cancer cure rates.",
}

export default function ImprovingCureRatesPage() {
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
                { label: "Improving Cure Rates" },
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
                AI & ML Projects to Improve the Cure Rate of Cancer
              </h1>
              <p className="text-white/80 mb-8">
                Our projects focused on improving cancer cure rates and treatment outcomes through innovative AI and ML
                approaches.
              </p>
            </div>
          </div>
        </section>

        <FadeInSection>
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-4xl space-y-16">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    1. Generalizable Quantitative Imaging and Machine Learning Signatures in Glioblastoma
                  </h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-6">
                        <p className="mb-4">
                          The current state of magnetic resonance imaging (MRI) methods in neurooncology offers
                          excellent potential for providing rich characterizations of brain tumor structural,
                          physiological, and metabolic characteristics, especially in brain gliomas, which are complex
                          and highly heterogeneous cancers.
                        </p>
                        <p className="mb-4">
                          The current project proposes to refine and translate quantitative imaging methods for
                          glioblastoma (GB) into clinical trials, leveraging machine learning, which aims to help
                          transcend some of these limitations. Our emphasis is on:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                          <li>
                            Obtaining rich imaging phenotypes relying on multi-parametric signals, textures, shape
                            properties, spatial patterns derived from atlas registration, and biophysical models of
                            tumor growth
                          </li>
                          <li>
                            Integrating such imaging signatures using ML into predictors of clinical outcome, as well as
                            of early recurrence from peri-tumoral infiltration
                          </li>
                        </ul>
                        <p>
                          Our group is part of the Respond consortium NCI R01 grant. We contribute MRI and patient data
                          to the consortium. We subcontract to lead the investigation using AI/radiomics techniques to
                          evaluate GBM patient characteristics of long-term survival and prediction of treatment
                          response to re-irradiation. Besides GB, we also utilized AI/radiomics techniques to study
                          other CNS diseases, including meningioma.
                        </p>
                        <div className="mt-4">
                          <ExpandableImage
                            src="/images/radiomics-workflow.png"
                            alt="Radiomics workflow for brain tumor analysis"
                            caption="Schematic of the process workflow used to develop a machine learning model to predict Ki-67 proliferative index in WHO grade I meningioma."
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    2. Ransomware Attack Resiliency in Radiation Oncology using AI
                  </h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <p className="mb-4">
                        Radiation oncology is susceptible to ransomware attacks because it is the most
                        technology-reliant medical discipline, as the ability to deliver radiation therapy safely relies
                        on multiple complicated software systems.
                      </p>
                      <p className="mb-4">
                        If a ransomware attack does occur, Radiation Oncology patients are critically impacted as
                        inevitable delays in treatment result in worse disease cure rates and complicated workarounds,
                        resulting in a greater probability of errors occurring.
                      </p>
                      <p className="mb-4">
                        Jefferson was the most prominent institution impacted by a Radiation Oncology ransomware attack
                        in 2021 that affected more than 40 centers, and we were able to observe firsthand the impact of
                        a ransomware attack in Radiation Oncology.
                      </p>
                      <p>
                        Based on our ransomware attack experience, our group has developed AI and ML-based methods to
                        help manage patients in a ransomware attack scenario. The developed AI methods can reduce delays
                        in treatment in a ransomware attack setting, resulting in improved cure rates. The project has
                        been awarded a $2,000,000 grant from the Agency for Healthcare Research and Quality. The AI work
                        developed in the grant can reduce patient treatment delays (and therefore improve cure rates),
                        improve safety, and improve outcomes for patients with social determinants of health.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    3. AI for Clinical Decision Support (Computational Plasma Proteomics)
                  </h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-6">
                        <p className="mb-4">
                          Immune checkpoint inhibitors (ICIs) have revolutionized the cancer therapy landscape due to
                          long-term benefits in patients with advanced metastatic disease. However, robust predictive
                          biomarkers for response are still lacking, and treatment resistance is not fully understood.
                        </p>
                        <p className="mb-4">
                          Current guidelines for the management of metastatic non-small cell lung cancer (NSCLC) without
                          driver mutations recommend checkpoint immunotherapy with PD-1/PD-L1 inhibitors, either alone
                          or in combination with chemotherapy. This approach must account for individual patient
                          variability and host immune factors, often resulting in less-than-ideal outcomes.
                        </p>
                        <p className="mb-4">
                          To address the limitations of the current guidelines, we developed and subsequently blindly
                          validated a machine-learning algorithm using pretreatment plasma proteomic profiles for
                          personalized treatment decisions. In collaboration with a computational biology company
                          (OncoHost), we developed and subsequently blindly validated a machine-learning algorithm
                          employing pretreatment plasma proteomic profiles for personalized treatment decisions.
                        </p>
                        <p>
                          Our test demonstrates a strong association between model output and clinical benefit from
                          PD-1/PD-L1 inhibitor-based treatments, evidenced by high concordance between predicted and
                          observed clinical benefit.
                        </p>
                        <div className="mt-4">
                          <ExpandableImage
                            src="/images/proteomics-workflow.png"
                            alt="Proteomics workflow for personalized cancer treatment decisions"
                            caption="Workflow for the PROphet® test: Blood samples are analyzed using high-throughput proteomics and machine learning to guide optimal first-line PD-1/PD-L1 inhibitor treatment plans."
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Using AI for Early Detection of Small Brain Metastasis</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-6">
                        <p className="mb-4">
                          Stereotactic radiosurgery is being used to treat small brain metastasis. Due to the
                          development of radiotherapy treatment planning and delivery technologies, clinicians are
                          comfortable treating more brain metastases per episode of care.
                        </p>
                        <p className="mb-4">
                          The challenge is that many lesions are too small to be picked up by radiologists and radiation
                          oncologists. Our group is validating an AI-based software that produces automatic detection of
                          small brain metastasis.
                        </p>
                        <p>
                          The software has been shown to identify lesions that were missed by human observers. AI-based
                          detection has the potential to provide early identification of small brain lesions and thereby
                          improve the chances of cure.
                        </p>
                        <div className="mt-4">
                          <ExpandableImage
                            src="/images/ai-lesion-detection.png"
                            alt="AI detection of small brain lesions missed by physicians"
                            caption="Figure 13: Small brain lesion detected by AI that was not detected by physicians during standard clinical review."
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. AI and ML: K08 Training Grant</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-6">
                        <p className="mb-4">
                          A junior faculty, Dr. Lydia Wilson, has submitted a K08 training grant focused on AI titled,
                          'Novel Functional Imaging to Predict Surgical Side Effects for Lung Cancer Patients.' The
                          proposal aims for Dr. Wilson to become an independent investigator and leader in developing
                          the next generation of AI-based treatment-effect evaluation tools.
                        </p>
                        <p className="mb-4">
                          The proposed research aims to develop novel imaging and computational tools to improve lung
                          cancer patients' evaluation for resection procedures. Lung cancer is the second-most diagnosed
                          cancer worldwide, and surgical resection is the primary form of definitive treatment. However,
                          lung cancer patients with poor lung function before surgery can develop severe and
                          life-threatening thoracic complications after resection.
                        </p>
                        <p className="mb-4">
                          The research proposes three cutting-edge computational tools to alter the surgical evaluation
                          paradigm: novel lung-function imaging, voxel-based analysis, and ML prediction. The central
                          hypothesis is that the novel, image-based lung-function evaluation methods can improve the
                          accuracy of post-surgical lung-function prediction from 63% with existing methods to ≥85%
                          using the developed techniques.
                        </p>
                        <p>
                          The proposed research will test the central hypothesis via two specific aims that will: 1)
                          assess the accuracy of novel lung-function imaging methods in predicting global post-surgical
                          lung function and toxicity measures and 2) develop novel image-processing and machine-learning
                          methods to analyze and predict complex changes in local lung function after resection
                          procedures. The results of this work will enhance the clinician's ability to evaluate
                          patient-specific, pre-treatment thoracic states, improve post-surgical outcome prediction, and
                          provide critical data to guide the next-phase clinical trial.
                        </p>
                        <div className="mt-4">
                          <ExpandableImage
                            src="/images/lung-function-imaging.png"
                            alt="Lung function imaging before and after surgery"
                            caption="Comparison of pre-surgery and 3-months post-surgery functional lung imaging using 4DCT-derived ventilation and perfusion maps, along with pulmonary function tests (PFT), clinical evaluation, and patient-reported outcomes (PRO)."
                          />
                        </div>
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
