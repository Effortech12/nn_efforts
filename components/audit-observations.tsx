import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, CheckCircle } from "lucide-react"

export function AuditObservations() {
  return (
    <section className="py-10 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-6 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
            Expert-Led Closure of Audit Observations
          </h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Expert-led closure of audit observations is crucial for minimizing risk and preventing future issues
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Search className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Root Cause Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Identify underlying issues to prevent recurrence, addressing the source of problems rather than just
                symptoms.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-200">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <FileText className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Remediation Planning</h3>
              <p className="text-sm text-muted-foreground">
                Develop corrective action plans tailored to specific findings, ensuring effective and sustainable
                solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-300">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Implementation Support</h3>
              <p className="text-sm text-muted-foreground">
                Guide implementation and monitor progress to completion, ensuring remediation actions are properly
                executed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
