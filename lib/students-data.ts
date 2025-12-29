export interface StudentProject {
  id: string
  title: string
  student: string
  school: string
  year: string
  category: "AI" | "Digital Health" | "Medical Imaging" | "Machine Learning"
}

export const studentProjects: StudentProject[] = [
  {
    id: "1",
    title: "Automatic Classification of Head CT scans Using 3D Convolutional Neural Networks",
    student: "Student Researcher",
    school: "SKMC",
    year: "2023",
    category: "AI",
  },
  {
    id: "2",
    title: "Automated Assessment of Cardiothoracic Ratios on Chest Radiographs Using Deep Learning",
    student: "Student Researcher",
    school: "SKMC",
    year: "2023",
    category: "Medical Imaging",
  },
  {
    id: "3",
    title: "Assessment of Critical Feeding Tube Malposition on Radiographs using Deep Learning",
    student: "Student Researcher",
    school: "SKMC",
    year: "2023",
    category: "AI",
  },
  {
    id: "4",
    title: "Fully Automated Tube and Line Detection in Chest X-Ray with Convolutional Neural Networks",
    student: "Student Researcher",
    school: "SKMC",
    year: "2023",
    category: "Machine Learning",
  },
  {
    id: "5",
    title: "Deep Learning in Modeling Survival Outcomes for Brain Metastases",
    student: "Patrick Nguyen",
    school: "SKMC",
    year: "2023",
    category: "Machine Learning",
  },
  {
    id: "6",
    title: "Impact of Algorithmic Bias on Hospital Risk Stratification Scores Among Insurance Recipients",
    student: "Peter Zdunek",
    school: "SKMC",
    year: "2023",
    category: "AI",
  },
  {
    id: "7",
    title: "Artificial Intelligence Strategies for Prognostication of Meningioma",
    student: "Eric Huttler",
    school: "SKMC",
    year: "2023",
    category: "AI",
  },
  {
    id: "8",
    title: "Artificial Intelligence in the Detection of Macular Degeneration",
    student: "Jeffrey Gray",
    school: "MSKMC",
    year: "2023",
    category: "Medical Imaging",
  },
  {
    id: "9",
    title: "Readmission Risk Assessment Tool for Stroke Patients",
    student: "Siman Rahi",
    school: "SKMC",
    year: "2023",
    category: "Machine Learning",
  },
  {
    id: "10",
    title: "Machine Learning Models for 6-Month Survival Prediction after Surgical Resection of Glioblastoma",
    student: "Jeffrey Gray",
    school: "SKMC",
    year: "2023",
    category: "Machine Learning",
  },
  {
    id: "11",
    title: "Machine learning algorithm improves renal transplantation prediction outcomes",
    student: "Alexander Tam",
    school: "SKMC",
    year: "2024",
    category: "Machine Learning",
  },
  {
    id: "12",
    title: "Meta-Learning for Medical Imaging Diagnostics",
    student: "Charlotte Zuber",
    school: "SKMC",
    year: "2024",
    category: "Medical Imaging",
  },
  {
    id: "13",
    title: "Predicting survival curve in NSCLC using Hittboost model a comparative study",
    student: "Brittany Fisher",
    school: "SKMC",
    year: "2024",
    category: "Machine Learning",
  },
  {
    id: "14",
    title: "Machine Learning Prediction of Parkinson's Symptoms/ Prediction of Symptom Reduction from DBS Implantation",
    student: "Christian Raimondo",
    school: "SKMC",
    year: "2026",
    category: "Machine Learning",
  },
  {
    id: "15",
    title: "Applications of Machine Learning in Traumatic Brain Injury Imaging",
    student: "Andrew Sam",
    school: "SKMC",
    year: "2027",
    category: "Medical Imaging",
  },
  {
    id: "16",
    title: "Development of novel AI imaging techniques to improve lung cancer resection procedures",
    student: "Annie Ho",
    school: "SKMC",
    year: "2027",
    category: "AI",
  },
]

export function getAllStudentProjects(): StudentProject[] {
  return studentProjects
}

export function getProjectsByCategory(category: StudentProject["category"]): StudentProject[] {
  return studentProjects.filter((project) => project.category === category)
}
