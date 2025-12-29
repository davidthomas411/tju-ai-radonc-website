export interface Patent {
  id: string
  title: string
  inventors: string[]
  description: string
  year: string
  status: "Filed" | "Pending" | "Granted"
  category: "AI" | "Imaging" | "Treatment Planning" | "Clinical Decision Support"
}

export const patents: Patent[] = [
  {
    id: "1",
    title:
      "Systems, Devices, and Associated Methods for Determining a Desired Radiation Dose Distribution from Diagnostic Imaging",
    inventors: ["Jefferson Faculty"],
    description:
      "This invention aims to use AI to predict a radiation dose distribution from diagnostic imaging (a PET scan or MRI imaging, for example). The system leverages machine learning algorithms to analyze diagnostic images and automatically generate optimized radiation treatment plans.",
    year: "2024",
    status: "Filed",
    category: "Treatment Planning",
  },
  {
    id: "2",
    title: "Methods and Systems for the Prediction of Cardiotoxicity",
    inventors: ["Jefferson Faculty"],
    description:
      "This invention uses AI methods and PET imaging to provide early identification of which patients may be at risk of developing cardiac toxicity from cancer treatments. The system analyzes functional imaging data and clinical parameters to predict cardiotoxicity risk before symptoms appear.",
    year: "2024",
    status: "Filed",
    category: "Clinical Decision Support",
  },
]

export function getAllPatents(): Patent[] {
  return patents
}

export function getPatentsByStatus(status: Patent["status"]): Patent[] {
  return patents.filter((patent) => patent.status === status)
}
