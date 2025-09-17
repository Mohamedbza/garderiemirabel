import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, User, ArrowLeft, Clock, Heart, Share2, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';

const BlogPost = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setIsVisible(true);
    // Automatically scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]); // Depend on id so it scrolls when navigating between different blog posts

  const getBlogContent = (postId: string) => {
    const blogContents: { [key: string]: any } = {
      '1': {
        heroImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80",
        category: 'development',
        readTime: '8 min read',
        content: [
          {
            type: 'paragraph',
            text: 'Play-based learning is not just fun and games – it\'s a fundamental approach to early childhood education that recognizes how young children naturally learn best. Through play, children develop essential skills that form the foundation for all future learning.'
          },
          {
            type: 'heading',
            text: 'Why Play-Based Learning Works'
          },
          {
            type: 'paragraph',
            text: 'Research consistently shows that children learn more effectively when they are actively engaged and having fun. Play-based learning taps into children\'s natural curiosity and intrinsic motivation to explore their world.'
          },
          {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            alt: 'Children engaged in play-based learning activities'
          },
          {
            type: 'heading',
            text: 'Key Benefits of Play-Based Learning'
          },
          {
            type: 'list',
            items: [
              'Develops problem-solving and critical thinking skills',
              'Enhances social and emotional development',
              'Builds language and communication abilities',
              'Improves fine and gross motor skills',
              'Fosters creativity and imagination'
            ]
          },
          {
            type: 'paragraph',
            text: 'At Garderie Mirabel 1&2, we integrate play-based learning throughout our daily activities. Whether children are building with blocks, engaging in dramatic play, or participating in sensory activities, they are constantly learning and developing new skills.'
          },
          {
            type: 'quote',
            text: 'Play is the highest form of research.',
            author: 'Albert Einstein'
          },
          {
            type: 'paragraph',
            text: 'Our experienced educators carefully observe children during play to understand their interests, strengths, and areas for growth. This allows us to provide targeted support and introduce new challenges that keep children engaged and learning.'
          }
        ]
      },
      '2': {
        heroImage: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: 'activities',
        readTime: '6 min read',
        content: [
          {
            type: 'paragraph',
            text: 'Fine motor skills are crucial for a child\'s development, affecting everything from writing and drawing to buttoning clothes and using utensils. Art projects provide an excellent and enjoyable way to strengthen these essential skills.'
          },
          {
            type: 'heading',
            text: 'Fun Art Projects That Build Skills'
          },
          {
            type: 'paragraph',
            text: 'Here are some of our favorite art activities that children love while developing their fine motor abilities:'
          },
          {
            type: 'list',
            items: [
              'Finger painting and brush work',
              'Cutting and pasting collages',
              'Threading beads and lacing cards',
              'Clay modeling and sculpting',
              'Drawing with various tools and materials'
            ]
          },
          {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80',
            alt: 'Children working on creative art projects'
          },
          {
            type: 'heading',
            text: 'Age-Appropriate Activities'
          },
          {
            type: 'paragraph',
            text: 'We carefully select art projects based on developmental stages. Toddlers might enjoy large-muscle movements with big brushes and washable paints, while preschoolers can handle more detailed work with scissors and smaller tools.'
          },
          {
            type: 'quote',
            text: 'Every child is an artist. The problem is how to remain an artist once we grow up.',
            author: 'Pablo Picasso'
          },
          {
            type: 'paragraph',
            text: 'The key is to make these activities process-focused rather than product-focused, celebrating the child\'s effort and creativity rather than the final result.'
          }
        ]
      },
      '3': {
        heroImage: "https://images.unsplash.com/photo-1607048837897-3b4b635b2fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: 'nutrition',
        readTime: '5 min read',
        content: [
          {
            type: 'paragraph',
            text: 'Getting children to eat healthy foods can be challenging, but with the right approach, you can make nutritious snacks appealing and enjoyable for kids of all ages.'
          },
          {
            type: 'heading',
            text: 'Colorful and Fun Snack Ideas'
          },
          {
            type: 'list',
            items: [
              'Rainbow fruit kabobs with berries and melon',
              'Veggie faces made with cucumbers and cherry tomatoes',
              'Apple slices with natural nut butter',
              'Homemade trail mix with nuts, seeds, and dried fruit',
              'Cheese and whole grain crackers cut into fun shapes'
            ]
          },
          {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            alt: 'Colorful and healthy snacks arranged beautifully'
          },
          {
            type: 'heading',
            text: 'Making Snacks Interactive'
          },
          {
            type: 'paragraph',
            text: 'Children are more likely to try foods they\'ve helped prepare. Involve them in simple snack preparation activities like washing fruits, spreading nut butter, or arranging foods on plates.'
          },
          {
            type: 'paragraph',
            text: 'At our daycare, we prepare fresh snacks daily in our certified kitchen, always considering allergies and dietary restrictions while ensuring every bite is both nutritious and delicious.'
          }
        ]
      },
      '4': {
        heroImage: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: 'safety',
        readTime: '7 min read',
        content: [
          {
            type: 'paragraph',
            text: 'Creating environments that are both safe and stimulating is at the heart of quality early childhood education. Children need space to explore, take appropriate risks, and learn about their world while being protected from harm.'
          },
          {
            type: 'heading',
            text: 'Balancing Safety and Exploration'
          },
          {
            type: 'paragraph',
            text: 'Safety doesn\'t mean restricting children\'s natural desire to explore and learn. Instead, it means creating thoughtfully designed spaces where children can engage in meaningful activities with appropriate supervision and risk management.'
          },
          {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            alt: 'Safe and engaging learning environment for children'
          },
          {
            type: 'heading',
            text: 'Our Safety Standards'
          },
          {
            type: 'list',
            items: [
              'Regular safety inspections and maintenance',
              'Age-appropriate equipment and materials',
              'Clear sight lines for proper supervision',
              'Secure storage for potentially hazardous items',
              'Emergency procedures and evacuation plans'
            ]
          },
          {
            type: 'paragraph',
            text: 'We believe that children learn best when they feel secure and confident in their environment. Our approach focuses on teaching children about safety while encouraging independence and exploration.'
          }
        ]
      },
      '5': {
        heroImage: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: 'parenting',
        readTime: '6 min read',
        content: [
          {
            type: 'paragraph',
            text: 'Independence is a crucial life skill that begins developing in early childhood. Supporting your child\'s growing independence helps build confidence, self-esteem, and problem-solving abilities that will serve them throughout their lives.'
          },
          {
            type: 'heading',
            text: 'Age-Appropriate Independence Skills'
          },
          {
            type: 'paragraph',
            text: 'Different ages call for different levels of independence. Here\'s what to expect and encourage:'
          },
          {
            type: 'list',
            items: [
              'Toddlers: Simple self-care tasks like hand washing',
              'Preschoolers: Dressing themselves and cleaning up toys',
              'School-age: Taking responsibility for belongings and simple chores'
            ]
          },
          {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1612209185485-01ef5c0ba70c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            alt: 'Child confidently completing an independent task'
          },
          {
            type: 'heading',
            text: 'Strategies for Building Independence'
          },
          {
            type: 'paragraph',
            text: 'Patience is key when fostering independence. Allow extra time for children to complete tasks themselves, offer choices when appropriate, and celebrate their efforts rather than just the outcomes.'
          },
          {
            type: 'quote',
            text: 'The greatest gifts you can give your children are the roots of responsibility and the wings of independence.',
            author: 'Denis Waitley'
          }
        ]
      },
      '6': {
        heroImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: 'development',
        readTime: '7 min read',
        content: [
          {
            type: 'paragraph',
            text: 'Music is a universal language that plays a vital role in early brain development. From the moment children are born, they are naturally drawn to rhythm, melody, and sound, making music an powerful tool for learning and development.'
          },
          {
            type: 'heading',
            text: 'How Music Affects the Brain'
          },
          {
            type: 'paragraph',
            text: 'Research shows that musical activities stimulate multiple areas of the brain simultaneously, creating neural connections that support language development, memory formation, and cognitive processing.'
          },
          {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            alt: 'Children enjoying music and movement activities'
          },
          {
            type: 'heading',
            text: 'Musical Activities for Development'
          },
          {
            type: 'list',
            items: [
              'Singing songs that teach concepts and vocabulary',
              'Playing simple instruments to develop motor skills',
              'Moving to music to improve coordination',
              'Listening activities to enhance auditory processing',
              'Creating music to foster creativity and self-expression'
            ]
          },
          {
            type: 'paragraph',
            text: 'Our music program integrates songs, movement, and instruments throughout the day, making learning natural and joyful while supporting every aspect of child development.'
          },
          {
            type: 'quote',
            text: 'Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.',
            author: 'Plato'
          }
        ]
      }
    };

    return blogContents[postId] || null;
  };

  const relatedPosts = [
    { id: '1', category: 'development' },
    { id: '2', category: 'activities' },
    { id: '3', category: 'nutrition' },
    { id: '4', category: 'safety' },
    { id: '5', category: 'parenting' },
    { id: '6', category: 'development' }
  ].filter(post => post.id !== id).slice(0, 3);

  if (!id) return <div>Post not found</div>;

  const blogData = getBlogContent(id);
  if (!blogData) return <div>Post not found</div>;

  const renderContent = (content: any[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return (
            <p key={index} className="text-lg leading-relaxed text-gray-700 mb-6">
              {item.text}
            </p>
          );
        case 'heading':
          return (
            <h3 key={index} className="text-2xl font-bold text-gray-800 mb-4 mt-8">
              {item.text}
            </h3>
          );
        case 'list':
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              {item.items.map((listItem: string, listIndex: number) => (
                <li key={listIndex} className="text-lg">{listItem}</li>
              ))}
            </ul>
          );
        case 'image':
          return (
            <div key={index} className="my-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-80 object-cover"
              />
            </div>
          );
        case 'quote':
          return (
            <blockquote key={index} className="bg-gradient-to-r from-pink-50 to-blue-50 border-l-4 border-pink-500 p-6 my-8 rounded-r-xl">
              <p className="text-xl italic text-gray-800 mb-2">"{item.text}"</p>
              <cite className="text-pink-600 font-semibold">- {item.author}</cite>
            </blockquote>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blogData.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Back Button */}
        <Link
          to="/blogs"
          onClick={scrollToTop}
          className="absolute top-8 left-8 z-10 flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Blog</span>
        </Link>

        {/* Category Badge */}
        <div className="absolute top-8 right-8 z-10">
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {t(`blogs.categories.${blogData.category}`)}
          </span>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {t(`blogs.posts.${id}.title`)}
            </h1>

            {/* Meta Information */}
            <div className={`flex flex-wrap items-center space-x-6 text-white/90 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{t(`blogs.posts.${id}.date`)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{t(`blogs.posts.${id}.author`)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{blogData.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Article Content */}
        <article className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Article Excerpt */}
          <div className="text-xl text-gray-600 leading-relaxed mb-12 p-6 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl border-l-4 border-pink-500">
            {t(`blogs.posts.${id}.excerpt`)}
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(blogData.content)}
          </div>

          {/* Social Sharing */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">Share this article:</span>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full hover:scale-110 transition-transform">
                    <Share2 size={18} />
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full hover:scale-110 transition-transform">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Tag size={18} />
                <span className="text-sm">{t(`blogs.categories.${blogData.category}`)}</span>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                onClick={scrollToTop}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {t(`blogs.categories.${post.category}`)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors line-clamp-2">
                    {t(`blogs.posts.${post.id}.title`)}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {t(`blogs.posts.${post.id}.excerpt`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPost;