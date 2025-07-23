"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import { galleryImages } from "@/data"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import React from "react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = React.useState<
    (typeof galleryImages)[0] | null
  >(null)
  const [filter, setFilter] = React.useState<string>("All")

  const categories = [
    "All",
    ...Array.from(new Set(galleryImages.map((img) => img.category))),
  ]

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter)

  return (
    <div className="flex flex-col min-h-[100dvh] bg-brand-cream font-sans">
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-warm-brown text-center mb-12">
            Our Visual Story
          </h1>
          <p className="text-lg text-brand-stone-gray max-w-2xl mx-auto text-center mb-12">
            Explore our collection of high-quality photographs showcasing our
            exquisite dishes, elegant interior, and memorable events.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={
                  filter === cat
                    ? "bg-brand-deep-red text-brand-cream hover:bg-brand-terracotta"
                    : "border-brand-warm-brown text-brand-warm-brown hover:bg-brand-warm-brown hover:text-brand-cream"
                }
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md cursor-pointer group hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-brand-cream font-semibold text-lg">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <p className="text-center text-brand-stone-gray text-lg mt-12">
              No images found for this category.
            </p>
          )}
        </div>
      </main>

      {/* Lightbox Viewer */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          {selectedImage && (
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                layout="fill"
                objectFit="contain"
                className="bg-black" // Ensure black background for contain
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-brand-cream p-4 text-center">
                <h3 className="font-serif text-xl font-semibold">
                  {selectedImage.alt}
                </h3>
                <p className="text-sm text-brand-cream/80">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
