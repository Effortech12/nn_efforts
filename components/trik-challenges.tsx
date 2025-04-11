import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Users, FileText } from "lucide-react"

export function TrikChallenges() {
  return (
    <section className="py-10 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">The Evolving Landscape of IT Risk</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Financial institutions face growing challenges in managing IT risks in today's digital environment
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto mb-10">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-100">
            <CardContent className="p-4">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Increased Cybersecurity Threats</h3>
              <p className="text-sm text-muted-foreground">
                As digital banking services expand in India, banks face heightened risks from cyberattacks, data
                breaches, and hacking attempts, prompting the need for more robust cybersecurity measures.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-200">
            <CardContent className="p-4">
              <div className="rounded-full bg-cyan-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <FileText className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Regulatory Compliance and Data Privacy</h3>
              <p className="text-sm text-muted-foreground">
                Banks must navigate evolving regulations like the Personal Data Protection Bill and RBI guidelines,
                ensuring adherence to compliance standards while safeguarding customer data.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-300">
            <CardContent className="p-4">
              <div className="rounded-full bg-purple-900/10 p-2 w-10 h-10 mb-3 flex items-center justify-center">
                <Users className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Adoption of Advanced Technologies</h3>
              <p className="text-sm text-muted-foreground">
                The integration of AI, blockchain, and cloud computing in banking introduces both operational
                efficiencies and new risks, such as system vulnerabilities, requiring constant monitoring and risk
                management strategies.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-center text-center mb-6 animate-fade-in animation-delay-400">
          <h3 className="text-xl font-bold tracking-tight mb-2">Key Challenges</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-500">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium mb-1">Observability Issues</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Limited visibility of the IT risk posture of the organization leading to insufficient or misdirected
                efforts towards compliance or risk mitigation.
              </p>
              <div className="rounded-lg bg-purple-900/10 p-2">
                <p className="text-xs text-purple-300">
                  Over 90% of recent cyber incidents in Indian banks could have been prevented if the leadership had
                  better visibility into open risks.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-cyan-900/20 animate-slide-up animation-delay-600">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium mb-1">Manpower Overheads</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Inefficient mechanism to track compliances involving excessive manual interventions, prone to errors or
                oversights.
              </p>
              <div className="rounded-lg bg-cyan-900/10 p-2">
                <p className="text-xs text-cyan-300">
                  On average, 15% of the IT/IS team is dedicated to manually tracking and compiling data, while IT
                  leaders spend over 30% of their time reviewing and correcting it.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-purple-900/20 animate-slide-up animation-delay-700">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium mb-1">Reporting Concerns</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Unavailability of a ready data set for audits and regulatory reporting.
              </p>
              <div className="rounded-lg bg-purple-900/10 p-2">
                <p className="text-xs text-purple-300">
                  2 out of every 5 regulatory submissions are delayed due to insufficient data readiness, while the
                  remaining submissions are either rushed at the last minute or contain data inconsistencies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
