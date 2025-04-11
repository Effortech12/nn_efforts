import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Server, HeartPulse } from "lucide-react"

export function TrikImplementation() {
  return (
    <section className="py-10 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Investment & Implementation</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            A straightforward approach to deploying TRIK in your organization
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto mb-10">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Pricing</h3>
              <p className="text-sm text-muted-foreground">
                Perpetual licensing (On-Prem) with Annual Maintenance Contract (AMC) for continued support and updates.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-200">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Server className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                On-prem deployment including integrations with existing systems through API/ETL/Upload mechanisms for
                seamless data flow.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-300">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <HeartPulse className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Post-Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Periodic bulletin with additional security checkpoints basis learnings from peers and regulatory
                changes, along with ongoing support and upgrades.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-6 animate-fade-in animation-delay-400">
            <h3 className="text-xl font-bold tracking-tight mb-2">What We Should Aim to Achieve</h3>
          </div>

          <div className="grid gap-3 md:grid-cols-3 animate-slide-up animation-delay-500">
            <div className="bg-background/50 border border-purple-900/20 rounded-lg p-3 text-center">
              <p className="font-medium">Timely risk identification and mitigation</p>
            </div>
            <div className="bg-background/50 border border-cyan-900/20 rounded-lg p-3 text-center">
              <p className="font-medium">Minimized manpower requirements</p>
            </div>
            <div className="bg-background/50 border border-purple-900/20 rounded-lg p-3 text-center">
              <p className="font-medium">Simplified audits and regulatory reporting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
