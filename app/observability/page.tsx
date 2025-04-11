import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ObservabilityHero } from "@/components/observability-hero"
import { ObservabilityOverview } from "@/components/observability-overview"
import { ObservabilityUseCases } from "@/components/observability-use-cases"
import { ObservabilityIntegration } from "@/components/observability-integration"
import { ObservabilityCaseStudies } from "@/components/observability-case-studies"
import { ObservabilityCallToAction } from "@/components/observability-call-to-action"

export const metadata = {
  title: "Business Service Observability - Effortech",
  description:
    "Comprehensive Business Service Observability solutions for financial institutions to monitor and optimize their critical business services.",
}

export default function ObservabilityPage() {
  return (
    <div className="dark flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ObservabilityHero />
        <ObservabilityOverview />
        <ObservabilityUseCases />
        <ObservabilityIntegration />
        <ObservabilityCaseStudies />
        <ObservabilityCallToAction />
      </main>
      <Footer />
    </div>
  )
}
