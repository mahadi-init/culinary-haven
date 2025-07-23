import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { faqs } from "@/data"
import {
  Facebook,
  HelpCircle,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-brand-cream font-sans">
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-warm-brown text-center mb-12">
            Get in Touch
          </h1>
          <p className="text-lg text-brand-stone-gray max-w-2xl mx-auto text-center mb-12">
            We&apos;d love to hear from you! Send us a message, find our
            location, or check our FAQs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-brand-deep-red/10">
              <h2 className="font-serif text-3xl font-bold text-brand-deep-red mb-8 text-center flex items-center justify-center gap-3">
                <MessageSquare className="h-7 w-7 text-brand-terracotta" /> Send
                Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="font-semibold text-brand-warm-brown mb-2"
                  >
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="font-semibold text-brand-warm-brown mb-2"
                  >
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="inquiry"
                    className="font-semibold text-brand-warm-brown mb-2"
                  >
                    Inquiry Type
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-brand-warm-brown">
                      <SelectItem value="reservation">
                        Reservation Inquiry
                      </SelectItem>
                      <SelectItem value="catering">
                        Catering / Private Events
                      </SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="font-semibold text-brand-warm-brown mb-2"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta px-8 py-3 text-lg font-semibold transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Location & Socials */}
            <div className="space-y-8">
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-brand-deep-red/10">
                <h2 className="font-serif text-3xl font-bold text-brand-deep-red mb-6 text-center flex items-center justify-center gap-3">
                  <MapPin className="h-7 w-7 text-brand-terracotta" /> Our
                  Location
                </h2>
                <div className="space-y-4 text-center text-brand-warm-brown">
                  <p className="text-lg font-semibold">The Culinary Haven</p>
                  <p className="text-md">
                    123 Gourmet Lane, Foodie City, FC 12345
                  </p>
                  <div className="flex items-center justify-center gap-2 text-md">
                    <Phone className="h-5 w-5 text-brand-terracotta" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-md">
                    <Mail className="h-5 w-5 text-brand-terracotta" />
                    <span>info@culinaryhaven.com</span>
                  </div>
                  <div className="flex justify-center gap-6 mt-6">
                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="text-brand-warm-brown hover:text-brand-terracotta transition-colors"
                    >
                      <Instagram className="h-8 w-8" />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="text-brand-warm-brown hover:text-brand-terracotta transition-colors"
                    >
                      <Facebook className="h-8 w-8" />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Twitter"
                      className="text-brand-warm-brown hover:text-brand-terracotta transition-colors"
                    >
                      <Twitter className="h-8 w-8" />
                    </Link>
                  </div>
                </div>
                <div className="w-full h-60 bg-brand-olive-green rounded-lg overflow-hidden mt-8">
                  {/* Placeholder for Google Map */}
                  <Image
                    src="/placeholder.svg"
                    alt="Restaurant Location Map"
                    width={400}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="bg-brand-warm-brown/10 p-8 md:p-10 rounded-lg shadow-xl">
            <h2 className="font-serif text-3xl font-bold text-brand-deep-red mb-8 text-center flex items-center justify-center gap-3">
              <HelpCircle className="h-7 w-7 text-brand-terracotta" />{" "}
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-brand-warm-brown/20"
                >
                  <AccordionTrigger className="font-semibold text-brand-warm-brown hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-stone-gray pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </main>
    </div>
  )
}
