'use client'

import Link from 'next/link'

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Inicio', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: 'Galería', href: '/gallery' },
      { name: 'Nosotros', href: '/about' },
      { name: 'Contacto', href: '/contact' },
    ],
    legal: [
      { name: 'Política de Privacidad', href: '/privacy' },
      { name: 'Términos de Uso', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 block">
              <img 
                src="/img/logotipo blanco.png" 
                alt="Intus - Tejidos Naturales"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Preservando el arte ancestral del tejido con lana orgánica. 
              Cada hilo cuenta una historia, cada pieza es única.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.357C4.165 14.764 3.675 13.613 3.675 12.316s.49-2.448 1.357-3.316c.868-.867 2.019-1.357 3.316-1.357s2.448.49 3.316 1.357c.867.868 1.357 2.019 1.357 3.316s-.49 2.448-1.357 3.316c-.868.867-2.019 1.357-3.316 1.357zm7.718 0c-1.297 0-2.448-.49-3.316-1.357-.867-.868-1.357-2.019-1.357-3.316s.49-2.448 1.357-3.316c.868-.867 2.019-1.357 3.316-1.357s2.448.49 3.316 1.357c.867.868 1.357 2.019 1.357 3.316s-.49 2.448-1.357 3.316c-.868.867-2.019 1.357-3.316 1.357z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Pinterest</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.110.222.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165C5.462 16.037 4.9 13.8 4.9 11.208c0-3.766 2.735-7.229 7.877-7.229 4.142 0 7.361 2.953 7.361 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.35-.63-2.74-1.378 0 0-.599 2.282-.744 2.840-.269 1.026-1.004 2.315-1.493 3.101C9.785 23.681 10.887 24.001 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Intus - Tejidos Naturales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}