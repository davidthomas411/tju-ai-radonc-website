export interface FacultyMember {
  slug: string
  name: string
  title: string
  subtitle?: string
  description?: string
  blobFaceId: string
  fallbackImage: string
  jeffersonUrl: string
  email?: string
  phone?: string
  fax?: string
  address?: string
  linkedin?: string
  website?: string
  bioSections?: {
    personalStatement?: string
    education?: string
    publications?: string[]
    expertise?: string[]
  }
}

export const facultyData: FacultyMember[] = [
  {
    slug: "dicker",
    name: "Dr. Adam P. Dicker, MD, PhD",
    title: "Enterprise Sr. VP, Chair and Professor",
    subtitle: "Director, Jefferson Center for Digital Health",
    description:
      "Dr. Dicker is a leader in radiation oncology and has spearheaded numerous AI and ML initiatives to improve cancer care and outcomes.",
    blobFaceId: "AD_1",
    fallbackImage: "/images/dr-dicker.jpg",
    jeffersonUrl:
      "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/dicker.html",
    email: "Adam.Dicker@jefferson.edu",
    linkedin: "https://www.linkedin.com/in/adampdicker/",
    bioSections: {
      personalStatement:
        "I am a healthcare executive, physician-scientist and digital health advocate working to improve lives. I work at the intersection of clinical care, drug development, data science, and digital health.\n\nMy work as a health care technology entrepreneur / physician-scientist has resulted in the establishment of parameters for quality assurance in oncology, therapeutic clinical trials utilizing targeted therapies, innovative models for radiation modifiers, FDA/CMS approval of a genomic signature, patient-reported outcomes for novel therapeutics and graduate courses in digital health. Our group has published four books and over 350 publications.\n\nI have been fortunate to work with industry partners for all phases of clinical drug development, digital health, medical diagnostics (biomarkers) across a spectrum of indications, with a primary focus on oncology. This experience spans large molecule biologics, small molecule targeted agents, immuno-oncology, cell therapies, cytotoxic agents, radiopharmaceuticals, and combined modality therapy with radiation therapy. This work in innovation reaches globally in collaboration with the Israel Innovation Authority and Israeli HealthTech companies.\n\nI received my BA from Columbia College and MD and PhD (Molecular Pharmacology) from Cornell University. After a surgical internship, I received postgraduate training at Memorial Sloan-Kettering Cancer Center. I have been elected a Fellow of both ASTRO and ASCO.",
      education:
        "B.S.E. from University of Michigan (2002-2006), M.S. and Ph.D. (Medical Physics) from University of Texas Health Science Center, Houston and MD Anderson Cancer Center (2006-2011)",
      expertise: [
        "Radiation Oncology",
        "Clinical Drug Development",
        "Digital Health Innovation",
        "Targeted Therapies and Immunotherapy",
        "Radiopharmaceuticals",
        "Genomic Biomarkers",
        "Quality Assurance in Oncology",
        "Multi-modal Cancer Treatment",
      ],
    },
  },
  {
    slug: "vinogradskiy",
    name: "Dr. Yevgeniy Vinogradskiy, PhD",
    title: "Professor, Director of Medical Physics, Vice-chair of Radiation Oncology",
    subtitle: "Co-Director, Center for Excellence in AI",
    description:
      "Internationally recognized leader in functional imaging, machine learning, toxicity in lung cancer, and implementing advanced image processing methods in clinical care.",
    blobFaceId: "JV_1",
    fallbackImage: "/images/dr-vinogradskiy.jpg",
    jeffersonUrl:
      "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/vinogradskiy.html",
    email: "yevgeniy.vinogradskiy@jefferson.edu",
    phone: "215-955-8855",
    fax: "215-955-0412",
    address: "111 South 11th Street, Bodine Building, Suite G-301, Philadelphia, PA 19107",
    linkedin: "https://www.linkedin.com/in/yevgeniy-vinogradskiy-25958884/",
    bioSections: {
      personalStatement:
        "I am an internationally recognized leader in functional imaging, machine learning (ML), toxicity in lung cancer, and implementing advanced image processing methods in clinical care. I am the Principal Investigator (PI) of 4 NIH grants (2 R01s, 1 UG3/UH3, and 1 R18). All the grants that I have led have been multi-center grants where I have been the contact PI, demonstrating my ability to lead large scale research efforts. I am the PI of the first completed interventional trial using CT-based functional imaging to reduce toxicity for lung cancer patients, I am the PI of 2 other functional imaging investigator-initiated trials, and have published >40 papers on ML, lung function imaging, and toxicity in high impact, peer-reviewed journals.\n\nI am a Professor of Radiation Oncology, a Medical Physicist, and Director of the Medical Physics Division at Thomas Jefferson University (TJU). I have acquired over $12 million in extramural funding and am the PI on 4 currently active NIH grants. My research has led to numerous publications in top-tier journals including Lancet Oncology, International Journal of Radiation Oncology Biology Physics, and Medical Physics. I have successfully mentored graduate students, residents, and junior faculty, many of whom have gone on to secure independent funding and establish their own research programs.",
      education:
        "B.S.E. from University of Michigan (2002-2006), M.S. and Ph.D. (Medical Physics) from University of Texas Health Science Center, Houston and MD Anderson Cancer Center (2006-2011)",
      expertise: [
        "Functional Imaging (CT, SPECT, PET, MRI)",
        "Machine Learning and Artificial Intelligence",
        "Radiation Toxicity Prediction and Mitigation",
        "Treatment Planning Optimization",
        "Multi-center Clinical Trials",
        "Advanced Image Processing for Clinical Care",
      ],
    },
  },
  {
    slug: "shi",
    name: "Dr. Wenyin Shi, MD, PhD",
    title: "Professor",
    subtitle: "Leading research on radiomics and machine learning for brain tumors",
    description: "Dr. Shi is a leading researcher in the field of radiomics and machine learning for brain tumors.",
    blobFaceId: "WS_1",
    fallbackImage: "/images/shi.jpeg",
    jeffersonUrl:
      "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/shi.html",
  },
  {
    slug: "choi",
    name: "Dr. Wookjin Choi, PhD",
    title: "Computational Physicist, Assistant Professor",
    subtitle: "NVIDIA Certified Instructor for Fundamentals of Deep Learning",
    description: "Dr. Choi is a computational physicist and assistant professor with expertise in deep learning.",
    blobFaceId: "WC_2",
    fallbackImage: "/images/choi.jpeg",
    jeffersonUrl:
      "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/choi.html",
    email: "Wookjin.Choi@jefferson.edu",
    linkedin: "https://www.linkedin.com/in/wookjin-choi/",
    bioSections: {
      personalStatement:
        "Dr. Wookjin Choi is an Assistant Professor of Radiation Oncology at Thomas Jefferson University and lead of the Computational Healthcare & Oncology Informatics Lab. His research moves beyond the hype of AI to address the mechanics of cancer treatment. His team pioneers approaches that track tumor evolution over time, develops advanced deep learning frameworks to clean noisy clinical data, and creates interpretable models that quantify uncertainty to build clinician trust. Most recently, he is exploring how LLMs can bridge health equity gaps in patient nutrition.\n\nDr. Wookjin Choi is a computational medical physicist and Assistant Professor of Radiation Oncology at Sidney Kimmel Medical College, Thomas Jefferson University. Leading the Computational Healthcare & Oncology Informatics Lab, Dr. Choi is at the forefront of a quiet revolution in cancer treatment, shifting the focus from static diagnosis to dynamic, context-aware artificial intelligence.\n\nIn the realm of predictive oncology, Dr. Choi's team is redefining prognosis by focusing on the evolution of tumors. Instead of relying on a single pre-treatment snapshot, his research analyzes how tumor features change throughout the course of radiotherapy. This dynamic approach has demonstrated that a tumor's biological response to treatment is a far superior predictor of survival. To support this, his lab develops novel deep learning architectures that can simultaneously enhance the quality of clinical imaging data and predict patient outcomes, effectively turning technical limitations into prognostic advantages.\n\nDr. Choi's work also addresses the critical 'black box' challenge in clinical AI adoption. He champions the development of probabilistic deep learning models that provide uncertainty scores alongside predictions. This innovation allows AI to act as a transparent partner that can admit when it is 'unsure,' thereby fostering greater trust and safety in clinical decision-making.",
      education:
        "Ph.D. in Medical Physics from University of California, Los Angeles (UCLA). Postdoctoral training at MD Anderson Cancer Center in computational medical physics and radiomics.",
      expertise: [
        "Computational Medical Physics",
        "Deep Learning for Cancer Treatment",
        "Tumor Evolution Tracking",
        "Probabilistic AI Models",
        "Clinical Data Quality Enhancement",
        "Health Equity and AI",
        "Large Language Models (LLMs) for Healthcare",
        "Interpretable Machine Learning",
        "Predictive Oncology",
        "Digital Health Innovation",
      ],
    },
  },
  {
    slug: "wang",
    name: "Dr. Wentao Wang, PhD",
    title: "Instructor, Department of Radiation Oncology",
    subtitle: "Developing AI-assisted treatment planning evaluation for multiple-metastases stereotactic radiosurgery",
    description:
      "Dr. Wang is an instructor developing AI-assisted treatment planning evaluation for multiple-metastases stereotactic radiosurgery.",
    blobFaceId: "WW_1",
    fallbackImage: "/images/wang-w.jpeg",
    jeffersonUrl:
      "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/wang.html",
  },
  {
    slug: "chen",
    name: "Dr. Yingxuan Chen, PhD",
    title: "Clinical Assistant Professor",
    subtitle: "Leading clinical validation of the ImagingRing for GYN HDR brachytherapy in collaboration with Elekta",
    description:
      "Dr. Chen is a clinical assistant professor leading the clinical validation of the ImagingRing for GYN HDR brachytherapy in collaboration with Elekta.",
    blobFaceId: "YC_1",
    fallbackImage: "/images/chen-y.jpeg",
    jeffersonUrl:
      "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/chen.html",
    email: "Yingxuan.Chen@jefferson.edu",
    phone: "215-955-6702",
    fax: "215-955-0412",
    address: "111 South 11th Street, Bodine Building, Philadelphia, PA 19107",
    bioSections: {
      personalStatement:
        "Dr. Yingxuan Chen is a Clinical Assistant Professor at Thomas Jefferson University, specializing in medical physics and radiation oncology. Her research focuses on advanced imaging techniques for brachytherapy and radiation treatment planning optimization.",
      education:
        "Ph.D. in Medical Physics from Duke University. Medical Physics Residency at University of Pennsylvania.",
      expertise: [
        "Medical Physics",
        "Brachytherapy",
        "Image-Guided Radiotherapy",
        "Treatment Planning",
        "Cone Beam CT",
        "Quality Assurance",
        "Functional Imaging for Toxicity Prediction",
      ],
    },
  },
  {
    slug: "wilson",
    name: "Dr. Lydia Wilson, PhD",
    title: "Assistant Professor, Department of Radiation Oncology",
    subtitle: "Leading research on novel functional imaging to predict surgical side effects for lung cancer patients",
    description:
      "Dr. Wilson is an assistant professor leading research on novel functional imaging to predict surgical side effects for lung cancer patients.",
    blobFaceId: "LW_1",
    fallbackImage: "/images/wilson.jpeg",
    jeffersonUrl:
      "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/wilson.html",
    linkedin: "https://www.linkedin.com/in/lydia-wilson-phd-dabr-4107383b/",
    bioSections: {
      personalStatement:
        "Dr. Lydia Wilson is an Assistant Professor at Thomas Jefferson University, specializing in medical physics and functional imaging for radiation oncology. Her groundbreaking research focuses on developing advanced imaging and computational tools to improve surgical outcomes for lung cancer patients. Through her ASTRO-ACS Clinician Scientist Development Grant, Dr. Wilson is pioneering methods that leverage radiation oncology advancements to provide more accurate assessments of lung function before and after surgery, enabling clinicians to better predict post-surgical outcomes and improve patient care.",
      education:
        "Ph.D. in Medical Physics. DABR certification in Therapeutic Medical Physics. Advanced training in functional imaging and computational modeling for radiation oncology.",
      expertise: [
        "Functional Imaging",
        "Lung Cancer Treatment",
        "Surgical Outcome Prediction",
        "Computational Modeling",
        "Medical Physics",
        "Radiation Therapy Planning",
        "Image-Based Assessment",
        "Clinical Decision Support",
      ],
    },
  },
  {
    slug: "thomas",
    name: "Dr. David Thomas, PhD, MS",
    title: "Associate Professor, Enterprise Director of Quality & Safety",
    subtitle: "Lab PI at the Bodine Center for Cancer Treatment, leading research combining AI and computer vision",
    description:
      "Dr. Thomas is an associate professor and lab PI at the Bodine Center for Cancer Treatment, leading research combining AI and computer vision.",
    blobFaceId: "DT_1",
    fallbackImage: "/images/thomas.jpeg",
    jeffersonUrl:
      "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/thomas.html",
    website: "https://www.thomas-lab.com/",
    bioSections: {
      personalStatement:
        "My research bridges computer vision, artificial intelligence, and clinical radiation oncology, with a focus on translating vision-based methods—such as depth estimation, digital twin modeling, and respiratory motion tracking—into clinical tools that improve patient alignment, motion management, and workflow efficiency. By advancing anatomy-aware surface guidance, I aim to address long-standing challenges of accuracy, reliability, and scalability in radiation therapy, ultimately ensuring that emerging computational methods are designed with clinical translation and patient benefit at the forefront.\n\nAs Enterprise Director of Quality and Safety for Medical Physics at Thomas Jefferson University, I oversee efforts to integrate advanced imaging and AI-driven technologies into routine practice across a multi-center health system. In this role, I work at the interface of technical development, clinical workflow, and safety oversight. My group has demonstrated the feasibility of applying real-time skeletal pose estimation, dense surface reconstruction, and anatomically constrained registration to expand SGRT beyond its current limitations.\n\nI have published more than 40 peer-reviewed papers and received recognition such as the AAPM Best-in-Physics and multiple Norm Baily Research Awards. My work has been disseminated widely at national and international meetings, where I have consistently emphasized both the technical innovation and the clinical implications of my research.",
      education:
        "M.Physics from University of St Andrews (2004). M.S. in Electrical & Computer Engineering from Georgia Institute of Technology (2005). Ph.D. in Medical Physics from University of Edinburgh (2010). Postdoctoral training at University of Edinburgh and UCLA. Physics Residency at UCLA (2016).",
      expertise: [
        "Computer Vision for Radiation Therapy",
        "Surface-Guided Radiation Therapy (SGRT)",
        "Artificial Intelligence in Clinical Workflows",
        "Digital Twin Modeling",
        "Skeletal Pose Estimation",
        "Respiratory Motion Tracking",
        "Quality Assurance and Safety",
        "X-Ray Acoustic Computed Tomography",
        "4D-CT Imaging",
        "Adaptive Radiotherapy",
      ],
    },
  },
  {
    slug: "nourzadeh",
    name: "Dr. Hamidreza Nourzadeh, PhD",
    title: "Clinical Assistant Professor",
    subtitle: "Specializing in computational methods and AI applications for radiation treatment planning optimization",
    description:
      "Dr. Nourzadeh is a clinical assistant professor specializing in computational methods and AI applications for radiation treatment planning optimization.",
    blobFaceId: "HN_1",
    fallbackImage: "/images/nourzadeh.jpeg",
    jeffersonUrl:
      "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/nourzadeh.html",
    email: "Hamidreza.Nourzadeh@jefferson.edu",
    phone: "215-955-8855",
    fax: "215-955-0412",
    address: "111 South 11th Street, Bodine Building, Philadelphia, PA 19107",
    bioSections: {
      personalStatement:
        "Dr. Hamidreza Nourzadeh is a Clinical Assistant Professor at Thomas Jefferson University, specializing in computational methods and artificial intelligence applications for radiation treatment planning optimization. His research focuses on knowledge-based planning, adaptive radiotherapy, and the development of automated quality control systems for organ delineations. Dr. Nourzadeh has made significant contributions to the field through his work on multi-institutional evaluations of automated planning solutions and the investigation of anatomical and dosimetric changes during radiotherapy.",
      education:
        "Ph.D. in Electrical Engineering from University of Wyoming. Medical Physics Residency at University of Virginia Health System. Fellowship training at University of Virginia and Rensselaer Polytechnic Institute.",
      expertise: [
        "Radiation Treatment Planning Optimization",
        "Knowledge-Based Planning",
        "Adaptive Radiotherapy",
        "Automated Quality Control",
        "Organ Delineation Quality Assurance",
        "Tomotherapy",
        "Computational Methods in Medical Physics",
        "AI for Treatment Planning",
      ],
    },
  },
  {
    slug: "mourtada",
    name: "Dr. Firas Mourtada, MSE, PhD, DABR",
    title: "Enterprise Clinical Director of Medical Physics, Professor",
    subtitle: "Leading research in brachytherapy, image-guided radiotherapy, and molecular imaging",
    description:
      "Dr. Mourtada is a professor and enterprise clinical director specializing in brachytherapy, targeted radiation therapy, and advanced radiation transport methods.",
    blobFaceId: "FM_1",
    fallbackImage: "/images/mourtada.jpeg",
    jeffersonUrl:
      "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/mourtada.html",
    email: "firas.mourtada@jefferson.edu",
    bioSections: {
      education:
        "MSE and Ph.D. from University of Arkansas. Board Certification in Radiation Therapy Physics from the American Board of Medical Physics (2005).",
      expertise: [
        "Brachytherapy",
        "Image Guided Radiotherapy",
        "Radiation Transport Methods (Monte Carlo and Deterministic)",
        "Molecular Imaging",
        "Targeted Radiation Therapy",
        "3D Printing for Medical Applications",
      ],
    },
  },
  {
    slug: "taleei",
    name: "Dr. Reza Taleei, PhD",
    title: "Clinical Associate Professor",
    subtitle: "Expert in radiobiological modeling and computational radiation physics",
    description:
      "Dr. Taleei is a clinical associate professor with expertise in DNA damage modeling, radiation physics simulations, and therapeutic physics.",
    blobFaceId: "RT_1",
    fallbackImage: "/images/taleei.jpeg",
    jeffersonUrl:
      "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/taleei.html",
    email: "Reza.Taleei@jefferson.edu",
    phone: "215-955-8855",
    fax: "215-955-0412",
    address: "111 South 11th Street, Bodine Building, Philadelphia, PA 19107",
    bioSections: {
      education:
        "Ph.D. in Medical Science from Karolinska Institute. Residency at University of Texas Southwestern Medical Center. Postdoctoral Fellowship at MD Anderson Cancer Center, Division of Radiation Physics.",
      expertise: [
        "DNA Damage and Repair Modeling",
        "Molecular Dynamics Simulations",
        "Radiation Biology",
        "Heavy Ion Therapy",
        "Ultra-High Dose Rate Effects",
        "Therapeutic Medical Physics",
      ],
    },
  },
]

export function getFacultyBySlug(slug: string): FacultyMember | undefined {
  return facultyData.find((faculty) => faculty.slug === slug)
}

export function getAllFacultySlugs(): string[] {
  return facultyData.map((faculty) => faculty.slug)
}
