import { Shield, BarChart2, Users } from "lucide-react"

export function AuditCallToAction() {
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
            Partnering for Sustainable Compliance Excellence
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-6 animate-fade-in animation-delay-100">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                <Shield className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-sm font-medium">Proactive</h3>
              <p className="text-xs text-muted-foreground">Shift from reactive measures to preventative strategies</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-cyan-900/10 p-2 mb-2">
                <BarChart2 className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-sm font-medium">Technology-Driven</h3>
              <p className="text-xs text-muted-foreground">
                Utilize technology for real-time visibility and automation
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                <Users className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-sm font-medium">Expert-Led</h3>
              <p className="text-xs text-muted-foreground">Leverage expert guidance for optimal outcomes</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 sm:text-lg animate-fade-in animation-delay-200">
            Partner with us for sustainable compliance excellence. Contact us today for a customized assessment and
            discover how we can help you navigate the complex regulatory landscape.
          </p>

          <div className="animate-fade-in animation-delay-300">{/* Buttons removed */}</div>
        </div>
      </div>
    </section>
  )
}
