import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, FileText, Users } from "lucide-react"

export function ProgramManagementOverview() {
  return (
    <section className="py-10 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
            The Challenge of Technology Adoption in Banking
          </h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Financial institutions face significant challenges when implementing new technologies
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100">
            <CardContent className="p-4">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Regulatory Complexity</h3>
              <p className="text-sm text-muted-foreground">
                Navigating the complex regulatory landscape while implementing new technologies, ensuring compliance
                with RBI guidelines, data protection laws, and industry standards.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-200">
            <CardContent className="p-4">
              <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Clock className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Time-to-Market Pressure</h3>
              <p className="text-sm text-muted-foreground">
                Balancing the need for speed in technology implementation with thorough risk assessment and testing,
                while facing competitive pressure to innovate quickly.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-300">
            <CardContent className="p-4">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <FileText className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Integration Complexity</h3>
              <p className="text-sm text-muted-foreground">
                Integrating new technologies with legacy systems while ensuring data integrity, security, and minimal
                disruption to existing operations and customer services.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-400">
            <CardContent className="p-4">
              <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Users className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Stakeholder Management</h3>
              <p className="text-sm text-muted-foreground">
                Aligning diverse stakeholders including business units, IT teams, compliance, risk management, and
                vendors while managing expectations and ensuring clear communication.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
