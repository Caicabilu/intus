'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setMessage('¡Gracias por suscribirte! Pronto recibirás noticias sobre nuestras creaciones.')
      setEmail('')
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="py-20 bg-organic-brown-800 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mantente Conectado
          </h2>
          
          <p className="text-xl text-organic-brown-100 mb-8">
            Suscríbete a nuestro newsletter y descubre las últimas creaciones, 
            técnicas artesanales y historias detrás de cada pieza única.
          </p>

          {message ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500 text-white p-4 rounded-lg mb-6"
            >
              {message}
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-organic-brown-800 rounded-lg font-medium hover:bg-organic-brown-50 transition-colors duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Suscribirse'}
              </button>
            </form>
          )}

          <p className="text-sm text-organic-brown-200 mt-4">
            No spam. Solo historias hermosas sobre el arte del tejido.
          </p>
        </motion.div>
      </div>
    </section>
  )
}