import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, ClipboardCheck, Database, Activity, Upload, RefreshCw, LayoutDashboard } from "lucide-react"
import Image from "next/image"

export function TrikFeatures() {
  return (
    <section id="features" className="py-10 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
            Introducing TRIK: Your All-in-One Solution
          </h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            A comprehensive IT risk management tool designed specifically for the Indian banking sector
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 items-center mb-10">
          <div className="space-y-4 animate-slide-in-left animation-delay-200">
            <div className="grid gap-3 sm:grid-cols-2">
              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                    <BarChart3 className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Centralized Dashboard</h3>
                  <p className="text-xs text-muted-foreground">
                    Real-time visibility into IT risk posture with comprehensive dashboards and analytics.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-cyan-900/20">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="rounded-full bg-cyan-900/10 p-2 mb-2">
                    <Activity className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Automated Risk Assessments</h3>
                  <p className="text-xs text-muted-foreground">
                    Streamlined identification and evaluation of vulnerabilities with minimal manual intervention.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-purple-900/20">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                    <ClipboardCheck className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Compliance Management</h3>
                  <p className="text-xs text-muted-foreground">
                    Simplified adherence to regulatory requirements with customizable compliance templates.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-cyan-900/20">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="rounded-full bg-cyan-900/10 p-2 mb-2">
                    <Database className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Data Repository</h3>
                  <p className="text-xs text-muted-foreground">
                    A master data repository for all IT risk items to ease regulatory and internal reporting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="animate-slide-in-right animation-delay-300 flex justify-center">
            <div className="w-[50%]">
              <Image
                src="/images/trik-visualization.png"
                alt="TRIK Analytics Visualization"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-6 animate-fade-in animation-delay-400">
            <h3 className="text-xl font-bold tracking-tight mb-2">TRIK in Action</h3>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 items-start">
            <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-500">
              <CardContent className="p-4">
                <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                  <Upload className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-medium mb-1">Flexible Data Input</h3>
                <p className="text-sm text-muted-foreground">
                  TRIK allows you to manually upload multiple checklists which can then be tracked and managed from a
                  single interface, eliminating the need for scattered spreadsheets and documents.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-600">
              <CardContent className="p-4">
                <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                  <RefreshCw className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-medium mb-1">Seamless Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time integration with your existing applications such as centralized patch management solutions,
                  network security tools, VAPT applications, web security assessment tools, and IT inventory management
                  systems to pull in necessary statistics without the need for manual data entry.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-700">
              <CardContent className="p-4">
                <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                  <LayoutDashboard className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-medium mb-1">Comprehensive Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  TRIK offers exhaustive dashboards for each module and risk category, trend analysis to track
                  improvement over time, risk scoring, extensive customization options (add new modules, modify
                  checkpoints, bulk upload checklists, enable/disable graphs), and custom reports and data extracts for
                  stakeholder presentations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
