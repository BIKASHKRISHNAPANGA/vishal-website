import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Calculator,
  Atom,
  Globe,
  Brain,
  FileText,
  Target,
  Award,
  CheckCircle,
  BookOpen,
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react"

const academicSubjects = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: Calculator,
    description: "Comprehensive mathematical problem-solving across all major topics",
    topics: [
      "Number System & Operations",
      "Algebra & Linear Equations",
      "Geometry & Mensuration",
      "Statistics & Probability",
      "Trigonometry (Cat 3 only)",
    ],
    categoryDetails: {
      "Category 1 (5th-6th)": [
        "Basic arithmetic operations",
        "Simple fractions and decimals",
        "Basic geometry shapes",
        "Elementary word problems",
      ],
      "Category 2 (7th-8th)": [
        "Algebraic expressions",
        "Linear equations in one variable",
        "Area and perimeter calculations",
        "Data interpretation",
      ],
      "Category 3 (9th-10th)": [
        "Quadratic equations",
        "Coordinate geometry",
        "Trigonometric ratios",
        "Advanced statistics",
      ],
    },
    sampleQuestions: [
      "If 3x + 5 = 20, find the value of x",
      "Calculate the area of a triangle with base 8cm and height 6cm",
      "Find the mean of the data set: 12, 15, 18, 20, 25",
    ],
  },
  {
    id: "science",
    name: "Science",
    icon: Atom,
    description: "Integrated science covering Physics, Chemistry, and Biology concepts",
    topics: [
      "Physics: Motion, Force, Energy",
      "Chemistry: Matter, Atoms, Reactions",
      "Biology: Life Processes, Genetics",
      "Environmental Science",
      "Scientific Method & Experiments",
    ],
    categoryDetails: {
      "Category 1 (5th-6th)": [
        "Basic properties of matter",
        "Simple machines and forces",
        "Plant and animal life cycles",
        "Weather and seasons",
      ],
      "Category 2 (7th-8th)": [
        "Acids, bases, and salts",
        "Light and sound waves",
        "Human body systems",
        "Natural resources",
      ],
      "Category 3 (9th-10th)": [
        "Atomic structure and periodic table",
        "Laws of motion and gravitation",
        "Heredity and evolution",
        "Carbon compounds",
      ],
    },
    sampleQuestions: [
      "What is the chemical formula for water?",
      "Which organ in the human body produces insulin?",
      "State Newton's first law of motion",
    ],
  },
  {
    id: "general-knowledge",
    name: "General Knowledge",
    icon: Globe,
    description: "Current affairs, history, geography, and general awareness",
    topics: [
      "Current Affairs & News",
      "Indian History & Freedom Struggle",
      "World Geography & Capitals",
      "Sports & Games",
      "Literature & Arts",
    ],
    categoryDetails: {
      "Category 1 (5th-6th)": [
        "Basic facts about India",
        "Famous personalities",
        "Important festivals",
        "Simple current events",
      ],
      "Category 2 (7th-8th)": [
        "Indian states and capitals",
        "Historical events and dates",
        "International organizations",
        "Recent developments",
      ],
      "Category 3 (9th-10th)": [
        "Constitutional facts",
        "Economic and political awareness",
        "Global current affairs",
        "Scientific discoveries",
      ],
    },
    sampleQuestions: [
      "Who is the current President of India?",
      "Which river is known as the Ganga of the South?",
      "In which year did India gain independence?",
    ],
  },
  {
    id: "logical-reasoning",
    name: "Logical Reasoning",
    icon: Brain,
    description: "Analytical thinking, pattern recognition, and problem-solving skills",
    topics: [
      "Pattern Recognition & Series",
      "Analogies & Classifications",
      "Coding-Decoding",
      "Logical Puzzles",
      "Direction & Distance",
    ],
    categoryDetails: {
      "Category 1 (5th-6th)": ["Simple number patterns", "Basic analogies", "Picture puzzles", "Odd one out"],
      "Category 2 (7th-8th)": [
        "Letter and number series",
        "Simple coding problems",
        "Logical sequences",
        "Basic reasoning",
      ],
      "Category 3 (9th-10th)": [
        "Complex pattern analysis",
        "Advanced coding-decoding",
        "Syllogisms",
        "Critical reasoning",
      ],
    },
    sampleQuestions: [
      "Complete the series: 2, 4, 8, 16, ?",
      "If BOOK is coded as CPPL, how is WORD coded?",
      "Find the odd one out: Apple, Banana, Carrot, Orange",
    ],
  },
]

