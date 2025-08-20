// pages/olympiad/index.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
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
  PenTool,
  Clock,
  Star,
  Lightbulb,
  Edit3,
} from "lucide-react";

// This data would come from your backend in the future
const academicSubjects = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: Calculator,
    description:
      "Comprehensive mathematical problem-solving across all major topics",
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
    description:
      "Integrated science covering Physics, Chemistry, and Biology concepts",
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
    description:
      "Analytical thinking, pattern recognition, and problem-solving skills",
    topics: [
      "Pattern Recognition & Series",
      "Analogies & Classifications",
      "Coding-Decoding",
      "Logical Puzzles",
      "Direction & Distance",
    ],
    categoryDetails: {
      "Category 1 (5th-6th)": [
        "Simple number patterns",
        "Basic analogies",
        "Picture puzzles",
        "Odd one out",
      ],
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
];

const evaluationCriteria = [
  {
    criterion: "Content & Ideas",
    percentage: 30,
    description:
      "Originality of ideas, depth of understanding, relevance to topic",
    tips: [
      "Develop unique perspectives on the given topic",
      "Show deep understanding of the book's themes",
      "Connect ideas to real-world examples",
      "Demonstrate critical thinking",
    ],
  },
  {
    criterion: "Language & Grammar",
    percentage: 25,
    description: "Vocabulary usage, sentence structure, grammatical accuracy",
    tips: [
      "Use varied and appropriate vocabulary",
      "Maintain proper sentence structure",
      "Ensure grammatical accuracy",
      "Avoid repetitive language patterns",
    ],
  },
  {
    criterion: "Structure & Organization",
    percentage: 25,
    description:
      "Logical flow, paragraph structure, introduction and conclusion",
    tips: [
      "Create a compelling introduction",
      "Maintain logical paragraph progression",
      "Use smooth transitions between ideas",
      "End with a strong conclusion",
    ],
  },
  {
    criterion: "Creativity & Originality",
    percentage: 20,
    description: "Unique approach, creative expression, innovative thinking",
    tips: [
      "Present fresh perspectives",
      "Use creative literary devices",
      "Show innovative thinking",
      "Demonstrate personal voice",
    ],
  },
];

const selectedBooks = [
  {
    id: "alchemist",
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "A philosophical novel about a young shepherd's journey to find treasure and discover his personal legend",
    themes: [
      "Dreams and Personal Legend",
      "Journey of Self-Discovery",
      "The Language of the Universe",
      "Love and Sacrifice",
      "Spiritual Awakening",
    ],
    keyQuotes: [
      "When you want something, all the universe conspires in helping you to achieve it.",
      "The secret of life, though, is to fall seven times and to get up eight times.",
      "People are capable, at any time in their lives, of doing what they dream of.",
    ],
    possibleTopics: [
      "The role of dreams in shaping our destiny",
      "How obstacles become opportunities for growth",
      "The importance of listening to your heart",
      "The connection between personal journey and universal wisdom",
    ],
  },
  {
    id: "wonder",
    title: "Wonder",
    author: "R.J. Palacio",
    description:
      "A heartwarming story about a boy with facial differences navigating school and friendship",
    themes: [
      "Kindness and Empathy",
      "Acceptance and Inclusion",
      "Courage and Resilience",
      "Friendship and Loyalty",
      "Family Support",
    ],
    keyQuotes: [
      "When given the choice between being right or being kind, choose kind.",
      "You can't blend in when you were born to stand out.",
      "Courage. Kindness. Friendship. Character. These are the qualities that define us as human beings.",
    ],
    possibleTopics: [
      "The power of kindness in transforming lives",
      "How differences make us unique and valuable",
      "The role of family in building confidence",
      "Standing up against bullying and prejudice",
    ],
  },
];

const writingTips = [
  {
    category: "Planning",
    icon: Target,
    tips: [
      "Read the topic carefully and understand what's being asked",
      "Spend 5-10 minutes planning your essay structure",
      "Create a brief outline with main points",
      "Identify relevant examples from the books",
    ],
  },
  {
    category: "Writing",
    icon: Edit3,
    tips: [
      "Start with an engaging introduction that hooks the reader",
      "Use topic sentences to begin each paragraph",
      "Support your arguments with specific examples from the books",
      "Maintain a consistent tone throughout",
    ],
  },
  {
    category: "Language",
    icon: BookOpen,
    tips: [
      "Use varied sentence structures (simple, compound, complex)",
      "Choose precise and impactful vocabulary",
      "Avoid repetition of words and phrases",
      "Use literary devices like metaphors and similes appropriately",
    ],
  },
  {
    category: "Conclusion",
    icon: Lightbulb,
    tips: [
      "Summarize your main arguments effectively",
      "End with a thought-provoking statement",
      "Connect back to your introduction",
      "Leave the reader with something to ponder",
    ],
  },
];

