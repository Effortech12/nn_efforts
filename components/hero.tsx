import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, BarChart3, FileCheck } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end gap-8">
          {/* Text Content - Left Side */}
          <div className="md:w-[62.5%] flex flex-col">
            <div className="inline-flex items-center rounded-full border border-purple-700/20 bg-purple-900/10 px-3 py-1 text-sm text-purple-300 mb-3 self-start animate-fade-in">
              <span className="font-medium">Technology Risk Management Experts</span>
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-slide-up animation-delay-100">
              Securing the Future of{" "}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Financial Technology
              </span>
            </h1>
            <p className="mb-5 text-muted-foreground sm:text-lg animate-slide-up animation-delay-200">
              Effortech provides comprehensive Technology Risk Management solutions for Banks, Fintechs, NBFCs and other
              financial institutions across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-8 animate-slide-up animation-delay-300">
              <Button size="lg" className="sm:w-1/2 self-start" asChild>
                <a href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3 mt-auto">
              <div className="flex flex-col items-center text-center animate-fade-in animation-delay-400">
                <div className="mb-2 rounded-full bg-purple-900/20 p-2">
                  <Shield className="h-4 w-4 text-purple-400" />
                </div>
                <h3 className="text-sm font-medium">Trusted by Leaders</h3>
                <p className="text-xs text-muted-foreground">Partnering with top financial institutions across India</p>
              </div>
              <div className="flex flex-col items-center text-center animate-fade-in animation-delay-500">
                <div className="mb-2 rounded-full bg-cyan-900/20 p-2">
                  <BarChart3 className="h-4 w-4 text-cyan-400" />
                </div>
                <h3 className="text-sm font-medium">Industry Expertise</h3>
                <p className="text-xs text-muted-foreground">
                  Led by banking industry veterans with deep domain knowledge
                </p>
              </div>
              <div className="flex flex-col items-center text-center animate-fade-in animation-delay-600">
                <div className="mb-2 rounded-full bg-purple-900/20 p-2">
                  <FileCheck className="h-4 w-4 text-purple-400" />
                </div>
                <h3 className="text-sm font-medium">Compliance Focused</h3>
                <p className="text-xs text-muted-foreground">
                  Ensuring regulatory compliance for financial institutions
                </p>
              </div>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="md:w-[37.5%] animate-slide-in-right animation-delay-300">
            <div className="relative w-full max-w-xl mx-auto md:mx-0">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm -z-10"></div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/tech-illustration.jpeg"
                  alt="Technology Risk Management Illustration"
                  width={450}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
