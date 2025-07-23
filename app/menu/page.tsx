import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MenuItem, menuItems } from "@/data"
import Image from "next/image"
import { Flame, Leaf, UtensilsCrossed, Carrot } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

// Component for a single menu item card
function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] border border-brand-cream/50">
      <div className="relative w-full h-48">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-semibold text-brand-warm-brown">
            {item.name}
          </h3>
          <span className="font-bold text-lg text-brand-deep-red">
            {item.price}
          </span>
        </div>
        <p className="text-sm text-brand-stone-gray mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center gap-2 mb-3">
          {item.spicy && <Flame className="h-4 w-4 text-brand-terracotta" />}
          {item.dietary?.includes("vegan") && (
            <Leaf className="h-4 w-4 text-brand-forest-green" />
          )}
          {item.dietary?.includes("vegetarian") &&
            !item.dietary.includes("vegan") && (
              <Carrot className="h-4 w-4 text-orange-500" />
            )}
          {item.allergens && item.allergens.length > 0 && (
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <UtensilsCrossed className="h-4 w-4 text-brand-stone-gray" />
              {item.allergens.map((allergen, idx) => (
                <span key={idx} className="capitalize">
                  {allergen}
                  {idx < item.allergens!!.length - 1 ? "," : ""}
                </span>
              ))}
            </span>
          )}
        </div>
        <Button className="w-full bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta transition-colors">
          Add to Order
        </Button>
      </div>
    </div>
  )
}

export default function MenuPage() {
  const categories = [
    "Starters",
    "Mains",
    "Desserts",
    "Drinks",
    "Vegan",
    "Gluten-Free",
    "Kids Menu",
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-brand-cream font-sans">
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-warm-brown text-center mb-12">
            Our Exquisite Menu
          </h1>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <ToggleGroup
              type="single"
              defaultValue="dine-in"
              className="bg-brand-cream border border-brand-warm-brown rounded-full overflow-hidden"
            >
              <ToggleGroupItem
                value="dine-in"
                aria-label="Toggle Dine-In View"
                className="px-6 py-2 text-brand-warm-brown data-[state=on]:bg-brand-deep-red data-[state=on]:text-brand-cream hover:bg-brand-deep-red/10 hover:text-brand-deep-red transition-colors rounded-full"
              >
                Dine-In View
              </ToggleGroupItem>
              <ToggleGroupItem
                value="takeout"
                aria-label="Toggle Takeout View"
                className="px-6 py-2 text-brand-warm-brown data-[state=on]:bg-brand-deep-red data-[state=on]:text-brand-cream hover:bg-brand-deep-red/10 hover:text-brand-deep-red transition-colors rounded-full"
              >
                Takeout View
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Filters (Placeholder) */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              className="border-brand-olive-green text-brand-olive-green hover:bg-brand-olive-green hover:text-brand-cream bg-transparent"
            >
              <Leaf className="h-4 w-4 mr-2" /> Vegan
            </Button>
            <Button
              variant="outline"
              className="border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta hover:text-brand-cream bg-transparent"
            >
              <Flame className="h-4 w-4 mr-2" /> Spicy
            </Button>
            <Button
              variant="outline"
              className="border-brand-warm-brown text-brand-warm-brown hover:bg-brand-warm-brown hover:text-brand-cream bg-transparent"
            >
              Popular
            </Button>
            {/* Add more filter buttons as needed */}
          </div>

          <Tabs defaultValue="Starters" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 h-auto bg-brand-warm-brown/10 p-2 rounded-lg">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="font-semibold text-brand-warm-brown data-[state=active]:bg-brand-deep-red data-[state=active]:text-brand-cream data-[state=active]:shadow-md transition-colors py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <h2 className="font-serif text-4xl font-bold text-brand-warm-brown mb-8 text-center md:text-left">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menuItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                </div>
                {menuItems.filter((item) => item.category === category)
                  .length === 0 && (
                  <p className="text-center text-brand-stone-gray text-lg mt-8">
                    No items found in this category.
                  </p>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  )
}
