import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function ObservabilityUseCases() {
  return (
    <section id="use-cases" className="py-16 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">Banking Use Cases</h2>
          <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
            Our Business Service Observability solution addresses critical challenges faced by financial institutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-background/50 border-purple-900/20 h-full">
              <CardHeader className="pb-2 space-y-1">
                <CardTitle className="text-base">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-xs text-muted-foreground mb-3">{useCase.description}</p>
                <div className="flex items-center gap-2 text-xs text-cyan-400">
                  <CheckCircle className="h-3 w-3" />
                  <span>{useCase.action}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const useCases = [
  {
    title: "Technical Failures in Payment Transactions",
    description:
      "Detect technical failures on NEFT/IMPS/RTGS transactions from specific channels, showing deviation from normal trends that impact revenue and customer experience.",
    action: "Predict service degradation, enable accelerated RCA & proactive remediation",
  },
  {
    title: "Transaction Error Trends",
    description:
      "Identify sudden increasing trends in transaction errors, such as UPI transaction errors, over the last 15 minutes.",
    action: "Isolation of problematic service & remediation",
  },
  {
    title: "Channel-Specific Performance Issues",
    description:
      "Detect when customers from certain regions using mobile devices face page slowness while logging into Internet Banking.",
    action: "Isolate problem & enable remediation",
  },
  {
    title: "OTP Delivery Delays",
    description:
      "Identify transactions timing out due to delayed OTP receipt for Internet Banking or Mobile Banking transactions.",
    action: "Isolate problem & enable remediation",
  },
  {
    title: "External API Performance",
    description:
      "Monitor response time from external APIs deviating from mean time, impacting business services offered to users.",
    action: "Enforce adherence to SLAs",
  },
  {
    title: "Batch Job Performance",
    description: "Track specific batch jobs taking more time than usual during End of Day processing.",
    action: "Enable early detection of issues for timely completion of EOD",
  },
  {
    title: "Infrastructure Component Health",
    description:
      "Monitor health and performance of key application components including databases, application servers, and queues.",
    action: "Prevent infrastructure issues before they impact services",
  },
  {
    title: "Customer Journey Bottlenecks",
    description:
      "Assess ineffective touchpoints and bottlenecks across the customer lifecycle to identify root causes before they affect the conversion funnel.",
    action: "Predict outages and customer dissatisfaction proactively",
  },
  {
    title: "Payment Transaction Declines",
    description:
      "Track increases in percentage declines for payment transactions like UPI, IMPS, and AEPS at Core Banking.",
    action: "Accelerated RCA & resolution",
  },
]
