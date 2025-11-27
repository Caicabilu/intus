'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-organic-brown-200 via-natural-beige-100 to-organic-brown-100" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-organic-brown-300 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-natural-beige-300 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-organic-brown-800 mb-6">
            Tejidos que Cuentan
            <span className="block text-gradient">Historias</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-organic-brown-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubre el arte ancestral de tejer lana orgánica con técnicas únicas 
            que transforman fibras naturales en obras de arte funcionales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/blog" className="btn-primary text-lg px-8 py-4">
              Explorar Blog
            </Link>
            <Link href="/gallery" className="btn-secondary text-lg px-8 py-4">
              Ver Galería
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-organic-brown-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-organic-brown-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}