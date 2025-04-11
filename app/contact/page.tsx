import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Faq } from "@/components/faq"

export const metadata = {
  title: "Contact Us - Effortech",
  description:
    "Get in touch with Effortech for Technology Risk Management solutions for the financial sector in India.",
}

export default function ContactPage() {
  return (
    <div className="dark flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12 bg-gradient-to-b from-background to-background/95">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-3">Get in Touch</h1>
              <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
                We're here to help with your technology risk management needs
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 items-start">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        <section className="py-8 bg-gradient-to-b from-background/95 to-background">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Frequently Asked Questions</h2>
              <p className="max-w-[42rem] text-muted-foreground text-sm">
                Find answers to common questions about our services
              </p>
            </div>

            <Faq />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
