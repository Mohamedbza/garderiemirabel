"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Camera, Heart, Star, Users, Palette, TreePine, Play, X, ChevronLeft, ChevronRight } from "lucide-react"

const Gallery = () => {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = [
    { key: "all", icon: Camera, color: "bg-pink-500", label: t("gallery.categories.all") },
    {
      key: "activities",
      icon: Star,
      color: "bg-pink-500",
      label: t("gallery.categories.activities"),
    },
    { key: "learning", icon: Users, color: "bg-blue-500", label: t("gallery.categories.learning") },
    { key: "arts", icon: Palette, color: "bg-pink-500", label: t("gallery.categories.arts") },
    { key: "outdoor", icon: TreePine, color: "bg-blue-500", label: t("gallery.categories.outdoor") },
    { key: "events", icon: Heart, color: "bg-pink-500", label: t("gallery.categories.events") },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "activities",
      type: "image",
      featured: true,
      image: "/gallery/morning-circle-time-kindergarten-children.jpg",
    },
    {
      id: 2,
      category: "learning",
      type: "image",
      featured: false,
      image: "/gallery/learning-activities-classroom.jpg",
    },
    { id: 3, category: "arts", type: "video", featured: true, image: "/gallery/art-workshop-children-painting.jpg" },
    {
      id: 4,
      category: "outdoor",
      type: "image",
      featured: false,
      image: "/gallery/playground-adventures-children.jpg",
    },
    {
      id: 5,
      category: "events",
      type: "image",
      featured: true,
      image: "/gallery/holiday-celebration-kindergarten.jpg",
    },
    { id: 6, category: "activities", type: "image", featured: false, image: "/gallery/music-and-movement-class.jpg" },
    { id: 7, category: "learning", type: "video", featured: false, image: "/gallery/reading-corner-story-time.jpg" },
    { id: 8, category: "arts", type: "image", featured: false, image: "/gallery/dramatic-play-dress-up.jpg" },
    { id: 9, category: "outdoor", type: "image", featured: true, image: "/gallery/outdoor-nature-exploration.jpg" },
    { id: 10, category: "events", type: "image", featured: false, image: "/gallery/lunch-time-social-eating.jpg" },
    {
      id: 11,
      category: "activities",
      type: "image",
      featured: false,
      image: "/gallery/building-blocks-construction.jpg",
    },
    {
      id: 12,
      category: "learning",
      type: "image",
      featured: false,
      image: "/gallery/science-discovery-activities.jpg",
    },
  ]

  const galleryTitles = {
    1: {
      title: t("gallery.items.1.title"),
      description: t("gallery.items.1.description"),
    },
    2: {
      title: t("gallery.items.2.title"),
      description: t("gallery.items.2.description"),
    },
    3: {
      title: t("gallery.items.3.title"),
      description: t("gallery.items.3.description"),
    },
    4: {
      title: t("gallery.items.4.title"),
      description: t("gallery.items.4.description"),
    },
    5: { title: t("gallery.items.5.title"), description: t("gallery.items.5.description") },
    6: {
      title: t("gallery.items.6.title"),
      description: t("gallery.items.6.description"),
    },
    7: { title: t("gallery.items.7.title"), description: t("gallery.items.7.description") },
    8: { title: t("gallery.items.8.title"), description: t("gallery.items.8.description") },
    9: { title: t("gallery.items.9.title"), description: t("gallery.items.9.description") },
    10: { title: t("gallery.items.10.title"), description: t("gallery.items.10.description") },
    11: {
      title: t("gallery.items.11.title"),
      description: t("gallery.items.11.description"),
    },
    12: { title: t("gallery.items.12.title"), description: t("gallery.items.12.description") },
  }

  const allItems = galleryItems

  const openLightbox = (id: number) => {
    setSelectedImage(id)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToNextImage = () => {
    if (!selectedImage) return
    const currentIndex = allItems.findIndex(item => item.id === selectedImage)
    const nextIndex = (currentIndex + 1) % allItems.length
    setSelectedImage(allItems[nextIndex].id)
  }

  const goToPrevImage = () => {
    if (!selectedImage) return
    const currentIndex = allItems.findIndex(item => item.id === selectedImage)
    const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length
    setSelectedImage(allItems[prevIndex].id)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-500 rounded-full mb-8 shadow-2xl">
            <Camera className="text-white" size={32} />
          </div>
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">{t("gallery.title")} </span>
            <span className="text-pink-400">{t("gallery.titleHighlight")}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            {t("gallery.subtitle")}
          </p>

          {/* Elegant divider */}
          <div className="flex items-center justify-center mb-16">
            <div className="w-32 h-px bg-pink-300"></div>
            <div className="mx-4 w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
            <div className="w-32 h-px bg-blue-300"></div>
          </div>
        </div>
      </section>

      {/* Featured Gallery Items */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t("gallery.featured")}</h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {allItems
              .filter((item) => item.featured)
              .map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-[1.02] hover:border-pink-500/50 cursor-pointer"
                  onClick={() => openLightbox(item.id)}
                >
                  {/* Image/Video Container */}
                  <div className="h-80 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {categories.find((cat) => cat.key === item.category)?.label}
                      </span>
                    </div>

                    {/* Video Play Button */}
                    {item.type === "video" && (
                      <div className="absolute top-6 right-6 z-10">
                        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                          <Play size={20} className="text-gray-800" />
                        </div>
                      </div>
                    )}

                    {/* Image Display */}
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={galleryTitles[item.id as keyof typeof galleryTitles]?.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center">
                        <Camera size={48} className="mx-auto mb-4" />
                        <p className="text-lg font-semibold">{t("gallery.viewImage")}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                      {galleryTitles[item.id as keyof typeof galleryTitles]?.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {galleryTitles[item.id as keyof typeof galleryTitles]?.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Phone Gallery Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t("gallery.allPhotos")}</h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">
            {allItems
              .filter((item) => !item.featured)
              .map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(item.id)}
                >
                  {/* Image Container */}
                  <div className="aspect-square bg-gray-800 relative overflow-hidden">
                    {/* Video Play Button */}
                    {item.type === "video" && (
                      <div className="absolute top-2 right-2 z-10">
                        <div className="bg-white/90 backdrop-blur-sm p-1 rounded-full">
                          <Play size={12} className="text-gray-800" />
                        </div>
                      </div>
                    )}

                    {/* Image Display */}
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={galleryTitles[item.id as keyof typeof galleryTitles]?.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Bottom luxury accent */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex items-center justify-center">
            <div className="w-48 h-px bg-pink-500"></div>
            <div className="mx-6 text-white text-sm font-light tracking-widest uppercase">
              {allItems.length} {t("gallery.allPhotos")}
            </div>
            <div className="w-48 h-px bg-blue-500"></div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-30"
            >
              <X size={32} />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="h-96 relative overflow-hidden cursor-pointer" onClick={goToNextImage}>
                <img
                  src={allItems.find((item) => item.id === selectedImage)?.image || "/placeholder.svg"}
                  alt={galleryTitles[selectedImage as keyof typeof galleryTitles]?.title}
                  className="w-full h-full object-cover"
                />

                {/* Click indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <ChevronRight size={20} className="text-gray-800" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {galleryTitles[selectedImage as keyof typeof galleryTitles]?.title}
                  </h3>
                  <div className="text-sm text-gray-500">
                    {allItems.findIndex(item => item.id === selectedImage) + 1} / {allItems.length}
                  </div>
                </div>
                <p className="text-gray-600">
                  {galleryTitles[selectedImage as keyof typeof galleryTitles]?.description}
                </p>
              </div>
            </div>

            {/* Previous Button - Outside */}
            <button
              onClick={goToPrevImage}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button - Outside */}
            <button
              onClick={goToNextImage}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Gallery
