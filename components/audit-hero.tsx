import Image from "next/image"

export function AuditHero() {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-3/5 flex flex-col">
            <div className="inline-flex items-center rounded-full border border-purple-700/20 bg-purple-900/10 px-3 py-1 text-sm text-purple-300 mb-2 self-start animate-fade-in">
              <span className="font-medium">Managed Compliance Services</span>
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-slide-up animation-delay-100">
              Audit & Compliance{" "}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                as a Service
              </span>
            </h1>
            <p className="mb-4 text-muted-foreground sm:text-lg animate-slide-up animation-delay-200">
              In today's dynamic regulatory environment, Indian banks face increasing scrutiny from the RBI.
              Non-compliance can lead to hefty fines and reputational damage. A proactive, managed approach is essential
              for preventative risk management.
            </p>
            <div className="mb-6 animate-slide-up animation-delay-300">{/* Buttons removed */}</div>
          </div>
          <div className="lg:w-2/5 animate-slide-in-right animation-delay-300">
            <div className="w-[75%] mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm"></div>
                <div className="relative rounded-xl overflow-hidden border border-purple-900/30 bg-background/50">
                  <Image
                    src="/images/audit-analytics.png"
                    alt="Audit and compliance analytics"
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
