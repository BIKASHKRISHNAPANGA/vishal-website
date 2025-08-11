"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Trophy, Users, Calendar, Award, Phone, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const navigationItems = [
  { name: "Home", href: "/", icon: Trophy },
  { name: "Schools", href: "/schools", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Leaderboard", href: "/leaderboard", icon: Award },
  { name: "Contact", href: "/contact", icon: Phone },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-[var(--color-royal-blue)]" />
            <span className="font-serif text-xl font-bold text-[var(--color-royal-blue)]">School of the Year</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-[var(--color-royal-blue)] flex items-center space-x-1"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/schools/register">Register School</Link>
              </Button>
              <Button size="sm" className="bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90" asChild>
                <Link href="/students/register">Register Student</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 text-lg font-medium transition-colors hover:text-[var(--color-royal-blue)]"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}

                  <div className="pt-4 border-t space-y-2">
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/schools/register" onClick={() => setIsOpen(false)}>
                        Register School
                      </Link>
                    </Button>
                    <Button
                      className="w-full bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90"
                      asChild
                    >
                      <Link href="/students/register" onClick={() => setIsOpen(false)}>
                        Register Student
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
