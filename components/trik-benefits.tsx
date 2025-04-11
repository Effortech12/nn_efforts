import { Card, CardContent } from "@/components/ui/card"
import { Eye, Clock, FileText } from "lucide-react"

export function TrikBenefits() {
  return (
    <section className="py-10 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Key Features and Benefits</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            TRIK ensures high observability of the IT risk posture of the organization without excessive manual
            overheads and need for multiple systems
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto mb-10">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Eye className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">On-demand Risk Posture</h3>
              <p className="text-sm text-muted-foreground">
                Ready assessment of IT risks and compliance through integration with existing systems.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-200">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <FileText className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Ease of Reporting</h3>
              <p className="text-sm text-muted-foreground">
                Centralized repository for all the data pertaining to regulatory reporting.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-300">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Clock className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Flexibility</h3>
              <p className="text-sm text-muted-foreground">
                User customizable compliance templates to adapt to your organization's specific needs.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-6 animate-fade-in animation-delay-400">
            <h3 className="text-xl font-bold tracking-tight mb-2">Why Choose TRIK?</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-500">
              <CardContent className="p-4">
                <div className="rounded-full bg-purple-900/10 w-7 h-7 mb-3 flex items-center justify-center">
                  <span className="text-purple-400 font-bold">1</span>
                </div>
                <h3 className="text-lg font-medium mb-1">Built by Bankers</h3>
                <p className="text-sm text-muted-foreground">
                  Designed by veterans of the Indian banking industry with a deep understanding of the IT risk landscape
                  and current challenges, the tool is comprehensive and ready to deliver benefits from Day 1 with
                  minimal customization and implementation efforts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-600">
              <CardContent className="p-4">
                <div className="rounded-full bg-cyan-900/10 w-7 h-7 mb-3 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">2</span>
                </div>
                <h3 className="text-lg font-medium mb-1">Scalable & Customizable</h3>
                <p className="text-sm text-muted-foreground">
                  Self-sufficient tool built to scale with extensive customization capabilities means ~0 incremental
                  cost as you keep pushing it to get the best out of it.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-700">
              <CardContent className="p-4">
                <div className="rounded-full bg-purple-900/10 w-7 h-7 mb-3 flex items-center justify-center">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <h3 className="text-lg font-medium mb-1">Minimalistic Design</h3>
                <p className="text-sm text-muted-foreground">
                  Designed to keep things simple and effective ensuring minimal training efforts allowing for a quick
                  adaption within the team. TRIK comes with a bundled training and risk assessment program, to help you
                  hit the ground running.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
