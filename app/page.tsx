"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Trophy,
  Users,
  Award,
  GraduationCap,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Clock,
  Target,
  Zap,
  Shield,
  Gift,
} from "lucide-react";
import Image from "next/image";

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 53,
    hours: 23,
    minutes: 15,
    seconds: 33,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-3 md:gap-6 text-center">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map(({ label, value }, index) => (
        <div
          key={label}
          className={`group relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-xl p-4 md:p-6 hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/20 ${
            index === 3 ? "animate-pulse" : ""
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
          <div className="relative text-2xl md:text-4xl font-bold bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent">
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-blue-200 font-medium mt-1">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

// Image Carousel Component
function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/Moments-of-excelence/prayag.png",
      alt: "Students celebrating academic victory",
    },
    {
      src: "/Moments-of-excelence/allu.png",
      alt: "Inter-school sports tournament",
    },
    {
      src: "/Moments-of-excelence/prayag2.png",
      alt: "Award ceremony with trophies",
    },
    { src: "/placeholder.svg", alt: "Essay writing competition" },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0} // preload first slide
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
// Testimonials Carousel Component
function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      school: "Delhi Public School",
      text: "Participating in School of the Year was life-changing! The academic challenges pushed me to excel, and I won a scholarship that's helping fund my engineering studies.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      school: "St. Xavier's High School",
      text: "The sports competitions were incredibly well-organized. I made friends from different schools and learned the true spirit of healthy competition.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      school: "Kendriya Vidyalaya",
      text: "The essay writing competition helped me discover my passion for literature. The exposure and recognition I received was beyond my expectations.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="w-full flex-shrink-0 bg-white/5 backdrop-blur-sm border-white/10"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-[var(--color-gold)] fill-current"
                    />
                  ))}
                </div>
                <p className="text-white/90 text-lg mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-blue-200 text-sm">{testimonial.school}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentTestimonial
                ? "bg-[var(--color-gold)]"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-7">
        {/* Dynamic mouse-following gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-yellow-400/20 via-orange-500/10 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-yellow-500/10" />
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 via-transparent to-teal-500/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent" />

        {/* Animated mesh background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-twinkle" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-twinkle-delayed" />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-twinkle-slow" />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-twinkle" />
        </div>

        {/* Background 3D Objects with enhanced animations */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="floating-object absolute top-1/4 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-32 md:h-32 animate-float-slow opacity-15 md:opacity-25 hover:opacity-40 transition-all duration-700">
            <div className="text-6xl md:text-8xl transform-gpu hover:scale-125 hover:rotate-12 transition-all duration-700 filter drop-shadow-2xl">
              📚
            </div>
          </div>

          <div className="floating-object absolute bottom-1/4 right-1/4 w-16 h-16 md:w-28 md:h-28 animate-float-medium opacity-10 md:opacity-20 hover:opacity-35 transition-all duration-700">
            <div className="text-5xl md:text-7xl transform-gpu hover:scale-125 hover:rotate-180 transition-all duration-700 filter drop-shadow-2xl">
              🏀
            </div>
          </div>

          <div className="floating-object absolute top-1/3 left-1/4 w-14 h-14 md:w-24 md:h-24 animate-float-fast opacity-15 md:opacity-30 hover:opacity-45 transition-all duration-700">
            <div className="text-4xl md:text-6xl transform-gpu hover:scale-125 hover:rotate-45 transition-all duration-700 filter drop-shadow-2xl">
              🎓
            </div>
          </div>

          <div className="floating-object absolute bottom-1/3 right-1/3 w-18 h-18 md:w-30 md:h-30 animate-float-slow opacity-12 md:opacity-25 hover:opacity-40 transition-all duration-700">
            <div className="text-5xl md:text-7xl transform-gpu hover:scale-125 hover:rotate-90 transition-all duration-700 filter drop-shadow-2xl">
              🏆
            </div>
          </div>

          <div className="floating-object absolute top-2/3 left-1/3 w-12 h-12 md:w-20 md:h-20 animate-float-medium opacity-10 md:opacity-22 hover:opacity-37 transition-all duration-700">
            <div className="text-3xl md:text-5xl transform-gpu hover:scale-125 hover:rotate-270 transition-all duration-700 filter drop-shadow-2xl">
              ⚽
            </div>
          </div>

          <div className="floating-object absolute bottom-2/3 right-1/2 w-16 h-16 md:w-26 md:h-26 animate-float-fast opacity-12 md:opacity-27 hover:opacity-42 transition-all duration-700">
            <div className="text-4xl md:text-6xl transform-gpu hover:scale-125 hover:rotate-180 transition-all duration-700 filter drop-shadow-2xl">
              🔬
            </div>
          </div>
        </div>

        {/* Hero Content with enhanced typography and animations */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto space-y-8 md:space-y-12">
            <div className="animate-fade-in-up">
              <Badge className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 text-sm md:text-base px-6 py-3 font-semibold shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500 hover:scale-110 border-0">
                <span className="relative z-10">
                  🔥 Registration Open - Limited Seats
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
              </Badge>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
                Interschool Olympiad <br />
                <span className="block text-lg md:text-2xl font-medium mt-2">
                  and Sports Federation
                </span>
              </h1>
              <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-none tracking-tight mb-4">
                School of the{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient-shift">
                    Year
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-2xl -z-10 animate-pulse" />
                </span>
              </h1>
            </div>

            <div className="animate-fade-in-up delay-400 space-y-4">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-100 font-light max-w-4xl mx-auto leading-relaxed">
                The Ultimate Inter-School Academic & Sports Championship
              </p>

              <p className="text-base sm:text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed">
                🌟 Compete, Excel, and Win Scholarships, Trophies & Certificates
                🌟
                <br />
                Join thousands of students in the most prestigious inter-school
                competition
              </p>
            </div>

            <div className="animate-fade-in-up delay-600 flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 text-lg md:text-xl px-10 py-6 md:px-12 md:py-7 font-bold shadow-2xl hover:shadow-yellow-500/40 transition-all duration-500 hover:scale-110 border-0 rounded-2xl"
                asChild
              >
                <Link href="/students/register">
                  <span className="relative z-10 flex items-center gap-2">
                    🚀 Register Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
              </Button>

              <Button
                size="lg"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 text-lg md:text-xl px-10 py-6 md:px-12 md:py-7 font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-110 rounded-2xl"
                asChild
              >
                <Link href="/events">
                  <span className="relative z-10 flex items-center gap-2">
                    📅 View Events
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
              </Button>
            </div>

            {/* Enhanced Countdown Timer */}
            <div className="animate-fade-in-up delay-800 pt-12 md:pt-16">
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold mb-8 text-white flex items-center justify-center gap-2">
                  ⏰ Registration Closes In:
                </h3>
                <CountdownTimer />
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Foreground 3D Objects */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {[
            {
              emoji: "📚",
              position: "top-8 left-4 md:top-20 md:left-20",
              size: "w-12 h-12 md:w-20 md:h-20",
              animation: "animate-float-slow",
              rotation: "hover:rotate-12",
            },
            {
              emoji: "✒️",
              position: "top-12 right-4 md:top-32 md:right-32",
              size: "w-10 h-10 md:w-16 md:h-16",
              animation: "animate-float-medium",
              rotation: "hover:rotate-45",
            },
            {
              emoji: "🧮",
              position: "top-6 left-1/2 transform -translate-x-1/2",
              size: "w-8 h-8 md:w-14 md:h-14",
              animation: "animate-float-fast",
              rotation: "hover:rotate-90",
            },
            {
              emoji: "📖",
              position: "top-1/2 left-2 md:left-16",
              size: "w-14 h-14 md:w-24 md:h-24",
              animation: "animate-float-slow",
              rotation: "hover:rotate-6",
            },
            {
              emoji: "🎾",
              position: "top-1/2 right-2 md:right-16",
              size: "w-12 h-12 md:w-18 md:h-18",
              animation: "animate-float-medium",
              rotation: "hover:rotate-180",
            },
            {
              emoji: "🏈",
              position: "top-1/3 right-8 md:right-20",
              size: "w-14 h-14 md:w-20 md:h-20",
              animation: "animate-float-fast",
              rotation: "hover:rotate-90",
            },
            {
              emoji: "🎓",
              position: "bottom-8 left-8 md:bottom-32 md:left-32",
              size: "w-10 h-10 md:w-18 md:h-18",
              animation: "animate-float-medium",
              rotation: "hover:rotate-180",
            },
            {
              emoji: "🏏",
              position: "bottom-12 right-8 md:bottom-20 md:right-40",
              size: "w-12 h-12 md:w-18 md:h-18",
              animation: "animate-float-fast",
              rotation: "hover:rotate-45",
            },
            {
              emoji: "🏀",
              position: "bottom-6 left-1/4",
              size: "w-14 h-14 md:w-20 md:h-20",
              animation: "animate-float-slow",
              rotation: "hover:rotate-90",
            },
            {
              emoji: "🏆",
              position: "bottom-4 right-1/4",
              size: "w-10 h-10 md:w-16 md:h-16",
              animation: "animate-float-medium",
              rotation: "hover:rotate-12",
            },
          ].map((obj, index) => (
            <div
              key={index}
              className={`floating-object absolute ${obj.position} ${obj.size} ${obj.animation} cursor-pointer`}
            >
              <div
                className={`text-2xl md:text-4xl transform-gpu hover:scale-150 ${obj.rotation} hover:brightness-125 transition-all duration-700 hover:drop-shadow-2xl hover:drop-shadow-yellow-500/50`}
              >
                {obj.emoji}
              </div>
            </div>
          ))}

          {/* Desktop-only objects */}
          {[
            {
              emoji: "🏸",
              position: "top-1/4 left-1/3",
              animation: "animate-float-fast",
              rotation: "hover:rotate-45",
            },
            {
              emoji: "🔬",
              position: "bottom-1/3 right-1/4",
              animation: "animate-float-slow",
              rotation: "hover:rotate-12",
            },
            {
              emoji: "🌍",
              position: "top-2/3 left-1/4",
              animation: "animate-float-medium",
              rotation: "hover:rotate-180",
            },
          ].map((obj, index) => (
            <div
              key={index}
              className={`floating-object absolute ${obj.position} w-0 h-0 md:w-16 md:h-16 ${obj.animation} hidden md:block cursor-pointer`}
            >
              <div
                className={`text-2xl md:text-4xl transform-gpu hover:scale-150 ${obj.rotation} hover:brightness-125 transition-all duration-700 hover:drop-shadow-2xl hover:drop-shadow-blue-500/50`}
              >
                {obj.emoji}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CSS animations */}
        <style jsx>{`
          @keyframes float-slow {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg) scale(1);
            }
            33% {
              transform: translateY(-20px) rotate(2deg) scale(1.05);
            }
            66% {
              transform: translateY(-10px) rotate(-1deg) scale(0.95);
            }
          }

          @keyframes float-medium {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg) scale(1);
            }
            50% {
              transform: translateY(-15px) rotate(-3deg) scale(1.1);
            }
          }

          @keyframes float-fast {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg) scale(1);
            }
            25% {
              transform: translateY(-8px) rotate(1deg) scale(1.05);
            }
            75% {
              transform: translateY(-12px) rotate(-2deg) scale(0.95);
            }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes twinkle {
            0%,
            100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.5);
            }
          }

          @keyframes twinkle-delayed {
            0%,
            100% {
              opacity: 0.2;
              transform: scale(1) rotate(0deg);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.3) rotate(180deg);
            }
          }

          @keyframes twinkle-slow {
            0%,
            100% {
              opacity: 0.4;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.2);
            }
          }

          @keyframes gradient-shift {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }

          .animate-float-medium {
            animation: float-medium 5s ease-in-out infinite;
          }

          .animate-float-fast {
            animation: float-fast 3s ease-in-out infinite;
          }

          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
          }

          .animate-twinkle {
            animation: twinkle 3s ease-in-out infinite;
          }

          .animate-twinkle-delayed {
            animation: twinkle-delayed 4s ease-in-out infinite 1s;
          }

          .animate-twinkle-slow {
            animation: twinkle-slow 5s ease-in-out infinite 2s;
          }

          .animate-gradient-shift {
            background-size: 200% 200%;
            animation: gradient-shift 3s ease infinite;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }

          .delay-400 {
            animation-delay: 0.4s;
          }

          .delay-600 {
            animation-delay: 0.6s;
          }

          .delay-800 {
            animation-delay: 0.8s;
          }

          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `}</style>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Moments of Excellence
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Witness the journey of champions and the celebration of academic
              and sporting excellence
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      {/* <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="bg-[var(--color-royal-blue)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-[var(--color-royal-blue)]" />
              </div>
              <div className="text-3xl font-bold text-[var(--color-royal-blue)]">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                Participating Schools
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="bg-[var(--color-gold)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Gift className="h-8 w-8 text-[var(--color-gold)]" />
              </div>
              <div className="text-3xl font-bold text-[var(--color-gold)]">
                ₹50L+
              </div>
              <div className="text-sm text-muted-foreground">Prize Money</div>
            </div>

            <div className="text-center space-y-2">
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">₹25L+</div>
              <div className="text-sm text-muted-foreground">Scholarships</div>
            </div>

            <div className="text-center space-y-2">
              <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">0</div>
              <div className="text-sm text-muted-foreground">
                Negative Marking
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Participate Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Why Participate?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join the most prestigious inter-school competition and unlock
              opportunities for your future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-[var(--color-gold)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-[var(--color-gold)]" />
                </div>
                <h3 className="font-semibold text-xl">Scholarships</h3>
                <p className="text-muted-foreground">
                  Win merit-based scholarships worth lakhs to fund your higher
                  education and achieve your dreams.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-[var(--color-royal-blue)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="h-8 w-8 text-[var(--color-royal-blue)]" />
                </div>
                <h3 className="font-semibold text-xl">Trophies & Medals</h3>
                <p className="text-muted-foreground">
                  Earn prestigious trophies, medals, and certificates that
                  recognize your academic and sporting excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-xl">Recognition</h3>
                <p className="text-muted-foreground">
                  Gain recognition from educational institutions and build a
                  strong profile for college admissions.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-xl">Skill Development</h3>
                <p className="text-muted-foreground">
                  Enhance your academic knowledge, sports skills, and
                  competitive spirit through challenging events.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-xl">Exposure</h3>
                <p className="text-muted-foreground">
                  Connect with students from across the country and experience
                  diverse cultures and perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-pink-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-xl">Fun & Friendship</h3>
                <p className="text-muted-foreground">
                  Make lifelong friendships and create unforgettable memories
                  while competing in a supportive environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              What Students Say
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Hear from our past participants about their transformative
              experiences
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-gold)]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
            Ready to Make History?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students in the most prestigious inter-school
            competition. Register now and take the first step towards
            excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90 btn-hover-lift text-lg px-8 py-3"
              asChild
            >
              <Link href="/students/register">Register as Student</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--color-royal-blue)] text-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)] hover:text-white btn-hover-lift text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/schools/register">Register Your School</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Registration closes: October 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Multiple venues across India</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Event duration: 2 days</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
