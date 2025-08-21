"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, Search, ShoppingCart, Star } from "lucide-react"

interface Book {
  id: string
  title: string
  author: string
  price: number
  originalPrice?: number
  category: "GK" | "Maths" | "Science"
  gradeLevel: "5th-6th Grade" | "7th-8th Grade" | "9th-10th Grade"
  image: string
  rating: number
  reviews: number
  description: string
  inStock: boolean
}

const academicBooks: Book[] = [
  // 5th-6th Grade Books
  {
    id: "1",
    title: "General Knowledge for Young Minds",
    author: "Dr. Priya Sharma",
    price: 249,
    originalPrice: 319,
    category: "GK",
    gradeLevel: "5th-6th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.8,
    reviews: 156,
    description:
      "Comprehensive GK book covering current affairs, history, geography, and science facts for young learners.",
    inStock: true,
  },
  {
    id: "2",
    title: "Mathematics Made Easy - Elementary",
    author: "Prof. Rajesh Kumar",
    price: 249,
    category: "Maths",
    gradeLevel: "5th-6th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.7,
    reviews: 203,
    description: "Step-by-step approach to elementary mathematics with practice problems and visual explanations.",
    inStock: true,
  },
  {
    id: "3",
    title: "Science Explorers - Basic Concepts",
    author: "Dr. Meera Patel",
    price: 249,
    category: "Science",
    gradeLevel: "5th-6th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.6,
    reviews: 134,
    description: "Introduction to basic science concepts with experiments and colorful illustrations.",
    inStock: true,
  },

  // 7th-8th Grade Books
  {
    id: "4",
    title: "General Knowledge Champion - Middle School",
    author: "Knowledge Publications",
    price: 249,
    category: "GK",
    gradeLevel: "7th-8th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.9,
    reviews: 287,
    description:
      "Advanced GK topics including world affairs, Indian history, geography, and competitive exam preparation.",
    inStock: true,
  },
  {
    id: "5",
    title: "Advanced Mathematics - Grade 7-8",
    author: "Prof. Anita Singh",
    price: 249,
    originalPrice: 319,
    category: "Maths",
    gradeLevel: "7th-8th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.8,
    reviews: 198,
    description: "Comprehensive mathematics covering algebra, geometry, and problem-solving techniques.",
    inStock: true,
  },
  {
    id: "6",
    title: "Science Concepts & Applications",
    author: "Dr. Vikram Joshi",
    price: 249,
    category: "Science",
    gradeLevel: "7th-8th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.7,
    reviews: 165,
    description: "Physics, chemistry, and biology concepts with practical applications and experiments.",
    inStock: true,
  },

  // 9th-10th Grade Books
  {
    id: "7",
    title: "Complete General Knowledge - High School",
    author: "Competitive Edge Publications",
    price: 249,
    category: "GK",
    gradeLevel: "9th-10th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.9,
    reviews: 342,
    description: "Comprehensive GK for high school students preparing for board exams and competitive tests.",
    inStock: true,
  },
  {
    id: "8",
    title: "Mathematics Mastery - Grade 9-10",
    author: "Prof. Suresh Gupta",
    price: 249,
    originalPrice: 319,
    category: "Maths",
    gradeLevel: "9th-10th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.8,
    reviews: 256,
    description: "Advanced mathematics including trigonometry, coordinate geometry, and statistical analysis.",
    inStock: true,
  },
  {
    id: "9",
    title: "Science Comprehensive Guide - Grade 9-10",
    author: "Dr. Kavita Reddy",
    price: 249,
    category: "Science",
    gradeLevel: "9th-10th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.9,
    reviews: 289,
    description: "Complete science guide covering physics, chemistry, and biology for board exam preparation.",
    inStock: true,
  },
  {
    id: "10",
    title: "Quick Revision - Mathematics",
    author: "Exam Success Publications",
    price: 249,
    category: "Maths",
    gradeLevel: "9th-10th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.6,
    reviews: 178,
    description: "Quick revision notes and practice questions for mathematics board exam preparation.",
    inStock: true,
  },
  {
    id: "11",
    title: "GK Quiz Master - All Grades",
    author: "Quiz Publications",
    price: 249,
    category: "GK",
    gradeLevel: "7th-8th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.5,
    reviews: 145,
    description: "Interactive quiz book with 1000+ questions covering all GK topics.",
    inStock: true,
  },
  {
    id: "12",
    title: "Science Lab Manual - Practical Guide",
    author: "Dr. Ravi Sharma",
    price: 249,
    category: "Science",
    gradeLevel: "5th-6th Grade",
    image: "/placeholder.svg?height=300&width=200",
    rating: 4.7,
    reviews: 112,
    description: "Hands-on science experiments and practical activities for young scientists.",
    inStock: true,
  },
]

