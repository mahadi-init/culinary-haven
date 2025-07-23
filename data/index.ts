import type { LucideIcon } from "lucide-react"

export type NavLink = {
  name: string
  href: string
  icon?: LucideIcon
  subLinks?: NavLink[]
}

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Order Online", href: "/order" },
  { name: "Reservations", href: "/reservations" },
  { name: "Events", href: "/events" },
  { name: "Gift Cards", href: "/gift-cards" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export type Special = {
  id: string
  name: string
  description: string
  price: string
  image: string
}

export const specials: Special[] = [
  {
    id: "1",
    name: "Seared Scallops with Saffron Risotto",
    description: "Perfectly seared scallops served atop creamy saffron-infused risotto, a delicate and rich starter.",
    price: "$32.00",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    name: "Braised Lamb Shank",
    description: "Slow-braised lamb shank with root vegetables and a rich red wine reduction, tender and flavorful.",
    price: "$28.00",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    name: "Wild Mushroom Tart",
    description:
      "A savory tart filled with assorted wild mushrooms, fresh herbs, and creamy goat cheese, a vegetarian delight.",
    price: "$22.00",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    name: "Pan-Seared Halibut",
    description: "Flaky halibut fillet with lemon-butter sauce, served with seasonal greens and roasted potatoes.",
    price: "$35.00",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export type Review = {
  id: string
  name: string
  rating: number
  photo: string
  text: string
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah L.",
    rating: 5,
    photo: "/placeholder.svg?height=80&width=80",
    text: "Absolutely exquisite! The ambiance was perfect, and every dish was a culinary masterpiece. Highly recommend the lamb shank!",
  },
  {
    id: "2",
    name: "David K.",
    rating: 5,
    photo: "/placeholder.svg?height=80&width=80",
    text: "A truly memorable dining experience. The staff was incredibly attentive, and the wine pairing suggestions were spot on. Will definitely be back.",
  },
  {
    id: "3",
    name: "Emily R.",
    rating: 4,
    photo: "/placeholder.svg?height=80&width=80",
    text: "Cozy atmosphere and delicious food. The dessert menu is a must-try! Only minor feedback is the wait time for a table, but worth it.",
  },
  {
    id: "4",
    name: "Michael B.",
    rating: 5,
    photo: "/placeholder.svg?height=80&width=80",
    text: "The best fine dining experience in the city! Every dish was a work of art, and the service was impeccable. A perfect spot for a special occasion.",
  },
]

export const awardsLogos: string[] = [
  "/placeholder.svg?height=80&width=120",
  "/placeholder.svg?height=80&width=120",
  "/placeholder.svg?height=80&width=120",
  "/placeholder.svg?height=80&width=120",
]

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  image: string
  nutritionInfo?: string
  spicy?: boolean
  allergens?: string[]
  category: "Starters" | "Mains" | "Desserts" | "Drinks" | "Vegan" | "Gluten-Free" | "Kids Menu"
  dietary?: ("vegan" | "vegetarian" | "keto")[]
}

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Artisan Cheese Board",
    description: "Selection of local and imported cheeses with fig jam and artisanal crackers.",
    price: "$18.00",
    image: "/placeholder.svg?height=200&width=300",
    category: "Starters",
    dietary: ["vegetarian"],
  },
  {
    id: "m2",
    name: "Crispy Calamari",
    description: "Lightly fried calamari with spicy marinara and lemon aioli.",
    price: "$16.00",
    image: "/placeholder.svg?height=200&width=300",
    category: "Starters",
  },
  {
    id: "m3",
    name: "Pan-Seared Duck Breast",
    description: "Served with cherry reduction, roasted asparagus, and wild rice pilaf.",
    price: "$34.00",
    image: "/placeholder.svg?height=200&width=300",
    category: "Mains",
  },
  {
    id: "m4",
    name: "Wild Mushroom Risotto",
    description: "Creamy Arborio rice with assorted wild mushrooms, truffle oil, and parmesan.",
    price: "$26.00",
    image: "/placeholder.svg?height=200&width=300",
    category: "Mains",
    dietary: ["vegetarian"],
  },
  {
    id: "m5",
    name: "Vegan Shepherd's Pie",
    description: "Hearty lentil and vegetable stew topped with creamy sweet potato mash.",
    price: "$24.00",
    image: "/placeholder.svg?height=200&width=300",
    category: "Vegan",
    dietary: ["vegan", "vegetarian"],
  },
  {
    id: "m6",
    name: "Gluten-Free Pasta Primavera",
    description: "Gluten-free pasta with seasonal vegetables in a light garlic and olive oil sauce.",
    price: "$23.00",
    image: "/placeholder.svg?height=200&width=300",
    category: "Gluten-Free",
    dietary: ["vegetarian"],
  },
  {
    id: "m7",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream.",
    price: "$12.00",
    image: "/placeholder.svg?height=200&width=300",
    category: "Desserts",
  },
  {
    id: "m8",
    name: "Espresso Martini",
    description: "Vodka, coffee liqueur, fresh espresso, and a hint of vanilla.",
    price: "$14.00",
    image: "/placeholder.svg?height=200&width=300",
    category: "Drinks",
  },
  {
    id: "m9",
    name: "Kids' Mini Cheeseburger",
    description: "Small beef patty with cheese, served with fries.",
    price: "$10.00",
    image: "/placeholder.svg?height=200&width=300",
    category: "Kids Menu",
  },
  {
    id: "m10",
    name: "Spicy Shrimp Tacos",
    description: "Grilled shrimp with a zesty slaw and chipotle aioli in soft tortillas.",
    price: "$20.00",
    image: "/placeholder.svg?height=200&width=300",
    spicy: true,
    category: "Mains",
  },
  {
    id: "m11",
    name: "House Red Wine (Glass)",
    description: "A robust and fruity blend, perfect with our main courses.",
    price: "$10.00",
    image: "/placeholder.svg?height=200&width=300",
    category: "Drinks",
  },
  {
    id: "m12",
    name: "Freshly Brewed Coffee",
    description: "Locally sourced, freshly ground coffee.",
    price: "$4.00",
    image: "/placeholder.svg?height=200&width=300",
    category: "Drinks",
  },
]

