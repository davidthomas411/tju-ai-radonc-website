import { NextResponse } from "next/server"

export async function GET() {
  try {
    // URLs for the faculty headshots
    const imageUrls = [
      {
        url: "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/dicker.html",
        filename: "dr-dicker.jpg",
        name: "Dr. Adam P. Dicker",
      },
      {
        url: "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/radiation-oncology/faculty/directory/vinogradskiy.html",
        filename: "dr-vinogradskiy.jpg",
        name: "Dr. Yevgeniy Vinogradskiy",
      },
    ]

    return NextResponse.json({
      message: "To download the faculty headshots, please follow these steps:",
      instructions: [
        "1. Visit each faculty page URL",
        "2. Right-click on the faculty headshot and select 'Save Image As'",
        "3. Save the image with the corresponding filename in your project's public/images/ directory",
        "4. Make sure to create the 'images' directory in your 'public' folder if it doesn't exist",
      ],
      imageUrls,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
