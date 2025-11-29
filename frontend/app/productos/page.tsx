import { getProducts, getCategories } from '@/lib/api'
import ProductCard from '@/components/ProductCard'

export const metadata = {
  title: 'Productos | Intus - Tejidos Naturales',
  description: 'Explora nuestra colección de tejidos artesanales hechos con lana orgánica',
}

export default async function ProductosPage() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros Productos
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Tejidos artesanales únicos, elaborados con técnicas tradicionales y materiales naturales
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block p-8 bg-amber-50 rounded-lg">
              <svg
                className="mx-auto h-16 w-16 text-amber-400 mb-4"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
              <p className="text-gray-600">
                Mostrando <span className="font-semibold">{products.length}</span>{' '}
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
        <section className="bg-amber-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Categorías
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category: any) => (
                <div
                  key={category.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="font-semibold text-gray-900">
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
