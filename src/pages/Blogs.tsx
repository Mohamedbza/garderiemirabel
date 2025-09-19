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

  const renderTextWithLinks = (text: string) => {
    // Handle bracketed links first
    const bracketRegex = /\[([^\]]+)\]/g
    const governmentUrl = "https://www.finances.gouv.qc.ca/ministere/outils_services/outils_calcul/cout_garde_quotidien/outil_garde.asp"

    // Replace bracketed text with clickable links
    const textWithBracketLinks = text.replace(bracketRegex, (match, linkText) => {
      return `SPECIAL_LINK_${linkText}_SPECIAL_LINK`
    })

    // Then handle regular URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const parts = textWithBracketLinks.split(/SPECIAL_LINK_([^_]+)_SPECIAL_LINK/)

    return parts.map((part, index) => {
      // Check if it's a bracketed link text
      if (part === "Ministère des Finances du Québec" || part === "Quebec Ministry of Finance") {
        return (
          <a
            key={index}
            href={governmentUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-pink-500 hover:text-pink-600 underline font-medium"
            onClick={(e) => {
              e.preventDefault()
              window.open(governmentUrl, '_blank', 'noopener,noreferrer')
            }}
          >
            {part}
          </a>
        )
      }
      // Retraite Québec link
      else if (part === "Retraite Québec") {
        return (
          <a
            key={index}
            href="https://www.rrq.gouv.qc.ca/fr/enfants/naissance_adoption/soutien_enfants/Pages/soutien_enfants.aspx"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-pink-500 hover:text-pink-600 underline font-medium"
            onClick={(e) => {
              e.preventDefault()
              window.open("https://www.rrq.gouv.qc.ca/fr/enfants/naissance_adoption/soutien_enfants/Pages/soutien_enfants.aspx", '_blank', 'noopener,noreferrer')
            }}
          >
            {part}
          </a>
        )
      }
      // Naître et grandir link
      else if (part === "Naître et grandir") {
        return (
          <a
            key={index}
            href="https://naitreetgrandir.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-pink-500 hover:text-pink-600 underline font-medium"
            onClick={(e) => {
              e.preventDefault()
              window.open("https://naitreetgrandir.com", '_blank', 'noopener,noreferrer')
            }}
          >
            {part}
          </a>
        )
      }
      // Quebec.ca link
      else if (part === "Québec.ca" || part === "Quebec.ca") {
        return (
          <a
            key={index}
            href="https://www.quebec.ca/sante/conseils-et-prevention/vaccination-et-maladies-infectieuses/vaccination/calendrier-de-vaccination"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-pink-500 hover:text-pink-600 underline font-medium"
            onClick={(e) => {
              e.preventDefault()
              window.open("https://www.quebec.ca/sante/conseils-et-prevention/vaccination-et-maladies-infectieuses/vaccination/calendrier-de-vaccination", '_blank', 'noopener,noreferrer')
            }}
          >
            {part}
          </a>
        )
      }
      // Handle regular URLs
      else if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-pink-500 hover:text-pink-600 underline font-medium"
            onClick={(e) => {
              e.preventDefault()
              window.open(part, '_blank', 'noopener,noreferrer')
            }}
          >
            {part}
          </a>
        )
      }
      return part
    })
  }

  const blogPosts = [
    {
      id: 6,
      category: "development",
      featured: false,
      heroImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 7,
      category: "parenting",
      featured: true,
      heroImage:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 8,
      category: "parenting",
      featured: false,
      heroImage:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
      featured: false,
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

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-500 transition-colors">
                      {t(`blogs.posts.${post.id}.title`)}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {renderTextWithLinks(t(`blogs.posts.${post.id}.excerpt`))}
                    </p>

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
