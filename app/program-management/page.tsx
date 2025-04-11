import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProgramManagementHero } from "@/components/program-management-hero"
import { ProgramManagementOverview } from "@/components/program-management-overview"
import { ProgramManagementApproach } from "@/components/program-management-approach"
import { ProgramManagementServices } from "@/components/program-management-services"
import { ProgramManagementBenefits } from "@/components/program-management-benefits"
import { ProgramManagementCallToAction } from "@/components/program-management-call-to-action"

export const metadata = {
  title: "Program Management for Mission-Critical Projects | Effortech",
  description:
    "Expert program management services for mission-critical technology projects in the financial sector, with a focus on mitigating risks associated with new technology adoption.",
}

export default function ProgramManagementPage() {
  return (
    <div className="dark flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProgramManagementHero />
        <ProgramManagementOverview />
        <ProgramManagementApproach />
        <ProgramManagementServices />
        <ProgramManagementBenefits />
        <ProgramManagementCallToAction />
      </main>
      <Footer />
    </div>
  )
}
