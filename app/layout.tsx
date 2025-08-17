import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})


export const metadata: Metadata = {
  title: "IOSF",
  description:
    "Join the ultimate inter-school competition featuring academic challenges and sports events. Win scholarships, trophies, and certificates. Register your school today!",
  keywords: [
    "school competition",
    "academic championship",
    "sports tournament",
    "inter-school",
    "scholarships",
    "student competition",
  ],
  authors: [{ name: "Interschool Olympiad and Sports Federation (IOSF)" }],
  creator: "Bikash Krishna Panga",
  publisher: "Interschool Olympiad and Sports Federation (IOSF)",
  metadataBase: new URL("https://schooloftheyear.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Interschool Olympiad and Sports Federation (IOSF)",
    description:
      "The ultimate inter-school academic and sports competition with scholarships and prizes.",
    url: "https://schooloftheyear.com",
    siteName: "School of the Year",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "School of the Year Championship",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interschool Olympiad and Sports Federation (IOSF)",
    description:
      "The ultimate inter-school academic and sports competition with scholarships and prizes.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "Next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
