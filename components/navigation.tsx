"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  MenuIcon,
  XIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { name: "Home", href: "/", icon: Trophy },
  { name: "Schools", href: "/schools", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Books", href: "/books", icon: BookOpen },
  { name: "Leaderboard", href: "/leaderboard", icon: Award },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <header className="bg-white backdrop-blur-lg relative">
        <div className="mx-auto flex items-center justify-between py-4 max-sm:px-6 px-10">
          {/* Logo */}
          <div className="flex items-center space-x-16">
            <Link href="/" className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-blue-600" />
              <span className="font-serif text-xl font-bold text-blue-600">
                School of the Year
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-12">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black/90 hover:text-black text-base transition flex items-center space-x-1"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="border-black flex items-center py-2 px-3 text-base rounded text-black border transition-all"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* CTA Buttons */}
            <Link
              href="/schools/register"
              className="border-black flex items-center py-2 px-5 text-base rounded text-black border transition-all"
            >
              Register School
            </Link>
            <Link
              href="/students/register"
              className="bg-black text-white px-5 py-2 text-base rounded-md hover:bg-gray-900 transition"
            >
              Register Student
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="max-lg:flex hidden max-sm:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white shadow-md px-4 pb-4"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 py-2 text-gray-700 hover:text-black"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="mt-4 border-t pt-4 space-y-2">
                <Link
                  href="/schools/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm py-2 px-4 border border-gray-300 rounded text-center"
                >
                  Register School
                </Link>
                <Link
                  href="/students/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium py-2 px-4 bg-black text-white rounded text-center"
                >
                  Register Student
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 py-2 px-4 max-sm:flex justify-between items-center hidden">
        {navigationItems.slice(0, 4).map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center text-xs text-gray-600 hover:text-black"
          >
            <item.icon className="h-5 w-5 mb-0.5" />
            {item.name}
          </Link>
        ))}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex flex-col items-center text-xs text-gray-600 hover:text-black"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 mb-0.5" />
          ) : (
            <Moon className="h-5 w-5 mb-0.5" />
          )}
          Theme
        </button>
      </div>
    </>
  );
}


