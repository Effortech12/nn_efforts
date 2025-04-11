import { Card, CardContent } from "@/components/ui/card"

export function AuditBenefits() {
  return (
    <section className="py-10 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-6 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Benefits of a Managed Approach</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Realize quantifiable results with a managed approach to audit and compliance
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4 max-w-5xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">30-35%</div>
              <p className="text-sm text-muted-foreground">Reduction in audit findings through streamlined processes</p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-200">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">70%</div>
              <p className="text-sm text-muted-foreground">Improvement in compliance scores, reducing penalty risks</p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-300">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <p className="text-sm text-muted-foreground">
                Focus on core banking activities, enhancing overall efficiency
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-400">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
              <p className="text-sm text-muted-foreground">
                Reduction in audit TATs through enhanced readiness and engagement
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
