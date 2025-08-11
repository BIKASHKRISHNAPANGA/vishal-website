import { NextResponse } from "next/server"

// Mock data - in a real application, this would come from a database
const mockSchoolData = [
  {
    id: 1,
    name: "Delhi Public School",
    location: "New Delhi",
    totalPoints: 2850,
    academicPoints: 1200,
    sportsPoints: 950,
    essayPoints: 700,
    studentsRegistered: 45,
    logo: "/placeholder.svg?height=40&width=40",
  },
  // Add more mock data as needed
]

const mockStudentData = [
  {
    id: 1,
    name: "Arjun Sharma",
    school: "Delhi Public School",
    grade: "10th",
    category: "Category 3",
    totalPoints: 485,
    academicScore: 95,
    sportsEvents: ["Cricket", "Chess"],
    essayScore: 88,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  // Add more mock data as needed
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") // 'schools' or 'students'
    const category = searchParams.get("category") // 'overall', 'academic', 'sports', 'essay'
    const search = searchParams.get("search") || ""

    let data

    if (type === "schools") {
      data = mockSchoolData
        .filter(
          (school) =>
            school.name.toLowerCase().includes(search.toLowerCase()) ||
            school.location.toLowerCase().includes(search.toLowerCase()),
        )
        .sort((a, b) => {
          switch (category) {
            case "academic":
              return b.academicPoints - a.academicPoints
            case "sports":
              return b.sportsPoints - a.sportsPoints
            case "essay":
              return b.essayPoints - a.essayPoints
            default:
              return b.totalPoints - a.totalPoints
          }
        })
        .map((school, index) => ({ ...school, rank: index + 1 }))
    } else {
      data = mockStudentData
        .filter(
          (student) =>
            student.name.toLowerCase().includes(search.toLowerCase()) ||
            student.school.toLowerCase().includes(search.toLowerCase()),
        )
        .sort((a, b) => {
          switch (category) {
            case "academic":
              return b.academicScore - a.academicScore
            case "essay":
              return b.essayScore - a.essayScore
            default:
              return b.totalPoints - a.totalPoints
          }
        })
        .map((student, index) => ({ ...student, rank: index + 1 }))
    }

    return NextResponse.json({
      success: true,
      data,
      total: data.length,
    })
  } catch (error) {
    console.error("Leaderboard API error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch leaderboard data" }, { status: 500 })
  }
}
