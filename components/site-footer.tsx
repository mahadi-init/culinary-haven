import Link from "next/link"
import { Utensils, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-brand-warm-brown text-brand-cream py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-6">
        {/* Restaurant Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold text-brand-cream">
            <Utensils className="h-6 w-6 text-brand-deep-red" />
            The Culinary Haven
          </Link>
          <p className="text-sm text-brand-cream/80">Experience elegant dining and exquisite flavors.</p>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-brand-terracotta" />
            <span>123 Gourmet Lane, Foodie City, FC 12345</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-brand-terracotta" />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-brand-terracotta" />
            <span>info@culinaryhaven.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-semibold text-brand-cream">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/menu" className="text-sm text-brand-cream/80 hover:text-brand-terracotta transition-colors">
              Menu
            </Link>
            <Link
              href="/reservations"
              className="text-sm text-brand-cream/80 hover:text-brand-terracotta transition-colors"
            >
              Reservations
            </Link>
            <Link href="/order" className="text-sm text-brand-cream/80 hover:text-brand-terracotta transition-colors">
              Order Online
            </Link>
            <Link href="/about" className="text-sm text-brand-cream/80 hover:text-brand-terracotta transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-brand-cream/80 hover:text-brand-terracotta transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Working Hours */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-semibold text-brand-cream">Working Hours</h3>
          <ul className="text-sm text-brand-cream/80 space-y-1">
            <li>Tuesday - Sunday: 5:00 PM - 10:00 PM</li>
            <li>Monday: Closed</li>
            <li>Kitchen closes at 9:30 PM</li>
          </ul>
        </div>

        {/* Social Media & Map */}
        <div className="space-y-4 lg:col-span-1 md:col-span-3">
          <h3 className="font-serif text-lg font-semibold text-brand-cream">Connect With Us</h3>
          <div className="flex gap-4">
            <Link
              href="#"
              aria-label="Instagram"
              className="text-brand-cream hover:text-brand-terracotta transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="text-brand-cream hover:text-brand-terracotta transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-brand-cream hover:text-brand-terracotta transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="font-serif text-lg font-semibold text-brand-cream mb-2">Find Us</h3>
            <div className="w-full h-40 bg-brand-olive-green rounded-lg overflow-hidden">
              {/* Placeholder for Google Map */}
              <Image
                src="/placeholder.svg"
                alt="Restaurant Location Map"
                width={300}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t border-brand-cream/20 pt-8 mt-8 text-center text-sm text-brand-cream/60">
        <p>&copy; {new Date().getFullYear()} The Culinary Haven. All rights reserved.</p>
      </div>
    </footer>
  )
}
