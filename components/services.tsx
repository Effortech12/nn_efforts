import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, ClipboardCheck, PenToolIcon as Tool, Cpu, BarChart2 } from "lucide-react"
import Link from "next/link"

export function Services() {
  return (
    <section id="services" className="py-8 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-6 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Our Services</h2>
          <p className="max-w-[42rem] text-muted-foreground text-sm">
            Comprehensive technology risk management solutions tailored for the financial sector in India
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Link href="/observability" className="block animate-slide-up animation-delay-100">
            <Card className="bg-background/50 border-purple-900/20 hover:border-purple-700/30 transition-colors h-full">
              <CardHeader className="pb-2 space-y-1 p-4 text-center">
                <div className="mb-2 w-8 h-8 rounded-lg bg-purple-900/20 flex items-center justify-center mx-auto">
                  <Eye className="h-4 w-4 text-purple-400" />
                </div>
                <CardTitle className="text-base">Business Service Observability</CardTitle>
                <CardDescription className="text-xs">
                  End-to-end visibility into your technology infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-xs text-muted-foreground text-center">
                <p>
                  Our observability solutions provide real-time insights into your business services, helping you
                  identify and resolve issues before they impact your customers. Monitor performance, detect anomalies,
                  and ensure service reliability.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/audit-compliance" className="block animate-slide-up animation-delay-200">
            <Card className="bg-background/50 border-cyan-900/20 hover:border-cyan-700/30 transition-colors h-full">
              <CardHeader className="pb-2 space-y-1 p-4 text-center">
                <div className="mb-2 w-8 h-8 rounded-lg bg-cyan-900/20 flex items-center justify-center mx-auto">
                  <ClipboardCheck className="h-4 w-4 text-cyan-400" />
                </div>
                <CardTitle className="text-base">Audit & Compliance as a Service</CardTitle>
                <CardDescription className="text-xs">
                  Streamlined compliance management for financial institutions
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-xs text-muted-foreground text-center">
                <p>
                  Our managed compliance service helps financial institutions meet regulatory requirements with ease. We
                  handle the complexity of compliance, allowing you to focus on your core business while ensuring
                  adherence to industry standards and regulations.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/trik" className="block animate-slide-up animation-delay-300">
            <Card className="bg-background/50 border-purple-900/20 hover:border-purple-700/30 transition-colors h-full">
              <CardHeader className="pb-2 space-y-1 p-4 text-center">
                <div className="mb-2 w-8 h-8 rounded-lg bg-purple-900/20 flex items-center justify-center mx-auto">
                  <Tool className="h-4 w-4 text-purple-400" />
                </div>
                <CardTitle className="text-base">Internal Risk Management Tool - TRIK</CardTitle>
                <CardDescription className="text-xs">
                  Comprehensive risk assessment and management platform
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-xs text-muted-foreground text-center">
                <p>
                  TRIK is our proprietary risk management tool designed specifically for financial institutions. It
                  provides a structured approach to identifying, assessing, and mitigating technology risks, with
                  built-in workflows and reporting capabilities tailored to the Indian financial sector.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/automation" className="block animate-slide-up animation-delay-400">
            <Card className="bg-background/50 border-cyan-900/20 hover:border-cyan-700/30 transition-colors h-full">
              <CardHeader className="pb-2 space-y-1 p-4 text-center">
                <div className="mb-2 w-8 h-8 rounded-lg bg-cyan-900/20 flex items-center justify-center mx-auto">
                  <Cpu className="h-4 w-4 text-cyan-400" />
                </div>
                <CardTitle className="text-base">Automation</CardTitle>
                <CardDescription className="text-xs">
                  Streamline risk management processes through automation
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-xs text-muted-foreground text-center">
                <p>
                  Our automation solutions help financial institutions reduce manual effort in risk management
                  processes. From automated compliance checks to continuous monitoring and reporting, we help you
                  achieve efficiency while maintaining rigorous risk controls.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/program-management" className="block animate-slide-up animation-delay-500">
            <Card className="bg-background/50 border-purple-900/20 hover:border-purple-700/30 transition-colors h-full">
              <CardHeader className="pb-2 space-y-1 p-4 text-center">
                <div className="mb-2 w-8 h-8 rounded-lg bg-purple-900/20 flex items-center justify-center mx-auto">
                  <BarChart2 className="h-4 w-4 text-purple-400" />
                </div>
                <CardTitle className="text-base">Program Management for Mission-Critical Projects</CardTitle>
                <CardDescription className="text-xs">
                  Expert guidance for high-stakes technology initiatives
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-xs text-muted-foreground text-center">
                <p>
                  Our program management service provides end-to-end oversight for mission-critical technology projects
                  in the financial sector. We bring structured methodologies, risk mitigation strategies, and industry
                  best practices to ensure successful delivery of complex initiatives with strict regulatory
                  requirements and tight deadlines.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
