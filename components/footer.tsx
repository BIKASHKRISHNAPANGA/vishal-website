import Link from "next/link"
import { Trophy, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Image from "next/image";

export function Footer() {
   const openLink = (url: string) => {
     window.open(url, "_blank", "noopener,noreferrer");
   };
  return (
    <footer className="bg-[var(--color-royal-blue)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Brand Logo"
                width={60}
                height={20}
                priority
              />
              <span className="font-serif text-lg md:text-xl font-bold text-white leading-snug">
                Interschool Olympiad <br />
                <span className="text-sm md:text-base font-medium text-white">
                  and Sports Federation
                </span>
              </span>
            </div>

            <p className="text-blue-100 text-sm leading-relaxed">
              The ultimate inter-school Olympiad and sports championship.
              Empowering students through healthy competition and excellence.
            </p>
           

<div className="flex space-x-4">
  <button
    onClick={() => openLink("https://www.facebook.com/profile.php?id=61579305553432")}
    className="text-blue-200 hover:text-[var(--color-gold)] transition-colors"
  >
    <Facebook className="h-5 w-5" />
  </button>

  <button
    onClick={() => openLink("https://x.com/Interschool_OSF?t=KdMXeLtrrB3BHg2COtzr3w&s=09")}
    className="text-blue-200 hover:text-[var(--color-gold)] transition-colors"
  >
    <Twitter className="h-5 w-5" />
  </button>

  <button
    onClick={() => openLink("https://www.instagram.com/interschoolosf?igsh=MWF5ZGRldXlraTh5ZQ==")}
    className="text-blue-200 hover:text-[var(--color-gold)] transition-colors"
  >
    <Instagram className="h-5 w-5" />
  </button>

  <button
    onClick={() => openLink("https://www.youtube.com/@Interschoolosf")}
    className="text-blue-200 hover:text-[var(--color-gold)] transition-colors"
  >
    <Youtube className="h-5 w-5" />
  </button>
</div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/events"
                  className="text-blue-100 hover:text-[var(--color-gold)] transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/schools/register"
                  className="text-blue-100 hover:text-[var(--color-gold)] transition-colors"
                >
                  School Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/students/register"
                  className="text-blue-100 hover:text-[var(--color-gold)] transition-colors"
                >
                  Student Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/leaderboard"
                  className="text-blue-100 hover:text-[var(--color-gold)] transition-colors"
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-blue-100 hover:text-[var(--color-gold)] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Events</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/events/academic"
                  className="text-blue-100 hover:text-[var(--color-gold)] transition-colors"
                >
                  Academic Competitions
                </Link>
              </li>
              <li>
                <Link
                  href="/events/sports"
                  className="text-blue-100 hover:text-[var(--color-gold)] transition-colors"
                >
                  Sports Tournaments
                </Link>
              </li>
              <li>
                <Link
                  href="/events/essay"
                  className="text-blue-100 hover:text-[var(--color-gold)] transition-colors"
                >
                  Essay Writing
                </Link>
              </li>
              <li></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[var(--color-gold)]" />
                <span className="text-blue-100">info@interschoolosf.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[var(--color-gold)]" />
                <span className="text-blue-100">+91 93265 84482</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[var(--color-gold)] mt-0.5" />
                <span className="text-blue-100">
                  Kalyan , Mumbai
                  <br />
                  Maharashtra- 421306
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-blue-100">© 2025 School of the Year .</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-blue-100 hover:text-[var(--color-gold)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-blue-100 hover:text-[var(--color-gold)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
