"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Trophy, Medal, Award, School, User, Search, TrendingUp, Star, Crown } from "lucide-react"

// Mock data for demonstration
const schoolLeaderboard = [
  {
    rank: 1,
    name: "Delhi Public School",
    location: "New Delhi",
    totalPoints: 2850,
    academicPoints: 1200,
    sportsPoints: 950,
    essayPoints: 700,
    studentsRegistered: 45,
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 2,
    name: "St. Xavier's School",
    location: "Mumbai",
    totalPoints: 2720,
    academicPoints: 1150,
    sportsPoints: 890,
    essayPoints: 680,
    studentsRegistered: 38,
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 3,
    name: "Ryan International School",
    location: "Bangalore",
    totalPoints: 2650,
    academicPoints: 1100,
    sportsPoints: 920,
    essayPoints: 630,
    studentsRegistered: 42,
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 4,
    name: "DAV Public School",
    location: "Chennai",
    totalPoints: 2580,
    academicPoints: 1080,
    sportsPoints: 850,
    essayPoints: 650,
    studentsRegistered: 35,
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 5,
    name: "Kendriya Vidyalaya",
    location: "Pune",
    totalPoints: 2450,
    academicPoints: 1000,
    sportsPoints: 800,
    essayPoints: 650,
    studentsRegistered: 40,
    logo: "/placeholder.svg?height=40&width=40",
  },
]

