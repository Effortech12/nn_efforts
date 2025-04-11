import { Card, CardContent } from "@/components/ui/card"
import { Bot, Workflow, Database, RefreshCw, Lock, Settings } from "lucide-react"
import Image from "next/image"

export function AutomationFeatures() {
  return (
    <section className="py-10 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Our Automation Solutions</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Comprehensive automation capabilities designed specifically for IT risk management in banking
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-10">
          <div className="animate-slide-in-left animation-delay-200 flex justify-center">
            <div className="w-[50%]">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm"></div>
                <div className="relative rounded-xl overflow-hidden border border-purple-900/30 bg-background/50">
                  <Image
                    src="/images/automation-platform.png"
                    alt="Automation Platform for IT Risk Management"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 animate-slide-in-right animation-delay-300">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-4 flex gap-3">
                  <div className="rounded-full bg-purple-900/10 p-2 h-fit">
                    <Bot className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">RPA Integration</h3>
                    <p className="text-xs text-muted-foreground">
                      Robotic Process Automation for repetitive tasks like data collection, report generation, and
                      control testing.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-cyan-900/20">
                <CardContent className="p-4 flex gap-3">
                  <div className="rounded-full bg-cyan-900/10 p-2 h-fit">
                    <Workflow className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Workflow Automation</h3>
                    <p className="text-xs text-muted-foreground">
                      Streamlined approval processes, escalations, and task assignments with configurable workflows.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-4 flex gap-3">
                  <div className="rounded-full bg-purple-900/10 p-2 h-fit">
                    <Database className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Data Integration</h3>
                    <p className="text-xs text-muted-foreground">
                      Automated data collection from multiple sources for comprehensive risk analysis.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-cyan-900/20">
                <CardContent className="p-4 flex gap-3">
                  <div className="rounded-full bg-cyan-900/10 p-2 h-fit">
                    <RefreshCw className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Continuous Monitoring</h3>
                    <p className="text-xs text-muted-foreground">
                      Automated, real-time monitoring of controls, configurations, and compliance status.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-4 flex gap-3">
                  <div className="rounded-full bg-purple-900/10 p-2 h-fit">
                    <Lock className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Security Automation</h3>
                    <p className="text-xs text-muted-foreground">
                      Automated threat detection, vulnerability management, and security incident response.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-cyan-900/20">
                <CardContent className="p-4 flex gap-3">
                  <div className="rounded-full bg-cyan-900/10 p-2 h-fit">
                    <Settings className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Customizable Solutions</h3>
                    <p className="text-xs text-muted-foreground">
                      Tailored automation solutions designed to meet the specific needs of your banking institution.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
