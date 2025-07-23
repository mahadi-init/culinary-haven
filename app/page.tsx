import { HeroSection } from "@/components/hero-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ReviewsSection } from "@/components/reviews-section"
import { SpecialsSection } from "@/components/specials-section"
import { Button } from "@/components/ui/button"
import { awardsLogos } from "@/data"
import { Instagram, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-brand-cream font-sans">
      <main className="flex-1">
        <HeroSection />

        {/* Today's Specials Section */}
        <SpecialsSection />

        {/* Chef's Quote / Mission Statement */}
        <section className="relative w-full py-24 md:py-32 bg-brand-warm-brown text-brand-cream overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Chef at work"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="absolute inset-0 z-0 opacity-30"
          />
          <div className="relative z-10 container px-4 md:px-6 text-center max-w-3xl mx-auto">
            <Quote className="h-12 w-12 text-brand-terracotta mx-auto mb-6" />
            <p className="font-serif text-3xl md:text-4xl italic leading-relaxed mb-8">
              "Every dish tells a story, a symphony of flavors crafted with
              passion and the finest ingredients. Our kitchen is where art meets
              appetite."
            </p>
            <p className="text-lg font-semibold text-brand-cream">
              - Chef Isabella Rossi, Founder
            </p>
          </div>
        </section>

        {/* Awards or Press Logos */}
        <section className="py-16 md:py-24 bg-brand-cream">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-warm-brown mb-8">
              As Featured In
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto">
              {awardsLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md"
                >
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`Award Logo ${index + 1}`}
                    width={150}
                    height={75}
                    objectFit="contain"
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <ReviewsSection />

        {/* Embedded Instagram Feed (Placeholder) */}
        <section className="py-16 md:py-24 bg-brand-stone-gray text-brand-cream">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-lg text-brand-cream/80 max-w-2xl mx-auto mb-12">
              Get a glimpse of our latest creations, behind-the-scenes, and
              beautiful moments.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-square bg-brand-warm-brown rounded-lg overflow-hidden group"
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=300&query=instagram food post ${i + 1}`}
                    alt={`Instagram Post ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Instagram className="h-10 w-10 text-brand-cream" />
                  </div>
                </div>
              ))}
            </div>
            <Button
              asChild
              className="mt-12 bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300"
            >
              <Link
                href="https://instagram.com/yourrestaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Our Instagram
              </Link>
            </Button>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <NewsletterSection />
      </main>
    </div>
  )
}
