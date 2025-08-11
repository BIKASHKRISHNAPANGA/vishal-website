import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { PenTool, BookOpen, Clock, FileText, CheckCircle, Star, Calendar, Target, Lightbulb, Edit3 } from "lucide-react"

const evaluationCriteria = [
  {
    criterion: "Content & Ideas",
    percentage: 30,
    description: "Originality of ideas, depth of understanding, relevance to topic",
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
    description: "Logical flow, paragraph structure, introduction and conclusion",
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
]

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
    description: "A heartwarming story about a boy with facial differences navigating school and friendship",
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
]

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
]

export default function EssayWritingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              Essay Writing Competition
            </Badge>

            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Essay Writing <span className="text-[var(--color-gold)]">Challenge</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Express Your Thoughts • Showcase Creativity • Win Recognition
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">1</div>
                <div className="text-sm text-blue-200">Hour Duration</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">2</div>
                <div className="text-sm text-blue-200">Selected Books</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">500-800</div>
                <div className="text-sm text-blue-200">Word Limit</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[var(--color-gold)]">₹299</div>
                <div className="text-sm text-blue-200">Registration Fee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Format */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Competition Format
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A structured essay writing competition based on carefully selected literary works
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-purple-600 text-white">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <PenTool className="h-6 w-6" />
                  <span>Essay Writing Challenge Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Competition Rules</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <Clock className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Duration: 1 hour (60 minutes)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FileText className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Word limit: 500-800 words</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <BookOpen className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Topic based on pre-selected books</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Edit3 className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Handwritten essays only</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Original work required (no plagiarism)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">What You Need</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Complete reading of both selected books</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Understanding of themes and characters</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Good command of English language</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Creative and analytical thinking</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Proper essay writing structure knowledge</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-600 mb-3">Important Notes:</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Essay topic will be revealed only on the day of competition</li>
                    <li>• Students must have read both books thoroughly before the competition</li>
                    <li>• Essays will be evaluated by experienced literature teachers and writers</li>
                    <li>• Winners will be announced within one week of the competition</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selected Books */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Pre-Selected Books (2024)
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Students must read both books thoroughly before the competition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {selectedBooks.map((book) => (
              <Card key={book.id} className="border-0 shadow-lg">
                <CardHeader className="bg-[var(--color-gold)] text-black">
                  <CardTitle className="text-xl">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-2xl">{book.title}</h3>
                        <p className="text-sm opacity-80">by {book.author}</p>
                      </div>
                      <BookOpen className="h-8 w-8" />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <p className="text-muted-foreground">{book.description}</p>

                  {/* Themes */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Major Themes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {book.themes.map((theme) => (
                        <Badge key={theme} variant="outline" className="text-xs">
                          {theme}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Quotes */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Key Quotes:</h4>
                    <div className="space-y-2">
                      {book.keyQuotes.map((quote, idx) => (
                        <blockquote key={idx} className="text-xs italic border-l-2 border-[var(--color-gold)] pl-3">
                          "{quote}"
                        </blockquote>
                      ))}
                    </div>
                  </div>

                  {/* Possible Topics */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Possible Essay Topics:</h4>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Evaluation Criteria
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Understanding how your essay will be judged helps you focus on key areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {evaluationCriteria.map((criteria) => (
              <Card key={criteria.criterion} className="border-0 shadow-lg">
                <CardHeader className="bg-[var(--color-royal-blue)] text-white">
                  <CardTitle className="flex items-center justify-between">
                    <span>{criteria.criterion}</span>
                    <Badge className="bg-[var(--color-gold)] text-black text-lg px-3 py-1">
                      {criteria.percentage}%
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground text-sm">{criteria.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Tips to Excel:</h4>
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Writing Tips & Strategies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert advice to help you write compelling and well-structured essays
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {writingTips.map((section) => (
              <Card key={section.category} className="card-hover border-0 shadow-lg">
                <CardHeader className="bg-green-600 text-white text-center">
                  <CardTitle className="flex flex-col items-center space-y-2">
                    <section.icon className="h-8 w-8" />
                    <span>{section.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2 text-xs">
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

      {/* Important Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-orange-500 text-white">
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Calendar className="h-6 w-6" />
                  <span>Important Dates & Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Key Dates</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>
                          <strong>Registration Deadline:</strong> October 20, 2024
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>
                          <strong>Competition Date:</strong> November 16, 2024
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>
                          <strong>Results Announcement:</strong> November 23, 2024
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>
                          <strong>Award Ceremony:</strong> November 30, 2024
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Prizes & Recognition</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <Star className="h-4 w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>
                          <strong>1st Place:</strong> ₹5,000 + Trophy + Certificate
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Star className="h-4 w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>
                          <strong>2nd Place:</strong> ₹3,000 + Trophy + Certificate
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Star className="h-4 w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>
                          <strong>3rd Place:</strong> ₹2,000 + Trophy + Certificate
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Star className="h-4 w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>
                          <strong>Top 10:</strong> Certificate of Excellence
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-600 mb-3">Registration Requirements:</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Registration fee: ₹299 (non-refundable)</li>
                    <li>• Must be enrolled in grades 5-10</li>
                    <li>• School registration required before student registration</li>
                    <li>• Valid school ID and contact information needed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-royal-blue)] to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Ready to Showcase Your Writing Skills?</h2>
            <p className="text-xl text-blue-100">
              Join hundreds of students in this exciting essay writing competition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/students/register"
                className="bg-[var(--color-gold)] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-gold)]/90 transition-colors"
              >
                Register Now
              </a>
              <a
                href="/events"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-royal-blue)] transition-colors"
              >
                View All Events
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
