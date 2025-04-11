export function ObservabilityCallToAction() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
            Ready to Transform Your Banking Operations?
          </h2>
          <p className="text-muted-foreground mb-8 sm:text-lg">
            Get comprehensive visibility into your critical banking services and improve customer experience with our
            Business Service Observability solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">{/* Buttons removed */}</div>
        </div>
      </div>
    </section>
  )
}
