import { Card, CardContent } from "@/components/ui/card"
import { Shield, BarChart3, Users, Building } from "lucide-react"

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="pt-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="bg-background/50 border-purple-900/20 overflow-hidden relative animate-fade-in">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-700"></div>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-purple-900/10 p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold mb-1">5+</div>
                <p className="text-sm text-muted-foreground">Products and Services</p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-cyan-900/20 overflow-hidden relative animate-fade-in animation-delay-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-cyan-700"></div>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-cyan-900/10 p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold mb-1">₹500Cr+</div>
                <p className="text-sm text-muted-foreground">Risk Exposure Mitigated</p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-purple-900/20 overflow-hidden relative animate-fade-in animation-delay-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-700"></div>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-purple-900/10 p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold mb-1">50+</div>
                <p className="text-sm text-muted-foreground">Risk Management Experts</p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-cyan-900/20 overflow-hidden relative animate-fade-in animation-delay-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-cyan-700"></div>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-cyan-900/10 p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold mb-1">20+</div>
                <p className="text-sm text-muted-foreground">Years of Industry Experience</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-purple-700/20 bg-purple-900/10 px-4 py-1.5 text-sm text-purple-300">
            <span className="font-medium">Trusted by leading financial institutions across India</span>
          </div>
        </div>
      </div>
    </section>
  )
}
