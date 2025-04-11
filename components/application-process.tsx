import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, MessageSquare, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: <FileText className="h-5 w-5 text-purple-400" />,
    title: "1. Application Review",
    description: "Submit your application and our recruitment team will review your qualifications and experience.",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-cyan-400" />,
    title: "2. Initial Interview",
    description:
      "If your profile matches our requirements, we'll schedule an initial interview to discuss your background and expectations.",
  },
  {
    icon: <Users className="h-5 w-5 text-purple-400" />,
    title: "3. Technical Assessment",
    description:
      "Depending on the role, you may be asked to complete a technical assessment or case study to demonstrate your skills.",
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-cyan-400" />,
    title: "4. Final Decision",
    description:
      "After the assessment phase, we'll make a final decision and extend an offer to successful candidates.",
  },
]

export function ApplicationProcess() {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Our Application Process</h2>
          <p className="max-w-[42rem] text-muted-foreground text-sm">
            A straightforward process designed to find the right match for both you and Effortech
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20">
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="rounded-full bg-background p-2 h-fit">{step.icon}</div>
                    <div>
                      <h3 className="font-medium text-sm mb-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
