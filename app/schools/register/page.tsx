"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useToast } from "@/hooks/use-toast"
import { School, Upload, CheckCircle, AlertCircle, Mail, Phone, MapPin, User, Users } from "lucide-react"

interface SchoolFormData {
  schoolName: string
  principalName: string
  contactNumber: string
  email: string
  address: string
  schoolLogo: File | null
  bulkUpload: boolean
  agreeTerms: boolean
}

export default function SchoolRegisterPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<SchoolFormData>({
    schoolName: "",
    principalName: "",
    contactNumber: "",
    email: "",
    address: "",
    schoolLogo: null,
    bulkUpload: false,
    agreeTerms: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, schoolLogo: file }))
  }

  const handleCheckboxChange = (name: keyof SchoolFormData) => (checked: boolean) => {
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

    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "schoolLogo" && value instanceof File) {
          submitData.append(key, value)
        } else if (typeof value === "boolean") {
          submitData.append(key, value.toString())
        } else if (typeof value === "string") {
          submitData.append(key, value)
        }
      })

      const response = await fetch("/api/schools/register", {
        method: "POST",
        body: submitData,
      })

      if (response.ok) {
        const result = await response.json()
        toast({
          title: "Registration Successful!",
          description: "Your school has been registered. Check your email for confirmation details.",
        })

        // Reset form
        setFormData({
          schoolName: "",
          principalName: "",
          contactNumber: "",
          email: "",
          address: "",
          schoolLogo: null,
          bulkUpload: false,
          agreeTerms: false,
        })
      } else {
        throw new Error("Registration failed")
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error registering your school. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              School Registration
            </Badge>
            <h1 className="font-serif text-3xl md:text-5xl font-bold">Register Your School</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Join the most prestigious inter-school championship and provide your students with opportunities to excel
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                    <CardTitle className="flex items-center space-x-2">
                      <School className="h-6 w-6" />
                      <span>School Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* School Name */}
                      <div className="space-y-2">
                        <Label htmlFor="schoolName" className="flex items-center space-x-2">
                          <School className="h-4 w-4" />
                          <span>School Name *</span>
                        </Label>
                        <Input
                          id="schoolName"
                          name="schoolName"
                          value={formData.schoolName}
                          onChange={handleInputChange}
                          placeholder="Enter your school's full name"
                          required
                          className="focus:ring-[var(--color-royal-blue)]"
                        />
                      </div>

                      {/* Principal Name */}
                      <div className="space-y-2">
                        <Label htmlFor="principalName" className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>Principal's Name *</span>
                        </Label>
                        <Input
                          id="principalName"
                          name="principalName"
                          value={formData.principalName}
                          onChange={handleInputChange}
                          placeholder="Enter principal's full name"
                          required
                          className="focus:ring-[var(--color-royal-blue)]"
                        />
                      </div>

                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contactNumber" className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>Contact Number *</span>
                          </Label>
                          <Input
                            id="contactNumber"
                            name="contactNumber"
                            type="tel"
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
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
                            placeholder="principal@school.edu"
                            required
                            className="focus:ring-[var(--color-royal-blue)]"
                          />
                        </div>
                      </div>

                      {/* Address */}
                      <div className="space-y-2">
                        <Label htmlFor="address" className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>School Address *</span>
                        </Label>
                        <Textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter complete school address with city, state, and pincode"
                          required
                          rows={3}
                          className="focus:ring-[var(--color-royal-blue)]"
                        />
                      </div>

                      {/* School Logo Upload */}
                      <div className="space-y-2">
                        <Label htmlFor="schoolLogo" className="flex items-center space-x-2">
                          <Upload className="h-4 w-4" />
                          <span>School Logo</span>
                          <span className="text-xs text-muted-foreground">(Optional)</span>
                        </Label>
                        <Input
                          id="schoolLogo"
                          name="schoolLogo"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="focus:ring-[var(--color-royal-blue)]"
                        />
                        <p className="text-xs text-muted-foreground">
                          Upload your school logo (PNG, JPG, or SVG format, max 2MB)
                        </p>
                      </div>

                      {/* Bulk Upload Option */}
                      <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="bulkUpload"
                            checked={formData.bulkUpload}
                            onCheckedChange={handleCheckboxChange("bulkUpload")}
                          />
                          <Label htmlFor="bulkUpload" className="flex items-center space-x-2 cursor-pointer">
                            <Users className="h-4 w-4" />
                            <span>I want to upload student data in bulk via Excel</span>
                          </Label>
                        </div>
                        {formData.bulkUpload && (
                          <div className="text-sm text-muted-foreground space-y-2">
                            <p>
                              <strong>Note:</strong> After school registration, you'll receive an Excel template to
                              upload multiple students at once.
                            </p>
                            <p>This option is recommended for schools with 10+ participating students.</p>
                          </div>
                        )}
                      </div>

                      {/* Terms and Conditions */}
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
                          . I confirm that all information provided is accurate and complete.
                        </Label>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90 btn-hover-lift text-lg py-3"
                        size="lg"
                      >
                        {isSubmitting ? "Registering..." : "Register School"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Registration Benefits */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-[var(--color-gold)] text-black">
                    <CardTitle className="text-lg">Registration Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Free school registration</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Bulk student upload support</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Dedicated support team</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Instant email confirmation</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>School profile dashboard</span>
                    </div>
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
                    <p>
                      <strong>Registration Deadline:</strong> October 20, 2024
                    </p>
                    <p>
                      <strong>Student Categories:</strong> 5th-6th, 7th-8th, 9th-10th grades
                    </p>
                    <p>
                      <strong>Events:</strong> Academic competitions, sports tournaments, and essay writing
                    </p>
                    <p>
                      <strong>Support:</strong> Email us at{" "}
                      <a
                        href="mailto:schools@schooloftheyear.com"
                        className="text-[var(--color-royal-blue)] hover:underline"
                      >
                        schools@schooloftheyear.com
                      </a>
                    </p>
                  </CardContent>
                </Card>

                {/* Next Steps */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-green-600 text-white">
                    <CardTitle className="text-lg">After Registration</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="bg-[var(--color-royal-blue)] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        1
                      </div>
                      <span>Receive confirmation email with school ID</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="bg-[var(--color-gold)] text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        2
                      </div>
                      <span>Access school dashboard for student registration</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        3
                      </div>
                      <span>Register students individually or via bulk upload</span>
                    </div>
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
