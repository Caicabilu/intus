'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Product, getProduct, getMediaUrl } from '@/lib/api'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    async function loadProduct() {
      if (params.slug) {
        const data = await getProduct(params.slug as string)
        setProduct(data)
        setLoading(false)
      }
    }
    loadProduct()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h2>
          <Link href="/productos" className="text-amber-600 hover:text-amber-700">
            Volver a productos
          </Link>
        </div>
      </div>
    )
  }

  const { name, description, price, images, category, stock, materials, techniques } = product.attributes
  const productImages = images?.data || []
  const imageUrls = productImages.map(img => getMediaUrl(img.attributes.url))

  // Extract plain text from description (handles both string and rich text formats)
  const getDescriptionText = () => {
    if (!description) return ''
    if (typeof description === 'string') return description
    // If it's an array of rich text blocks, extract and join all text
    if (Array.isArray(description)) {
      return description
        .map((block: any) => {
          if (block?.children) {
            return block.children.map((child: any) => child.text || '').join('')
          }
          return ''
        })
        .filter(Boolean)
        .join('\n\n')
    }
    return 'Sin descripción disponible'
  }

  const descriptionText = getDescriptionText()

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-amber-600">Productos</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Image */}
            <div className="relative h-96 lg:h-[600px] bg-gray-100 rounded-lg overflow-hidden mb-4 group">
              {imageUrls.length > 0 ? (
                <>
                  <Image
                    src={imageUrls[selectedImage]}
                    alt={name}
                    fill
                    className="object-contain transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Image Counter */}
                  {imageUrls.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      {selectedImage + 1} / {imageUrls.length}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {imageUrls.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {imageUrls.map((url, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 bg-gray-100 rounded-lg overflow-hidden transition-all ${
                      selectedImage === index
                        ? 'ring-2 ring-amber-600 scale-105'
                        : 'hover:ring-2 hover:ring-amber-400 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={url}
                      alt={`${name} - imagen ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category */}
            {category?.data && (
              <p className="text-amber-600 font-medium mb-2">
                {category.data.attributes.name}
              </p>
            )}

            {/* Name */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{name}</h1>

            {/* Price */}
            <div className="mb-6">
              <p className="text-4xl font-bold text-amber-600">
                ${price.toLocaleString('es-AR')}
              </p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {stock > 0 ? (
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">En stock ({stock} disponibles)</span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Sin stock</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h3>
              <p className="text-gray-600 whitespace-pre-line">{descriptionText}</p>
            </div>

            {/* Materials */}
            {materials && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Materiales</h3>
                <p className="text-gray-600">{materials}</p>
              </div>
            )}

            {/* Techniques */}
            {techniques && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Técnicas</h3>
                <p className="text-gray-600">{techniques}</p>
              </div>
            )}

            {/* Contact CTA */}
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Te interesa este producto?
              </h3>
              <p className="text-gray-600 mb-4">
                Contáctanos para más información sobre disponibilidad, envíos y formas de pago.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:contacto@intus.com"
                  className="flex-1 bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors text-center"
                >
                  Consultar por Email
                </a>
                <a
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-center flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8">
              <Link
                href="/productos"
                className="inline-flex items-center text-amber-600 hover:text-amber-700"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a productos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
