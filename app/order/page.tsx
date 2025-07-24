import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Separator } from "@/components/ui/separator"
import { menuItems } from "@/data"
import { Clock, CreditCard, MapPin, Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OnlineOrderingPage() {
  // Mock state for cart items (in a real app, this would be managed with React state or a global store)
  const cartItems = [
    { ...menuItems[0], quantity: 1, customizations: "No nuts" },
    { ...menuItems[3], quantity: 2, customizations: "Extra parmesan" },
  ]

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + Number.parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  )
  const tax = subtotal * 0.08 // Example 8% tax
  const deliveryFee = 5.0 // Example delivery fee
  const total = subtotal + tax + deliveryFee

  return (
    <div className="flex flex-col min-h-[100dvh] bg-brand-cream font-sans">
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Food Selection Interface */}
          <div className="lg:col-span-2">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-warm-brown mb-8">
              Start Your Order
            </h1>
            <p className="text-lg text-brand-stone-gray mb-8">
              Browse our full menu and customize your dishes.
            </p>

            {/* Menu Categories (simplified for this page) */}
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-brand-deep-red mb-6">
                Popular Dishes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems.slice(0, 4).map((item) => (
                  <Card
                    key={item.id}
                    className="flex items-center gap-4 p-4 bg-white shadow-sm hover:shadow-md transition-shadow border-brand-cream/50"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-semibold text-brand-warm-brown">
                        {item.name}
                      </h3>
                      <p className="text-sm text-brand-stone-gray line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-brand-deep-red">
                          {item.price}
                        </span>
                        <Button
                          size="sm"
                          className="bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta"
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Full Menu (Link to Menu Page) */}
            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                className="border-brand-warm-brown text-brand-warm-brown hover:bg-brand-warm-brown hover:text-brand-cream px-8 py-4 text-lg bg-transparent"
              >
                <Link href="/menu">View Full Menu</Link>
              </Button>
            </div>
          </div>

          {/* Real-time Cart & Checkout Flow */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-lg border-brand-deep-red/20 sticky top-20">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-brand-warm-brown">
                  Your Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cartItems.length === 0 ? (
                  <p className="text-center text-brand-stone-gray">
                    Your cart is empty.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                      >
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-brand-warm-brown">
                            {item.name}
                          </h4>
                          <p className="text-xs text-brand-stone-gray">
                            {item.customizations}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 text-brand-warm-brown border-brand-warm-brown/50 bg-transparent"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 text-brand-warm-brown border-brand-warm-brown/50 bg-transparent"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                            <span className="ml-auto font-bold text-brand-deep-red">
                              $
                              {(
                                Number.parseFloat(item.price.replace("$", "")) *
                                item.quantity
                              ).toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-brand-stone-gray hover:text-brand-deep-red"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Separator className="my-4 bg-brand-warm-brown/20" />
                    <div className="space-y-2 text-brand-warm-brown">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax:</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Fee:</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-xl text-brand-deep-red">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}

                <Separator className="my-6 bg-brand-warm-brown/20" />

                {/* Checkout Steps */}
                <div className="space-y-6">
                  <h3 className="font-serif text-xl font-bold text-brand-warm-brown">
                    Checkout Details
                  </h3>

                  {/* Step 1: Delivery or Pickup */}
                  <div className="space-y-2">
                    <Label className="font-semibold text-brand-warm-brown">
                      Delivery or Pickup?
                    </Label>
                    <RadioGroup defaultValue="delivery" className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="delivery"
                          id="delivery"
                          className="text-brand-deep-red border-brand-warm-brown"
                        />
                        <Label htmlFor="delivery">Delivery</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="pickup"
                          id="pickup"
                          className="text-brand-deep-red border-brand-warm-brown"
                        />
                        <Label htmlFor="pickup">Pickup</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Step 2: Address/Time */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-brand-warm-brown flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-brand-terracotta" />{" "}
                      Delivery Address
                    </h4>
                    <Input
                      placeholder="Street Address"
                      className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="City"
                        className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                      />
                      <Input
                        placeholder="Zip Code"
                        className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                      />
                    </div>
                    <div className="w-full h-32 bg-brand-olive-green rounded-lg overflow-hidden">
                      {/* Placeholder for Google Map integration */}
                      <Image
                        src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=300&h=128&fit=crop&crop=center"
                        alt="Delivery Zone Map"
                        width={300}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-brand-warm-brown flex items-center gap-2 mt-6">
                      <Clock className="h-5 w-5 text-brand-terracotta" />{" "}
                      Delivery Time
                    </h4>
                    <Select>
                      <SelectTrigger className="w-full bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown">
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-brand-warm-brown">
                        <SelectItem value="30min">ASAP (30-45 min)</SelectItem>
                        <SelectItem value="6pm">6:00 PM - 6:30 PM</SelectItem>
                        <SelectItem value="7pm">7:00 PM - 7:30 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Step 3: Payment Method */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-brand-warm-brown flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-brand-terracotta" />{" "}
                      Payment Method
                    </h4>
                    <Input
                      placeholder="Card Number"
                      className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="MM/YY"
                        className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                      />
                      <Input
                        placeholder="CVC"
                        className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                      />
                    </div>
                    <Input
                      placeholder="Name on Card"
                      className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                    />
                  </div>

                  <Button className="w-full bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta px-8 py-3 text-lg font-semibold transition-colors">
                    Place Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
