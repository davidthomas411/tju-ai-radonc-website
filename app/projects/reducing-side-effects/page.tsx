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
  title: "Reducing Side Effects Projects | Jefferson Radiation Oncology AI Research",
  description:
    "AI and ML initiatives focused on reducing toxicity and side effects from cancer treatments.",
}

export default function ReducingSideEffectsPage() {
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
                { label: "Reducing Side Effects" },
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
                AI & ML Projects to Reduce Side Effects
              </h1>
              <p className="text-white/80 mb-8">
                Our projects focused on reducing toxicity and side effects from cancer treatments through innovative AI
                and ML approaches.
              </p>
            </div>
          </div>
        </section>

        <FadeInSection>
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-4xl space-y-16">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. AI-based Functional Imaging for Toxicity Reduction</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-6">
                        <p className="mb-4">
                          Based on NCI-funded work, department researchers have developed an AI algorithm to repurpose
                          standard-of-care chest computed tomography (CT) imaging to produce functional lung images.
                        </p>
                        <p className="mb-4">
                          Functional imaging has been incorporated into the radiation treatment planning paradigm for
                          lung cancer patients to reduce toxicity. The AI, imaging-based technology, has been evaluated
                          in a phase II clinical trial (NCT02528942) led by Jefferson investigators, with trial data
                          showing reduced toxicity by 50% compared to standard thoracic radiation.
                        </p>
                        <p>
                          The AI-based functional imaging technology developed at Jefferson was recently awarded a "Best
                          of Physics" abstract (given to the top 1% of scoring abstracts) at the 2024 national American
                          Society of Therapeutic Radiation Oncology meeting and is being proposed as an NRG cooperative
                          group clinical trial.
                        </p>
                        <div className="mt-4">
                          <ExpandableImage
                            src="/images/functional-imaging.jpeg"
                            alt="AI-based functional imaging to reduce toxicity from cancer treatment for lung cancer patients"
                            caption="AI-based functional imaging to reduce toxicity from cancer treatment for lung cancer patients"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    2. Machine Learning to Reduce Toxicity for Prostate Cancer Patients
                  </h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <p className="mb-4">
                        Jefferson faculty are leading Department of Defense (DOD) work using machine learning to predict
                        and mitigate patient-reported outcome toxicity for prostate cancer patients.
                      </p>
                      <p className="mb-4">
                        The evaluation of radiation treatment plans for prostate patients relies on singular dose
                        metrics and does not consider the 3D spatial dose distribution. Furthermore, the prostate cancer
                        toxicity paradigm is based on physician-reported outcomes and does not consider the voice of the
                        patient.
                      </p>
                      <p>
                        This DOD-funded work innovatively solves both challenges using ML methods to determine 3D dose
                        distribution parameters that predict patient-reported side effects. The work has great potential
                        to guide improved treatment planning for prostate cancer patients, which will, in turn, reduce
                        the treatment side effects as reported by the patients themselves.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    3. Machine Learning to Reduce Toxicity for Bladder Cancer Patients
                  </h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <p className="mb-4">
                        Bladder-preserving treatment with radiation is rapidly gaining popularity as an alternative to
                        radical cystectomy to treat muscle-invasive bladder cancer (MIBC) to avoid the physical and
                        psychological impact of the removal of the bladder.
                      </p>
                      <p className="mb-4">
                        However, current radiation treatment planning for MIBC is based on a patchwork of older trials
                        using antiquated radiation schedules and dosimetric constraints. Consequently, the short- and
                        long-term urinary, bowel, and sexual toxicities of radiation for MIBC can be considerable.
                      </p>
                      <p className="mb-4">
                        Patients can live for many years after MIBC treatment; preventing short- and long-term
                        toxicities and optimizing quality of life is essential (QoL).
                      </p>
                      <p>
                        The aims are to describe rates of real-world, patient-reported toxicities and to develop and
                        validate deep learning models incorporating demographic, clinical, behavioral, dosiomic, and
                        radiomic data for actual multi-endpoint prediction of patient-reported toxicities among MIBC
                        patients treated with radiation.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    4. AI and Standard of Care PET Imaging to Predict Cardiotoxicity
                  </h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-6">
                        <p className="mb-4">
                          Twenty percent of patients receiving radiation to the chest experience clinically significant
                          cardiac toxicity. Models for predicting which patients are at higher risk of developing
                          cardiac toxicity are population-based and lacking in accuracy and robustness.
                        </p>
                        <p className="mb-4">
                          Funded by SKCCC seed grants, Jefferson Radiation Oncology researchers have developed an AI
                          algorithm to repurpose standard-of-care staging PET scans to extract clinically significant
                          cardiac information to improve the prediction of cardiotoxicity.
                        </p>
                        <p>
                          The AI algorithm has been filed as a provisional patent, is being evaluated in an
                          investigator-initiated clinical trial, and has been scored as an NCI R01 grant with a
                          re-submission planned.
                        </p>
                        <div className="mt-4">
                          <ExpandableImage
                            src="/images/cardiac-pet-survival.png"
                            alt="PET imaging showing cardiac SUV changes and survival outcomes based on AI analysis"
                            caption="Left: PET/CT scans showing pre- and post-treatment cardiac uptake. Right: Survival curves based on cardiac SUV changes."
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. AI-based Dose Prediction from Diagnostic Imaging</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <p className="mb-4">
                        Multi-disciplinary clinics are the standard of care in NCI-designated cancer centers. When
                        Radiation Oncologists meet with patients in a multi-disciplinary clinic, it would be clinically
                        beneficial to know how much radiation dose will be delivered to critical organs to provide
                        better-informed guidance to patients.
                      </p>
                      <p className="mb-4">
                        However, knowledge about the dose distribution cannot be known when physicians meet with
                        patients in a multi-disciplinary clinic because the radiation treatment planning process
                        typically takes two weeks.
                      </p>
                      <p>
                        We have developed a patent-pending AI algorithm to predict the radiation dose distribution from
                        diagnostic imaging (available during the multi-disciplinary clinic). Having the radiation dose
                        information at the time of a multi-disciplinary clinic will enable clinicians to make
                        better-informed decisions about multi-disciplinary care.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Radiotheranostics Dosimetry Using AI</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <p className="mb-4">
                        Radiotheranostics is a form of radiotherapy where alpha or beta particles emitted from injected
                        molecular-targeted radionuclides are used to treat malignancies. Radiotheranostics has been
                        shown to improve survival for men with stage IV prostate cancer significantly and is being
                        investigated as a promising treatment for other types of malignancies.
                      </p>
                      <p className="mb-4">
                        The challenge with radiotheranostics is that the dosimetry still needs to be discovered. In
                        other words, when the radionuclide is injected, it is unknown how much dose goes to critical
                        organs.
                      </p>
                      <p>
                        Using funds from a recently awarded Philadelphia Prostate Cancer Biome Project, our team is
                        developing a microdosimetry laboratory that uses a high-resolution alpha/beta camera combined
                        with advanced AI techniques. The microdosimetry lab will develop strategies to determine how
                        much dose is being deposited during radionuclide therapy and enable the development of
                        personalized treatment, thereby reducing the rate of side effects for patients treated with
                        radionuclide therapy.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Breast Voxel-based Analysis for Toxicity Prediction</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-6">
                        <p className="mb-4">
                          Nine in ten women diagnosed with breast cancer survive five years or more, but most are left
                          with long-lasting side effects of their curative treatments. Our AI-based project proposes
                          leveraging novel voxel-based computational analysis to identify which tissues are most
                          radiosensitive and critical in predicting which patients may get side effects.
                        </p>
                        <p className="mb-4">
                          The voxel-based analysis comprises two primary steps: 1) spatial normalization, where we map
                          individual patient anatomy to reference anatomy, and 2) statistical inference, where we
                          perform voxel-wise statistical tests to identify spatial associations between medical imaging
                          data and an effect of interest.
                        </p>
                        <p>
                          The developed methods will identify the tissues most sensitive to radiation and reveal how to
                          treat breast cancer more effectively by avoiding the identified tissues. The results of the
                          study can lead to reduced side effects and improved quality of life for patients diagnosed
                          with breast cancer receiving radiotherapy.
                        </p>
                        <div className="mt-4">
                          <ExpandableImage
                            src="/images/breast-voxel-analysis.png"
                            alt="Breast voxel-based analysis workflow showing spatial normalization and statistical inference"
                            caption="Voxel-based analysis workflow: 1) Spatial normalization maps individual patient anatomy to reference anatomy, 2) Statistical inference identifies tissues associated with radiation-induced pain."
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
