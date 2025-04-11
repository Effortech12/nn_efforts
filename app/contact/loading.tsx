import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"

export default function ContactLoading() {
  return (
    <div className="dark flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12 bg-gradient-to-b from-background to-background/95">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-8">
              <Skeleton className="h-10 w-64 mb-3" />
              <Skeleton className="h-5 w-96 mb-2" />
            </div>

            <div className="grid gap-6 lg:grid-cols-2 items-start">
              <div className="space-y-4">
                <Skeleton className="h-96 w-full rounded-lg" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-20 w-full rounded-lg" />
                <Skeleton className="h-20 w-full rounded-lg" />
                <Skeleton className="h-32 w-full rounded-lg" />
                <Skeleton className="h-64 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gradient-to-b from-background/95 to-background">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-8">
              <Skeleton className="h-8 w-48 mb-3" />
              <Skeleton className="h-4 w-72 mb-2" />
            </div>

            <div className="space-y-3 max-w-3xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-16 w-full rounded-lg" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
