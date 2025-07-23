"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, CalendarDays, Phone } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function StickyCTABar() {
  const isMobile = useMediaQuery("(max-width: 768px)") // Adjust breakpoint as needed

  if (!isMobile) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-warm-brown border-t border-brand-deep-red shadow-lg p-3 flex justify-around items-center md:hidden">
      <Button
        asChild
        variant="ghost"
        className="flex flex-col gap-1 text-brand-cream hover:bg-brand-deep-red/20 hover:text-brand-cream px-2 py-1 h-auto"
      >
        <Link href="/order">
          <ShoppingCart className="h-5 w-5" />
          <span className="text-xs">Order</span>
        </Link>
      </Button>
      <Button
        asChild
        variant="ghost"
        className="flex flex-col gap-1 text-brand-cream hover:bg-brand-deep-red/20 hover:text-brand-cream px-2 py-1 h-auto"
      >
        <Link href="/reservations">
          <CalendarDays className="h-5 w-5" />
          <span className="text-xs">Reserve</span>
        </Link>
      </Button>
      <Button
        asChild
        variant="ghost"
        className="flex flex-col gap-1 text-brand-cream hover:bg-brand-deep-red/20 hover:text-brand-cream px-2 py-1 h-auto"
      >
        <a href="tel:+11234567890">
          <Phone className="h-5 w-5" />
          <span className="text-xs">Call</span>
        </a>
      </Button>
    </div>
  )
}
