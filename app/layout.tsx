import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Mona_Sans as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { PageTransition } from "@/components/page-transition"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Effortech - Technology Risk Management for Financial Sector",
  description:
    "Effortech provides Technology Risk Management solutions for Banks, Fintechs, NBFCs and other financial institutions in India.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'