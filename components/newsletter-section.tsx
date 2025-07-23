import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-olive-green text-brand-cream">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Join Our Culinary Family</h2>
        <p className="text-lg text-brand-cream/80 max-w-2xl mx-auto mb-8">
          Sign up for our newsletter to receive exclusive offers, new menu updates, and event invitations.
        </p>
        <div className="mx-auto w-full max-w-md space-y-4">
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-brand-cream/20 border-brand-cream/40 text-brand-cream placeholder:text-brand-cream/70 focus:border-brand-terracotta focus:ring-brand-terracotta"
            />
            <Button
              type="submit"
              className="bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta px-6 py-3 text-lg font-semibold transition-colors"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-brand-cream/70">
            By subscribing, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-2 hover:text-brand-terracotta">
              Terms & Conditions
            </Link>{" "}
            and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
