'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Galería', href: '/gallery' },
    { name: 'Técnicas', href: '/techniques' },
    { name: 'Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-intus-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-intus-dark/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/img/Intus_logo amarillo blanco.svg"
              alt="Intus - Tejidos Naturales"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-intus-gold bg-intus-gold/10'
                      : 'text-gray-200 hover:text-intus-gold hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              href="/productos"
              className="inline-flex items-center px-5 py-2.5 bg-intus-gold hover:bg-intus-yellow text-intus-dark font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              Ver Catálogo
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-intus-gold transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-1 pt-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-intus-gold bg-intus-gold/10'
                        : 'text-gray-200 hover:text-intus-gold hover:bg-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}

              {/* CTA Button Mobile */}
              <Link
                href="/productos"
                className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-intus-gold hover:bg-intus-yellow text-intus-dark font-semibold rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Ver Catálogo
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}