import { Calendar, User, ArrowRight, Heart, BookOpen, Star } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useState } from "react"

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
    <div className="min-h-screen bg-pink-50 relative">
      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-200/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-40 h-40 bg-pink-100/25 rounded-full blur-3xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-100/35 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-pink-500/5"></div>
          <svg className="absolute bottom-0 left-0 w-full h-24 text-white/40" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-500 rounded-2xl mb-8 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <BookOpen className="text-white" size={32} />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-gray-800">{t("blogs.title")} </span>
            <span className="text-pink-500">
              {t("blogs.titleHighlight")}
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light">{t("blogs.subtitle")}</p>

          {/* Decorative elements */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-pink-300"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-16 h-px bg-blue-300"></div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              const IconComponent = category.icon
              const isActive = selectedCategory === category.key
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`group px-6 py-3 ${
                    isActive
                      ? "bg-pink-500 text-white scale-105 shadow-lg"
                      : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white/90 hover:shadow-md"
                  } rounded-full font-medium text-base transition-all duration-300 hover:scale-105 border ${
                    isActive ? "border-pink-200/50" : "border-gray-200/30"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent size={18} className="group-hover:scale-110 transition-transform" />
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
    </div>
  )
}

export default Blogs
