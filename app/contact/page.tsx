"use client"

import type React from "react"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  CheckCircle,
  Users,
  Calendar,
  Award,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: [
      " Rai's Aragya",
      "near smart point , 100ft road",
      "kalyan east 421306, Maharashtra , India",
    ],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 93265 84482", "+91 90822 98108"],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: [
      "info@interschoolosf.in",
      "amitvedprakashpandey@gmail.com",
      "thakurmahesh453@gmail.com",
    ],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Saturday: 8:00 AM - 4:00 PM", "Sunday: Closed"],
  },
];

const faqData = [
  {
    question: "What is the registration deadline?",
    answer:
      "The registration deadline for all events is October 20, 2024. Late registrations will not be accepted, so please ensure you register before this date.",
  },
  {
    question: "Can students participate in multiple events?",
    answer:
      "Yes! Students can register for multiple events. The registration fee is calculated based on the number and type of events selected. Individual events cost ₹299 each, while team events have different pricing.",
  },
  {
    question: "What documents are required for registration?",
    answer:
      "Students need a valid school ID, recent photograph, and parent/guardian consent form. Schools must provide official registration letter and principal's authorization.",
  },
  {
    question: "How will the results be announced?",
    answer:
      "Results will be announced on our website and sent via email to registered participants. Winners will also be contacted directly for the award ceremony details.",
  },
  {
    question: "Is there any accommodation provided?",
    answer:
      "We can help arrange accommodation for outstation participants. Please contact us at least 2 weeks before the event date for assistance with hotel bookings.",
  },
  {
    question: "What happens if a student misses the competition date?",
    answer:
      "Unfortunately, there are no make-up dates for missed competitions. All events will be held on November 16, 2024, as scheduled. Registration fees are non-refundable.",
  },
]

const teamMembers = [
  {
    name: "Mr. Mahesh Kumar Vinod Thakur ",
    role: "Chairman and Founder",
    email: "thakurmahesh453@gmail.com",
    phone: "+91 93265 84482",
    img: "/team-mates/mahesh.jpg",
  },
  {
    name: "Ms. Vishal Niranjan Kapal ",
    role: "Founder and Director ( Sports Management)",
    email: "kapalvishal7@gmail.com",
    phone: "+91  90822 98108",
    img: "/team-mates/vishal.jpg",
  },
  {
    name: "Mr. Shriniwas Ramkumar Gupta",
    role: "Finance and Administrative Manager",
    email: "Guptashree469@gmail.com",
    phone: "+91 91525 37011",
    img: "/team-mates/shribiwas.jpg",
  },
  {
    name: "Ms. Amit Bedprakash pandey",
    role: "Head of Digital Strategy and technology",
    email: "amitvedprakashpandey@gmail.com",
    phone: "+91 91379 76758",
    img: "/team-mates/",
  },
  {
    name: "Ms. Bikash Krishna Panga",
    role: "Chief Technology Officer",
    email: "pangsbikashkrishna@gmail.com",
    phone: "+91 93482 58150",
    img: "/team-mates/bikash.jpg",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    userType: "student",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      userType: "student",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              Get In Touch
            </Badge>

            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Contact <span className="text-[var(--color-gold)]">Us</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Have Questions? • Need Support? • We're Here to Help!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
              <div className="space-y-2">
                <MessageCircle className="h-8 w-8 text-[var(--color-gold)] mx-auto" />
                <div className="text-sm text-blue-200">Quick Response</div>
                <div className="text-lg font-semibold">24-48 Hours</div>
              </div>
              <div className="space-y-2">
                <Users className="h-8 w-8 text-[var(--color-gold)] mx-auto" />
                <div className="text-sm text-blue-200">Dedicated Support</div>
                <div className="text-lg font-semibold">Expert Team</div>
              </div>
              <div className="space-y-2">
                <Award className="h-8 w-8 text-[var(--color-gold)] mx-auto" />
                <div className="text-sm text-blue-200">Satisfaction</div>
                <div className="text-lg font-semibold">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[var(--color-royal-blue)] mb-4">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="border-0 shadow-lg bg-green-50">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-600">
                      Thank you for contacting us. We'll respond to your inquiry
                      within 24-48 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 bg-green-600 hover:bg-green-700"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="userType"
                            className="text-sm font-medium"
                          >
                            I am a *
                          </label>
                          <select
                            id="userType"
                            name="userType"
                            value={formData.userType}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                            required
                          >
                            <option value="student">Student</option>
                            <option value="parent">Parent/Guardian</option>
                            <option value="teacher">Teacher</option>
                            <option value="principal">Principal</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium"
                        >
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What is your inquiry about?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please provide details about your inquiry..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[var(--color-royal-blue)] mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of the following channels. We're
                  here to help!
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[var(--color-royal-blue)] p-3 rounded-lg">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p
                              key={idx}
                              className="text-muted-foreground text-sm"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg bg-[var(--color-gold)]/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-[var(--color-royal-blue)]" />
                    <span>Need Immediate Help?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent inquiries, call our helpline directly:
                  </p>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-[var(--color-royal-blue)]">
                      +91 93265 84482
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Available: Mon-Sat, 8 AM - 4 PM
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-royal-blue)] mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our dedicated team is here to ensure your competition experience
              is smooth and successful
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-fit gap-8"
     style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
  {teamMembers.map((member, index) => (
    <Card
      key={index}
      className="border-0 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <CardContent className="p-0">
        {/* Profile Image */}
        <div className="relative flex justify-center pt-5">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition duration-300 flex items-center justify-center opacity-0 hover:opacity-100 rounded-full">
              <a
                href={`mailto:${member.email}`}
                className="bg-white text-[var(--color-royal-blue)] text-xs font-medium px-3 py-1 rounded-full shadow-md"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Member Info */}
        <div className="p-5 text-center">
          <h3 className="font-bold text-lg text-gray-900 mb-1">
            {member.name}
          </h3>
          <p className="text-[var(--color-royal-blue)] font-medium text-sm mb-3">
            {member.role}
          </p>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4 text-[var(--color-royal-blue)]" />
              <span>{member.email}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4 text-[var(--color-royal-blue)]" />
              <span>{member.phone}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-royal-blue)] mb-4">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground text-lg">
              Located in the heart of kalyan district
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="h-12 w-12 text-[var(--color-royal-blue)] mx-auto" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">
                    Rai's Aragya, near smart point , 100ft road, kalyan east
                    421306
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <Calendar className="h-5 w-5 text-[var(--color-royal-blue)] mx-auto" />
                    <div className="text-sm font-medium">Office Hours</div>
                    <div className="text-xs text-muted-foreground">
                      Mon-Sat: 8 AM - 4 PM
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Phone className="h-5 w-5 text-[var(--color-royal-blue)] mx-auto" />
                    <div className="text-sm font-medium">Call Us</div>
                    <div className="text-xs text-muted-foreground">
                      +91 93265 84482
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Mail className="h-5 w-5 text-[var(--color-royal-blue)] mx-auto" />
                    <div className="text-sm font-medium">Email Us</div>
                    <div className="text-xs text-muted-foreground">
                      info@interschoolosf.in
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
