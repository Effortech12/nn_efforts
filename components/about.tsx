import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-8 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="w-full lg:w-[55%]">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
              Deep Expertise in Financial Technology Risk
            </h2>
            <p className="text-sm text-muted-foreground mb-3">
              Effortech is led by banking industry veterans who understand the unique challenges faced by financial
              institutions in India. Our team combines decades of experience in banking technology, risk management, and
              regulatory compliance.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 shrink-0" />
                <p className="text-xs">
                  <span className="font-medium">Comprehensive Risk Assessment</span> - Identify and evaluate technology
                  risks specific to your organization
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 shrink-0" />
                <p className="text-xs">
                  <span className="font-medium">Regulatory Compliance</span> - Stay compliant with RBI guidelines and
                  other regulatory requirements
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                <p className="text-xs">
                  <span className="font-medium">Tailored Solutions</span> - Customized risk management strategies for
                  banks, fintechs, and NBFCs
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                <p className="text-xs">
                  <span className="font-medium">Continuous Monitoring</span> - Proactive identification and mitigation
                  of emerging technology risks
                </p>
              </div>
            </div>

            <Button size="sm">Learn More About Us</Button>
          </div>

          {/* Image Container */}
          <div className="relative w-full lg:w-[37.5%] lg:self-start">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-md"></div>
            <div className="relative overflow-hidden rounded-xl border border-purple-900/30 bg-background/50">
              <Image
                src="/fintech-visualization.png"
                alt="Financial technology visualization"
                width={750}
                height={375}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
