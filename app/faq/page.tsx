"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, HelpCircle, BookOpen, Trophy, Users, CreditCard } from "lucide-react"

const faqData = [
  {
    category: "Registration",
    icon: Users,
    questions: [
      {
        question: "How do I register for the School of the Year competition?",
        answer:
          "You can register in two ways: 1) Individual student registration through our website, or 2) School bulk registration. Visit our registration page, fill out the required information, upload necessary documents, and complete the payment process.",
      },
      {
        question: "What is the registration deadline?",
        answer:
          "Registration closes on October 20, 2024 at 11:59 PM. We recommend registering early as seats are limited and allocated on a first-come, first-served basis.",
      },
      {
        question: "Can I register for multiple events?",
        answer:
          "Yes! You can register for multiple academic subjects and sports events. The registration fee will be calculated automatically based on your selections. Individual events cost ₹299 each, while team events are fee according to the event.",
      },
      {
        question: "What documents do I need for registration?",
        answer:
          "You'll need: 1) School ID card or certificate, 2) Recent passport-size photograph, 3) Parent/guardian consent form (for minors) 4) Addhar card or Birth Certificate",
      },
    ],
  },
  {
    category: "Fees & Payment",
    icon: CreditCard,
    questions: [
      {
        question: "What are the registration fees?",
        answer:
          "Registration fees vary by event type: Individual academic subjects and sports events cost ₹299 each. Team sports events Team registration fee as per the game.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets through our secure payment gateway powered by Razorpay.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Refunds are available up to 7 days before the event date with a 10% processing fee. No refunds are provided within 7 days of the event or after the event has commenced. Medical emergencies are considered on a case-by-case basis.",
      },
      {
        question: "Can I get a receipt for my payment?",
        answer:
          "Yes, you'll receive an automated payment receipt via email immediately after successful payment. You can also download receipts from your participant dashboard at any time.",
      },
    ],
  },
  {
    category: "Academic Events",
    icon: BookOpen,
    questions: [
      {
        question: "What subjects are included in academic competitions?",
        answer:
          "Academic competitions include Mathematics, Science, General Knowledge, and Logical Reasoning. Each subject has 50 questions worth 1 mark each, with no negative marking. The duration is 2 hours per subject.",
      },
      {
        question: "How are students categorized for academic events?",
        answer:
          "Students are automatically categorized by grade: Category 1 (5th & 6th grade), Category 2 (7th & 8th grade), and Category 3 (9th & 10th grade). This ensures fair competition among peers.",
      },
      {
        question: "What is the format of the academic tests?",
        answer:
          "All academic tests are multiple-choice questions (MCQs) conducted online. Each subject has 50 questions, 1 mark per question, no negative marking, and 2-hour duration. You must score >50% to qualify for finals.",
      },
      {
        question: "Are there any preparation materials available?",
        answer:
          "Yes! We offer preparation books and study materials through our Books Store. These materials are specifically designed for each grade category and subject, created by expert educators.",
      },
    ],
  },
  {
    category: "Sports Events",
    icon: Trophy,
    questions: [
      {
        question: "What sports events are available?",
        answer:
          "We offer Cricket (T-20), Football, Kandali, Kho-kho, 150m Relay Race, Track events (100m, 200m, 400m, 1km), High jump, Discus throw, Shot put, Chess, and Badminton. Both individual and team events are available.",
      },
      {
        question: "What are the age categories for sports?",
        answer:
          "Sports events are divided into three age categories: Under-12 (U-12), Under-14 (U-14), and Under-16 (U-16). Participants compete only within their age group for fair competition.",
      },
      {
        question: "Do I need any special equipment for sports events?",
        answer:
          "Basic sports equipment will be provided by the organizers. However, participants are encouraged to bring their personal gear for comfort and familiarity, especially for events like badminton rackets or chess sets.",
      },
      {
        question: "What if I get injured during a sports event?",
        answer:
          "We have qualified medical staff and first aid facilities available at all venues. Participants must have medical fitness certificates, and we recommend sports insurance coverage.",
      },
    ],
  },
  {
    category: "Competition Format",
    icon: HelpCircle,
    questions: [
      {
        question: "How do prelims and finals work?",
        answer:
          "Prelims are qualifying rounds where you must score >50% in academic subjects to advance. Top performers from prelims advance to finals. Sports events may have multiple rounds depending on the number of participants.",
      },
      {
        question: "When and where will the events be held?",
        answer:
          "Events will be held across multiple venues in the Kalyan Dombivali region specific dates times and venue will be updated via school and even on website. Specific dates, times, and venues will be communicated to registered participants via email and SMS 2 weeks before the event.",
      },
      {
        question: "Can I participate if I'm homeschooled?",
        answer:
          "Yes, homeschooled students can participate. You'll need to provide alternative documentation such as homeschool registration certificates and parent/guardian attestation of your grade level.",
      },
      {
        question: "What happens if I miss my scheduled event?",
        answer:
          "Unfortunately, make-up sessions are not available for missed events. Participants must arrive at least 30 minutes before their scheduled time. We recommend confirming your schedule multiple times before the event date.",
      },
    ],
  },
  {
    category: "Prizes & Recognition",
    icon: Trophy,
    questions: [
      {
        question: "What prizes can I win?",
        answer:
          "Scholarship up to 50percent, laptop and tabs, trophy medals and certificates",
      },
      {
        question: "How are winners determined?",
        answer:
          "Winners are determined based on performance in their respective categories and age groups. Academic events are scored based on correct answers, while sports events follow standard sporting rules and regulations.",
      },
      {
        question: "When will results be announced?",
        answer:
          "Preliminary results are typically announced within 48 hours of the event. Final results and prize distribution details are communicated within one week. All participants receive participation certificates.",
      },
      {
        question: "How do I claim my prize?",
        answer:
          "Prize distribution details are sent to winners via email and SMS. Prizes are typically distributed during award ceremonies or sent via secure courier. Scholarship details are coordinated with relevant educational institutions.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredFAQs = faqData.filter((category) => {
    const categoryMatch = selectedCategory === "all" || category.category.toLowerCase() === selectedCategory
    const searchMatch =
      searchTerm === "" ||
      category.questions.some(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    return categoryMatch && searchMatch
  })

  const categories = ["all", ...faqData.map((cat) => cat.category.toLowerCase())]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90">
              Frequently Asked Questions
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              Got Questions? We've Got{" "}
              <span className="text-[var(--color-gold)]">Answers</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about registration, events, fees,
              and more
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className={`cursor-pointer px-4 py-2 ${
                    selectedCategory === category
                      ? "bg-[var(--color-royal-blue)] text-white hover:bg-[var(--color-royal-blue)]/90"
                      : "hover:bg-[var(--color-royal-blue)]/10"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all"
                    ? "All Categories"
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[var(--color-royal-blue)]/10 p-3 rounded-full">
                      <category.icon className="h-6 w-6 text-[var(--color-royal-blue)]" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                      {category.category}
                    </h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions
                      .filter(
                        (q) =>
                          searchTerm === "" ||
                          q.question
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          q.answer
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                      )
                      .map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border border-border rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-4">
                            <span className="font-semibold text-foreground pr-4">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}

            {filteredFAQs.length === 0 && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-12 text-center">
                  <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    No questions found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or category filter
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[var(--color-gold)]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-[var(--color-royal-blue)] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help
            you with any questions about the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-royal-blue)] text-white rounded-lg hover:bg-[var(--color-royal-blue)]/90 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="mailto:info@interschoolosf.in"
              className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-royal-blue)] text-[var(--color-royal-blue)] rounded-lg hover:bg-[var(--color-royal-blue)] hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
