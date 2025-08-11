"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  GraduationCap,
  Trophy,
  PenTool,
  Clock,
  Users,
  Target,
  Award,
  Calendar,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Calculator,
  Atom,
  Brain,
  Globe,
  FileText,
  Zap,
  Timer,
  Medal,
} from "lucide-react"

const academicEvents = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: Calculator,
    description: "Test your mathematical skills with algebra, geometry, and problem-solving questions",
    duration: "2 hours",
    questions: 50,
    difficulty: "Progressive by category",
    topics: ["Algebra", "Geometry", "Arithmetic", "Mensuration", "Statistics"],
    fee: 299,
  },
  {
    id: "science",
    name: "Science",
    icon: Atom,
    description: "Comprehensive science test covering Physics, Chemistry, and Biology concepts",
    duration: "2 hours",
    questions: 50,
    difficulty: "Progressive by category",
    topics: ["Physics", "Chemistry", "Biology", "Environmental Science", "General Science"],
    fee: 299,
  },
  {
    id: "general-knowledge",
    name: "General Knowledge",
    icon: Globe,
    description: "Test your awareness of current affairs, history, geography, and general facts",
    duration: "2 hours",
    questions: 50,
    difficulty: "Age-appropriate",
    topics: ["Current Affairs", "History", "Geography", "Sports", "Literature"],
    fee: 299,
  },
  {
    id: "logical-reasoning",
    name: "Logical Reasoning",
    icon: Brain,
    description: "Challenge your analytical and logical thinking abilities",
    duration: "2 hours",
    questions: 50,
    difficulty: "Progressive complexity",
    topics: ["Pattern Recognition", "Analogies", "Series", "Coding-Decoding", "Puzzles"],
    fee: 299,
  },
]

