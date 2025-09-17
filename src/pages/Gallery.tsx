import { useState } from 'react';
import { Camera, Heart, Star, Users, Palette, TreePine, Play, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { key: 'all', icon: Camera, color: 'bg-gradient-to-r from-pink-500 to-blue-500' },
    { key: 'activities', icon: Star, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { key: 'learning', icon: Users, color: 'bg-gradient-to-r from-green-500 to-blue-500' },
    { key: 'arts', icon: Palette, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { key: 'outdoor', icon: TreePine, color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
    { key: 'events', icon: Heart, color: 'bg-gradient-to-r from-pink-500 to-purple-500' }
  ];

  const galleryItems = [
    { id: 1, category: 'activities', type: 'image', featured: true },
    { id: 2, category: 'learning', type: 'image', featured: false },
    { id: 3, category: 'arts', type: 'video', featured: true },
    { id: 4, category: 'outdoor', type: 'image', featured: false },
    { id: 5, category: 'events', type: 'image', featured: true },
    { id: 6, category: 'activities', type: 'image', featured: false },
    { id: 7, category: 'learning', type: 'video', featured: false },
    { id: 8, category: 'arts', type: 'image', featured: false },
    { id: 9, category: 'outdoor', type: 'image', featured: true },
    { id: 10, category: 'events', type: 'image', featured: false },
    { id: 11, category: 'activities', type: 'image', featured: false },
    { id: 12, category: 'learning', type: 'image', featured: false }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-blue-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mb-8 shadow-2xl">
            <Camera className="text-white" size={40} />
          </div>
          <h1 className="text-6xl font-bold text-gray-800 mb-8 leading-tight">
            {t('gallery.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">{t('gallery.titleHighlight')}</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = selectedCategory === category.key;
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`group px-8 py-4 ${
                    isActive
                      ? category.color + ' text-white scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  } rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 ${
                    isActive ? 'border-transparent' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent size={24} className="group-hover:scale-110 transition-transform" />
                    <span>{t(`gallery.categories.${category.key}`)}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Gallery Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t('gallery.featured')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredItems.filter(item => item.featured).map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                onClick={() => openLightbox(item.id)}
              >
                {/* Image/Video Container */}
                <div className="h-80 bg-gradient-to-br from-pink-200 to-blue-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {t(`gallery.categories.${item.category}`)}
                    </span>
                  </div>

                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute top-6 right-6 z-10">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                        <Play size={20} className="text-gray-800" />
                      </div>
                    </div>
                  )}

                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera size={64} className="text-white/70" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <Camera size={48} className="mx-auto mb-4" />
                      <p className="text-lg font-semibold">{t('gallery.viewImage')}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                    {t(`gallery.items.${item.id}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(`gallery.items.${item.id}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 to-pink-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t('gallery.allPhotos')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.filter(item => !item.featured).map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox(item.id)}
              >
                {/* Image Container */}
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full">
                        <Play size={16} className="text-gray-800" />
                      </div>
                    </div>
                  )}

                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera size={40} className="text-gray-500" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-800 group-hover:text-pink-500 transition-colors line-clamp-1">
                    {t(`gallery.items.${item.id}.title`)}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {t(`gallery.categories.${item.category}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-pink-200 to-blue-200 flex items-center justify-center">
                <Camera size={80} className="text-white/70" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {t(`gallery.items.${selectedImage}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`gallery.items.${selectedImage}.description`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-pink-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <Heart size={64} className="mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">{t('gallery.cta.title')}</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            {t('gallery.cta.subtitle')}
          </p>
          <button className="bg-white text-gray-800 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
            {t('gallery.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;