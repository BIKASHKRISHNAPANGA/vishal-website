"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import  Navigation  from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Trophy,
  Users,
  Award,
  GraduationCap,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Clock,
  Target,
  Zap,
  Shield,
  Gift,
} from "lucide-react"

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set registration close date to October 20, 2024
    const targetDate = new Date("2024-10-20T23:59:59").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center space-x-4 md:space-x-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
            <div className="text-2xl md:text-3xl font-bold text-white">{value.toString().padStart(2, "0")}</div>
            <div className="text-xs md:text-sm text-blue-100 capitalize">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Image Carousel Component
function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Students celebrating academic victory",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Inter-school sports tournament",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Award ceremony with trophies",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Essay writing competition",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

// Testimonials Carousel Component
function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      school: "Delhi Public School",
      text: "Participating in School of the Year was life-changing! The academic challenges pushed me to excel, and I won a scholarship that's helping fund my engineering studies.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      school: "St. Xavier's High School",
      text: "The sports competitions were incredibly well-organized. I made friends from different schools and learned the true spirit of healthy competition.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      school: "Kendriya Vidyalaya",
      text: "The essay writing competition helped me discover my passion for literature. The exposure and recognition I received was beyond my expectations.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="w-full flex-shrink-0 bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[var(--color-gold)] fill-current" />
                  ))}
                </div>
                <p className="text-white/90 text-lg mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-blue-200 text-sm">{testimonial.school}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentTestimonial ? "bg-[var(--color-gold)]" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="text-center space-y-8 animate-fade-in-up">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              Registration Open - Limited Seats
            </Badge>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              School of the <span className="text-[var(--color-gold)]">Year</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              The Ultimate Inter-School Academic & Sports Championship
            </p>

            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Compete, Excel, and Win Scholarships, Trophies & Certificates. Join thousands of students in the most
              prestigious inter-school competition.
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

            {/* Countdown Timer */}
            <div className="mt-12">
              <h3 className="text-lg md:text-xl font-semibold mb-6 text-blue-100">Registration Closes In:</h3>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Moments of Excellence
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Witness the journey of champions and the celebration of academic and sporting excellence
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="bg-[var(--color-royal-blue)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-[var(--color-royal-blue)]" />
              </div>
              <div className="text-3xl font-bold text-[var(--color-royal-blue)]">500+</div>
              <div className="text-sm text-muted-foreground">Participating Schools</div>
            </div>

            <div className="text-center space-y-2">
              <div className="bg-[var(--color-gold)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Gift className="h-8 w-8 text-[var(--color-gold)]" />
              </div>
              <div className="text-3xl font-bold text-[var(--color-gold)]">₹50L+</div>
              <div className="text-sm text-muted-foreground">Prize Money</div>
            </div>

            <div className="text-center space-y-2">
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">₹25L+</div>
              <div className="text-sm text-muted-foreground">Scholarships</div>
            </div>

            <div className="text-center space-y-2">
              <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">0</div>
              <div className="text-sm text-muted-foreground">Negative Marking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Why Participate?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join the most prestigious inter-school competition and unlock opportunities for your future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-[var(--color-gold)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-[var(--color-gold)]" />
                </div>
                <h3 className="font-semibold text-xl">Scholarships</h3>
                <p className="text-muted-foreground">
                  Win merit-based scholarships worth lakhs to fund your higher education and achieve your dreams.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-[var(--color-royal-blue)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="h-8 w-8 text-[var(--color-royal-blue)]" />
                </div>
                <h3 className="font-semibold text-xl">Trophies & Medals</h3>
                <p className="text-muted-foreground">
                  Earn prestigious trophies, medals, and certificates that recognize your academic and sporting
                  excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-xl">Recognition</h3>
                <p className="text-muted-foreground">
                  Gain recognition from educational institutions and build a strong profile for college admissions.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-xl">Skill Development</h3>
                <p className="text-muted-foreground">
                  Enhance your academic knowledge, sports skills, and competitive spirit through challenging events.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-xl">Exposure</h3>
                <p className="text-muted-foreground">
                  Connect with students from across the country and experience diverse cultures and perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-pink-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-xl">Fun & Friendship</h3>
                <p className="text-muted-foreground">
                  Make lifelong friendships and create unforgettable memories while competing in a supportive
                  environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What Students Say</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Hear from our past participants about their transformative experiences
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-gold)]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
            Ready to Make History?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students in the most prestigious inter-school competition. Register now and take the first
            step towards excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90 btn-hover-lift text-lg px-8 py-3"
              asChild
            >
              <Link href="/students/register">Register as Student</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--color-royal-blue)] text-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)] hover:text-white btn-hover-lift text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/schools/register">Register Your School</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Registration closes: October 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Multiple venues across India</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Event duration: 2 days</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
