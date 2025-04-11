import { Card, CardContent } from "@/components/ui/card"
import { BarChart2, Briefcase, ClipboardCheck, Code, FileText, Layers, Shield, Users } from "lucide-react"

export function ProgramManagementServices() {
  return (
    <section className="py-10 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">Our Program Management Services</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Comprehensive services tailored for financial institutions implementing new technologies
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-background/50 ${
                index % 2 === 0 ? "border-purple-900/20" : "border-cyan-900/20"
              } h-full animate-slide-up animation-delay-${100 * ((index % 5) + 1)}`}
            >
              <CardContent className="p-4">
                <div
                  className={`rounded-full ${
                    index % 2 === 0 ? "bg-purple-900/10" : "bg-cyan-900/10"
                  } p-2 w-10 h-10 mb-3 flex items-center justify-center`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                <ul className="space-y-1">
                  {service.keyFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          index % 2 === 0 ? "bg-purple-400" : "bg-cyan-400"
                        } mt-1.5`}
                      ></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: <Briefcase className="h-5 w-5 text-purple-400" />,
    title: "Core Banking Modernization",
    description:
      "Managing the complex transition from legacy core banking systems to modern, agile platforms with minimal disruption.",
    keyFeatures: [
      "Risk-focused migration strategies",
      "Data integrity validation frameworks",
      "Parallel run management",
      "Rollback planning and contingency measures",
    ],
  },
  {
    icon: <Code className="h-5 w-5 text-cyan-400" />,
    title: "Digital Banking Transformation",
    description:
      "Implementing new digital channels and customer-facing technologies while ensuring security and compliance.",
    keyFeatures: [
      "Customer journey mapping and validation",
      "Security and privacy by design",
      "Performance and scalability testing",
      "Regulatory compliance validation",
    ],
  },
  {
    icon: <Shield className="h-5 w-5 text-purple-400" />,
    title: "Cybersecurity Enhancement",
    description:
      "Implementing advanced cybersecurity solutions and frameworks to protect critical banking infrastructure.",
    keyFeatures: [
      "Threat modeling and risk assessment",
      "Security architecture design",
      "Implementation without operational disruption",
      "Compliance with RBI cybersecurity framework",
    ],
  },
  {
    icon: <Layers className="h-5 w-5 text-cyan-400" />,
    title: "Cloud Migration",
    description:
      "Securely transitioning banking applications and infrastructure to cloud environments with regulatory compliance.",
    keyFeatures: [
      "Cloud security and compliance frameworks",
      "Data residency and sovereignty planning",
      "Hybrid and multi-cloud strategy development",
      "Performance optimization and cost management",
    ],
  },
  {
    icon: <BarChart2 className="h-5 w-5 text-purple-400" />,
    title: "Data Analytics & AI Implementation",
    description:
      "Deploying advanced analytics and AI solutions with appropriate governance and ethical considerations.",
    keyFeatures: [
      "Data quality and governance frameworks",
      "Model validation and bias testing",
      "Regulatory compliance for AI/ML models",
      "Ethical AI implementation guidelines",
    ],
  },
  {
    icon: <FileText className="h-5 w-5 text-cyan-400" />,
    title: "Regulatory Technology (RegTech)",
    description:
      "Implementing solutions to streamline regulatory compliance and reporting with accuracy and efficiency.",
    keyFeatures: [
      "Regulatory mapping and gap analysis",
      "Automated compliance workflows",
      "Regulatory reporting validation",
      "Audit trail and evidence management",
    ],
  },
  {
    icon: <ClipboardCheck className="h-5 w-5 text-purple-400" />,
    title: "Payment System Modernization",
    description:
      "Upgrading payment infrastructure to support new payment methods and real-time processing capabilities.",
    keyFeatures: [
      "Payment system security assessment",
      "Integration with national payment systems",
      "Fraud detection implementation",
      "Compliance with payment regulations",
    ],
  },
  {
    icon: <Users className="h-5 w-5 text-cyan-400" />,
    title: "Vendor Risk Management",
    description:
      "Managing third-party and vendor risks associated with new technology implementations and partnerships.",
    keyFeatures: [
      "Vendor due diligence frameworks",
      "Contract risk assessment",
      "Ongoing vendor monitoring",
      "Exit strategy and contingency planning",
    ],
  },
]
