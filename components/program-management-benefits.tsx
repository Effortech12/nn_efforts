import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function ProgramManagementBenefits() {
  return (
    <section className="py-10 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Benefits of Our Approach</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Our risk-focused program management delivers tangible benefits for financial institutions
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`bg-background/50 ${
                index % 2 === 0 ? "border-purple-900/20" : "border-cyan-900/20"
              } animate-slide-up animation-delay-${100 * (index + 1)}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`rounded-full ${index % 2 === 0 ? "bg-purple-900/10" : "bg-cyan-900/10"} p-2 h-fit`}>
                    <CheckCircle2 className={`h-5 w-5 ${index % 2 === 0 ? "text-purple-400" : "text-cyan-400"}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
                <div className="pl-10">
                  <div className={`text-xs font-medium ${index % 2 === 0 ? "text-purple-400" : "text-cyan-400"} mb-1`}>
                    Key Metrics:
                  </div>
                  <ul className="space-y-1">
                    {benefit.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            index % 2 === 0 ? "bg-purple-400" : "bg-cyan-400"
                          } mt-1.5`}
                        ></span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    title: "Reduced Implementation Risk",
    description:
      "Our structured approach significantly reduces the likelihood of implementation failures, security breaches, and compliance issues.",
    metrics: [
      "70% reduction in critical implementation defects",
      "85% decrease in post-implementation security findings",
      "Near-zero regulatory compliance gaps",
    ],
  },
  {
    title: "Accelerated Time-to-Market",
    description:
      "Despite our thorough risk management approach, we help accelerate implementation timelines through efficient processes.",
    metrics: [
      "25-40% reduction in overall implementation timelines",
      "50% faster regulatory approval processes",
      "Streamlined decision-making reducing delays by 60%",
    ],
  },
  {
    title: "Enhanced Stakeholder Alignment",
    description:
      "Our approach ensures all stakeholders are aligned on objectives, risks, and mitigation strategies throughout the project.",
    metrics: [
      "90% stakeholder satisfaction ratings",
      "75% reduction in requirement-related changes",
      "Significant decrease in cross-functional conflicts",
    ],
  },
  {
    title: "Optimized Resource Utilization",
    description:
      "Our efficient program management approach ensures optimal use of your organization's resources and budget.",
    metrics: [
      "15-30% reduction in overall implementation costs",
      "40% decrease in resource overallocation",
      "Elimination of redundant activities and efforts",
    ],
  },
  {
    title: "Sustainable Compliance",
    description:
      "We build compliance into the implementation process, ensuring long-term adherence to regulatory requirements.",
    metrics: [
      "100% regulatory audit readiness",
      "Comprehensive compliance documentation",
      "Proactive adaptation to regulatory changes",
    ],
  },
  {
    title: "Knowledge Transfer & Capability Building",
    description: "We ensure your team develops the capabilities to maintain and enhance the implemented technology.",
    metrics: [
      "Comprehensive knowledge transfer to internal teams",
      "Development of internal centers of excellence",
      "Reduced dependency on external consultants post-implementation",
    ],
  },
]
