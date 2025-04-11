import { Card, CardContent } from "@/components/ui/card"
import { LayoutDashboard, BarChart2, Clock } from "lucide-react"
import Image from "next/image"

export function AuditTracking() {
  return (
    <section className="py-10 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-6 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Technology-Driven Audit Tracking</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            A centralized platform offers real-time visibility into audit requests, findings, and resolutions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
          <div className="lg:w-2/5 animate-slide-in-left animation-delay-200">
            <div className="w-[75%] mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm"></div>
                <div className="relative rounded-xl overflow-hidden border border-purple-900/30 bg-background/50">
                  <Image
                    src="/images/audit-dashboard.png"
                    alt="Technology-driven audit tracking dashboard"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 animate-slide-in-right animation-delay-300">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                    <LayoutDashboard className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">Centralized Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage all audit-related activities from a single, integrated platform, eliminating silos and
                    improving coordination.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-cyan-900/20">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                    <BarChart2 className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">Automated Reporting</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate status updates and trend analysis automatically, saving time and providing valuable
                    insights for decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">Real-Time Visibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor audit progress and compliance status in real-time, enabling proactive risk management and
                    timely interventions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
