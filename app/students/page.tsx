import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GraduationCap, Trophy, Award, Target, Users, Calendar, IndianRupee, CheckCircle, Star } from "lucide-react"

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              Student Registration Open
            </Badge>

            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Register as a <span className="text-[var(--color-gold)]">Student</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Compete in Academic & Sports Events • Win Scholarships • Earn Recognition
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
                <Link href="/events">View Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Competition Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Students are automatically categorized based on their grade for fair competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="bg-green-500 text-white">
                <CardTitle className="text-center">Category 1</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-3xl font-bold text-green-600">5th - 6th</div>
                <p className="text-muted-foreground">Grade levels for junior category competitions</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Age-appropriate challenges</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Foundational concepts</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="bg-[var(--color-gold)] text-black">
                <CardTitle className="text-center">Category 2</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-3xl font-bold text-[var(--color-gold)]">7th - 8th</div>
                <p className="text-muted-foreground">Grade levels for intermediate category competitions</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--color-gold)]" />
                    <span>Intermediate difficulty</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--color-gold)]" />
                    <span>Skill development focus</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                <CardTitle className="text-center">Category 3</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-3xl font-bold text-[var(--color-royal-blue)]">9th - 10th</div>
                <p className="text-muted-foreground">Grade levels for senior category competitions</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--color-royal-blue)]" />
                    <span>Advanced challenges</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--color-royal-blue)]" />
                    <span>College prep level</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Available Events
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from a wide range of academic and sports competitions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Academic Events */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6" />
                  <span>Academic Competitions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Mathematics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Science</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>General Knowledge</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Logical Reasoning</span>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Essay Writing</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-[var(--color-royal-blue)]">Format:</p>
                  <p>50 questions each • 1 mark per question • No negative marking • 2-hour duration</p>
                </div>
              </CardContent>
            </Card>

            {/* Sports Events */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-[var(--color-gold)] text-black">
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-6 w-6" />
                  <span>Sports Tournaments</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Cricket (T-19)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Football</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Kandali</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Kia-kho</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>150m Relay</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Track Events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>High Jump</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Shot Put</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Chess</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Badminton</span>
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-[var(--color-gold)]">Age Groups:</p>
                  <p>U-12, U-14, U-16 categories for fair competition</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Registration Fees
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Affordable registration fees with automatic calculation based on your event selections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-green-500 text-white">
                <CardTitle className="flex items-center space-x-2">
                  <IndianRupee className="h-6 w-6" />
                  <span>Individual Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600">₹299</div>
                  <p className="text-muted-foreground">per event</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold">Includes:</p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Academic competitions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Individual sports events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Essay writing competition</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Participation certificate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-[var(--color-gold)] text-black">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6" />
                  <span>Team Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-gold)]">₹293-295</div>
                  <p className="text-muted-foreground">per student</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold">Includes:</p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--color-gold)]" />
                    <span>Team sports events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--color-gold)]" />
                    <span>Group competitions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--color-gold)]" />
                    <span>Team coordination support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--color-gold)]" />
                    <span>Participation certificate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              <strong>Note:</strong> Registration fees are automatically calculated based on your event selections
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Why Participate?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover border-0 shadow-lg text-center">
              <CardContent className="p-6 space-y-3">
                <div className="bg-[var(--color-gold)]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-6 w-6 text-[var(--color-gold)]" />
                </div>
                <h3 className="font-semibold">Scholarships</h3>
                <p className="text-sm text-muted-foreground">Win merit-based scholarships for higher education</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg text-center">
              <CardContent className="p-6 space-y-3">
                <div className="bg-[var(--color-royal-blue)]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="h-6 w-6 text-[var(--color-royal-blue)]" />
                </div>
                <h3 className="font-semibold">Trophies</h3>
                <p className="text-sm text-muted-foreground">Earn prestigious trophies and medals</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg text-center">
              <CardContent className="p-6 space-y-3">
                <div className="bg-green-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold">Recognition</h3>
                <p className="text-sm text-muted-foreground">Build strong profile for college admissions</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg text-center">
              <CardContent className="p-6 space-y-3">
                <div className="bg-purple-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">Skills</h3>
                <p className="text-sm text-muted-foreground">Enhance academic and competitive abilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Compete?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students in the most prestigious inter-school competition. Register now and showcase your
            talents!
          </p>

          <Button
            size="lg"
            className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 btn-hover-lift text-lg px-8 py-3"
            asChild
          >
            <Link href="/students/register">Register Now</Link>
          </Button>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Registration closes: October 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>No negative marking</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
