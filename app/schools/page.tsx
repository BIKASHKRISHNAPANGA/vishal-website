import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { School, Users, Trophy, CheckCircle, Upload, Mail, Calendar, Award, Target } from "lucide-react"

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              School Registration Open
            </Badge>

            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Register Your <span className="text-[var(--color-gold)]">School</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join the most prestigious inter-school championship and give your students the opportunity to excel
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 btn-hover-lift text-lg px-8 py-3"
                asChild
              >
                <Link href="/schools/register">Register Now</Link>
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

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Why Register Your School?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Provide your students with unparalleled opportunities for growth, recognition, and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-[var(--color-royal-blue)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="h-8 w-8 text-[var(--color-royal-blue)]" />
                </div>
                <h3 className="font-semibold text-xl">Prestige & Recognition</h3>
                <p className="text-muted-foreground">
                  Enhance your school's reputation by participating in the most prestigious inter-school championship
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-[var(--color-gold)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-[var(--color-gold)]" />
                </div>
                <h3 className="font-semibold text-xl">Student Scholarships</h3>
                <p className="text-muted-foreground">
                  Your students can win merit-based scholarships worth lakhs for their higher education
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-xl">Skill Development</h3>
                <p className="text-muted-foreground">
                  Comprehensive academic and sports competitions that enhance student capabilities
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-xl">Networking</h3>
                <p className="text-muted-foreground">
                  Connect with other leading educational institutions and share best practices
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <School className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-xl">Brand Building</h3>
                <p className="text-muted-foreground">
                  Showcase your school's excellence and attract quality students and faculty
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-pink-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-xl">Easy Management</h3>
                <p className="text-muted-foreground">
                  Simple registration process with bulk student upload and comprehensive support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Simple Registration Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get your school registered in just a few easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="bg-[var(--color-royal-blue)] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg">School Registration</h3>
              <p className="text-muted-foreground text-sm">
                Fill out the school registration form with basic details and upload your school logo
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-[var(--color-gold)] text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg">Student Registration</h3>
              <p className="text-muted-foreground text-sm">
                Register students individually or upload bulk data via Excel for multiple students
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg">Confirmation</h3>
              <p className="text-muted-foreground text-sm">
                Receive confirmation email with registration details and further instructions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)]">
                Important Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-[var(--color-royal-blue)] mt-1" />
                  <div>
                    <h4 className="font-semibold">Registration Deadline</h4>
                    <p className="text-muted-foreground text-sm">October 20, 2024 - Don't miss out!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-[var(--color-royal-blue)] mt-1" />
                  <div>
                    <h4 className="font-semibold">Student Categories</h4>
                    <p className="text-muted-foreground text-sm">
                      Category 1: 5th/6th, Category 2: 7th/8th, Category 3: 9th/10th
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Upload className="h-5 w-5 text-[var(--color-royal-blue)] mt-1" />
                  <div>
                    <h4 className="font-semibold">Bulk Upload</h4>
                    <p className="text-muted-foreground text-sm">
                      Upload multiple students at once using our Excel template
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[var(--color-royal-blue)] mt-1" />
                  <div>
                    <h4 className="font-semibold">Email Confirmation</h4>
                    <p className="text-muted-foreground text-sm">
                      Instant confirmation email with registration details and next steps
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                <CardTitle className="text-center">Ready to Register?</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-center text-muted-foreground">
                  Join 500+ schools already registered for the championship
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Free school registration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Bulk student upload support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Dedicated support team</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Instant email confirmation</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 btn-hover-lift"
                  size="lg"
                  asChild
                >
                  <Link href="/schools/register">Register Your School</Link>
                </Button>

                <div className="text-center text-xs text-muted-foreground">
                  Need help? Contact us at{" "}
                  <a
                    href="mailto:schools@schooloftheyear.com"
                    className="text-[var(--color-royal-blue)] hover:underline"
                  >
                    schools@schooloftheyear.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
