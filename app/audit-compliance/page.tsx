import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuditHero } from "@/components/audit-hero"
import { AuditChallenges } from "@/components/audit-challenges"
import { AuditProcess } from "@/components/audit-process"
import { AuditTracking } from "@/components/audit-tracking"
import { AuditObservations } from "@/components/audit-observations"
import { AuditCompliance } from "@/components/audit-compliance"
import { AuditChecklists } from "@/components/audit-checklists"
import { AuditBenefits } from "@/components/audit-benefits"
import { AuditCallToAction } from "@/components/audit-call-to-action"

export const metadata = {
  title: "Audit & Compliance as a Service | Effortech",
  description:
    "Managed Audit & Compliance services for Indian banks to navigate the complex regulatory landscape and ensure sustainable compliance excellence.",
}

export default function AuditCompliancePage() {
  return (
    <div className="dark flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AuditHero />
        <AuditChallenges />
        <AuditProcess />
        <AuditTracking />
        <AuditObservations />
        <AuditCompliance />
        <AuditChecklists />
        <AuditBenefits />
        <AuditCallToAction />
      </main>
      <Footer />
    </div>
  )
}
