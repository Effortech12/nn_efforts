import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrikHero } from "@/components/trik-hero"
import { TrikChallenges } from "@/components/trik-challenges"
import { TrikFeatures } from "@/components/trik-features"
import { TrikBenefits } from "@/components/trik-benefits"
import { TrikImplementation } from "@/components/trik-implementation"
import { TrikCallToAction } from "@/components/trik-call-to-action"

export const metadata = {
  title: "TRIK - Internal Risk Management Tool | Effortech",
  description:
    "TRIK is a comprehensive IT risk management tool designed for Indian banks to address the unique challenges of the local banking sector.",
}

export default function TrikPage() {
  return (
    <div className="dark flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <TrikHero />
        <TrikChallenges />
        <TrikFeatures />
        <TrikBenefits />
        <TrikImplementation />
        <TrikCallToAction />
      </main>
      <Footer />
    </div>
  )
}
