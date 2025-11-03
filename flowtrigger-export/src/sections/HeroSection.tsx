import React, { useEffect, useState } from 'react'
import { ChevronDownIcon, PlayIcon } from '@heroicons/react/24/outline'

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number}>>([])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    // Generar partículas orgánicas
    const generateParticles = () => {
      const newParticles = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.1
      }))
      setParticles(newParticles)
    }
    
    generateParticles()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToNext = () => {
    const element = document.querySelector('#youtube')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] overflow-hidden bg-background-pure-black">
      
      {/* AI Video Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/ai-video-editing-revolution-digital-production-tech.jpg')`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-pure-black/80 via-background-pure-black/60 to-background-pure-black/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Content */}
          <div className="space-y-10 animate-slide-up">
            
            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="font-bold font-display leading-tight tracking-wide">
                <span className="block text-4xl md:text-5xl lg:text-6xl mb-4">
                  <span className="block text-accent-cyan mt-2">DISPARAMOS TU FLOW</span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                Transformamos tus ideas en contenido audiovisual de vanguardia
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {[
                { 
                  icon: '🎬', 
                  title: 'Video IA', 
                  description: 'Creación automatizada con IA'
                },
                { 
                  icon: '🎧', 
                  title: 'Audio Premium', 
                  description: 'Producción musical profesional'
                },
                { 
                  icon: '📱', 
                  title: 'Multiplataforma', 
                  description: 'Contenido para todos los medios'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-background-near-black/40 backdrop-blur-sm border border-border-subtle rounded-xl p-6 hover:border-accent-cyan/50 transition-all duration-300 group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-tertiary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {[
                { label: 'Proyectos Completados', value: '500+' },
                { label: 'Clientes Satisfechos', value: '150+' },
                { label: 'Resolución Máxima', value: '4K Ultra HD' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-xl md:text-2xl font-bold text-accent-cyan mb-1 group-hover:animate-glow-pulse">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-tertiary font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <button 
          onClick={scrollToNext} 
          className="group flex flex-col items-center text-text-tertiary hover:text-accent-cyan transition-all duration-300 animate-bounce-subtle"
        >
          <span className="text-sm font-medium mb-2 uppercase tracking-wider">Explorar</span>
          <ChevronDownIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </section>
  )
}

export default HeroSection