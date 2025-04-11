import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AutomationUseCases() {
  return (
    <section className="py-10 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Key Automation Use Cases</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Practical applications of automation in IT risk management for banking institutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100 h-full"
            >
              <CardHeader className="pb-2 space-y-1">
                <CardTitle className="text-base">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                <div className="text-xs text-cyan-400 font-medium">Key Benefits:</div>
                <ul className="mt-1 space-y-1">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-1.5"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const useCases = [
  {
    title: "Automated Compliance Monitoring",
    description:
      "Continuous monitoring of systems and processes against regulatory requirements and internal policies to identify compliance gaps in real-time.",
    benefits: [
      "Reduces manual compliance checks by up to 70%",
      "Provides real-time compliance status dashboards",
      "Automatically generates compliance reports for regulators",
    ],
  },
  {
    title: "Vulnerability Management Automation",
    description:
      "Automated scanning, prioritization, and remediation tracking of security vulnerabilities across the IT infrastructure.",
    benefits: [
      "Reduces vulnerability detection time by 60%",
      "Ensures consistent application of security patches",
      "Prioritizes vulnerabilities based on risk impact",
    ],
  },
  {
    title: "Automated Risk Assessments",
    description:
      "Streamlined collection and analysis of risk data from various sources to generate comprehensive risk assessments with minimal manual intervention.",
    benefits: [
      "Reduces assessment time from weeks to days",
      "Improves accuracy and consistency of assessments",
      "Enables more frequent risk evaluations",
    ],
  },
  {
    title: "Automated Audit Preparation",
    description:
      "Automated collection, organization, and presentation of evidence required for internal and external audits.",
    benefits: [
      "Reduces audit preparation time by up to 50%",
      "Ensures completeness of audit evidence",
      "Maintains continuous audit readiness",
    ],
  },
  {
    title: "Incident Response Automation",
    description:
      "Automated detection, triage, and initial response to security incidents to minimize impact and response time.",
    benefits: [
      "Reduces mean time to detect (MTTD) by 45%",
      "Enables 24/7 monitoring without additional staff",
      "Ensures consistent incident handling procedures",
    ],
  },
  {
    title: "Automated Policy Compliance Verification",
    description: "Continuous verification of IT systems and configurations against security policies and standards.",
    benefits: [
      "Identifies policy violations in near real-time",
      "Reduces manual configuration reviews",
      "Provides evidence of policy adherence for audits",
    ],
  },
]
