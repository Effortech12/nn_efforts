import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, Database, Users } from "lucide-react"

export function AuditProcess() {
  return (
    <section className="py-10 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-6 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Streamlining the Audit Process</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Expert guidance ensures a smooth audit process, minimizing disruptions and maximizing efficiency
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <ClipboardList className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Audit Planning</h3>
              <p className="text-sm text-muted-foreground">
                Define scope, objectives, and timelines with precision to ensure comprehensive coverage and efficient
                execution.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-200">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Database className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Data Preparation</h3>
              <p className="text-sm text-muted-foreground">
                Ensure accuracy and completeness of all data required for the audit, reducing the risk of findings due
                to incomplete information.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-300">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Users className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">On-site Support</h3>
              <p className="text-sm text-muted-foreground">
                Facilitate auditor interactions and document retrieval, ensuring smooth collaboration with inspection
                teams for successful outcomes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