export default function OlympiadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              Academic & Essay Competitions
            </Badge>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Academic{" "}
              <span className="text-[var(--color-gold)]">Olympiad</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Test your knowledge across Mathematics, Science, General
              Knowledge, Logical Reasoning & Essay Writing
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-bold text-[var(--color-gold)]">
                  50
                </div>
                <div className="text-xs md:text-sm text-blue-200">
                  Questions
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-bold text-[var(--color-gold)]">
                  2
                </div>
                <div className="text-xs md:text-sm text-blue-200">Hours</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-bold text-[var(--color-gold)]">
                  0
                </div>
                <div className="text-xs md:text-sm text-blue-200">
                  Negative Marks
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-bold text-[var(--color-gold)]">
                  ₹299
                </div>
                <div className="text-xs md:text-sm text-blue-200">
                  Per Subject
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Details */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-10 md:space-y-12">
            {academicSubjects.map((subject, index) => (
              <Card
                key={subject.id}
                className="border-0 shadow-lg"
                id={subject.id}
              >
                <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                  <CardTitle className="flex items-center space-x-2 md:space-x-3">
                    <subject.icon className="h-6 w-6 md:h-8 md:w-8" />
                    <span className="text-xl md:text-2xl">{subject.name}</span>
                    <Badge className="bg-[var(--color-gold)] text-black ml-auto text-xs md:text-sm">
                      ₹299
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
                  <p className="text-base md:text-lg text-muted-foreground">
                    {subject.description}
                  </p>

                  {/* Topics Covered */}
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-[var(--color-royal-blue)]" />
                      <span>Topics Covered</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                      {subject.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                          <span className="text-xs md:text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category-wise Details */}
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-[var(--color-royal-blue)]" />
                      <span>Category-wise Difficulty Levels</span>
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                      {Object.entries(subject.categoryDetails).map(
                        ([category, details]) => (
                          <Card key={category} className="bg-muted/30">
                            <CardHeader className="pb-2 md:pb-3">
                              <CardTitle className="text-base md:text-lg">
                                {category.includes("5th-6th") && (
                                  <Badge className="bg-green-500 text-white mr-2 text-xs">
                                    Cat 1
                                  </Badge>
                                )}
                                {category.includes("7th-8th") && (
                                  <Badge className="bg-[var(--color-gold)] text-black mr-2 text-xs">
                                    Cat 2
                                  </Badge>
                                )}
                                {category.includes("9th-10th") && (
                                  <Badge className="bg-[var(--color-royal-blue)] text-white mr-2 text-xs">
                                    Cat 3
                                  </Badge>
                                )}
                                {category}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                                {details.map((detail, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start space-x-2"
                                  >
                                    <div className="w-1 h-1 bg-[var(--color-royal-blue)] rounded-full mt-2" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        )
                      )}
                    </div>
                  </div>

                  {/* Sample Questions */}
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl flex items-center space-x-2">
                      <FileText className="h-4 w-4 md:h-5 md:w-5 text-[var(--color-royal-blue)]" />
                      <span>Sample Questions</span>
                    </h3>
                    <div className="bg-blue-50 p-4 md:p-6 rounded-lg space-y-2 md:space-y-3">
                      {subject.sampleQuestions.map((question, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2 md:space-x-3"
                        >
                          <Badge variant="outline" className="text-xs">
                            Q{idx + 1}
                          </Badge>
                          <span className="text-xs md:text-sm">{question}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 md:pt-6 border-t">
                    <Button
                      className="w-full md:w-auto bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90 btn-hover-lift text-sm md:text-base"
                      size="lg"
                      asChild
                    >
                      <Link href="/students/register">
                        Register for {subject.name}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Essay Writing Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Essay Writing Competition
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Express Your Thoughts • Showcase Creativity • Win Recognition
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-purple-600 text-white">
                <CardTitle className="flex items-center space-x-2 md:space-x-3 text-xl md:text-2xl">
                  <PenTool className="h-5 w-5 md:h-6 md:w-6" />
                  <span>Essay Writing Challenge Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-semibold text-base md:text-lg">
                      Competition Rules
                    </h3>
                    <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                      <li className="flex items-start space-x-2">
                        <Clock className="h-3 w-3 md:h-4 md:w-4 text-purple-600 mt-0.5" />
                        <span>Duration: 1 hour (60 minutes)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FileText className="h-3 w-3 md:h-4 md:w-4 text-purple-600 mt-0.5" />
                        <span>Word limit: 250-300 words</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <BookOpen className="h-3 w-3 md:h-4 md:w-4 text-purple-600 mt-0.5" />
                        <span>Topic based on pre-selected books</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Edit3 className="h-3 w-3 md:h-4 md:w-4 text-purple-600 mt-0.5" />
                        <span>Handwritten essays only</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-purple-600 mt-0.5" />
                        <span>Original work required (no plagiarism)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-semibold text-base md:text-lg">
                      What You Need
                    </h3>
                    <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>Complete reading of both selected books</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>Understanding of themes and characters</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>Good command of English language</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>Creative and analytical thinking</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>Proper essay writing structure knowledge</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 md:p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-600 mb-2 md:mb-3 text-sm md:text-base">
                    Important Notes:
                  </h4>
                  <ul className="text-xs md:text-sm space-y-1 md:space-y-2">
                    <li>
                      • Essay topic will be revealed only on the day of
                      competition
                    </li>
                    <li>
                      • Students must have read both books thoroughly before the
                      competition
                    </li>
                    <li>
                      • Essays will be evaluated by experienced literature
                      teachers and writers
                    </li>
                    <li>
                      • Winners will be announced within one week of the
                      competition
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selected Books */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Pre-Selected Books (2024)
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Students must read both books thoroughly before the competition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {selectedBooks.map((book) => (
              <Card key={book.id} className="border-0 shadow-lg">
                <CardHeader className="bg-[var(--color-gold)] text-black">
                  <CardTitle className="text-lg md:text-xl">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl">
                          {book.title}
                        </h3>
                        <p className="text-xs md:text-sm opacity-80">
                          by {book.author}
                        </p>
                      </div>
                      <BookOpen className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 space-y-4 md:space-y-6">
                  <p className="text-muted-foreground text-sm md:text-base">
                    {book.description}
                  </p>

                  {/* Themes */}
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="font-semibold text-xs md:text-sm">
                      Major Themes:
                    </h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {book.themes.map((theme) => (
                        <Badge
                          key={theme}
                          variant="outline"
                          className="text-xs"
                        >
                          {theme}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Quotes */}
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="font-semibold text-xs md:text-sm">
                      Key Quotes:
                    </h4>
                    <div className="space-y-1 md:space-y-2">
                      {book.keyQuotes.map((quote, idx) => (
                        <blockquote
                          key={idx}
                          className="text-xs italic border-l-2 border-[var(--color-gold)] pl-2 md:pl-3"
                        >
                          "{quote}"
                        </blockquote>
                      ))}
                    </div>
                  </div>

                  {/* Possible Topics */}
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="font-semibold text-xs md:text-sm">
                      Possible Essay Topics:
                    </h4>
                    <ul className="space-y-1 text-xs">
                      {book.possibleTopics.map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Star className="h-3 w-3 text-[var(--color-gold)] mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Evaluation Criteria
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Understanding how your essay will be judged helps you focus on key
              areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {evaluationCriteria.map((criteria) => (
              <Card key={criteria.criterion} className="border-0 shadow-lg">
                <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                  <CardTitle className="flex items-center justify-between text-base md:text-lg">
                    <span>{criteria.criterion}</span>
                    <Badge className="bg-[var(--color-gold)] text-black text-sm md:text-base px-2 md:px-3 py-1">
                      {criteria.percentage}%
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {criteria.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-xs md:text-sm">
                      Tips to Excel:
                    </h4>
                    <ul className="space-y-1 text-xs">
                      {criteria.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-600 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Tips */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Writing Tips & Strategies
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Expert advice to help you write compelling and well-structured
              essays
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {writingTips.map((section) => (
              <Card
                key={section.category}
                className="card-hover border-0 shadow-lg"
              >
                <CardHeader className="bg-green-600 text-white text-center">
                  <CardTitle className="flex flex-col items-center space-y-2">
                    <section.icon className="h-6 w-6 md:h-8 md:w-8" />
                    <span className="text-sm md:text-base">
                      {section.category}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 md:p-4">
                  <ul className="space-y-1 md:space-y-2 text-xs">
                    {section.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-green-600 rounded-full mt-2" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Rules */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center space-x-2 text-xl md:text-2xl">
                  <Target className="h-5 w-5 md:h-6 md:w-6" />
                  <span>Competition Rules & Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-semibold text-base md:text-lg">
                      Examination Format
                    </h3>
                    <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>50 multiple-choice questions per subject</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>Each question carries 1 mark</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>No negative marking for incorrect answers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>2-hour duration per subject</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>Online examination format</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-semibold text-base md:text-lg">
                      Qualification & Scoring
                    </h3>
                    <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                      <li className="flex items-start space-x-2">
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Minimum 50% score required for finals</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Category-wise ranking and prizes</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>
                          Subject-wise certificates for all participants
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Merit certificates for top performers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Scholarship opportunities for winners</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 md:p-6 rounded-lg">
                  <h4 className="font-semibold text-[var(--color-royal-blue)] mb-2 md:mb-3 flex items-center space-x-2 text-sm md:text-base">
                    <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                    <span>Important Dates</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Test Your Knowledge?
          </h2>
          <p className="text-blue-200 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Register now for academic competitions and compete with students
            from across the country
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 btn-hover-lift text-sm md:text-base px-6 md:px-8 py-2 md:py-3"
              asChild
            >
              <Link href="/students/register">
                Register for Academic Events
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--color-royal-blue)] btn-hover-lift text-sm md:text-base px-6 md:px-8 py-2 md:py-3 bg-transparent"
              asChild
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Users className="h-3 w-3 md:h-4 md:w-4" />
              <span>10,000+ students participating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3 md:h-4 md:w-4" />
              <span>No negative marking</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
