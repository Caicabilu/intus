'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/uploads/lanas teñidas.jpg"
          alt="Lanas naturales teñidas artesanalmente"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-intus-dark/90 via-intus-dark/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-intus-gold font-semibold tracking-wider uppercase text-sm">
              Artesanía Contemporánea
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Tejidos que</span>
            <span className="block text-intus-gold mt-2">Cuentan Historias</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl leading-relaxed">
            Cada pieza es única, tejida a mano con <span className="text-intus-yellow font-semibold">lana natural</span> y
            tintes naturales. Arte funcional que perdura generaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center bg-intus-gold hover:bg-intus-yellow text-intus-dark font-semibold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              Ver Productos
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#productos-destacados"
              className="inline-flex items-center justify-center border-2 border-intus-gold text-white hover:bg-intus-gold hover:text-intus-dark font-semibold text-lg px-8 py-4 rounded-lg transition-all"
            >
              Conocer Más
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-intus-gold/30"
          >
            <div>
              <div className="text-3xl font-bold text-intus-gold">100%</div>
              <div className="text-sm text-gray-300">Lana Natural</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-intus-gold">+15</div>
              <div className="text-sm text-gray-300">Años Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-intus-gold">∞</div>
              <div className="text-sm text-gray-300">Piezas Únicas</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Featured Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-intus-gold/20 rounded-lg blur-xl" />
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/uploads/intus logo tejido.jpg"
                alt="Logo Intus tejido artesanal"
                width={600}
                height={600}
                className="rounded-lg"
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-intus-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-intus-gold rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}