export interface NewsItem {
  id: string
  slug: string
  title: string
  description: string
  fullContent: string
  date: string
  category: "Award" | "Grant" | "Research" | "Event"
  facultyMember?: string
  blobFaceId?: string
  fallbackImage?: string
  externalLink?: string
}

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    slug: "chen-pilot-award-astro",
    title: "Dr. Yingxuan Chen Receives Pilot Award and Presents at ASTRO",
    description:
      "Dr. Yingxuan Chen has been awarded a prestigious pilot grant and presented her groundbreaking research at the American Society for Radiation Oncology (ASTRO) annual meeting, showcasing innovations in imaging technology for gynecological cancer treatment.",
    fullContent: `Dr. Yingxuan Chen, Clinical Assistant Professor in the Department of Radiation Oncology at Thomas Jefferson University, has been awarded a prestigious pilot grant to advance her research in gynecological cancer treatment.

Dr. Chen's work focuses on leading clinical validation of the ImagingRing for GYN HDR brachytherapy in collaboration with Elekta. This innovative technology represents a significant advancement in precision radiation therapy for gynecological cancers.

In addition to receiving the pilot award, Dr. Chen presented her groundbreaking research findings at the American Society for Radiation Oncology (ASTRO) annual meeting, one of the premier conferences in radiation oncology. Her presentation showcased the potential of advanced imaging technologies to improve treatment outcomes for patients undergoing gynecological cancer therapy.

This recognition highlights the cutting-edge research being conducted at Jefferson's Department of Radiation Oncology and Dr. Chen's leadership in the field of medical physics and radiation therapy innovation.`,
    date: "2024-10-15",
    category: "Award",
    facultyMember: "Dr. Yingxuan Chen",
    blobFaceId: "YC_1",
    fallbackImage: "/images/chen-y.jpeg",
  },
  {
    id: "news-2",
    slug: "wilson-acs-grant",
    title: "Dr. Lydia Wilson Awarded 5-Year American Cancer Society Grant",
    description:
      "Dr. Lydia Wilson has been selected for the American Cancer Society Clinician Scientist Development Grant, a prestigious 5-year award supporting her innovative research on novel functional imaging to predict surgical side effects for lung cancer patients.",
    fullContent: `Dr. Lydia Wilson, PhD, Assistant Professor in the Department of Radiation Oncology at Thomas Jefferson University, has been awarded the prestigious American Cancer Society (ACS) Clinician Scientist Development Grant. This highly competitive 5-year award recognizes Dr. Wilson's innovative research proposal and commitment to advancing cancer treatment.

**Project Title:** "Novel Functional Imaging to Predict Surgical Side Effects for Lung Cancer Patients"

Through this project, Dr. Wilson proposes to develop advanced imaging and computational tools that leverage recent advancements from the field of radiation oncology. These tools will provide a more accurate assessment of lung function before and after surgery, allowing clinicians to better predict post-surgical outcomes.

**Impact on Patient Care**

This work will improve on current methods of assessing lung cancer patients' suitability for surgery, which often misclassify patients, leading to either increased risks of complications after surgery or denying potentially beneficial treatment. By developing more precise predictive tools, Dr. Wilson's research has the potential to:

- Reduce post-surgical complications for lung cancer patients
- Help clinicians make more informed treatment decisions
- Ensure that patients who could benefit from surgery receive appropriate treatment
- Prevent unnecessary surgical interventions for high-risk patients

The American Cancer Society Clinician Scientist Development Grant is designed to support the career development of promising early-career investigators who are committed to cancer research. This award provides Dr. Wilson with the resources and support needed to establish herself as an independent investigator in the field of functional imaging and surgical outcome prediction.

Learn more about this year's ACS grant recipients at the [American Cancer Society Research News](https://www.cancer.org/research/acs-research-news/new-acs-mentored-grants-highlights.html).`,
    date: "2024-09-20",
    category: "Grant",
    facultyMember: "Dr. Lydia Wilson",
    blobFaceId: "LW_1",
    fallbackImage: "/images/wilson.jpeg",
    externalLink: "https://www.cancer.org/research/acs-research-news/new-acs-mentored-grants-highlights.html",
  },
  {
    id: "news-3",
    slug: "choi-quantum-computing",
    title: "Dr. Wookjin Choi's Team Wins Quantum Computing Innovation Award",
    description:
      "Dr. Wookjin Choi has been selected to participate in the National Cancer Institute's Quantum Computing Innovation Lab and his team received the top $25,000 prize for the 'Quantum Heart' project exploring quantum computing applications in cardiotoxicity prediction.",
    fullContent: `Dr. Wookjin Choi, Assistant Professor in the Department of Radiation Oncology at Sidney Kimmel Medical College at Thomas Jefferson University, has achieved a significant milestone in the field of quantum computing for healthcare.

**Quantum Computing Innovation Lab**

Dr. Choi has been selected to participate in the National Cancer Institute's (NCI) Quantum Computing Innovation Lab, a prestigious program bringing together leading researchers to explore the potential of quantum computing in cancer research and treatment.

**Top Prize for Team Quantum Heart**

Team Quantum Heart, co-led by Dr. Choi, was one of three teams to receive the top prize of $25,000 in the quantum computing innovation competition. The project seeks to revolutionize the existing clinical decision-making framework by leveraging the unique strengths of quantum computing to predict and prevent cardiotoxicity in cancer patients.

**Collaborative Excellence**

Dr. Choi collaborated with an exceptional team of researchers from leading institutions:

- **Iman Borazjani, PhD** (Texas A&M University) - Team Leader
- **Wookjin Choi, PhD** (Sidney Kimmel Medical College at Thomas Jefferson University)
- **Jiaqi (Jimmy) Leng, PhD** (University of California, Berkeley)
- **Zhenhua Jiang, PhD** (University of Dayton Research Institute)

**Impact and Vision**

"It was a privilege to collaborate with this exceptional team," said Dr. Choi. "Our diverse expertise in medical physics, artificial intelligence, fluid simulations, and quantum algorithms allowed us to develop a concept we believe can make a real-world impact on patient care. This prize is not just an award; it's the fuel that will help us propel our research forward."

The Quantum Heart project represents a pioneering effort to apply quantum computing's immense processing power to solve complex medical problems that are currently computationally intractable with classical computers. By predicting cardiotoxicity risk more accurately, the team aims to help oncologists and cardiologists make better treatment decisions that maximize cancer treatment effectiveness while minimizing heart damage.

This achievement underscores Thomas Jefferson University's commitment to cutting-edge research at the intersection of physics, computer science, and medicine, positioning the institution at the forefront of quantum computing applications in healthcare.`,
    date: "2024-08-10",
    category: "Research",
    facultyMember: "Dr. Wookjin Choi",
    blobFaceId: "WC_2",
    fallbackImage: "/images/choi.jpeg",
  },
]

export function getLatestNews(count = 3): NewsItem[] {
  return newsItems.slice(0, count)
}

export function getAllNews(): NewsItem[] {
  return newsItems
}
