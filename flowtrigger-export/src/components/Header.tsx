import React, { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Música', href: '#musica' },
    { label: 'Video IA', href: '#video-ia' },
    { label: 'Podcast', href: '#podcast' },
    { label: 'YouTube', href: '#youtube' },
    { label: 'Avatarización', href: '#avatarizacion' },
    { label: 'Publicidad', href: '#publicidad' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-18 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background-near-black/95 backdrop-blur-xl border-b border-border-subtle shadow-lg' 
        : 'bg-background-near-black/80 backdrop-blur-md'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-display text-text-primary tracking-tight">
              FlowTrigger
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-text-secondary font-medium text-base hover:text-accent-cyan transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#contacto')}
              className="bg-accent-cyan text-background-pure-black px-6 py-3 rounded-lg font-semibold text-base hover:bg-cyan-400 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Contactar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-text-secondary hover:text-accent-cyan transition-colors"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background-near-black/95 backdrop-blur-xl border-b border-border-subtle shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-text-secondary hover:text-accent-cyan font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contacto')}
                className="w-full bg-accent-cyan text-background-pure-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-400 transition-all duration-200"
              >
                Contactar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header