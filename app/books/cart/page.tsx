"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShoppingCart, Minus, Plus, Trash2, ArrowLeft, CreditCard } from "lucide-react"

interface CartItem {
  id: string
  title: string
  author: string
  price: number
  category: "GK" | "Maths" | "Science"
  gradeLevel: "5th-6th Grade" | "7th-8th Grade" | "9th-10th Grade"
  image: string
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "General Knowledge for Young Minds",
      author: "Dr. Priya Sharma",
      price: 249,
      category: "GK",
      gradeLevel: "5th-6th Grade",
      image: "/placeholder.svg?height=150&width=100",
      quantity: 1,
    },
    {
      id: "8",
      title: "Mathematics Mastery - Grade 9-10",
      author: "Prof. Suresh Gupta",
      price: 249,
      category: "Maths",
      gradeLevel: "9th-10th Grade",
      image: "/placeholder.svg?height=150&width=100",
      quantity: 2,
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
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

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="font-serif text-3xl font-bold text-[var(--color-royal-blue)] mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Looks like you haven't added any academic books to your cart yet.
            </p>
            <Button asChild className="bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90">
              <Link href="/books">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" asChild>
              <Link href="/books">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="font-serif text-3xl font-bold text-[var(--color-royal-blue)]">
              Shopping Cart ({cartItems.length} items)
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-20 h-28 object-cover rounded-md"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground mb-2">by {item.author}</p>

                        <div className="flex items-center gap-2 mb-3">
                          <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                          <Badge variant="outline">{item.gradeLevel}</Badge>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-xl font-bold text-[var(--color-royal-blue)]">
                              ₹{item.price * item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                  </div>

                  {shipping > 0 && <p className="text-sm text-muted-foreground">Free shipping on orders over ₹500</p>}

                  <hr />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-[var(--color-royal-blue)]">₹{total}</span>
                  </div>

                  <Button
                    className="w-full bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90"
                    size="lg"
                    asChild
                  >
                    <Link href="/books/checkout">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Proceed to Checkout
                    </Link>
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/books">Continue Shopping</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
