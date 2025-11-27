'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Post, getMediaUrl } from '@/lib/api'

interface FeaturedPostsProps {
  posts: Post[]
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-organic-brown-800 mb-4">
            Últimas Publicaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestras historias sobre técnicas artesanales, 
            procesos creativos y la belleza de los tejidos naturales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <Link href={`/blog/${post.attributes.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  {post.attributes.featured_image?.data ? (
                    <Image
                      src={getMediaUrl(post.attributes.featured_image.data.attributes.url)}
                      alt={post.attributes.featured_image.data.attributes.alternativeText || post.attributes.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-organic-brown-200 to-natural-beige-200 flex items-center justify-center">
                      <span className="text-6xl">🧶</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <time className="text-sm text-gray-500">
                      {new Date(post.attributes.publishedAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    {post.attributes.category?.data && (
                      <>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-organic-brown-500 font-medium">
                          {post.attributes.category.data.attributes.name}
                        </span>
                      </>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-organic-brown-600 transition-colors duration-200">
                    {post.attributes.title}
                  </h3>
                  
                  <p className="text-gray-600 line-clamp-3">
                    {post.attributes.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn-primary">
            Ver Todas las Publicaciones
          </Link>
        </motion.div>
      </div>
    </section>
  )
}