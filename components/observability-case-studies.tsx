import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function ObservabilityCaseStudies() {
  return (
    <section className="py-16 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">Success Stories</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            See how our Business Service Observability solutions have helped financial institutions
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Leading Small Finance Bank in India</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Challenge</h4>
                  <p className="text-xs text-muted-foreground">
                    The bank lacked an Application/Business Service Observability solution, resulting in manual analysis
                    of logs and metrics to identify root causes. This laborious process negatively impacted overall MTTR
                    and end-user experience.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Solution</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Implemented a Unified Business Service Observability Solution based on Elastic that collects and
                    correlates metrics, logs, and traces from Business Applications, Infrastructure, and Network layers.
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-purple-400 mt-0.5 shrink-0" />
                      <p className="text-xs">Integrated data across Business Services</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-purple-400 mt-0.5 shrink-0" />
                      <p className="text-xs">Applied Machine Learning for Anomaly Detection</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Key Business Services Covered</h4>
                  <div className="grid gap-1 sm:grid-cols-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                      <p className="text-xs text-muted-foreground">CBS / Treasury (Finacle)</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                      <p className="text-xs text-muted-foreground">Internet & Mobile Banking</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                      <p className="text-xs text-muted-foreground">Corporate Internet Banking</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                      <p className="text-xs text-muted-foreground">Micro Lending Software</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                      <p className="text-xs text-muted-foreground">Loan Origination System</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                      <p className="text-xs text-muted-foreground">Document Management System</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Results</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400 mt-0.5 shrink-0" />
                      <p className="text-xs">Faster problem isolation and RCA</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400 mt-0.5 shrink-0" />
                      <p className="text-xs">Proactive issue detection and remediation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400 mt-0.5 shrink-0" />
                      <p className="text-xs">Improved customer experience</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400 mt-0.5 shrink-0" />
                      <p className="text-xs">Reduced mean time to resolution</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Large Indian Public Bank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Challenge</h4>
                  <p className="text-xs text-muted-foreground">
                    The bank lacked an observability solution, resulting in reactive troubleshooting efforts with
                    lengthy RCA cycles and inaccurate root cause analysis with blame shifting between teams.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Solution</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Implemented a comprehensive monitoring solution to track the entire technology stack, including
                    infrastructure and applications, with consolidated dashboards for end-to-end visibility.
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400 mt-0.5 shrink-0" />
                      <p className="text-xs">AI-powered insights for anomaly detection</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400 mt-0.5 shrink-0" />
                      <p className="text-xs">Integration with existing ServiceNow ITSM</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Key Business Services Covered</h4>
                  <div className="grid gap-1 sm:grid-cols-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                      <p className="text-xs text-muted-foreground">UPI Payments</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                      <p className="text-xs text-muted-foreground">Mobile & Tab Banking</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                      <p className="text-xs text-muted-foreground">IMPS Payments</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                      <p className="text-xs text-muted-foreground">Core Banking System Services</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                      <p className="text-xs text-muted-foreground">Integration Middleware</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                      <p className="text-xs text-muted-foreground">Document Management System</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Results</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-purple-400 mt-0.5 shrink-0" />
                      <p className="text-xs">Real-time visibility into critical services</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-purple-400 mt-0.5 shrink-0" />
                      <p className="text-xs">Faster issue detection and resolution</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-purple-400 mt-0.5 shrink-0" />
                      <p className="text-xs">Enhanced customer experience</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-purple-400 mt-0.5 shrink-0" />
                      <p className="text-xs">Improved service reliability</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
