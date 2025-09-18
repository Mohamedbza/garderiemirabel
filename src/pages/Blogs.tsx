import { Calendar, User, ArrowRight, Heart, BookOpen, Star } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
import { pageVariants, pageTransition } from '../utils/animations'

const Blogs = () => {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const blogPosts = [
    {
      id: 1,
      category: "development",
      featured: true,
      heroImage:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80",
    },
    {
      id: 2,
      category: "activities",
      featured: false,
      heroImage:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      category: "nutrition",
      featured: false,
      heroImage:
        "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80",
    },
    {
      id: 4,
      category: "safety",
      featured: true,
      heroImage:
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 5,
      category: "parenting",
      featured: false,
      heroImage:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 6,
      category: "development",
      featured: false,
      heroImage:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  const categories = [
    { key: "all", icon: BookOpen, color: "bg-pink-500" },
    { key: "development", icon: Star, color: "bg-pink-500" },
    { key: "activities", icon: Heart, color: "bg-blue-500" },
    { key: "nutrition", icon: Star, color: "bg-pink-500" },
    { key: "safety", icon: Star, color: "bg-blue-500" },
    { key: "parenting", icon: Heart, color: "bg-pink-500" },
  ]

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-6">
            <BookOpen className="text-blue-500" size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            {t("blogs.title")} <span className="text-blue-500">{t("blogs.titleHighlight")}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t("blogs.subtitle")}</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon
              const isActive = selectedCategory === category.key
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-5 py-2 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  } rounded-full font-medium text-sm transition-all duration-200 border ${
                    isActive ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent size={16} />
                    <span>{t(`blogs.categories.${category.key}`)}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">Aucun article trouvé pour cette catégorie.</p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.03] border border-pink-100/50 hover:border-pink-200/80"
                >
                  {/* Image */}
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={post.heroImage || "/placeholder.svg"}
                      alt={t(`blogs.posts.${post.id}.title`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                        {t(`blogs.categories.${post.category}`)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-4 w-8 h-8 bg-pink-200/50 rounded-bl-full"></div>

                    <div className="flex items-center space-x-4 text-gray-500 text-xs mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} className="text-pink-500" />
                        <span>{t(`blogs.posts.${post.id}.date`)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={14} className="text-blue-500" />
                        <span>{t(`blogs.posts.${post.id}.author`)}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-500 transition-colors line-clamp-2">
                      {t(`blogs.posts.${post.id}.title`)}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {t(`blogs.posts.${post.id}.excerpt`)}
                    </p>

                    <Link
                      to={`/blog/${post.id}`}
                      onClick={scrollToTop}
                      className="inline-flex items-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-full font-medium text-sm hover:shadow-md hover:bg-pink-600 group-hover:translate-x-1 transition-all"
                    >
                      <span>{t("blogs.readMore")}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Blogs
