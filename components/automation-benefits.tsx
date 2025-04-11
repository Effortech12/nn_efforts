import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, BarChart2, Clock } from "lucide-react"
import Image from "next/image"

export function AutomationBenefits() {
  return (
    <section className="py-10 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
            Benefits of Automation in IT Risk Management
          </h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Automation transforms how banks approach IT risk management, delivering significant advantages
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-10">
          <div className="space-y-4 animate-slide-in-left animation-delay-200">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                    <Zap className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Enhanced Efficiency</h3>
                  <p className="text-xs text-muted-foreground">
                    Automate repetitive tasks to free up valuable resources for more strategic risk management
                    activities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-cyan-900/20">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="rounded-full bg-cyan-900/10 p-2 mb-2">
                    <Shield className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Improved Accuracy</h3>
                  <p className="text-xs text-muted-foreground">
                    Eliminate human errors in data collection, analysis, and reporting for more reliable risk
                    assessments.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                    <BarChart2 className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Real-time Insights</h3>
                  <p className="text-xs text-muted-foreground">
                    Gain immediate visibility into risk posture with automated monitoring and reporting capabilities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-cyan-900/20">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="rounded-full bg-cyan-900/10 p-2 mb-2">
                    <Clock className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Faster Response</h3>
                  <p className="text-xs text-muted-foreground">
                    Quickly identify and address emerging risks with automated detection and alert systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="animate-slide-in-right animation-delay-300 flex justify-center">
            <div className="w-[50%]">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm"></div>
                <div className="relative rounded-xl overflow-hidden border border-purple-900/30 bg-background/50">
                  <Image
                    src="/images/automation-flow.png"
                    alt="Benefits of Automation in IT Risk Management"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
