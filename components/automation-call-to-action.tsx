import { Zap, Shield, BarChart2 } from "lucide-react"

export function AutomationCallToAction() {
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
            Transform Your IT Risk Management with Automation
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-6 animate-fade-in animation-delay-100">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                <Zap className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-sm font-medium">Efficiency</h3>
              <p className="text-xs text-muted-foreground">Reduce manual effort by up to 70%</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-cyan-900/10 p-2 mb-2">
                <Shield className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-sm font-medium">Security</h3>
              <p className="text-xs text-muted-foreground">Enhance your risk posture</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-purple-900/10 p-2 mb-2">
                <BarChart2 className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-sm font-medium">Visibility</h3>
              <p className="text-xs text-muted-foreground">Real-time risk insights</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 sm:text-lg animate-fade-in animation-delay-200">
            Ready to revolutionize your approach to IT risk management? Partner with Effortech to implement intelligent
            automation solutions tailored to your banking institution's unique needs.
          </p>

          <div className="animate-fade-in animation-delay-300"></div>
        </div>
      </div>
    </section>
  )
}
