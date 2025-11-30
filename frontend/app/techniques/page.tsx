'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TechniquesPage() {
  const techniques = [
    {
      id: 1,
      title: 'Teñido Natural',
      description: 'Utilizamos plantas, flores y minerales locales para crear una paleta de colores única y sostenible. Cada tinte es preparado artesanalmente siguiendo recetas ancestrales.',
      image: '/uploads/lanas teñidas2.jpg',
      steps: [
        'Recolección de plantas tintóreas',
        'Preparación del mordiente natural',
        'Cocción y extracción del color',
        'Teñido de las fibras'
      ]
    },
    {
      id: 2,
      title: 'Hilado a Rueca',
      description: 'El hilado tradicional a rueca nos permite controlar el grosor y la textura de cada hilo, creando fibras únicas con carácter propio.',
      image: '/uploads/20240724_165524.jpg',
      steps: [
        'Selección de la lana esquilada',
        'Cardado manual de las fibras',
        'Hilado con rueca tradicional',
        'Torsión y enrollado del hilo'
      ]
    },
    {
      id: 3,
      title: 'Tejido en Telar',
      description: 'Cada pieza es tejida en telares tradicionales, donde el ritmo lento y meticuloso garantiza la máxima calidad y durabilidad.',
      image: '/uploads/20240809_165651.jpg',
      steps: [
        'Preparación del telar',
        'Urdimbre de los hilos',
        'Tejido manual punto por punto',
        'Acabado y remate artesanal'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-intus-cream">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/uploads/20240724_165524.jpg"
            alt="Técnicas Artesanales"
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
              Sabiduría Ancestral
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Nuestras Técnicas
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Preservamos <span className="text-intus-yellow font-semibold">métodos tradicionales</span> transmitidos de generación en generación
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-intus-cream to-transparent" />
      </section>

      {/* Techniques Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {techniques.map((technique, index) => (
          <motion.div
            key={technique.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={technique.image}
                  alt={technique.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="inline-block mb-4">
                <span className="text-intus-gold font-semibold text-sm tracking-wider uppercase">
                  Técnica {index + 1}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-intus-dark mb-4">
                {technique.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {technique.description}
              </p>

              {/* Process Steps */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-intus-dark mb-4">
                  Proceso
                </h3>
                <ul className="space-y-3">
                  {technique.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-intus-gold text-intus-dark rounded-full flex items-center justify-center font-bold text-sm mr-3">
                        {stepIndex + 1}
                      </span>
                      <span className="text-gray-700 pt-1">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-intus-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Quieres conocer más sobre nuestras técnicas?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubre cómo creamos cada pieza única en nuestra colección
            </p>
            <a
              href="/productos"
              className="inline-flex items-center px-8 py-4 bg-intus-gold hover:bg-intus-yellow text-intus-dark font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              Ver Productos
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
