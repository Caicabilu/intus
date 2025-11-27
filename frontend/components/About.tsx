'use client'

import { motion } from 'framer-motion'

export default function About() {
  const features = [
    {
      icon: '🌱',
      title: 'Lana Orgánica',
      description: 'Utilizamos exclusivamente lana de origen orgánico, libre de químicos y procesada de forma sostenible.'
    },
    {
      icon: '🧵',
      title: 'Técnicas Ancestrales',
      description: 'Preservamos y aplicamos técnicas de tejido transmitidas por generaciones de artesanos.'
    },
    {
      icon: '🎨',
      title: 'Diseños Únicos',
      description: 'Cada pieza es una obra de arte única, combinando tradición con diseño contemporáneo.'
    },
    {
      icon: '🌍',
      title: 'Impacto Sostenible',
      description: 'Comprometidos con prácticas responsables que respetan el medio ambiente y las comunidades locales.'
    }
  ]

  return (
    <section className="py-20 bg-natural-beige-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-organic-brown-800 mb-6">
              Nuestra Pasión por lo
              <span className="block text-gradient">Artesanal</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En Intus, creemos que cada hilo cuenta una historia. Nuestro compromiso 
              va más allá de crear productos hermosos; buscamos preservar tradiciones 
              ancestrales mientras innovamos para el futuro.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-organic-brown-700 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-organic-brown-200 to-natural-beige-200 rounded-2xl overflow-hidden">
              {/* Placeholder for image - will be replaced with actual content from CMS */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🧶</div>
                  <p className="text-organic-brown-600 font-medium">
                    Imagen desde CMS
                  </p>
                </div>
              </div>
              
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}