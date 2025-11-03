import React from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon
} from '@heroicons/react/24/outline'

const Footer: React.FC = () => {
  const footerLinks = {
    servicios: [
      { name: "Producción Musical", href: "#musica" },
      { name: "Video con IA", href: "#video-ia" },
      { name: "Podcast & Streaming", href: "#podcast" },
      { name: "Imagen & Avatarización", href: "#avatarizacion" },
      { name: "Publicidad Digital", href: "#publicidad" }
    ],
    empresa: [
      { name: "Sobre Nosotros", href: "#" },
      { name: "Casos de Éxito", href: "#" },
      { name: "Equipo", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Carreras", href: "#" }
    ],
    recursos: [
      { name: "Portfolio", href: "#" },
      { name: "Guía de IA", href: "#" },
      { name: "Templates", href: "#" },
      { name: "Soporte", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    legal: [
      { name: "Política de Privacidad", href: "#" },
      { name: "Términos de Servicio", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  }

  const socialLinks = [
    { name: "Instagram", href: "#", icon: "📸" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "YouTube", href: "#", icon: "📺" },
    { name: "TikTok", href: "#", icon: "🎥" }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-background-near-black border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-display text-text-primary tracking-tight mb-4">
                FlowTrigger
              </h3>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                Centro de creación audiovisual y musical de vanguardia. Transformamos ideas en experiencias 
                visuales y sonoras excepcionales usando tecnología de inteligencia artificial.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-accent-cyan" />
                <span className="text-base text-text-secondary">hola@flowtrigger.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-accent-cyan" />
                <span className="text-base text-text-secondary">+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-accent-cyan" />
                <span className="text-base text-text-secondary">Madrid, España</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background-deep-gray rounded-lg flex items-center justify-center text-text-secondary hover:bg-accent-cyan hover:text-background-pure-black hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  title={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            {/* Servicios */}
            <div>
              <h4 className="text-base font-semibold text-text-primary mb-4">Servicios</h4>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-base font-semibold text-text-primary mb-4">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="text-base font-semibold text-text-primary mb-4">Recursos</h4>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-base font-semibold text-text-primary mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-background-deep-gray border border-border-subtle rounded-lg p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-text-primary mb-3">
              Mantente al día con FlowTrigger
            </h4>
            <p className="text-base text-text-secondary mb-6">
              Recibe las últimas noticias sobre IA, casos de estudio y contenido exclusivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-background-near-black border border-border-subtle rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent-cyan focus:shadow-lg transition-all duration-200"
              />
              <button className="bg-accent-cyan text-background-pure-black px-6 py-3 rounded-lg font-semibold text-base hover:bg-cyan-400 hover:shadow-lg transform hover:scale-105 transition-all duration-200 whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-text-tertiary">
              © 2024 FlowTrigger. Todos los derechos reservados.
            </div>
            <div className="text-sm text-text-tertiary">
              Hecho con ❤️ usando React, TypeScript y TailwindCSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer