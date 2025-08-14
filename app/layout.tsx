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
  title: "School of the Year - Inter-School Academic & Sports Championship",
  description:
    "Join the ultimate inter-school competition featuring academic challenges and sports events. Win scholarships, trophies, and certificates. Register your school today!",
  keywords:
    "school competition, academic championship, sports tournament, inter-school, scholarships, student competition",
  authors: [{ name: "School of the Year" }],
  creator: "School of the Year",
  publisher: "School of the Year",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://schooloftheyear.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "School of the Year - Inter-School Championship",
    description: "Ultimate inter-school academic and sports competition with scholarships and prizes",
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
    title: "School of the Year - Inter-School Championship",
    description: "Ultimate inter-school academic and sports competition with scholarships and prizes",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
