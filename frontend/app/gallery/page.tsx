'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      id: 1,
      src: '/uploads/20240809_165651.jpg',
      alt: 'Tejido artesanal de lana',
      category: 'Tejidos'
    },
    {
      id: 2,
      src: '/uploads/20240724_165524.jpg',
      alt: 'Lanas de colores naturales',
      category: 'Materiales'
    },
    {
      id: 3,
      src: '/uploads/lanas teñidas2.jpg',
      alt: 'Proceso de teñido natural',
      category: 'Proceso'
    },
    {
      id: 4,
      src: '/uploads/20240809_165710.jpg',
      alt: 'Detalle de tejido manual',
      category: 'Detalles'
    },
    {
      id: 5,
      src: '/uploads/lanas teñidas.jpg',
      alt: 'Lanas teñidas artesanalmente',
      category: 'Materiales'
    },
    {
      id: 6,
      src: '/uploads/intus logo tejido.jpg',
      alt: 'Logo Intus tejido',
      category: 'Creaciones'
    }
  ]

  return (
    <div className="min-h-screen bg-intus-cream">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/uploads/20240809_165710.jpg"
            alt="Galería Intus"
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
              Nuestro Trabajo
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Galería
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Una colección visual del <span className="text-intus-yellow font-semibold">arte ancestral</span> que preservamos en cada fibra, color y tejido
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-intus-cream to-transparent" />
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-intus-dark/80 via-intus-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-intus-gold text-intus-dark text-sm font-semibold rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-intus-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <Image
              src={images.find(img => img.id === selectedImage)?.src || ''}
              alt={images.find(img => img.id === selectedImage)?.alt || ''}
              width={1200}
              height={1200}
              className="object-contain max-h-[90vh]"
              sizes="100vw"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}
