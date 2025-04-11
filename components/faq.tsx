"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is Technology Risk Management?",
    answer:
      "Technology Risk Management is the process of identifying, assessing, and mitigating risks associated with the use of technology in an organization. For financial institutions, this includes managing risks related to cybersecurity, data privacy, system failures, third-party vendors, and regulatory compliance.",
  },
  {
    question: "How can Effortech help my financial institution?",
    answer:
      "Effortech provides comprehensive technology risk management solutions tailored specifically for the financial sector in India. Our services include Business Service Observability, Audit & Compliance as a Service, our proprietary Internal Risk Management Tool (TRIK), and Automation solutions to streamline risk management processes.",
  },
  {
    question: "What regulations do your solutions help comply with?",
    answer:
      "Our solutions help financial institutions comply with various regulations including RBI guidelines, IT Act, GDPR (for institutions with international operations), PCI DSS (for payment card processing), and other industry-specific standards and frameworks relevant to the Indian financial sector.",
  },
  {
    question: "How is the TRIK tool different from other risk management solutions?",
    answer:
      "TRIK is our proprietary risk management tool designed specifically for financial institutions in India. It provides a structured approach to identifying, assessing, and mitigating technology risks with built-in workflows and reporting capabilities tailored to the Indian financial sector. Unlike generic solutions, TRIK is customized for the unique regulatory environment and challenges faced by Indian financial institutions.",
  },
  {
    question: "Do you offer customized solutions for different types of financial institutions?",
    answer:
      "Yes, we understand that banks, NBFCs, fintechs, and other financial institutions have different needs and regulatory requirements. We tailor our solutions to meet the specific needs of each type of institution, taking into account factors such as size, complexity, risk profile, and regulatory obligations.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Implementation timelines vary depending on the specific services and the size and complexity of your organization. Typically, our implementation process ranges from 4-12 weeks. We work closely with your team to ensure a smooth transition and minimal disruption to your operations.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <Card
          key={index}
          className={`bg-background/50 ${openIndex === index ? "border-purple-900/40" : "border-border/40"} transition-colors`}
        >
          <CardContent className="p-0">
            <button className="flex w-full items-center justify-between p-4 text-left" onClick={() => toggleFaq(index)}>
              <h3 className="font-medium text-sm">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-xs text-muted-foreground">
                <p>{faq.answer}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
