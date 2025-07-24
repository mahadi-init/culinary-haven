"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"
import { CalendarIcon, MessageSquare, Users, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function ReservationsPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [time, setTime] = React.useState<string | undefined>("7:00 PM")
  const [partySize, setPartySize] = React.useState<string | undefined>("2")
  const [seatingPreference, setSeatingPreference] = React.useState<
    string | undefined
  >("any")
  const [specialRequests, setSpecialRequests] = React.useState<string>("")
  const [showConfirmation, setShowConfirmation] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, send this data to a backend
    console.log({ date, time, partySize, seatingPreference, specialRequests })
    setShowConfirmation(true)
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-brand-cream font-sans">
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Image and Text */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-warm-brown leading-tight">
              Reserve Your Table
            </h1>
            <p className="text-lg text-brand-stone-gray max-w-xl mx-auto lg:mx-0">
              Plan your perfect dining experience with us. Whether it's an
              intimate dinner or a celebratory gathering, we're ready to welcome
              you.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&h=500&fit=crop&crop=center"
              alt="Restaurant Dining Area"
              width={700}
              height={500}
              className="rounded-lg shadow-xl object-cover w-full h-auto mt-8"
            />
          </div>

          {/* Right Section: Reservation Form */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-brand-deep-red/10">
            <h2 className="font-serif text-3xl font-bold text-brand-deep-red mb-8 text-center">
              Make a Reservation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date Picker */}
              <div>
                <Label
                  htmlFor="date"
                  className="font-semibold text-brand-warm-brown flex items-center gap-2 mb-2"
                >
                  <CalendarIcon className="h-5 w-5 text-brand-terracotta" />{" "}
                  Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown ${
                        !date && "text-muted-foreground"
                      }`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-white text-brand-warm-brown"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="[&_td]:text-brand-warm-brown [&_th]:text-brand-warm-brown [&_button]:text-brand-warm-brown [&_button]:hover:bg-brand-deep-red/10 [&_button]:hover:text-brand-deep-red [&_div]:text-brand-warm-brown"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selector */}
              <div>
                <Label
                  htmlFor="time"
                  className="font-semibold text-brand-warm-brown flex items-center gap-2 mb-2"
                >
                  <span className="h-5 w-5 text-brand-terracotta">&gt;</span>{" "}
                  Time
                </Label>
                <Select onValueChange={setTime} value={time}>
                  <SelectTrigger className="w-full bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-brand-warm-brown">
                    {[...Array(10)].map((_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        {i + 1} {i === 0 ? "person" : "people"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Party Size */}
              <div>
                <Label
                  htmlFor="party-size"
                  className="font-semibold text-brand-warm-brown flex items-center gap-2 mb-2"
                >
                  <Users className="h-5 w-5 text-brand-terracotta" /> Party Size
                </Label>
                <Select onValueChange={setPartySize} value={partySize}>
                  <SelectTrigger className="w-full bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown">
                    <SelectValue placeholder="Select party size" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-brand-warm-brown">
                    {[...Array(10)].map((_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        {i + 1} {i === 0 ? "person" : "people"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Seating Preference */}
              <div>
                <Label
                  htmlFor="seating"
                  className="font-semibold text-brand-warm-brown flex items-center gap-2 mb-2"
                >
                  <Utensils className="h-5 w-5 text-brand-terracotta" /> Seating
                  Preference
                </Label>
                <Select
                  onValueChange={setSeatingPreference}
                  value={seatingPreference}
                >
                  <SelectTrigger className="w-full bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-brand-warm-brown">
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="indoor">Indoor</SelectItem>
                    <SelectItem value="outdoor">Outdoor</SelectItem>
                    <SelectItem value="bar">Bar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Special Requests */}
              <div>
                <Label
                  htmlFor="requests"
                  className="font-semibold text-brand-warm-brown flex items-center gap-2 mb-2"
                >
                  <MessageSquare className="h-5 w-5 text-brand-terracotta" />{" "}
                  Special Requests
                </Label>
                <Textarea
                  id="requests"
                  placeholder="e.g., high chair needed, celebrating an anniversary, dietary notes"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="bg-brand-cream/50 border-brand-warm-brown/30 text-brand-warm-brown"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta px-8 py-3 text-lg font-semibold transition-colors"
              >
                Confirm Reservation
              </Button>

              <p className="text-sm text-center text-brand-stone-gray mt-4">
                For private events or catering, please{" "}
                <Link
                  href="/contact"
                  className="underline hover:text-brand-deep-red"
                >
                  contact us directly
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Confirmation Popup (Simple Dialog) */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center space-y-6 border-t-4 border-brand-deep-red">
            <h3 className="font-serif text-3xl font-bold text-brand-deep-red">
              Reservation Confirmed!
            </h3>
            <p className="text-lg text-brand-warm-brown">
              Thank you for booking with The Culinary Haven.
            </p>
            <div className="text-left text-brand-stone-gray space-y-2">
              <p>
                <strong>Date:</strong> {date ? format(date, "PPP") : "N/A"}
              </p>
              <p>
                <strong>Time:</strong> {time}
              </p>
              <p>
                <strong>Party Size:</strong> {partySize}
              </p>
              <p>
                <strong>Seating:</strong> {seatingPreference}
              </p>
              {specialRequests && (
                <p>
                  <strong>Requests:</strong> {specialRequests}
                </p>
              )}
            </div>
            <p className="text-sm text-brand-stone-gray">
              A confirmation email has been sent to your provided address. We
              look forward to seeing you!
            </p>
            <Button
              onClick={() => setShowConfirmation(false)}
              className="bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta px-6 py-2"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
