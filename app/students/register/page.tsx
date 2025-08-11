"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useToast } from "@/hooks/use-toast"
import {
  User,
  Mail,
  Calendar,
  School,
  Upload,
  IndianRupee,
  CreditCard,
  CheckCircle,
  AlertCircle,
  GraduationCap,
  Trophy,
} from "lucide-react"

interface StudentFormData {
  name: string
  email: string
  age: string
  class: string
  schoolName: string
  profilePhoto: File | null
  academicEvents: string[]
  sportsEvents: string[]
  agreeTerms: boolean
}

const academicEvents = [
  { id: "maths", name: "Mathematics", fee: 299 },
  { id: "science", name: "Science", fee: 299 },
  { id: "gk", name: "General Knowledge", fee: 299 },
  { id: "reasoning", name: "Logical Reasoning", fee: 299 },
  { id: "essay", name: "Essay Writing", fee: 299 },
]

const sportsEvents = [
  { id: "cricket", name: "Cricket (T-19)", fee: 295, type: "team" },
  { id: "football", name: "Football", fee: 295, type: "team" },
  { id: "kandali", name: "Kandali", fee: 293, type: "team" },
  { id: "kiakho", name: "Kia-kho", fee: 293, type: "team" },
  { id: "relay", name: "150m Relay Race", fee: 294, type: "team" },
  { id: "100m", name: "100m Track", fee: 299, type: "individual" },
  { id: "200m", name: "200m Track", fee: 299, type: "individual" },
  { id: "400m", name: "400m Track", fee: 299, type: "individual" },
  { id: "1km", name: "1km Track", fee: 299, type: "individual" },
  { id: "highjump", name: "High Jump", fee: 299, type: "individual" },
  { id: "discus", name: "Discus Throw", fee: 299, type: "individual" },
  { id: "shotput", name: "Shot Put", fee: 299, type: "individual" },
  { id: "chess", name: "Chess", fee: 299, type: "individual" },
  { id: "badminton", name: "Badminton", fee: 299, type: "individual" },
]

const schools = [
  "Delhi Public School",
  "St. Xavier's High School",
  "Kendriya Vidyalaya",
  "DAV Public School",
  "Ryan International School",
  "Modern School",
  "Bal Bharati Public School",
  "Sardar Patel Vidyalaya",
  "Other",
]

