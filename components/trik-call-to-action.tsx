export function TrikCallToAction() {
  return (
    <section className="py-10 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3 animate-fade-in">
            Ready to Transform Your IT Risk Management?
          </h2>
          <p className="text-muted-foreground mb-6 sm:text-lg animate-fade-in animation-delay-100">
            Get comprehensive visibility into your IT risk posture and streamline compliance with TRIK, our proprietary
            risk management tool designed specifically for Indian financial institutions.
          </p>
          <div className="animate-fade-in animation-delay-200">{/* Buttons removed */}</div>
        </div>
      </div>
    </section>
  )
}
