import { Card, CardContent } from "@/components/ui/card"

export function ObservabilityIntegration() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">Integration Capabilities</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Our rich experience with banking applications enables seamless and rapid deployment of Business Service
            Observability solutions
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Banking Applications</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {bankingApplications.map((category, index) => (
                <Card key={index} className="bg-background/50 border-purple-900/20">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-sm mb-2">{category.title}</h4>
                    <ul className="space-y-1">
                      {category.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Data Collection Methods</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {dataCollectionMethods.map((method, index) => (
                <Card key={index} className="bg-background/50 border-cyan-900/20">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-sm mb-2">{method.title}</h4>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const bankingApplications = [
  {
    title: "Digital Channels",
    applications: [
      "Internet Banking (OBDX, i-exceed)",
      "Mobile Banking (OBDX, NPST, i-exceed)",
      "Customer Onboarding Portal",
      "Corporate Internet Banking",
    ],
  },
  {
    title: "Core Systems",
    applications: [
      "Core Banking (Finacle, Flexcube)",
      "Loan Origination System",
      "Loan Management System",
      "Document Management System",
    ],
  },
  {
    title: "Integration & Payments",
    applications: ["Enterprise Integration (MQ, ESB/IIB)", "Payment Switch (UPI, IMPS)", "API Connect", "TIBCO"],
  },
  {
    title: "Monitoring Tools",
    applications: ["AppDynamics", "Dynatrace", "Manage Engine", "Elastic Stack"],
  },
]

const dataCollectionMethods = [
  {
    title: "Log Forwarding",
    description: "Collect and analyze application, web, and database logs for comprehensive visibility.",
  },
  {
    title: "REST APIs",
    description: "Make periodic HTTP requests to APIs or Web Services to fetch performance data.",
  },
  {
    title: "Event Streaming",
    description: "Process real-time data streams using technologies like Kafka with Logstash.",
  },
  {
    title: "Agent-Based Collection",
    description: "Deploy lightweight agents to collect host metrics and application performance data.",
  },
  {
    title: "Distributed Tracing",
    description: "Track requests as they flow through distributed systems to identify bottlenecks.",
  },
  {
    title: "Database Monitoring",
    description: "Monitor database performance using JDBC connections and specialized plugins.",
  },
]
