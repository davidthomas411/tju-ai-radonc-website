export interface Publication {
  id: string
  title: string
  authors: string
  journal: string
  year: number
  volume?: string
  doi?: string
  pubmedUrl?: string
  tags: string[] // Tags to link to project pages: 'quality-safety', 'side-effects', 'cure-rates'
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title:
      "Predicting radiation pneumonitis in lung cancer patients using robust 4DCT-ventilation and perfusion imaging",
    authors: "Neupane et al.",
    journal: "Radiotherapy and Oncology",
    year: 2025,
    volume: "Article 111110",
    doi: "10.1016/j.radonc.2025.111110",
    pubmedUrl: "", // Indexed but no PMID yet
    tags: ["side-effects"],
  },
  {
    id: "pub-2",
    title: "Enhancing cyberattack resiliency through the radiotherapy backup and recovery dashboard tool",
    authors: "Pijanowski et al.",
    journal: "Journal of Applied Clinical Medical Physics",
    year: 2025,
    volume: "26(11), e70292",
    doi: "10.1002/acm2.70292",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/39201041/",
    tags: ["quality-safety"],
  },
  {
    id: "pub-3",
    title: "Novel functional radiomics for prediction of cardiac PET avidity in lung cancer radiotherapy",
    authors: "Choi et al.",
    journal: "JCO Clinical Cancer Informatics",
    year: 2024,
    volume: "8, e2300241",
    doi: "10.1200/CCI.23.00241",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/38518206/",
    tags: ["side-effects"],
  },
  {
    id: "pub-4",
    title:
      "Detection of phase-binning and interpolation artifacts in four-dimensional CT using deep learning and rule-based approaches",
    authors: "Cisneros et al.",
    journal: "Medical Physics",
    year: 2025,
    volume: "52(12), e70191",
    doi: "10.1002/mp.70191",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/39348762/",
    tags: ["quality-safety"],
  },
  {
    id: "pub-5",
    title: "AI-assisted segmentation tool for brain tumor MR image analysis",
    authors: "Lee et al.",
    journal: "Journal of Imaging Informatics in Medicine",
    year: 2025,
    volume: "38(1), pp. 74–83",
    doi: "10.1007/s10278-024-00967-4",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/38694461/",
    tags: ["quality-safety", "cure-rates"],
  },
  {
    id: "pub-6",
    title: "CT- and MR-based image-based data mining are consistent in the brain",
    authors: "Wilson et al.",
    journal: "Physica Medica",
    year: 2024,
    volume: "125, 104503",
    doi: "10.1016/j.ejmp.2024.104503",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/38902477/",
    tags: ["quality-safety"],
  },
  {
    id: "pub-7",
    title:
      "Perfusion estimation from dynamic non-contrast CT using self-supervised learning and a physics-inspired U-Net transformer",
    authors: "Liu et al.",
    journal: "International Journal of Computer Assisted Radiology and Surgery",
    year: 2025,
    volume: "20(5), pp. 959–970",
    doi: "10.1007/s11548-025-03068-2",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/38891322/",
    tags: ["quality-safety", "side-effects"],
  },
  {
    id: "pub-8",
    title: "TriSwinUNETR lobe segmentation model for computing DIR-free CT-ventilation",
    authors: "Nomura et al.",
    journal: "Frontiers in Oncology",
    year: 2025,
    volume: "15, 1475133",
    doi: "10.3389/fonc.2025.1475133",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/39288241/",
    tags: ["quality-safety", "side-effects"],
  },
  {
    id: "pub-9",
    title: "Deep learning-based auto-segmentation for liver yttrium-90 selective internal radiation therapy",
    authors: "Li, Choi & Anne",
    journal: "Technology in Cancer Research & Treatment",
    year: 2025,
    volume: "24",
    doi: "10.1177/15330338251327081",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/39172155/",
    tags: ["quality-safety", "cure-rates"],
  },
  {
    id: "pub-10",
    title: "OpenKBP-Opt: An international and reproducible evaluation of 76 knowledge-based planning pipelines",
    authors: "OpenKBP-Opt Consortium",
    journal: "Medical Physics",
    year: 2024,
    doi: "10.1002/mp.17052",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/38177118/",
    tags: ["quality-safety"],
  },
]

export function getPublicationsByTag(tag: string): Publication[] {
  return publications.filter((pub) => pub.tags.includes(tag))
}

export function getPublicationsByYear(year: number): Publication[] {
  return publications.filter((pub) => pub.year === year)
}

export function getAllPublications(): Publication[] {
  return publications.sort((a, b) => b.year - a.year)
}
