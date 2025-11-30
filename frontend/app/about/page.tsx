'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Lana Natural de Calidad',
      description: 'Seleccionamos exclusivamente fibras naturales de origen ético y sostenible.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Artesanía Manual',
      description: 'Cada pieza es tejida a mano con técnicas ancestrales transmitidas por generaciones.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Tintes Naturales',
      description: 'Colores vibrantes y duraderos obtenidos de pigmentos 100% naturales de plantas.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Comercio Justo',
      description: 'Trabajamos directamente con artesanos locales, garantizando precios justos.'
    }
  ]

  const timeline = [
    { year: '2009', event: 'Fundación de Intus con la visión de preservar técnicas ancestrales' },
    { year: '2012', event: 'Incorporación de tintes naturales 100% de origen local' },
    { year: '2016', event: 'Expansión del taller y formación de nuevos artesanos' },
    { year: '2020', event: 'Lanzamiento de nuestra línea de productos sostenibles' },
    { year: '2024', event: 'Presencia digital y reconocimiento internacional' }
  ]

  return (
    <div className="min-h-screen bg-intus-cream">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/uploads/intus logo tejido.jpg"
            alt="Sobre Intus"
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
              Nuestra Historia
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Más de <span className="text-intus-yellow font-semibold">15 años</span> preservando el arte ancestral del tejido artesanal
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-intus-cream to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="text-intus-gold mb-4">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-intus-dark mb-4">
              Nuestra Misión
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Preservar y difundir las técnicas ancestrales del tejido artesanal, creando piezas únicas que conectan el pasado con el presente. Trabajamos con materiales naturales de la más alta calidad, respetando tanto a nuestros artesanos como al medio ambiente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="text-intus-gold mb-4">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-intus-dark mb-4">
              Nuestra Visión
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ser referentes en la artesanía textil sostenible, reconocidos por la calidad excepcional de nuestros productos y nuestro compromiso con la preservación cultural. Aspiramos a inspirar a nuevas generaciones a valorar y continuar estas tradiciones milenarias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-intus-dark mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras creaciones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-intus-gold/10 text-intus-gold rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-intus-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-intus-dark mb-4">
            Nuestro Recorrido
          </h2>
          <p className="text-xl text-gray-600">
            Hitos importantes en la historia de Intus
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-intus-gold/30" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Circle */}
              <div className="absolute left-5 w-8 h-8 bg-intus-gold rounded-full border-4 border-intus-cream flex items-center justify-center">
                <div className="w-3 h-3 bg-intus-dark rounded-full" />
              </div>

              {/* Content */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <span className="text-2xl font-bold text-intus-gold">
                  {item.year}
                </span>
                <p className="text-gray-700 mt-2">
                  {item.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-intus-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para descubrir nuestras creaciones?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explora nuestra colección de tejidos artesanales únicos
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
