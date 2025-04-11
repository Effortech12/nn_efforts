import { Shield, Clock, FileText } from "lucide-react"

export function ProgramManagementCallToAction() {
  return (
    <section className="py-10 bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3 animate-fade-in">
            Partner with Effortech for Your Mission-Critical Projects
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-6 animate-fade-in animation-delay-100">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                <Shield className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-sm font-medium">Risk Mitigation</h3>
              <p className="text-xs text-muted-foreground">Minimize implementation risks</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-cyan-900/10 p-2 mb-2">
                <Clock className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-sm font-medium">Accelerated Delivery</h3>
              <p className="text-xs text-muted-foreground">Faster time-to-market</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                <FileText className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-sm font-medium">Regulatory Compliance</h3>
              <p className="text-xs text-muted-foreground">Built-in compliance approach</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 sm:text-lg animate-fade-in animation-delay-200">
            Let our experienced team guide your financial institution through the complexities of implementing new
            technologies with our proven risk-focused program management approach.
          </p>
        </div>
      </div>
    </section>
  )
}