export default function StudentRegisterPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [totalFee, setTotalFee] = useState(0)
  const [category, setCategory] = useState("")

  const [formData, setFormData] = useState<StudentFormData>({
    name: "",
    email: "",
    age: "",
    class: "",
    schoolName: "",
    profilePhoto: null,
    academicEvents: [],
    sportsEvents: [],
    agreeTerms: false,
  })

  // Calculate category based on class
  useEffect(() => {
    const classNum = Number.parseInt(formData.class)
    if (classNum >= 5 && classNum <= 6) {
      setCategory("Category 1 (5th-6th)")
    } else if (classNum >= 7 && classNum <= 8) {
      setCategory("Category 2 (7th-8th)")
    } else if (classNum >= 9 && classNum <= 10) {
      setCategory("Category 3 (9th-10th)")
    } else {
      setCategory("")
    }
  }, [formData.class])

  // Calculate total fee
  useEffect(() => {
    let total = 0

    // Academic events
    formData.academicEvents.forEach((eventId) => {
      const event = academicEvents.find((e) => e.id === eventId)
      if (event) total += event.fee
    })

    // Sports events
    formData.sportsEvents.forEach((eventId) => {
      const event = sportsEvents.find((e) => e.id === eventId)
      if (event) total += event.fee
    })

    setTotalFee(total)
  }, [formData.academicEvents, formData.sportsEvents])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: keyof StudentFormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, profilePhoto: file }))
  }

  const handleEventChange = (eventType: "academicEvents" | "sportsEvents", eventId: string) => (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [eventType]: checked ? [...prev[eventType], eventId] : prev[eventType].filter((id) => id !== eventId),
    }))
  }

  const handleCheckboxChange = (name: keyof StudentFormData) => (checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive",
      })
      return
    }

    if (formData.academicEvents.length === 0 && formData.sportsEvents.length === 0) {
      toast({
        title: "Events Required",
        description: "Please select at least one event to participate in.",
        variant: "destructive",
      })
      return
    }

    if (totalFee === 0) {
      toast({
        title: "No Events Selected",
        description: "Please select events to calculate registration fee.",
        variant: "destructive",
      })
      return
    }

    setShowPayment(true)
  }

  const handlePayment = async () => {
    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "profilePhoto" && value instanceof File) {
          submitData.append(key, value)
        } else if (Array.isArray(value)) {
          submitData.append(key, JSON.stringify(value))
        } else if (typeof value === "boolean") {
          submitData.append(key, value.toString())
        } else if (typeof value === "string") {
          submitData.append(key, value)
        }
      })

      submitData.append("totalFee", totalFee.toString())
      submitData.append("category", category)

      const response = await fetch("/api/students/register", {
        method: "POST",
        body: submitData,
      })

      if (response.ok) {
        const result = await response.json()
        toast({
          title: "Registration Successful!",
          description: "Your registration is complete. Check your email for confirmation and QR code.",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          age: "",
          class: "",
          schoolName: "",
          profilePhoto: null,
          academicEvents: [],
          sportsEvents: [],
          agreeTerms: false,
        })
        setShowPayment(false)
      } else {
        throw new Error("Registration failed")
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error processing your registration. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showPayment) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-6 w-6" />
                    <span>Payment Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Student Details */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Student Information</h3>
                    <div className="bg-muted/30 p-4 rounded-lg space-y-2 text-sm">
                      <p>
                        <strong>Name:</strong> {formData.name}
                      </p>
                      <p>
                        <strong>Class:</strong> {formData.class} ({category})
                      </p>
                      <p>
                        <strong>School:</strong> {formData.schoolName}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                    </div>
                  </div>

                  {/* Selected Events */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Selected Events</h3>
                    <div className="space-y-3">
                      {formData.academicEvents.length > 0 && (
                        <div>
                          <h4 className="font-medium text-[var(--color-royal-blue)] mb-2">Academic Events</h4>
                          <div className="space-y-1">
                            {formData.academicEvents.map((eventId) => {
                              const event = academicEvents.find((e) => e.id === eventId)
                              return (
                                <div key={eventId} className="flex justify-between text-sm">
                                  <span>{event?.name}</span>
                                  <span>₹{event?.fee}</span>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )}

                      {formData.sportsEvents.length > 0 && (
                        <div>
                          <h4 className="font-medium text-[var(--color-gold)] mb-2">Sports Events</h4>
                          <div className="space-y-1">
                            {formData.sportsEvents.map((eventId) => {
                              const event = sportsEvents.find((e) => e.id === eventId)
                              return (
                                <div key={eventId} className="flex justify-between text-sm">
                                  <span>
                                    {event?.name}{" "}
                                    <Badge variant="outline" className="ml-1 text-xs">
                                      {event?.type}
                                    </Badge>
                                  </span>
                                  <span>₹{event?.fee}</span>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Total Fee */}
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Registration Fee:</span>
                    <span className="text-[var(--color-royal-blue)]">₹{totalFee}</span>
                  </div>

                  {/* Payment Buttons */}
                  <div className="space-y-3">
                    <Button
                      onClick={handlePayment}
                      disabled={isSubmitting}
                      className="w-full bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90 btn-hover-lift text-lg py-3"
                      size="lg"
                    >
                      {isSubmitting ? "Processing Payment..." : `Pay ₹${totalFee} & Register`}
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => setShowPayment(false)}
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      Back to Edit Details
                    </Button>
                  </div>

                  <div className="text-center text-xs text-muted-foreground">
                    <p>Secure payment powered by Razorpay</p>
                    <p>You will receive confirmation email with QR code after successful payment</p>
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              Student Registration
            </Badge>
            <h1 className="font-serif text-3xl md:text-5xl font-bold">Register as Student</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Join the most prestigious inter-school championship and compete for scholarships and recognition
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-6 w-6" />
                      <span>Personal Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>Full Name *</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                            className="focus:ring-[var(--color-royal-blue)]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>Email Address *</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                            className="focus:ring-[var(--color-royal-blue)]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="age" className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>Age *</span>
                          </Label>
                          <Input
                            id="age"
                            name="age"
                            type="number"
                            min="10"
                            max="18"
                            value={formData.age}
                            onChange={handleInputChange}
                            placeholder="Age"
                            required
                            className="focus:ring-[var(--color-royal-blue)]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="class" className="flex items-center space-x-2">
                            <GraduationCap className="h-4 w-4" />
                            <span>Class *</span>
                          </Label>
                          <Select onValueChange={handleSelectChange("class")} required>
                            <SelectTrigger className="focus:ring-[var(--color-royal-blue)]">
                              <SelectValue placeholder="Select class" />
                            </SelectTrigger>
                            <SelectContent>
                              {[5, 6, 7, 8, 9, 10].map((cls) => (
                                <SelectItem key={cls} value={cls.toString()}>
                                  {cls}th Grade
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Category</Label>
                          <div className="p-2 bg-muted/30 rounded-md text-sm">{category || "Select class first"}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="schoolName" className="flex items-center space-x-2">
                          <School className="h-4 w-4" />
                          <span>School Name *</span>
                        </Label>
                        <Select onValueChange={handleSelectChange("schoolName")} required>
                          <SelectTrigger className="focus:ring-[var(--color-royal-blue)]">
                            <SelectValue placeholder="Select your school" />
                          </SelectTrigger>
                          <SelectContent>
                            {schools.map((school) => (
                              <SelectItem key={school} value={school}>
                                {school}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="profilePhoto" className="flex items-center space-x-2">
                          <Upload className="h-4 w-4" />
                          <span>Profile Photo</span>
                          <span className="text-xs text-muted-foreground">(Optional)</span>
                        </Label>
                        <Input
                          id="profilePhoto"
                          name="profilePhoto"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="focus:ring-[var(--color-royal-blue)]"
                        />
                        <p className="text-xs text-muted-foreground">Upload your photo (PNG, JPG format, max 2MB)</p>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Event Selection */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-[var(--color-gold)] text-black">
                    <CardTitle className="flex items-center space-x-2">
                      <Trophy className="h-6 w-6" />
                      <span>Event Selection</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {/* Academic Events */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center space-x-2">
                        <GraduationCap className="h-5 w-5 text-[var(--color-royal-blue)]" />
                        <span>Academic Competitions</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {academicEvents.map((event) => (
                          <div key={event.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                            <Checkbox
                              id={event.id}
                              checked={formData.academicEvents.includes(event.id)}
                              onCheckedChange={handleEventChange("academicEvents", event.id)}
                            />
                            <Label htmlFor={event.id} className="flex-1 cursor-pointer">
                              <div className="flex justify-between items-center">
                                <span>{event.name}</span>
                                <Badge variant="outline">₹{event.fee}</Badge>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Sports Events */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center space-x-2">
                        <Trophy className="h-5 w-5 text-[var(--color-gold)]" />
                        <span>Sports Tournaments</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {sportsEvents.map((event) => (
                          <div key={event.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                            <Checkbox
                              id={event.id}
                              checked={formData.sportsEvents.includes(event.id)}
                              onCheckedChange={handleEventChange("sportsEvents", event.id)}
                            />
                            <Label htmlFor={event.id} className="flex-1 cursor-pointer">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                  <span>{event.name}</span>
                                  <Badge variant="secondary" className="text-xs">
                                    {event.type}
                                  </Badge>
                                </div>
                                <Badge variant="outline">₹{event.fee}</Badge>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Terms and Submit */}
                    <div className="space-y-4 pt-4 border-t">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={handleCheckboxChange("agreeTerms")}
                          className="mt-1"
                        />
                        <Label htmlFor="agreeTerms" className="text-sm cursor-pointer">
                          I agree to the{" "}
                          <a href="/terms" className="text-[var(--color-royal-blue)] hover:underline">
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a href="/privacy" className="text-[var(--color-royal-blue)] hover:underline">
                            Privacy Policy
                          </a>
                          . I confirm that all information provided is accurate.
                        </Label>
                      </div>

                      <Button
                        onClick={handleSubmit}
                        disabled={totalFee === 0}
                        className="w-full bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90 btn-hover-lift text-lg py-3"
                        size="lg"
                      >
                        Proceed to Payment (₹{totalFee})
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Fee Summary */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-green-600 text-white">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <IndianRupee className="h-5 w-5" />
                      <span>Fee Summary</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">₹{totalFee}</div>
                      <p className="text-sm text-muted-foreground">Total Registration Fee</p>
                    </div>

                    {totalFee > 0 && (
                      <div className="space-y-2 text-sm">
                        <p className="font-semibold">Selected Events:</p>
                        <div className="space-y-1">
                          {formData.academicEvents.map((eventId) => {
                            const event = academicEvents.find((e) => e.id === eventId)
                            return (
                              <div key={eventId} className="flex justify-between">
                                <span>{event?.name}</span>
                                <span>₹{event?.fee}</span>
                              </div>
                            )
                          })}
                          {formData.sportsEvents.map((eventId) => {
                            const event = sportsEvents.find((e) => e.id === eventId)
                            return (
                              <div key={eventId} className="flex justify-between">
                                <span>{event?.name}</span>
                                <span>₹{event?.fee}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Important Information */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-orange-500 text-white">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5" />
                      <span>Important</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>No negative marking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>2-hour duration for academic events</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Age-appropriate categories</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Instant email confirmation</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Support */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                    <CardTitle className="text-lg">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 text-sm">
                    <p className="mb-2">Contact our support team:</p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:students@schooloftheyear.com"
                        className="text-[var(--color-royal-blue)] hover:underline"
                      >
                        students@schooloftheyear.com
                      </a>
                    </p>
                    <p>Phone: +91 98765 43210</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
