import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AutomationHero } from "@/components/automation-hero"
import { AutomationChallenges } from "@/components/automation-challenges"
import { AutomationBenefits } from "@/components/automation-benefits"
import { AutomationUseCases } from "@/components/automation-use-cases"
import { AutomationFeatures } from "@/components/automation-features"
import { AutomationImplementation } from "@/components/automation-implementation"
import { AutomationCallToAction } from "@/components/automation-call-to-action"

export const metadata = {
  title: "Automation for IT Risk Management | Effortech",
  description:
    "Leverage automation to streamline IT risk management processes in the banking industry, reduce manual errors, and enhance compliance.",
}

export default function AutomationPage() {
  return (
    <div className="dark flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AutomationHero />
        <AutomationChallenges />
        <AutomationBenefits />
        <AutomationUseCases />
        <AutomationFeatures />
        <AutomationImplementation />
        <AutomationCallToAction />
      </main>
      <Footer />
    </div>
  )
}
