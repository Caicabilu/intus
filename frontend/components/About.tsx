'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Lana 100% Orgánica',
      description: 'Seleccionamos exclusivamente fibras naturales de origen ético, libres de químicos nocivos.'
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
      description: 'Trabajamos directamente con artesanos locales, garantizando precios justos y sostenibles.'
    }
  ]

  return (
    <section className="py-20 bg-intus-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/uploads/20240809_165651.jpg"
                  alt="Tejido artesanal de lana"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden shadow-lg mt-8">
                <Image
                  src="/uploads/20240724_165524.jpg"
                  alt="Lanas de colores naturales"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden shadow-lg -mt-8">
                <Image
                  src="/uploads/lanas teñidas2.jpg"
                  alt="Proceso de teñido natural"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/uploads/20240809_165710.jpg"
                  alt="Detalle de tejido manual"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-intus-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-intus-yellow/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <span className="text-intus-gold font-semibold tracking-wider uppercase text-sm">
                Nuestra Esencia
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-intus-dark mb-6 leading-tight">
              Pasión por lo
              <span className="block text-intus-gold">Artesanal</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              En Intus, cada hilo cuenta una historia. Combinamos <span className="font-semibold text-intus-gold">técnicas ancestrales</span> con
              diseño contemporáneo para crear piezas únicas que perduran generaciones.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <div className="text-intus-gold mb-3">{feature.icon}</div>
                  <h3 className="font-bold text-intus-dark text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}