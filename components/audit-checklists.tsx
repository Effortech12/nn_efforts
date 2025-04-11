import { Card, CardContent } from "@/components/ui/card"
import { CheckSquare, AlertTriangle, RefreshCw, Users } from "lucide-react"

export function AuditChecklists() {
  return (
    <section className="py-10 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-6 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Compliance Checklists</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Establish a strong foundation for proactive risk management with comprehensive compliance checklists
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto mb-10">
          <div className="space-y-4 animate-slide-in-left animation-delay-200">
            <div className="grid gap-3 sm:grid-cols-2">
              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                    <CheckSquare className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Comprehensive Coverage</h3>
                  <p className="text-xs text-muted-foreground">
                    Monthly, quarterly, and annual checklists tailored to specific regulations and requirements.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-cyan-900/20">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="rounded-full bg-cyan-900/10 p-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Risk-Based Approach</h3>
                  <p className="text-xs text-muted-foreground">
                    Prioritize high-risk areas to focus resources effectively and address critical compliance issues
                    first.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                    <RefreshCw className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Dynamic Updates</h3>
                  <p className="text-xs text-muted-foreground">
                    Adapt checklists to evolving regulatory requirements, ensuring continuous compliance with the latest
                    standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-in-right animation-delay-300">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium mb-2">Our Team of Curators</h3>
              <div className="flex items-start gap-3 mb-3">
                <div className="rounded-full bg-cyan-900/10 p-2 h-fit">
                  <Users className="h-5 w-5 text-cyan-400" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Team to curate the risk assessment checklists basis the industry best practices, regulatory guidelines
                  and more importantly the learnings from the peers.
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                The Team will keep publishing these checklists which can be adapted and uploaded in the tracking tool
                for real-time visibility and compliance.
              </p>
              <p className="text-sm text-muted-foreground">
                IT Risk Management experts with deep insights to Network and Infra security, IT governance, API
                security, Database and Web application security, Aadhaar ecosystem (AUA-KUA), Data localization, Digital
                Payment security, Vendor/Outsourcing risk etc.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
