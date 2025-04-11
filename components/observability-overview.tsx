import { Card, CardContent } from "@/components/ui/card"
import { Activity, LineChart, AlertTriangle, Zap } from "lucide-react"
import Image from "next/image"

export function ObservabilityOverview() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">Solution Approach</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Our Business Service Observability solution provides end-to-end visibility across your entire technology
            stack, from business services to infrastructure.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
          <div className="flex justify-center animate-scale-in animation-delay-200">
            <div className="relative w-[75%]">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm"></div>
              <div className="relative rounded-xl overflow-hidden border border-purple-900/30 bg-background/50 p-1">
                <Image
                  src="/images/observability-dashboard.png"
                  alt="Business Service Observability Dashboard"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 animate-slide-in-right animation-delay-300">
            <div>
              <h3 className="text-xl font-bold mb-3">Traditional Monitoring vs. Business Observability</h3>
              <p className="text-muted-foreground">
                Traditional monitoring tools can detect infrastructure issues but cannot identify business impact or
                root causes. Our Business Service Observability solution bridges this gap by providing:
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="bg-background/50 border-purple-900/20 animate-fade-in animation-delay-400">
                <CardContent className="p-4 flex gap-3">
                  <div className="rounded-full bg-purple-900/10 p-2 h-fit">
                    <Activity className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Business Impact Detection</h4>
                    <p className="text-xs text-muted-foreground">
                      Identify how technical issues affect business services
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-cyan-900/20 animate-fade-in animation-delay-500">
                <CardContent className="p-4 flex gap-3">
                  <div className="rounded-full bg-cyan-900/10 p-2 h-fit">
                    <LineChart className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Dependency Mapping</h4>
                    <p className="text-xs text-muted-foreground">Understand upstream and downstream impacts</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-purple-900/20 animate-fade-in animation-delay-600">
                <CardContent className="p-4 flex gap-3">
                  <div className="rounded-full bg-purple-900/10 p-2 h-fit">
                    <AlertTriangle className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Automated Root Cause Analysis</h4>
                    <p className="text-xs text-muted-foreground">Quickly identify the source of issues</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-cyan-900/20 animate-fade-in animation-delay-700">
                <CardContent className="p-4 flex gap-3">
                  <div className="rounded-full bg-cyan-900/10 p-2 h-fit">
                    <Zap className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Proactive Remediation</h4>
                    <p className="text-xs text-muted-foreground">Address issues before they impact customers</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-400">
            <CardContent className="p-6 text-center">
              <h3 className="font-medium text-lg mb-2">Business Services</h3>
              <p className="text-sm text-muted-foreground">
                Monitor critical business services like UPI, NEFT, RTGS, Internet Banking, and Mobile Banking from an
                end-user perspective.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-500">
            <CardContent className="p-6 text-center">
              <h3 className="font-medium text-lg mb-2">Applications & APIs</h3>
              <p className="text-sm text-muted-foreground">
                Track application performance, API response times, and transaction flows across your technology stack.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-600">
            <CardContent className="p-6 text-center">
              <h3 className="font-medium text-lg mb-2">Infrastructure</h3>
              <p className="text-sm text-muted-foreground">
                Monitor servers, networks, databases, and cloud resources to ensure optimal performance and reliability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
