"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { specials } from "@/data"

export function SpecialsSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-warm-brown mb-4">
          Today's Culinary Delights
        </h2>
        <p className="text-lg text-brand-stone-gray max-w-2xl mx-auto mb-12">
          Discover our chef's daily inspirations, crafted with the freshest seasonal ingredients.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {specials.map((special) => (
              <CarouselItem key={special.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border-brand-warm-brown/20">
                    <CardContent className="flex flex-col items-center justify-center p-0">
                      <div className="relative w-full h-60">
                        <Image
                          src={special.image || "/placeholder.svg"}
                          alt={special.name}
                          fill
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="font-serif text-2xl font-semibold text-brand-deep-red mb-2">{special.name}</h3>
                        <p className="text-brand-stone-gray text-sm mb-4 line-clamp-3">{special.description}</p>
                        <span className="font-bold text-xl text-brand-warm-brown">{special.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-brand-warm-brown hover:bg-brand-warm-brown hover:text-brand-cream" />
          <CarouselNext className="text-brand-warm-brown hover:bg-brand-warm-brown hover:text-brand-cream" />
        </Carousel>
      </div>
    </section>
  )
}
