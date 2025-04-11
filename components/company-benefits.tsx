import { Card, CardContent } from "@/components/ui/card"
import { Clock, Heart, Lightbulb, Banknote, GraduationCap, Globe } from "lucide-react"

const benefits = [
  {
    icon: <Clock className="h-5 w-5 text-purple-400" />,
    title: "Flexible Work Hours",
    description: "Balance your work and personal life with our flexible working arrangements.",
  },
  {
    icon: <Heart className="h-5 w-5 text-purple-400" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs for you and your family.",
  },
  {
    icon: <Lightbulb className="h-5 w-5 text-cyan-400" />,
    title: "Innovation Culture",
    description: "Work in an environment that encourages creative thinking and new ideas.",
  },
  {
    icon: <Banknote className="h-5 w-5 text-cyan-400" />,
    title: "Competitive Compensation",
    description: "Attractive salary packages and performance-based bonuses.",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-purple-400" />,
    title: "Learning & Development",
    description: "Continuous learning opportunities and professional certification support.",
  },
  {
    icon: <Globe className="h-5 w-5 text-cyan-400" />,
    title: "Global Exposure",
    description: "Work with international clients and gain exposure to global financial markets.",
  },
]

export function CompanyBenefits() {
  return (
    <section className="py-12 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Why Work With Us</h2>
          <p className="max-w-[42rem] text-muted-foreground text-sm">
            At Effortech, we value our employees and offer a range of benefits to support your career and wellbeing
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-background/50 border-purple-900/20">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-background p-2 mb-3">{benefit.icon}</div>
                <h3 className="font-medium text-sm mb-1">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
