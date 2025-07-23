import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Gift, Mail, Printer } from "lucide-react"
import Image from "next/image"

export default function GiftCardsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-brand-cream font-sans">
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Gift Card Visual */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-warm-brown leading-tight">
              Give the Gift of Flavor
            </h1>
            <p className="text-lg text-brand-stone-gray max-w-xl mx-auto lg:mx-0">
              A Culinary Haven gift card is the perfect present for any
              occasion. Share the joy of exquisite dining with your loved ones.
            </p>
            <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[3/2] rounded-lg shadow-xl overflow-hidden border-2 border-brand-deep-red">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Gift Card"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-brand-cream p-4">
                <Gift className="h-16 w-16 mb-4 text-brand-terracotta" />
                <span className="font-serif text-3xl font-bold">
                  The Culinary Haven
                </span>
                <span className="text-xl mt-2">Gift Card</span>
              </div>
            </div>
          </div>

          {/* Right Section: Purchase Form */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-brand-deep-red/10">
            <h2 className="font-serif text-3xl font-bold text-brand-deep-red mb-8 text-center">
              Purchase a Gift Card
            </h2>
            <form className="space-y-6">
              {/* Choose Value */}
              <div>
                <Label
                  htmlFor="value"
                  className="font-semibold text-brand-warm-brown mb-2"
                >
                  Choose Value
                </Label>
                <Select defaultValue="$50">
                  <SelectTrigger className="w-full bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown">
                    <SelectValue placeholder="Select a value" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-brand-warm-brown">
                    <SelectItem value="$25">$25</SelectItem>
                    <SelectItem value="$50">$50</SelectItem>
                    <SelectItem value="$100">$100</SelectItem>
                    <SelectItem value="$150">$150</SelectItem>
                    <SelectItem value="$200">$200</SelectItem>
                    <SelectItem value="custom">Custom Amount</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  placeholder="Enter custom amount"
                  className="mt-3 bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                />
              </div>

              {/* Recipient Name */}
              <div>
                <Label
                  htmlFor="recipient-name"
                  className="font-semibold text-brand-warm-brown mb-2"
                >
                  Recipient Name
                </Label>
                <Input
                  id="recipient-name"
                  placeholder="Recipient's Full Name"
                  className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                />
              </div>

              {/* Custom Message */}
              <div>
                <Label
                  htmlFor="message"
                  className="font-semibold text-brand-warm-brown mb-2"
                >
                  Custom Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Happy Birthday! Enjoy your meal."
                  className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                />
              </div>

              {/* Delivery Method */}
              <div>
                <Label className="font-semibold text-brand-warm-brown mb-2">
                  Delivery Method
                </Label>
                <RadioGroup
                  defaultValue="email"
                  className="flex flex-col sm:flex-row gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="email"
                      id="email-delivery"
                      className="text-brand-deep-red border-brand-warm-brown"
                    />
                    <Label
                      htmlFor="email-delivery"
                      className="flex items-center gap-2"
                    >
                      <Mail className="h-5 w-5 text-brand-terracotta" /> Email
                      Delivery
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="print"
                      id="print-at-home"
                      className="text-brand-deep-red border-brand-warm-brown"
                    />
                    <Label
                      htmlFor="print-at-home"
                      className="flex items-center gap-2"
                    >
                      <Printer className="h-5 w-5 text-brand-terracotta" />{" "}
                      Print at Home
                    </Label>
                  </div>
                </RadioGroup>
                <Input
                  type="email"
                  placeholder="Recipient's Email (for email delivery)"
                  className="mt-3 bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta px-8 py-3 text-lg font-semibold transition-colors"
              >
                Purchase Gift Card
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
