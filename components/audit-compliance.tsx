import { Card, CardContent } from "@/components/ui/card"
import { Database, BarChart2, Shield } from "lucide-react"

export function AuditCompliance() {
  return (
    <section className="py-10 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-6 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Maintaining & Tracking Compliance</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            A tool-based approach to track compliance ensures accuracy, consistency, and real-time visibility
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Database className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Centralized Repository</h3>
              <p className="text-sm text-muted-foreground">
                Store policies, procedures, and evidence in one location for ease of audit and reporting, eliminating
                scattered documentation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-200">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <BarChart2 className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Real-time Dashboards</h3>
              <p className="text-sm text-muted-foreground">
                Track progress and deadlines with interactive dashboards. Generate reports for stakeholders to
                demonstrate compliance status.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-300">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Shield className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Risk Posture</h3>
              <p className="text-sm text-muted-foreground">
                Track the organizational risk posture, identify problem areas and ensure timely mitigation to prevent
                compliance issues.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
