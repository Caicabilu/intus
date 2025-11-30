'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  // Placeholder data - will be replaced with Strapi data later
  const posts = [
    {
      id: 1,
      title: 'El Arte del Teñido Natural',
      excerpt: 'Descubre cómo transformamos plantas locales en vibrantes colores para nuestros tejidos.',
      image: '/uploads/lanas teñidas2.jpg',
      date: '2024-03-15',
      slug: 'arte-tenido-natural'
    },
    {
      id: 2,
      title: 'Técnicas Ancestrales de Tejido',
      excerpt: 'Un viaje por las tradiciones que preservamos en cada una de nuestras creaciones.',
      image: '/uploads/20240809_165651.jpg',
      date: '2024-03-10',
      slug: 'tecnicas-ancestrales'
    },
    {
      id: 3,
      title: 'La Importancia de la Lana Natural',
      excerpt: 'Conoce los beneficios de utilizar fibras naturales de origen sostenible.',
      image: '/uploads/20240724_165524.jpg',
      date: '2024-03-05',
      slug: 'lana-natural'
    }
  ]

  return (
    <div className="min-h-screen bg-intus-cream">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/uploads/lanas teñidas.jpg"
            alt="Blog Intus"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-intus-dark/90 via-intus-dark/75 to-intus-dark/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-intus-gold font-semibold tracking-wider uppercase text-sm">
              Historias y Conocimiento
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Nuestro Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Compartimos conocimientos sobre <span className="text-intus-yellow font-semibold">tejido artesanal</span>, tradiciones y el proceso detrás de cada pieza única
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-intus-cream to-transparent" />
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-intus-gold font-semibold">
                  {new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h2 className="text-2xl font-bold text-intus-dark mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-intus-gold hover:text-intus-yellow font-semibold transition-colors"
                >
                  Leer más
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-white rounded-lg shadow-lg">
            <div className="text-intus-gold mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-intus-dark mb-2">
              Más Contenido Próximamente
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Estamos preparando más artículos fascinantes sobre el mundo del tejido artesanal. ¡Vuelve pronto!
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