export type Event = {
  id: string
  name: string
  date: string
  time: string
  description: string
  image: string
  rsvpLink?: string
  ticketLink?: string
}

export const events: Event[] = [
  {
    id: "e1",
    name: "Live Jazz Night",
    date: "August 15, 2025",
    time: "7:00 PM - 10:00 PM",
    description: "Enjoy an evening of smooth jazz with our special guest musicians. Full dinner menu available.",
    image: "/placeholder.svg?height=300&width=500",
    rsvpLink: "#",
  },
  {
    id: "e2",
    name: "Summer Wine Tasting",
    date: "September 5, 2025",
    time: "6:30 PM - 8:30 PM",
    description: "Sample a curated selection of summer wines paired with artisanal cheeses and charcuterie.",
    image: "/placeholder.svg?height=300&width=500",
    ticketLink: "#",
  },
  {
    id: "e3",
    name: "Autumn Harvest Dinner",
    date: "October 20, 2025",
    time: "6:00 PM - 9:00 PM",
    description: "A special multi-course dinner celebrating the flavors of autumn with seasonal ingredients.",
    image: "/placeholder.svg?height=300&width=500",
    rsvpLink: "#",
  },
]

export type GalleryImage = {
  id: string
  src: string
  alt: string
  category: "Food" | "Interior" | "Events" | "Kitchen" | "Staff"
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/placeholder.svg?height=400&width=600", alt: "Gourmet Dish", category: "Food" },
  { id: "g2", src: "/placeholder.svg?height=400&width=600", alt: "Restaurant Interior", category: "Interior" },
  { id: "g3", src: "/placeholder.svg?height=400&width=600", alt: "Chef at Work", category: "Kitchen" },
  { id: "g4", src: "/placeholder.svg?height=400&width=600", alt: "Event Setup", category: "Events" },
  { id: "g5", src: "/placeholder.svg?height=400&width=600", alt: "Serving Staff", category: "Staff" },
  { id: "g6", src: "/placeholder.svg?height=400&width=600", alt: "Dessert Platter", category: "Food" },
  { id: "g7", src: "/placeholder.svg?height=400&width=600", alt: "Bar Area", category: "Interior" },
  { id: "g8", src: "/placeholder.svg?height=400&width=600", alt: "Kitchen Team", category: "Kitchen" },
  { id: "g9", src: "/placeholder.svg?height=400&width=600", alt: "Signature Cocktail", category: "Food" },
  { id: "g10", src: "/placeholder.svg?height=400&width=600", alt: "Private Dining", category: "Interior" },
]

export type TeamMember = {
  id: string
  name: string
  title: string
  portrait: string
  bio: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "t1",
    name: "Chef Isabella Rossi",
    title: "Head Chef & Founder",
    portrait: "/placeholder.svg?height=200&width=200",
    bio: "With over 20 years of culinary experience, Chef Isabella brings a passion for fresh, seasonal ingredients and a flair for modern Italian cuisine. Her philosophy centers on creating dishes that tell a story, emphasizing authenticity and innovation.",
  },
  {
    id: "t2",
    name: "Marco Bianchi",
    title: "Restaurant Manager",
    portrait: "/placeholder.svg?height=200&width=200",
    bio: "Marco ensures every guest experience is seamless and memorable. His dedication to hospitality, keen eye for detail, and warm demeanor make him an invaluable part of our team, overseeing all front-of-house operations.",
  },
  {
    id: "t3",
    name: "Sofia Chen",
    title: "Pastry Chef",
    portrait: "/placeholder.svg?height=200&width=200",
    bio: "Sofia's creations are a symphony of flavors and textures. Her innovative desserts are the perfect end to any meal, blending classic techniques with contemporary twists and a touch of artistic flair.",
  },
]

export type FAQItem = {
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    question: "What are your opening hours?",
    answer:
      "We are open Tuesday to Sunday, from 5:00 PM to 10:00 PM. Our kitchen closes at 9:30 PM. We are closed on Mondays.",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Yes, we offer a variety of vegan, vegetarian, and gluten-free options. Please inform your server about any allergies or dietary needs, and our chefs will do their best to accommodate.",
  },
  {
    question: "How do I make a reservation?",
    answer:
      "You can make a reservation directly on our website via the 'Reservations' page, or by calling us during business hours at (123) 456-7890. We recommend booking in advance, especially for weekend evenings.",
  },
  {
    question: "Do you offer catering services?",
    answer:
      "Yes, we offer catering for private events and special occasions. Please contact us through the 'Contact' page or call us to discuss your specific needs and customize a menu.",
  },
  {
    question: "Is there parking available?",
    answer:
      "We have limited street parking available directly in front of the restaurant. There is also a public parking garage two blocks away with ample space.",
  },
  {
    question: "Can I purchase gift cards online?",
    answer:
      "You can purchase digital or physical gift cards directly from our 'Gift Cards' page on the website. They make a perfect gift for any food lover.",
  },
]
