import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Users, FileText } from "lucide-react"

export function AuditChallenges() {
  return (
    <section id="challenges" className="py-10 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-6 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Challenges</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Financial institutions face significant challenges in managing audit and compliance requirements
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100">
            <CardContent className="p-4">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Users className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Lack of Competency/Bandwidth</h3>
              <p className="text-sm text-muted-foreground">
                Organizations often struggle with having the necessary expertise within their teams to effectively
                conduct audits. This includes understanding guidelines, defining scope, gathering relevant data, and
                addressing observations appropriately.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-200">
            <CardContent className="p-4">
              <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Lack of Proactive Risk Management</h3>
              <p className="text-sm text-muted-foreground">
                Risk management is often reactive rather than proactive, making audit compliance more challenging than
                necessary and exposing the organization to greater risk. Additionally, there is little to no ongoing
                visibility into the organization's overall risk posture.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-300">
            <CardContent className="p-4">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <FileText className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Patchy Compliance Road Map</h3>
              <p className="text-sm text-muted-foreground">
                Organizations often find it challenging to implement effective risk mitigation strategies and ensure
                compliance with audit observations. Without the necessary insights, they resort to ad-hoc fixes merely
                to close findings, which adds little to no long-term value and more than often, fails the next audit.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
