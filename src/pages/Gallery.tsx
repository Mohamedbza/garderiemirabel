import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Camera, Heart, Star, Users, Palette, TreePine, Play, X, ChevronLeft, ChevronRight } from "lucide-react"

const Gallery = () => {
  const { t } = useTranslation()
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
    {
      id: 13,
      category: "learning",
      type: "image",
      featured: false,
      image: "/gallery/medium-shot-kids-teacher-table.jpg",
    },
    {
      id: 14,
      category: "arts",
      type: "image",
      featured: false,
      image: "/gallery/adorable-caucasian-girl-sitting-table-drawing-paper-classroom.jpg",
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
    13: { title: t("gallery.items.13.title"), description: t("gallery.items.13.description") },
    14: { title: t("gallery.items.14.title"), description: t("gallery.items.14.description") },
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

          {/* Harmonious Symmetric Gallery Layout */}
          <div className="relative max-w-7xl mx-auto">
            {/* First Row - Balanced */}
            <div className="flex justify-center items-center mb-12 gap-8">
              {allItems.filter((item) => !item.featured).slice(0, 3).map((item, index) => {
                const firstRowShapes = [
                  { shape: "rounded-[3rem]", width: "w-56", height: "h-64" },   // Medium left
                  { shape: "rounded-full", width: "w-64", height: "h-64" },     // Large center circle
                  { shape: "rounded-[4rem]", width: "w-52", height: "h-68" },   // Medium right
                ];
                const pattern = firstRowShapes[index];
                const { shape, width, height } = pattern;

                return (
                  <div
                    key={item.id}
                    className={`group relative overflow-hidden cursor-pointer ${shape} ${width} ${height} bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-700 hover:scale-[1.05] hover:border-pink-400/30 hover:bg-white/10`}
                    onClick={() => openLightbox(item.id)}
                  >
                    {/* Video Play Button */}
                    {item.type === "video" && (
                      <div className="absolute top-3 right-3 z-10">
                        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                          <Play size={14} className="text-gray-800" />
                        </div>
                      </div>
                    )}

                    {/* Image Display */}
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={galleryTitles[item.id as keyof typeof galleryTitles]?.title}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${shape}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                      loading="lazy"
                    />

                    {/* Subtle Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ${shape}`}></div>

                    {/* Enhanced Hover Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                      <div className="text-white text-center p-3 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/20">
                        <Camera size={28} className="mx-auto mb-2 drop-shadow-2xl" />
                        <p className="text-xs font-medium drop-shadow-lg tracking-wide">
                          {galleryTitles[item.id as keyof typeof galleryTitles]?.title}
                        </p>
                      </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-pink-400/70 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute bottom-3 right-3 w-1 h-1 bg-blue-400/70 rounded-full animate-pulse delay-1000 shadow-lg"></div>
                    <div className="absolute top-1/3 right-4 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse delay-500"></div>
                  </div>
                );
              })}
            </div>

            {/* Second Row - Asymmetric Balance */}
            <div className="flex justify-center items-end mb-12 gap-6">
              {allItems.filter((item) => !item.featured).slice(3, 7).map((item, index) => {
                const secondRowShapes = [
                  { shape: "rounded-[5rem]", width: "w-72", height: "h-48" },   // Wide left
                  { shape: "rounded-full", width: "w-48", height: "h-48" },     // Small circle
                  { shape: "rounded-[2.5rem]", width: "w-44", height: "h-72" }, // Tall narrow
                  { shape: "rounded-[3.5rem]", width: "w-60", height: "h-56" }, // Medium right
                ];
                const pattern = secondRowShapes[index];
                const { shape, width, height } = pattern;

                return (
                  <div
                    key={item.id}
                    className={`group relative overflow-hidden cursor-pointer ${shape} ${width} ${height} bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-700 hover:scale-[1.05] hover:border-pink-400/30 hover:bg-white/10`}
                    onClick={() => openLightbox(item.id)}
                  >
                    {/* Video Play Button */}
                    {item.type === "video" && (
                      <div className="absolute top-3 right-3 z-10">
                        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                          <Play size={14} className="text-gray-800" />
                        </div>
                      </div>
                    )}

                    {/* Image Display */}
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={galleryTitles[item.id as keyof typeof galleryTitles]?.title}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${shape}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                      loading="lazy"
                    />

                    {/* Subtle Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ${shape}`}></div>

                    {/* Enhanced Hover Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                      <div className="text-white text-center p-3 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/20">
                        <Camera size={28} className="mx-auto mb-2 drop-shadow-2xl" />
                        <p className="text-xs font-medium drop-shadow-lg tracking-wide">
                          {galleryTitles[item.id as keyof typeof galleryTitles]?.title}
                        </p>
                      </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-pink-400/70 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute bottom-3 right-3 w-1 h-1 bg-blue-400/70 rounded-full animate-pulse delay-1000 shadow-lg"></div>
                    <div className="absolute top-1/3 right-4 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse delay-500"></div>
                  </div>
                );
              })}
            </div>

            {/* Third Row - Central Focus */}
            <div className="flex justify-center items-center mb-12 gap-10">
              {allItems.filter((item) => !item.featured).slice(7, 10).map((item, index) => {
                const thirdRowShapes = [
                  { shape: "rounded-[4rem]", width: "w-56", height: "h-60" },   // Left medium
                  { shape: "rounded-[6rem]", width: "w-80", height: "h-64" },   // Center hero
                  { shape: "rounded-[3rem]", width: "w-52", height: "h-68" },   // Right medium
                ];
                const pattern = thirdRowShapes[index];
                const { shape, width, height } = pattern;

                return (
                  <div
                    key={item.id}
                    className={`group relative overflow-hidden cursor-pointer ${shape} ${width} ${height} bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-700 hover:scale-[1.05] hover:border-pink-400/30 hover:bg-white/10 ${index === 1 ? 'shadow-2xl border-pink-400/20' : ''}`}
                    onClick={() => openLightbox(item.id)}
                  >
                    {/* Video Play Button */}
                    {item.type === "video" && (
                      <div className="absolute top-3 right-3 z-10">
                        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                          <Play size={14} className="text-gray-800" />
                        </div>
                      </div>
                    )}

                    {/* Image Display */}
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={galleryTitles[item.id as keyof typeof galleryTitles]?.title}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${shape}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                      loading="lazy"
                    />

                    {/* Subtle Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ${shape}`}></div>

                    {/* Enhanced Hover Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                      <div className="text-white text-center p-3 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/20">
                        <Camera size={28} className="mx-auto mb-2 drop-shadow-2xl" />
                        <p className="text-xs font-medium drop-shadow-lg tracking-wide">
                          {galleryTitles[item.id as keyof typeof galleryTitles]?.title}
                        </p>
                      </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-pink-400/70 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute bottom-3 right-3 w-1 h-1 bg-blue-400/70 rounded-full animate-pulse delay-1000 shadow-lg"></div>
                    <div className="absolute top-1/3 right-4 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse delay-500"></div>
                  </div>
                );
              })}
            </div>

            {/* Fourth Row - Final Balance */}
            <div className="flex justify-center items-start gap-8">
              {allItems.filter((item) => !item.featured).slice(10).map((item, index) => {
                const fourthRowShapes = [
                  { shape: "rounded-full", width: "w-52", height: "h-52" },     // Circle left
                  { shape: "rounded-[3rem]", width: "w-48", height: "h-56" },   // Medium
                  { shape: "rounded-[4rem]", width: "w-60", height: "h-48" },   // Wide
                  { shape: "rounded-full", width: "w-44", height: "h-44" },     // Small circle right
                ];
                const pattern = fourthRowShapes[index % fourthRowShapes.length];
                const { shape, width, height } = pattern;

                return (
                  <div
                    key={item.id}
                    className={`group relative overflow-hidden cursor-pointer ${shape} ${width} ${height} bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-700 hover:scale-[1.05] hover:border-pink-400/30 hover:bg-white/10`}
                    onClick={() => openLightbox(item.id)}
                  >
                    {/* Video Play Button */}
                    {item.type === "video" && (
                      <div className="absolute top-3 right-3 z-10">
                        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                          <Play size={14} className="text-gray-800" />
                        </div>
                      </div>
                    )}

                    {/* Image Display */}
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={galleryTitles[item.id as keyof typeof galleryTitles]?.title}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${shape}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                      loading="lazy"
                    />

                    {/* Subtle Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ${shape}`}></div>

                    {/* Enhanced Hover Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                      <div className="text-white text-center p-3 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/20">
                        <Camera size={28} className="mx-auto mb-2 drop-shadow-2xl" />
                        <p className="text-xs font-medium drop-shadow-lg tracking-wide">
                          {galleryTitles[item.id as keyof typeof galleryTitles]?.title}
                        </p>
                      </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-pink-400/70 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute bottom-3 right-3 w-1 h-1 bg-blue-400/70 rounded-full animate-pulse delay-1000 shadow-lg"></div>
                    <div className="absolute top-1/3 right-4 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse delay-500"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom luxury accent */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex items-center justify-center">
            <div className="w-96 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50">
          {/* Fixed Close Button - Top Right Corner */}
          <button
            onClick={closeLightbox}
            className="fixed top-6 right-6 z-50 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <X size={24} />
          </button>

          {/* Fixed Navigation Buttons */}
          {/* Previous Button - Fixed Left Side */}
          <button
            onClick={goToPrevImage}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Button - Fixed Right Side */}
          <button
            onClick={goToNextImage}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronRight size={32} />
          </button>

          {/* Content Container */}
          <div className="flex items-center justify-center min-h-screen p-8">
            <div className="relative max-w-4xl max-h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
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
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Gallery
