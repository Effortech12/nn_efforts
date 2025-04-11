import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobListings } from "@/components/job-listings"
import { CompanyBenefits } from "@/components/company-benefits"
import { ApplicationProcess } from "@/components/application-process"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Careers - Effortech",
  description: "Join Effortech and help shape the future of technology risk management in the financial sector.",
}

export default function CareersPage() {
  return (
    <div className="dark flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-purple-700/20 bg-purple-900/10 px-3 py-1 text-sm text-purple-300 mb-3">
                <span className="font-medium">Join Our Team</span>
              </div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Build Your Career at{" "}
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Effortech
                </span>
              </h1>
              <p className="mb-6 text-muted-foreground sm:text-lg">
                Join our team of experts and help shape the future of technology risk management in the financial
                sector. We're looking for passionate individuals who thrive on solving complex challenges.
              </p>
              <Link href="#current-openings">
                <Button size="lg">
                  View Current Openings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <JobListings />

        {/* Company Benefits Section */}
        <CompanyBenefits />

        {/* Application Process Section */}
        <ApplicationProcess />

        {/* Contact Section */}
        <section className="py-12 bg-gradient-to-b from-background/95 to-background">
          <div className="container">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">Have Questions?</h2>
              <p className="mb-6 text-muted-foreground">
                If you have any questions about our open positions or the application process, please don't hesitate to
                reach out.
              </p>
              <Link href="/contact">
                <Button variant="outline">Contact Our Recruitment Team</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
