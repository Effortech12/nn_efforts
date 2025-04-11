import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ProgramManagementApproach() {
  return (
    <section className="py-10 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Our Risk-Focused Approach</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            A structured methodology that prioritizes risk mitigation throughout the technology implementation lifecycle
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-10">
          <div className="animate-slide-in-left animation-delay-200 flex justify-center">
            <div className="w-[75%]">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm"></div>
                <div className="relative rounded-xl overflow-hidden border border-purple-900/30 bg-background/50">
                  <Image
                    src="/images/program-management-approach.png"
                    alt="Risk-Focused Program Management Approach"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 animate-slide-in-right animation-delay-300">
            <div className="grid gap-4 sm:grid-cols-2">
              {approachSteps.map((step, index) => (
                <Card
                  key={index}
                  className={`bg-background/50 ${index % 2 === 0 ? "border-purple-900/20" : "border-cyan-900/20"}`}
                >
                  <CardContent className="p-4">
                    <div
                      className={`rounded-full ${
                        index % 2 === 0 ? "bg-purple-900/10" : "bg-cyan-900/10"
                      } w-8 h-8 mb-3 flex items-center justify-center`}
                    >
                      <span className={`${index % 2 === 0 ? "text-purple-400" : "text-cyan-400"} font-bold`}>
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-medium mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const approachSteps = [
  {
    title: "Risk Assessment & Planning",
    description:
      "Comprehensive risk identification and assessment before implementation, with detailed mitigation strategies for each identified risk.",
  },
  {
    title: "Governance Framework",
    description:
      "Establishing clear governance structures with defined roles, responsibilities, and decision-making processes aligned with regulatory requirements.",
  },
  {
    title: "Phased Implementation",
    description:
      "Breaking down complex projects into manageable phases with controlled rollouts to minimize disruption and allow for risk containment.",
  },
  {
    title: "Continuous Monitoring",
    description:
      "Real-time monitoring of key risk indicators throughout implementation with established thresholds for escalation and intervention.",
  },
  {
    title: "Stakeholder Alignment",
    description:
      "Ensuring all stakeholders understand risks, mitigation strategies, and their roles in successful implementation.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Proactive engagement with regulatory requirements and building compliance into every stage of the implementation process.",
  },
]
