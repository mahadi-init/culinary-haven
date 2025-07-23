import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/placeholder.svg?height=1000&width=1920"
        alt="Restaurant Interior Hero"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 z-0 animate-fade-in"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay for text readability */}
      <div className="relative z-20 text-brand-cream space-y-6 px-4 md:px-6 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-in-up">
          Savor the Art of Fine Dining
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto animate-fade-in-delay">
          Experience exquisite flavors, unparalleled service, and an ambiance that delights all senses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-fade-in-delay-2">
          <Button
            asChild
            className="bg-brand-deep-red text-brand-cream hover:bg-brand-warm-brown px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Link href="/reservations">Book a Table</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-warm-brown px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Link href="/menu">View Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