export default function AcademicEventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              Academic Competitions
            </Badge>

            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Academic <span className="text-[var(--color-gold)]">Excellence</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Test your knowledge across Mathematics, Science, General Knowledge & Logical Reasoning
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">50</div>
                <div className="text-sm text-blue-200">Questions</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">2</div>
                <div className="text-sm text-blue-200">Hours</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">0</div>
                <div className="text-sm text-blue-200">Negative Marks</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">₹299</div>
                <div className="text-sm text-blue-200">Per Subject</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {academicSubjects.map((subject, index) => (
              <Card key={subject.id} className="border-0 shadow-lg" id={subject.id}>
                <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                  <CardTitle className="flex items-center space-x-3">
                    <subject.icon className="h-8 w-8" />
                    <span className="text-2xl">{subject.name}</span>
                    <Badge className="bg-[var(--color-gold)] text-black ml-auto">₹299</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <p className="text-lg text-muted-foreground">{subject.description}</p>

                  {/* Topics Covered */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-[var(--color-royal-blue)]" />
                      <span>Topics Covered</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {subject.topics.map((topic) => (
                        <div key={topic} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category-wise Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-[var(--color-royal-blue)]" />
                      <span>Category-wise Difficulty Levels</span>
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {Object.entries(subject.categoryDetails).map(([category, details]) => (
                        <Card key={category} className="bg-muted/30">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">
                              {category.includes("5th-6th") && (
                                <Badge className="bg-green-500 text-white mr-2">Cat 1</Badge>
                              )}
                              {category.includes("7th-8th") && (
                                <Badge className="bg-[var(--color-gold)] text-black mr-2">Cat 2</Badge>
                              )}
                              {category.includes("9th-10th") && (
                                <Badge className="bg-[var(--color-royal-blue)] text-white mr-2">Cat 3</Badge>
                              )}
                              {category}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <ul className="space-y-2 text-sm">
                              {details.map((detail, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-[var(--color-royal-blue)] rounded-full mt-2" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Sample Questions */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-[var(--color-royal-blue)]" />
                      <span>Sample Questions</span>
                    </h3>
                    <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                      {subject.sampleQuestions.map((question, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Badge variant="outline" className="text-xs">
                            Q{idx + 1}
                          </Badge>
                          <span className="text-sm">{question}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <Button
                      className="w-full md:w-auto bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90 btn-hover-lift"
                      size="lg"
                      asChild
                    >
                      <Link href="/students/register">Register for {subject.name}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Rules */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Target className="h-6 w-6" />
                  <span>Competition Rules & Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Examination Format</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>50 multiple-choice questions per subject</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Each question carries 1 mark</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>No negative marking for incorrect answers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>2-hour duration per subject</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Online examination format</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Qualification & Scoring</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <Award className="h-4 w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Minimum 50% score required for finals</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="h-4 w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Category-wise ranking and prizes</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="h-4 w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Subject-wise certificates for all participants</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="h-4 w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Merit certificates for top performers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="h-4 w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Scholarship opportunities for winners</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-[var(--color-royal-blue)] mb-3 flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Important Dates</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Registration Deadline:</strong> October 20, 2024
                    </div>
                    <div>
                      <strong>Admit Card Release:</strong> November 1, 2024
                    </div>
                    <div>
                      <strong>Examination Dates:</strong> November 15-16, 2024
                    </div>
                    <div>
                      <strong>Results Declaration:</strong> November 30, 2024
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Register now for academic competitions and compete with students from across the country
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 btn-hover-lift text-lg px-8 py-3"
              asChild
            >
              <Link href="/students/register">Register for Academic Events</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--color-royal-blue)] btn-hover-lift text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>10,000+ students participating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>No negative marking</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