export default function BooksPage() {
  const [books] = useState<Book[]>(academicBooks)
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(academicBooks)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedGrade, setSelectedGrade] = useState("all")
  const [cart, setCart] = useState<string[]>([])

  const categories = ["all", "GK", "Maths", "Science", " Logical Reasoning"];
  const grades = ["all", "5th-6th Grade", "7th-8th Grade", "9th-10th Grade"]

  useEffect(() => {
    let filtered = books

    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((book) => book.category === selectedCategory)
    }

    if (selectedGrade !== "all") {
      filtered = filtered.filter((book) => book.gradeLevel === selectedGrade)
    }

    setFilteredBooks(filtered)
  }, [searchTerm, selectedCategory, selectedGrade, books])

  const addToCart = (bookId: string) => {
    setCart((prev) => [...prev, bookId])
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "GK":
        return "bg-[var(--color-gold)] text-black"
      case "Maths":
        return "bg-[var(--color-royal-blue)] text-white"
      case "Science":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl font-bold text-[var(--color-royal-blue)] mb-4">Academic Books Store</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium academic preparation books for competitive exams. Choose from our carefully curated collection of
            GK, Mathematics, and Science books organized by grade levels.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button variant="outline" asChild>
            <Link href="/books/cart">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart ({cart.length})
            </Link>
          </Button>
        </div>

        {/* Grade Level Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6 border-2 border-[var(--color-royal-blue)]/20 hover:border-[var(--color-royal-blue)]/40 transition-colors">
            <h3 className="font-serif text-xl font-bold text-[var(--color-royal-blue)] mb-2">5th - 6th Grade</h3>
            <p className="text-muted-foreground mb-4">Foundation level books for young learners</p>
            <div className="flex justify-center gap-2">
              <Badge className="bg-[var(--color-gold)] text-black">GK</Badge>
              <Badge className="bg-[var(--color-royal-blue)] text-white">Maths</Badge>
              <Badge className="bg-green-500 text-white">Science</Badge>
            </div>
          </Card>

          <Card className="text-center p-6 border-2 border-[var(--color-royal-blue)]/20 hover:border-[var(--color-royal-blue)]/40 transition-colors">
            <h3 className="font-serif text-xl font-bold text-[var(--color-royal-blue)] mb-2">7th - 8th Grade</h3>
            <p className="text-muted-foreground mb-4">Intermediate level for middle school students</p>
            <div className="flex justify-center gap-2">
              <Badge className="bg-[var(--color-gold)] text-black">GK</Badge>
              <Badge className="bg-[var(--color-royal-blue)] text-white">Maths</Badge>
              <Badge className="bg-green-500 text-white">Science</Badge>
            </div>
          </Card>

          <Card className="text-center p-6 border-2 border-[var(--color-royal-blue)]/20 hover:border-[var(--color-royal-blue)]/40 transition-colors">
            <h3 className="font-serif text-xl font-bold text-[var(--color-royal-blue)] mb-2">9th - 10th Grade</h3>
            <p className="text-muted-foreground mb-4">Advanced preparation for board exams</p>
            <div className="flex justify-center gap-2">
              <Badge className="bg-[var(--color-gold)] text-black">GK</Badge>
              <Badge className="bg-[var(--color-royal-blue)] text-white">Maths</Badge>
              <Badge className="bg-green-500 text-white">Science</Badge>
            </div>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Subjects" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger>
                <SelectValue placeholder="Grade Level" />
              </SelectTrigger>
              <SelectContent>
                {grades.map((grade) => (
                  <SelectItem key={grade} value={grade}>
                    {grade === "all" ? "All Grades" : grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-4">
                <div className="relative">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                  <Badge className={`absolute top-2 left-2 ${getCategoryColor(book.category)}`}>{book.category}</Badge>
                </div>

                <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                <p className="text-sm text-muted-foreground">by {book.author}</p>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">{book.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({book.reviews} reviews)</span>
                </div>
              </CardHeader>

              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  <Badge variant="outline" className="mb-2">
                    {book.gradeLevel}
                  </Badge>
                  <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[var(--color-royal-blue)]">₹{book.price}</span>
                      {book.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">₹{book.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90"
                    onClick={() => addToCart(book.id)}
                    disabled={!book.inStock}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {book.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No books found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or browse all books.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
