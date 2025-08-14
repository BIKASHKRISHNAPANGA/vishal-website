"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Trophy,
  Users,
  Calendar,
  Award,
  Phone,
  Sun,
  Moon,
  BookOpen,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Schools", href: "/schools" },
  { name: "Events", href: "/events" },
  { name: "Books", href: "/books" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Mobile Menu Button - Moved to left side */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Trophy className="h-8 w-8 text-[var(--color-royal-blue)]" />
          <span className="font-serif text-xl font-bold text-[var(--color-royal-blue)]">
            School of the Year
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-foreground text-sm font-medium transition-all duration-200 relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--color-royal-blue)] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button variant="outline" size="sm" asChild>
            <Link href="/schools/register">Register School</Link>
          </Button>

          <Button
            size="sm"
            className="bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90 text-white"
            asChild
          >
            <Link href="/students/register">Register Student</Link>
          </Button>
        </div>

        {/* Tablet & Mobile Theme Toggle - Moved to right side */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 max-w-md mx-auto bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/40 z-50 lg:hidden"
            >
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-4 border-b border-border/50">
                <h3 className="font-semibold text-foreground">Menu</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-6">
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center py-3 px-4 rounded-xl text-foreground/80 hover:text-foreground hover:bg-[var(--color-royal-blue)]/10 font-medium transition-all duration-200 group"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--color-royal-blue)] transition-all duration-200 group-hover:w-full" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-border/50 space-y-3">
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="/schools/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Register School
                    </Link>
                  </Button>

                  <Button
                    className="w-full bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90 text-white"
                    asChild
                  >
                    <Link
                      href="/students/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Register Student
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
