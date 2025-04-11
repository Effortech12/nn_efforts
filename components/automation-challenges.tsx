import { Card, CardContent } from "@/components/ui/card"
import { Clock, AlertTriangle, FileText, Users } from "lucide-react"

export function AutomationChallenges() {
  return (
    <section id="challenges" className="py-10 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-6 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Challenges in IT Risk Management</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Banks face significant challenges in managing IT risks efficiently in today's complex digital landscape
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100">
            <CardContent className="p-4">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Clock className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Time-Consuming Manual Processes</h3>
              <p className="text-sm text-muted-foreground">
                Risk assessment, compliance checks, and audit preparations involve numerous manual, repetitive tasks
                that consume valuable time and resources.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-200">
            <CardContent className="p-4">
              <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Human Error Risk</h3>
              <p className="text-sm text-muted-foreground">
                Manual data entry and analysis are prone to errors, potentially leading to inaccurate risk assessments,
                missed vulnerabilities, or compliance gaps.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-300">
            <CardContent className="p-4">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <FileText className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Regulatory Complexity</h3>
              <p className="text-sm text-muted-foreground">
                Keeping pace with evolving regulations and ensuring consistent compliance across all systems and
                processes is increasingly challenging.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-400">
            <CardContent className="p-4">
              <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Users className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Resource Constraints</h3>
              <p className="text-sm text-muted-foreground">
                Limited skilled personnel to handle the growing complexity and volume of IT risk management tasks,
                leading to potential oversight and delays.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
