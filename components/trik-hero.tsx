import Image from "next/image"

export function TrikHero() {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2 flex flex-col">
            <div className="inline-flex items-center rounded-full border border-purple-700/20 bg-purple-900/10 px-3 py-1 text-sm text-purple-300 mb-2 self-start animate-fade-in">
              <span className="font-medium">Proprietary Risk Management Tool</span>
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-slide-up animation-delay-100">
              TRIK:{" "}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionizing IT Risk Management
              </span>
            </h1>
            <p className="mb-4 text-muted-foreground sm:text-lg animate-slide-up animation-delay-200">
              TRIK is a comprehensive IT risk management tool designed for Indian banks. It addresses the unique
              challenges of the local banking sector, empowering banks to proactively manage and mitigate IT risks.
              Ensure regulatory compliance and operational resilience with our tailored solution.
            </p>
            <div className="mb-6 animate-slide-up animation-delay-300">{/* Buttons removed */}</div>
          </div>
          <div className="lg:w-1/2 animate-slide-in-right animation-delay-300">
            <div className="w-[75%] mx-auto">
              <Image
                src="/images/trik-dashboard.png"
                alt="TRIK Dashboard"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
