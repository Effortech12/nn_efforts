import { Card, CardContent } from "@/components/ui/card"

export function AutomationImplementation() {
  return (
    <section className="py-10 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Implementation Approach</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Our structured methodology ensures successful automation implementation with minimal disruption
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4">
            {implementationSteps.map((step, index) => (
              <Card
                key={index}
                className={`bg-background/50 ${
                  index % 2 === 0 ? "border-purple-900/20" : "border-cyan-900/20"
                } animate-slide-up animation-delay-${100 * (index + 1)}`}
              >
                <CardContent className="p-4 flex items-start gap-4">
                  <div
                    className={`rounded-full ${
                      index % 2 === 0 ? "bg-purple-900/10" : "bg-cyan-900/10"
                    } w-8 h-8 flex items-center justify-center shrink-0 mt-1`}
                  >
                    <span className={`${index % 2 === 0 ? "text-purple-400" : "text-cyan-400"} font-bold text-sm`}>
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {step.activities.map((activity, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              index % 2 === 0 ? "bg-purple-400" : "bg-cyan-400"
                            } mt-1.5`}
                          ></span>
                          <span className="text-xs text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const implementationSteps = [
  {
    title: "Assessment & Planning",
    description:
      "We begin by thoroughly understanding your current IT risk management processes and identifying automation opportunities.",
    activities: [
      "Process mapping and analysis",
      "Automation opportunity identification",
      "ROI assessment",
      "Prioritization of automation initiatives",
    ],
  },
  {
    title: "Solution Design",
    description:
      "Our experts design tailored automation solutions that align with your specific requirements and existing systems.",
    activities: [
      "Technical architecture design",
      "Integration planning with existing systems",
      "User experience design",
      "Security and compliance considerations",
    ],
  },
  {
    title: "Development & Configuration",
    description: "We develop and configure the automation solutions according to the approved design specifications.",
    activities: [
      "Automation workflow development",
      "System integrations implementation",
      "Dashboard and reporting setup",
      "Security controls implementation",
    ],
  },
  {
    title: "Testing & Validation",
    description: "Rigorous testing ensures the automation solutions function correctly and meet all requirements.",
    activities: ["Functional testing", "Integration testing", "Performance testing", "User acceptance testing"],
  },
  {
    title: "Deployment & Training",
    description:
      "We implement the automation solutions in your environment and provide comprehensive training to your team.",
    activities: [
      "Phased deployment approach",
      "User training and documentation",
      "Knowledge transfer to IT teams",
      "Go-live support",
    ],
  },
  {
    title: "Continuous Improvement",
    description:
      "Our engagement doesn't end at deployment. We continuously monitor, optimize, and enhance your automation solutions.",
    activities: [
      "Performance monitoring",
      "Regular optimization reviews",
      "Enhancement recommendations",
      "Adaptation to regulatory changes",
    ],
  },
]
