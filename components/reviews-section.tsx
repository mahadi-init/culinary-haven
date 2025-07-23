"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { reviews } from "@/data"
import { Star } from "lucide-react"

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-warm-brown text-brand-cream">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">What Our Guests Say</h2>
        <p className="text-lg text-brand-cream/80 max-w-2xl mx-auto mb-12">
          Hear from our cherished customers about their unforgettable dining experiences.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white text-brand-warm-brown rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-brand-deep-red/20">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-center text-brand-stone-gray italic mb-4 line-clamp-4">"{review.text}"</p>
                      <div className="flex items-center gap-3 mt-4">
                        <Image
                          src={review.photo || "/placeholder.svg"}
                          alt={review.name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover border-2 border-brand-deep-red"
                        />
                        <span className="font-semibold text-brand-warm-brown">{review.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-brand-cream hover:bg-brand-deep-red hover:text-brand-cream" />
          <CarouselNext className="text-brand-cream hover:bg-brand-deep-red hover:text-brand-cream" />
        </Carousel>
      </div>
    </section>
  )
}
