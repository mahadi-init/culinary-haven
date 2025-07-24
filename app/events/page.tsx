import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { events } from "@/data"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-brand-cream font-sans">
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-warm-brown text-center mb-12">
            Upcoming Events
          </h1>
          <p className="text-lg text-brand-stone-gray max-w-2xl mx-auto text-center mb-12">
            Join us for special evenings, culinary workshops, and festive
            celebrations throughout the year.
          </p>

          {/* Upcoming Events Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {events.map((event) => (
              <Card
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-brand-deep-red/10 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="font-serif text-2xl font-semibold text-brand-warm-brown mb-2">
                    {event.name}
                  </CardTitle>
                  <CardDescription className="text-brand-stone-gray text-sm line-clamp-3">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 space-y-2 text-brand-warm-brown">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-brand-terracotta" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-brand-terracotta" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-brand-terracotta" />
                    <span>The Culinary Haven</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  {event.rsvpLink && (
                    <Button
                      asChild
                      className="w-full bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta transition-colors"
                    >
                      <Link href={event.rsvpLink}>RSVP Now</Link>
                    </Button>
                  )}
                  {event.ticketLink && (
                    <Button
                      asChild
                      className="w-full bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta transition-colors"
                    >
                      <Link href={event.ticketLink}>Get Tickets</Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </section>

          {/* Highlight Past Event Photos (Placeholder) */}
          <section className="bg-brand-warm-brown/10 p-8 rounded-lg">
            <h2 className="font-serif text-4xl font-bold text-brand-deep-red text-center mb-8">
              Memories from Past Events
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=300&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=300&h=300&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=300&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&h=300&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&crop=center",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md group"
                >
                  <Image
                    src={src}
                    alt={`Past Event Photo ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-brand-cream font-semibold text-lg">
                      View Details
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-brand-stone-gray text-lg mt-8">
              Check our{" "}
              <Link
                href="/gallery"
                className="underline hover:text-brand-deep-red"
              >
                Gallery
              </Link>{" "}
              for more event photos!
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
