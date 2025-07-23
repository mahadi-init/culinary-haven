"use client"

import Link from "next/link"
import {
  Menu,
  Utensils,
  CalendarDays,
  ShoppingCart,
  Gift,
  ImageIcon,
  Info,
  Phone,
  BookOpen,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navLinks } from "@/data"
import { cn } from "@/lib/utils"
import React from "react"

const components = [
  {
    title: "Starters",
    href: "/menu#starters",
    description: "Begin your culinary journey with our exquisite appetizers.",
  },
  {
    title: "Main Courses",
    href: "/menu#mains",
    description: "Savor our signature dishes, crafted to perfection.",
  },
  {
    title: "Desserts",
    href: "/menu#desserts",
    description: "Indulge in our delightful sweet creations.",
  },
  {
    title: "Drinks",
    href: "/menu#drinks",
    description:
      "A curated selection of wines, cocktails, and non-alcoholic beverages.",
  },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-brand-cream/90 backdrop-blur-sm transition-all duration-300 ease-in-out">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-2xl font-bold text-brand-warm-brown"
        >
          <Utensils className="h-6 w-6 text-brand-deep-red" />
          The Culinary Haven
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden 2xl:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                {link.name === "Menu" ? (
                  <>
                    <NavigationMenuTrigger className="font-semibold text-brand-warm-brown hover:text-brand-deep-red">
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-semibold text-brand-warm-brown hover:text-brand-deep-red",
                      )}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons for Desktop */}
        <div className="hidden 2xl:flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="border-brand-warm-brown text-brand-warm-brown hover:bg-brand-warm-brown hover:text-brand-cream bg-transparent"
          >
            <Link href="/reservations">Book a Table</Link>
          </Button>
          <Button
            asChild
            className="bg-brand-deep-red text-brand-cream hover:bg-brand-warm-brown"
          >
            <Link href="/order">Order Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTitle />
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="2xl:hidden text-brand-warm-brown"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-cream">
            <Link
              href="/"
              className="flex items-center gap-2 font-serif text-2xl font-bold text-brand-warm-brown mb-6"
            >
              <Utensils className="h-6 w-6 text-brand-deep-red" />
              The Culinary Haven
            </Link>
            <nav className="grid gap-4 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-brand-warm-brown hover:bg-brand-cream hover:text-brand-deep-red transition-colors"
                >
                  {link.name === "Home" && <Sparkles className="h-5 w-5" />}
                  {link.name === "Menu" && <BookOpen className="h-5 w-5" />}
                  {link.name === "About" && <Info className="h-5 w-5" />}
                  {link.name === "Order Online" && (
                    <ShoppingCart className="h-5 w-5" />
                  )}
                  {link.name === "Reservations" && (
                    <CalendarDays className="h-5 w-5" />
                  )}
                  {link.name === "Events" && <Sparkles className="h-5 w-5" />}
                  {link.name === "Gift Cards" && <Gift className="h-5 w-5" />}
                  {link.name === "Gallery" && <ImageIcon className="h-5 w-5" />}
                  {link.name === "Contact" && <Phone className="h-5 w-5" />}
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="border-brand-warm-brown text-brand-warm-brown hover:bg-brand-warm-brown hover:text-brand-cream bg-transparent"
                >
                  <Link href="/reservations">Book a Table</Link>
                </Button>
                <Button
                  asChild
                  className="bg-brand-deep-red text-brand-cream hover:bg-brand-warm-brown"
                >
                  <Link href="/order">Order Now</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-brand-warm-brown">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
