import { getProducts, getCategories } from '@/lib/api'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'

export const metadata = {
  title: 'Productos | Intus - Tejidos Naturales',
  description: 'Explora nuestra colección de tejidos artesanales hechos con lana natural',
}

export default async function ProductosPage() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <div className="min-h-screen bg-intus-cream">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/uploads/20240809_165651.jpg"
            alt="Tejidos artesanales Intus"
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
              Catálogo Completo
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Nuestros Productos
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Tejidos artesanales únicos, elaborados con <span className="text-intus-yellow font-semibold">técnicas tradicionales</span> y materiales naturales de la más alta calidad
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-intus-cream to-transparent" />
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block p-8 bg-white rounded-lg shadow-lg">
              <svg
                className="mx-auto h-16 w-16 text-intus-gold mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              <h3 className="text-xl font-semibold text-intus-dark mb-2">
                Próximamente
              </h3>
              <p className="text-gray-600">
                Estamos preparando nuestra colección de productos. Vuelve pronto para descubrir nuestros tejidos artesanales.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="mb-8">
              <p className="text-gray-700">
                Mostrando <span className="font-semibold text-intus-gold">{products.length}</span>{' '}
                {products.length === 1 ? 'producto' : 'productos'}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-intus-dark mb-8 text-center">
              Categorías
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category: any) => (
                <div
                  key={category.id}
                  className="bg-intus-cream p-6 rounded-lg shadow-md hover:shadow-lg hover:border-intus-gold border-2 border-transparent transition-all text-center"
                >
                  <h3 className="font-semibold text-intus-dark">
                    {category.attributes.name}
                  </h3>
                  {category.attributes.description && (
                    <p className="text-sm text-gray-600 mt-2">
                      {category.attributes.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
