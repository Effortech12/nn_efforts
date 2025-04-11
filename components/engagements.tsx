import Image from "next/image"

export function Engagements() {
  return (
    <section className="py-12 bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-3 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Engagements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-4"></div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-4 max-w-6xl mx-auto animate-fade-in animation-delay-200">
          <div className="w-64 h-48 relative flex items-center justify-center bg-background/50 rounded-lg p-6">
            <Image
              src="/images/Shivalik-Bank.png"
              alt="Shivalik Bank"
              width={300}
              height={160}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="w-64 h-48 relative flex items-center justify-center bg-background/50 rounded-lg p-6">
            <Image
              src="/images/Kurmanchal-Bank.png"
              alt="Kurmanchal Bank"
              width={300}
              height={160}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="w-64 h-48 relative flex items-center justify-center bg-background/50 rounded-lg p-6">
            <Image
              src="/images/Terrapin.png"
              alt="Terrapin Media"
              width={300}
              height={160}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="w-64 h-48 relative flex items-center justify-center bg-background/50 rounded-lg p-6">
            <Image
              src="/images/aareton-1.png"
              alt="Aareton"
              width={300}
              height={160}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="text-xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse whitespace-nowrap">
            And More...
          </div>
        </div>
      </div>
    </section>
  )
}
