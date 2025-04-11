export function ObservabilityHero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-purple-700/20 bg-purple-900/10 px-3 py-1 text-sm text-purple-300 mb-3 animate-fade-in">
            <span className="font-medium">End-to-End Visibility</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-slide-up animation-delay-100">
            Business Service{" "}
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Observability
            </span>
          </h1>
          <p className="mb-6 text-muted-foreground sm:text-lg animate-slide-up animation-delay-200">
            Gain comprehensive visibility into your critical banking services with our advanced observability solutions.
            Detect, diagnose, and resolve issues before they impact your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up animation-delay-300">
            {/* Buttons removed */}
          </div>
        </div>
      </div>
    </section>
  )
}