const studentLeaderboard = [
  {
    rank: 1,
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
  {
    rank: 2,
    name: "Priya Patel",
    school: "St. Xavier's School",
    grade: "9th",
    category: "Category 3",
    totalPoints: 470,
    academicScore: 92,
    sportsEvents: ["Badminton", "Track 200m"],
    essayScore: 90,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 3,
    name: "Rahul Kumar",
    school: "Ryan International School",
    grade: "8th",
    category: "Category 2",
    totalPoints: 465,
    academicScore: 89,
    sportsEvents: ["Football", "High Jump"],
    essayScore: 85,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 4,
    name: "Sneha Reddy",
    school: "DAV Public School",
    grade: "10th",
    category: "Category 3",
    totalPoints: 460,
    academicScore: 91,
    sportsEvents: ["Chess", "Essay Writing"],
    essayScore: 92,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 5,
    name: "Vikram Singh",
    school: "Kendriya Vidyalaya",
    grade: "7th",
    category: "Category 2",
    totalPoints: 455,
    academicScore: 87,
    sportsEvents: ["Cricket", "Track 100m"],
    essayScore: 83,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const categories = [
  { id: "overall", name: "Overall Rankings", icon: Trophy },
  { id: "academic", name: "Academic Excellence", icon: Award },
  { id: "sports", name: "Sports Champions", icon: Medal },
  { id: "essay", name: "Essay Writing", icon: Star },
]

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="h-6 w-6 text-[var(--color-gold)]" />
    case 2:
      return <Medal className="h-6 w-6 text-gray-400" />
    case 3:
      return <Award className="h-6 w-6 text-amber-600" />
    default:
      return (
        <div className="h-6 w-6 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</div>
      )
  }
}

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState<"schools" | "students">("schools")
  const [activeCategory, setActiveCategory] = useState("overall")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSchools = schoolLeaderboard.filter(
    (school) =>
      school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredStudents = studentLeaderboard.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.school.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              Live Rankings
            </Badge>

            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Competition <span className="text-[var(--color-gold)]">Leaderboard</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Track Performance • Celebrate Excellence • Inspire Competition
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">150+</div>
                <div className="text-sm text-blue-200">Schools Registered</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">2,500+</div>
                <div className="text-sm text-blue-200">Students Participating</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">15</div>
                <div className="text-sm text-blue-200">Competition Events</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">₹50K+</div>
                <div className="text-sm text-blue-200">Prize Money</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Tab Switcher */}
            <div className="flex bg-white rounded-lg p-1 shadow-sm">
              <Button
                variant={activeTab === "schools" ? "default" : "ghost"}
                onClick={() => setActiveTab("schools")}
                className="flex items-center space-x-2"
              >
                <School className="h-4 w-4" />
                <span>Schools</span>
              </Button>
              <Button
                variant={activeTab === "students" ? "default" : "ghost"}
                onClick={() => setActiveTab("students")}
                className="flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>Students</span>
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={`Search ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeTab === "schools" ? (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold text-[var(--color-royal-blue)] mb-2">School Rankings</h2>
                <p className="text-muted-foreground">Based on overall performance across all events</p>
              </div>

              <div className="grid gap-4">
                {filteredSchools.map((school) => (
                  <Card key={school.rank} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-3">
                            {getRankIcon(school.rank)}
                            <img
                              src={school.logo || "/placeholder.svg"}
                              alt={`${school.name} logo`}
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          </div>

                          <div className="space-y-1">
                            <h3 className="font-semibold text-lg">{school.name}</h3>
                            <p className="text-sm text-muted-foreground">{school.location}</p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>{school.studentsRegistered} students</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right space-y-2">
                          <div className="text-2xl font-bold text-[var(--color-royal-blue)]">{school.totalPoints}</div>
                          <div className="text-xs text-muted-foreground">Total Points</div>

                          <div className="flex space-x-4 text-xs">
                            <div className="text-center">
                              <div className="font-semibold text-green-600">{school.academicPoints}</div>
                              <div className="text-muted-foreground">Academic</div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-blue-600">{school.sportsPoints}</div>
                              <div className="text-muted-foreground">Sports</div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-purple-600">{school.essayPoints}</div>
                              <div className="text-muted-foreground">Essay</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {school.rank <= 3 && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-green-600 font-medium">
                              {school.rank === 1
                                ? "Leading the competition!"
                                : school.rank === 2
                                  ? "Excellent performance!"
                                  : "Great achievement!"}
                            </span>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold text-[var(--color-royal-blue)] mb-2">Student Rankings</h2>
                <p className="text-muted-foreground">Individual performance across all competitions</p>
              </div>

              <div className="grid gap-4">
                {filteredStudents.map((student) => (
                  <Card key={student.rank} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-3">
                            {getRankIcon(student.rank)}
                            <img
                              src={student.avatar || "/placeholder.svg"}
                              alt={`${student.name} avatar`}
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          </div>

                          <div className="space-y-1">
                            <h3 className="font-semibold text-lg">{student.name}</h3>
                            <p className="text-sm text-muted-foreground">{student.school}</p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>Grade {student.grade}</span>
                              <Badge variant="outline" className="text-xs">
                                {student.category}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="text-right space-y-2">
                          <div className="text-2xl font-bold text-[var(--color-royal-blue)]">{student.totalPoints}</div>
                          <div className="text-xs text-muted-foreground">Total Points</div>

                          <div className="flex space-x-4 text-xs">
                            <div className="text-center">
                              <div className="font-semibold text-green-600">{student.academicScore}</div>
                              <div className="text-muted-foreground">Academic</div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-purple-600">{student.essayScore}</div>
                              <div className="text-muted-foreground">Essay</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-xs text-muted-foreground">Sports Events:</div>
                            <div className="flex flex-wrap gap-1">
                              {student.sportsEvents.map((event) => (
                                <Badge key={event} variant="secondary" className="text-xs">
                                  {event}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {student.rank <= 3 && (
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-green-600 font-medium">Top Performer!</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-royal-blue)] mb-4">
              Competition Statistics
            </h2>
            <p className="text-muted-foreground text-lg">Real-time insights into the competition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 text-[var(--color-gold)] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[var(--color-royal-blue)] mb-2">150</div>
                <div className="text-sm text-muted-foreground">Schools Participating</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <User className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-[var(--color-royal-blue)] mb-2">2,547</div>
                <div className="text-sm text-muted-foreground">Students Registered</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-[var(--color-royal-blue)] mb-2">15</div>
                <div className="text-sm text-muted-foreground">Competition Events</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-[var(--color-royal-blue)] mb-2">₹50,000</div>
                <div className="text-sm text-muted-foreground">Total Prize Money</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-royal-blue)] to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Want to See Your Name Here?</h2>
            <p className="text-xl text-blue-100">
              Register now and compete with the best schools and students across the country
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/students/register"
                className="bg-[var(--color-gold)] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-gold)]/90 transition-colors"
              >
                Register as Student
              </a>
              <a
                href="/schools/register"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-royal-blue)] transition-colors"
              >
                Register Your School
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
