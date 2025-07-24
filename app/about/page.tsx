import { TeamMember, teamMembers } from "@/data"
import { History, Leaf, Sparkles } from "lucide-react"
import Image from "next/image"

// Component for a single team member card
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] border border-brand-cream/50">
      <div className="relative w-full h-60">
        <Image
          src={member.portrait || "/placeholder.svg"}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-serif text-2xl font-semibold text-brand-warm-brown mb-1">
          {member.name}
        </h3>
        <p className="text-brand-deep-red text-sm font-medium mb-4">
          {member.title}
        </p>
        <p className="text-brand-stone-gray text-sm line-clamp-4">
          {member.bio}
        </p>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-brand-cream font-sans">
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-warm-brown text-center mb-12">
            Our Story & Philosophy
          </h1>

          {/* Full-screen team photo or behind-the-scenes video (Placeholder) */}
          <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl mb-16">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop&crop=center"
              alt="Our Team"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-cream text-center">
                Behind The Culinary Haven
              </h2>
            </div>
          </section>

          {/* Restaurant Story + Philosophy */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-brand-deep-red">
                Our Journey
              </h2>
              <p className="text-lg text-brand-stone-gray leading-relaxed">
                The Culinary Haven was born from a lifelong passion for
                exceptional food and heartfelt hospitality. Founded in 2010 by
                Chef Isabella Rossi, our restaurant began as a small, intimate
                bistro with a vision: to create a dining experience that
                transcends the ordinary. Over the years, we've grown, but our
                commitment to quality, creativity, and community remains
                unwavering.
              </p>
              <p className="text-lg text-brand-stone-gray leading-relaxed">
                Every dish on our menu is a testament to our dedication,
                blending traditional techniques with innovative approaches. We
                believe that dining is not just about eating; it's about sharing
                moments, creating memories, and savoring the art of cuisine.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-brand-deep-red">
                Our Philosophy
              </h2>
              <p className="text-lg text-brand-stone-gray leading-relaxed">
                At The Culinary Haven, our philosophy is simple: excellence in
                every detail. We are committed to sourcing the freshest,
                highest-quality ingredients, supporting local farmers and
                sustainable practices whenever possible. Our chefs are artists,
                transforming these ingredients into culinary masterpieces that
                delight the palate and inspire the soul.
              </p>
              <p className="text-lg text-brand-stone-gray leading-relaxed">
                We strive to create an atmosphere that is both elegant and cozy,
                where every guest feels welcomed and cherished. From the moment
                you step through our doors until your last bite, we aim to
                provide an unforgettable experience that celebrates the joy of
                food and togetherness.
              </p>
            </div>
          </section>

          {/* Founder/Chef Bios with Portraits */}
          <section className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-warm-brown text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>

          {/* Timeline (Placeholder) */}
          <section className="mb-16 bg-brand-warm-brown/10 p-8 rounded-lg">
            <h2 className="font-serif text-4xl font-bold text-brand-deep-red text-center mb-8 flex items-center justify-center gap-3">
              <History className="h-8 w-8 text-brand-terracotta" /> Our
              Milestones
            </h2>
            <div className="relative border-l-2 border-brand-warm-brown pl-6 py-4 space-y-8">
              <div className="relative">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-brand-deep-red border-2 border-brand-cream flex items-center justify-center text-brand-cream font-bold text-sm">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-brand-warm-brown mb-1">
                  2010: Grand Opening
                </h3>
                <p className="text-brand-stone-gray">
                  The Culinary Haven opens its doors as a cozy bistro, quickly
                  gaining local acclaim.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-brand-deep-red border-2 border-brand-cream flex items-center justify-center text-brand-cream font-bold text-sm">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-brand-warm-brown mb-1">
                  2015: Michelin Star Recognition
                </h3>
                <p className="text-brand-stone-gray">
                  Awarded our first Michelin star for exceptional cuisine and
                  service.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-brand-deep-red border-2 border-brand-cream flex items-center justify-center text-brand-cream font-bold text-sm">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-brand-warm-brown mb-1">
                  2020: Online Ordering Launch
                </h3>
                <p className="text-brand-stone-gray">
                  Introduced online ordering and delivery services to reach more
                  customers.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-brand-deep-red border-2 border-brand-cream flex items-center justify-center text-brand-cream font-bold text-sm">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-brand-warm-brown mb-1">
                  2023: Sustainability Initiative
                </h3>
                <p className="text-brand-stone-gray">
                  Committed to 100% sustainable sourcing for all ingredients.
                </p>
              </div>
            </div>
          </section>

          {/* Sustainability/Ingredient Sourcing Commitment */}
          <section className="bg-brand-olive-green text-brand-cream p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="font-serif text-4xl font-bold text-center mb-6 flex items-center justify-center gap-3">
              <Leaf className="h-8 w-8 text-brand-terracotta" /> Our Commitment
              to Sustainability
            </h2>
            <p className="text-lg text-brand-cream/80 leading-relaxed text-center max-w-3xl mx-auto">
              We believe that great food starts with great ingredients. That's
              why we are deeply committed to sustainable and ethical sourcing.
              We partner with local farms and purveyors who share our values,
              ensuring that every ingredient on your plate is fresh, responsibly
              grown, and of the highest quality. Our dedication to
              sustainability extends to minimizing waste and supporting our
              community.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
