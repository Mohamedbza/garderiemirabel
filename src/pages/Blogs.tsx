import { Calendar, User, ArrowRight, Heart, BookOpen, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Blogs = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      category: 'development',
      featured: true
    },
    {
      id: 2,
      category: 'activities',
      featured: false
    },
    {
      id: 3,
      category: 'nutrition',
      featured: false
    },
    {
      id: 4,
      category: 'safety',
      featured: true
    },
    {
      id: 5,
      category: 'parenting',
      featured: false
    },
    {
      id: 6,
      category: 'development',
      featured: false
    }
  ];

  const categories = [
    { key: 'all', icon: BookOpen, color: 'bg-gradient-to-r from-pink-500 to-blue-500' },
    { key: 'development', icon: Star, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { key: 'activities', icon: Heart, color: 'bg-gradient-to-r from-green-500 to-blue-500' },
    { key: 'nutrition', icon: Star, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { key: 'safety', icon: Star, color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
    { key: 'parenting', icon: Heart, color: 'bg-gradient-to-r from-pink-500 to-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-blue-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mb-8 shadow-2xl">
            <BookOpen className="text-white" size={40} />
          </div>
          <h1 className="text-6xl font-bold text-gray-800 mb-8 leading-tight">
            {t('blogs.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">{t('blogs.titleHighlight')}</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('blogs.subtitle')}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.key}
                  className={`group px-8 py-4 ${category.color} text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent size={24} className="group-hover:scale-110 transition-transform" />
                    <span>{t(`blogs.categories.${category.key}`)}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t('blogs.featured')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="h-80 bg-gradient-to-br from-pink-200 to-blue-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {t(`blogs.categories.${post.category}`)}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen size={64} className="text-white/70" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-6 text-gray-500 text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{t(`blogs.posts.${post.id}.date`)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{t(`blogs.posts.${post.id}.author`)}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-pink-500 transition-colors">
                    {t(`blogs.posts.${post.id}.title`)}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {t(`blogs.posts.${post.id}.excerpt`)}
                  </p>

                  <button className="flex items-center space-x-2 text-pink-500 hover:text-pink-600 font-semibold group-hover:translate-x-2 transition-all">
                    <span>{t('blogs.readMore')}</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 to-pink-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t('blogs.latestPosts')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Image */}
                <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {t(`blogs.categories.${post.category}`)}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen size={48} className="text-gray-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-gray-500 text-xs mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{t(`blogs.posts.${post.id}.date`)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{t(`blogs.posts.${post.id}.author`)}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-500 transition-colors line-clamp-2">
                    {t(`blogs.posts.${post.id}.title`)}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {t(`blogs.posts.${post.id}.excerpt`)}
                  </p>

                  <button className="flex items-center space-x-2 text-pink-500 hover:text-pink-600 font-semibold text-sm group-hover:translate-x-1 transition-all">
                    <span>{t('blogs.readMore')}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24 bg-gradient-to-r from-pink-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <Heart size={64} className="mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">{t('blogs.newsletter.title')}</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            {t('blogs.newsletter.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('blogs.newsletter.placeholder')}
              className="flex-1 px-6 py-4 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl">
              {t('blogs.newsletter.subscribe')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;