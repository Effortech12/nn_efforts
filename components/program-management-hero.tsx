import Image from "next/image"

export function ProgramManagementHero() {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-3/5 flex flex-col">
            <div className="inline-flex items-center rounded-full border border-purple-700/20 bg-purple-900/10 px-3 py-1 text-sm text-purple-300 mb-2 self-start animate-fade-in">
              <span className="font-medium">Strategic Technology Implementation</span>
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-slide-up animation-delay-100">
              Program Management for{" "}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Mission-Critical Projects
              </span>
            </h1>
            <p className="mb-4 text-muted-foreground sm:text-lg animate-slide-up animation-delay-200">
              Expert guidance for high-stakes technology initiatives in the financial sector, with specialized focus on
              mitigating risks associated with adopting new products and technologies. Our structured approach ensures
              successful delivery while maintaining regulatory compliance and operational stability.
            </p>
          </div>
          <div className="lg:w-2/5 animate-slide-in-right animation-delay-300">
            <div className="w-[56.25%] mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm"></div>
                <div className="relative rounded-xl overflow-hidden border border-purple-900/30 bg-background/50">
                  <Image
                    src="/images/program-management-team.png"
                    alt="Program Management for Mission-Critical Projects"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