const sportsEvents = [
  {
    id: "cricket",
    name: "Cricket (T-19)",
    icon: Trophy,
    description: "19-over cricket tournament with team competition",
    type: "Team Sport",
    teamSize: "11 players + 4 substitutes",
    ageGroups: ["U-12", "U-14", "U-16"],
    fee: 295,
    duration: "2 days",
  },
  {
    id: "football",
    name: "Football",
    icon: Trophy,
    description: "Standard football tournament with team play",
    type: "Team Sport",
    teamSize: "11 players + 7 substitutes",
    ageGroups: ["U-12", "U-14", "U-16"],
    fee: 295,
    duration: "2 days",
  },
  {
    id: "track-events",
    name: "Track Events",
    icon: Zap,
    description: "Individual running events: 100m, 200m, 400m, 1km",
    type: "Individual Sport",
    teamSize: "Individual participation",
    ageGroups: ["U-12", "U-14", "U-16"],
    fee: 299,
    duration: "1 day",
  },
  {
    id: "field-events",
    name: "Field Events",
    icon: Target,
    description: "High jump, discus throw, shot put competitions",
    type: "Individual Sport",
    teamSize: "Individual participation",
    ageGroups: ["U-12", "U-14", "U-16"],
    fee: 299,
    duration: "1 day",
  },
  {
    id: "indoor-games",
    name: "Indoor Games",
    icon: Medal,
    description: "Chess and Badminton tournaments",
    type: "Individual Sport",
    teamSize: "Individual participation",
    ageGroups: ["U-12", "U-14", "U-16"],
    fee: 299,
    duration: "1 day",
  },
]

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("academic")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              Competition Events
            </Badge>

            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Competition <span className="text-[var(--color-gold)]">Events</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Academic Challenges • Sports Tournaments • Essay Writing Competition
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 btn-hover-lift text-lg px-8 py-3"
                asChild
              >
                <Link href="/students/register">Register Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--color-royal-blue)] btn-hover-lift text-lg px-8 py-3 bg-transparent"
                asChild
              >
                <Link href="/leaderboard">View Leaderboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="academic" className="flex items-center space-x-2">
                <GraduationCap className="h-4 w-4" />
                <span>Academic</span>
              </TabsTrigger>
              <TabsTrigger value="sports" className="flex items-center space-x-2">
                <Trophy className="h-4 w-4" />
                <span>Sports</span>
              </TabsTrigger>
              <TabsTrigger value="essay" className="flex items-center space-x-2">
                <PenTool className="h-4 w-4" />
                <span>Essay</span>
              </TabsTrigger>
            </TabsList>

            {/* Academic Events */}
            <TabsContent value="academic" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
                  Academic Competitions
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Test your knowledge across multiple subjects with no negative marking
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {academicEvents.map((event) => (
                  <Card key={event.id} className="card-hover border-0 shadow-lg">
                    <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                      <CardTitle className="flex items-center space-x-3">
                        <event.icon className="h-6 w-6" />
                        <span>{event.name}</span>
                        <Badge className="bg-[var(--color-gold)] text-black ml-auto">₹{event.fee}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <p className="text-muted-foreground">{event.description}</p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-[var(--color-royal-blue)]" />
                          <span>{event.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-[var(--color-royal-blue)]" />
                          <span>{event.questions} questions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-4 w-4 text-green-600" />
                          <span>No negative marking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-[var(--color-gold)]" />
                          <span>1 mark per question</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Topics Covered:</h4>
                        <div className="flex flex-wrap gap-1">
                          {event.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <Button
                          className="w-full bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90"
                          asChild
                        >
                          <Link href={`/events/academic#${event.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Academic Event Rules */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6" />
                    <span>Academic Competition Rules</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">General Rules:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>50 questions per subject, 1 mark each</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>2-hour duration for each subject</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>No negative marking for wrong answers</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Must score &gt;50% to qualify for finals</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Category-wise Difficulty:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <Badge className="bg-green-500 text-white text-xs">Cat 1</Badge>
                          <span>5th-6th grade: Basic concepts and formulas</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Badge className="bg-[var(--color-gold)] text-black text-xs">Cat 2</Badge>
                          <span>7th-8th grade: Intermediate level problems</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Badge className="bg-[var(--color-royal-blue)] text-white text-xs">Cat 3</Badge>
                          <span>9th-10th grade: Advanced concepts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sports Events */}
            <TabsContent value="sports" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
                  Sports Tournaments
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Compete in various sports across different age categories
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sportsEvents.map((event) => (
                  <Card key={event.id} className="card-hover border-0 shadow-lg">
                    <CardHeader className="bg-[var(--color-gold)] text-black">
                      <CardTitle className="flex items-center space-x-3">
                        <event.icon className="h-6 w-6" />
                        <span>{event.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <p className="text-muted-foreground">{event.description}</p>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Type:</span>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Team Size:</span>
                          <span>{event.teamSize}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Duration:</span>
                          <span>{event.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Fee:</span>
                          <Badge className="bg-[var(--color-royal-blue)] text-white">₹{event.fee}</Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Age Categories:</h4>
                        <div className="flex flex-wrap gap-1">
                          {event.ageGroups.map((age) => (
                            <Badge key={age} variant="outline" className="text-xs">
                              {age}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <Button
                          className="w-full bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90"
                          asChild
                        >
                          <Link href={`/events/sports#${event.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sports Event Rules */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-orange-500 text-white">
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="h-6 w-6" />
                    <span>Sports Tournament Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Important Dates:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <Calendar className="h-4 w-4 text-orange-500 mt-0.5" />
                          <span>Registration closes: October 20, 2024</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Timer className="h-4 w-4 text-orange-500 mt-0.5" />
                          <span>Tournament dates: November 15-16, 2024</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Users className="h-4 w-4 text-orange-500 mt-0.5" />
                          <span>Team registration required for team sports</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Age Categories:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <Badge className="bg-green-500 text-white text-xs">U-12</Badge>
                          <span>Under 12 years (Born after Nov 15, 2012)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Badge className="bg-[var(--color-gold)] text-black text-xs">U-14</Badge>
                          <span>Under 14 years (Born after Nov 15, 2010)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Badge className="bg-[var(--color-royal-blue)] text-white text-xs">U-16</Badge>
                          <span>Under 16 years (Born after Nov 15, 2008)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Essay Writing */}
            <TabsContent value="essay" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
                  Essay Writing Competition
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Express your thoughts and creativity through structured essay writing
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-purple-600 text-white">
                    <CardTitle className="flex items-center space-x-3">
                      <PenTool className="h-6 w-6" />
                      <span>Essay Writing Challenge</span>
                      <Badge className="bg-[var(--color-gold)] text-black ml-auto">₹299</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Competition Format</h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-purple-600" />
                            <span>Duration: 1 hour</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BookOpen className="h-4 w-4 text-purple-600" />
                            <span>Topic: Based on pre-selected books</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-purple-600" />
                            <span>Word limit: 500-800 words</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Award className="h-4 w-4 text-purple-600" />
                            <span>Judged on creativity and structure</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Evaluation Criteria</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Content & Ideas</span>
                            <Badge variant="outline">30%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Language & Grammar</span>
                            <Badge variant="outline">25%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Structure & Organization</span>
                            <Badge variant="outline">25%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Creativity & Originality</span>
                            <Badge variant="outline">20%</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Pre-Selected Books (2024)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="bg-muted/30">
                          <CardContent className="p-4">
                            <h4 className="font-semibold">Book 1: "The Alchemist"</h4>
                            <p className="text-sm text-muted-foreground">by Paulo Coelho</p>
                            <p className="text-xs mt-2">
                              Essay topics may include themes of dreams, journey, and self-discovery
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="bg-muted/30">
                          <CardContent className="p-4">
                            <h4 className="font-semibold">Book 2: "Wonder"</h4>
                            <p className="text-sm text-muted-foreground">by R.J. Palacio</p>
                            <p className="text-xs mt-2">
                              Essay topics may include themes of kindness, acceptance, and courage
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[var(--color-royal-blue)] mb-2">Important Notes:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Students must have read both books before the competition</li>
                        <li>• Essay topic will be revealed on the day of competition</li>
                        <li>• Handwritten essays only - no digital submissions</li>
                        <li>• Plagiarism will result in immediate disqualification</li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" asChild>
                        <Link href="/events/essay">View Detailed Guidelines</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Compete?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Choose your events and register now to secure your spot in the championship
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 btn-hover-lift text-lg px-8 py-3"
              asChild
            >
              <Link href="/students/register">Register for Events</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--color-royal-blue)] btn-hover-lift text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/schools/register">Register Your School</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Registration closes: October 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>No negative marking in academics</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
