import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"

export function Team() {
  return (
    <section id="team" className="py-8 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Our Leadership</h2>
          <p className="max-w-[42rem] text-muted-foreground text-sm">
            Led by banking industry veterans with deep understanding of the technology risk landscape in the banking
            sector in India
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-background/50 border-purple-900/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 w-full bg-gradient-to-b from-purple-900/20 to-background/95">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Team Member ${i}`}
                    alt={`Team member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-base font-bold mb-1">Banking Executive {i}</h3>
                  <p className="text-xs text-purple-400 mb-1">
                    Chief {i === 1 ? "Executive" : i === 2 ? "Technology" : "Risk"} Officer
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Over 20 years of experience in banking technology and risk management. Expert in{" "}
                    {i === 1 ? "strategic leadership" : i === 2 ? "technology infrastructure" : "regulatory compliance"}
                    .
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
                  >
                    <Linkedin className="h-3 w-3" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
