import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase } from "lucide-react"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Risk Management Consultant",
    department: "Risk Advisory",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "5-8 years",
    description:
      "Lead risk assessment and advisory projects for financial institutions, focusing on technology risk management frameworks and regulatory compliance.",
  },
  {
    id: 2,
    title: "Technology Risk Analyst",
    department: "Risk Advisory",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Assist in conducting technology risk assessments, gap analyses, and developing risk mitigation strategies for banking and fintech clients.",
  },
  {
    id: 3,
    title: "Compliance Specialist",
    department: "Audit & Compliance",
    location: "Remote, India",
    type: "Full-time",
    experience: "3-6 years",
    description:
      "Help financial institutions navigate complex regulatory requirements and implement effective compliance programs for technology systems.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Technology",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Support the development and maintenance of our proprietary risk management tools and platforms with a focus on security and reliability.",
  },
]

export function JobListings() {
  return (
    <section id="current-openings" className="py-12 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Current Openings</h2>
          <p className="max-w-[42rem] text-muted-foreground text-sm">
            Explore our current job opportunities and find your perfect role
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
          {jobOpenings.map((job) => (
            <Card
              key={job.id}
              className="bg-background/50 border-purple-900/20 hover:border-purple-700/30 transition-colors"
            >
              <CardHeader className="pb-2 space-y-1">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-purple-900/10 text-purple-400 border-purple-700/20 mb-2">
                    {job.department}
                  </Badge>
                  <Badge variant="outline" className="bg-background border-border">
                    {job.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{job.title}</CardTitle>
                <CardDescription className="flex flex-col gap-1 mt-1">
                  <div className="flex items-center gap-1 text-xs">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <Briefcase className="h-3 w-3 text-muted-foreground" />
                    <span>{job.experience} experience</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground">
                <p>{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
