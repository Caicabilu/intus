'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product, getMediaUrl } from '@/lib/api'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, slug, description, price, images, category, stock } = product.attributes
  const imageUrl = images?.data?.[0]?.attributes?.url
    ? getMediaUrl(images.data[0].attributes.url)
    : '/placeholder-image.jpg'

  // Extract plain text from description (handles both string and rich text formats)
  const getDescriptionText = () => {
    if (!description) return ''
    if (typeof description === 'string') return description
    // If it's an array of rich text blocks, extract text from first block
    if (Array.isArray(description)) {
      const firstBlock = description[0]
      if (firstBlock?.children?.[0]?.text) {
        return firstBlock.children[0].text
      }
    }
    return 'Sin descripción'
  }

  const descriptionText = getDescriptionText()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/productos/${slug}`}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {/* Image */}
          <div className="relative h-64 overflow-hidden bg-gray-100">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            />
            {stock === 0 && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Agotado
              </div>
            )}
            {product.attributes.featured && (
              <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Destacado
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category */}
            {category?.data && (
              <p className="text-sm text-amber-600 font-medium mb-2">
                {category.data.attributes.name}
              </p>
            )}

            {/* Name */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
              {name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {descriptionText}
            </p>

            {/* Price and Stock */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-amber-600">
                  ${price.toLocaleString('es-AR')}
                </p>
                <p className="text-sm text-gray-500">
                  {stock > 0 ? `${stock} disponibles` : 'Sin stock'}
                </p>
              </div>

              <div className="text-amber-600 group-hover:translate-x-2 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
