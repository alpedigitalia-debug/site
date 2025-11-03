import React, { useState } from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    mensaje: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      label: "Email",
      value: "hola@flowtrigger.com",
      href: "mailto:hola@flowtrigger.com"
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      label: "Teléfono",
      value: "+34 900 123 456",
      href: "tel:+34900123456"
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      label: "Ubicación",
      value: "Madrid, España",
      href: "#"
    }
  ]

  const socialLinks = [
    { name: "Instagram", href: "#", color: "hover:text-pink-400" },
    { name: "LinkedIn", href: "#", color: "hover:text-blue-400" },
    { name: "YouTube", href: "#", color: "hover:text-red-400" },
    { name: "TikTok", href: "#", color: "hover:text-white" }
  ]

  return (
    <section id="contacto" className="py-4xl bg-background-pure-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 lg:text-h2-mobile font-bold font-display text-text-primary leading-tight tracking-tight mb-4">
            Transforma tu Contenido
            <span className="block text-accent-cyan text-h2 lg:text-h2-mobile font-bold mt-1">con IA</span>
          </h2>
          <p className="text-body-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Hablemos de tu proyecto. Te ayudamos a crear contenido audiovisual que conecte con tu audiencia 
            y genere resultados reales para tu marca.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-8 shadow-card">
              <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-6">
                Solicitar Demo o Consulta
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircleIcon className="h-16 w-16 text-accent-cyan mx-auto mb-4" />
                  <h4 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-body text-text-secondary">
                    Nos pondremos en contacto contigo en las próximas 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-body font-medium text-text-primary mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background-surface-2 border border-border-subtle rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent-cyan focus:shadow-glow-cyan-sm transition-all duration-fast"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-body font-medium text-text-primary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background-surface-2 border border-border-subtle rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent-cyan focus:shadow-glow-cyan-sm transition-all duration-fast"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-body font-medium text-text-primary mb-2">
                      Servicio de interés
                    </label>
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background-surface-2 border border-border-subtle rounded-lg text-text-primary focus:border-accent-cyan focus:shadow-glow-cyan-sm transition-all duration-fast"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="produccion-musical">Producción Musical</option>
                      <option value="video-ia">Video con IA</option>
                      <option value="podcast-streaming">Podcast y Streaming</option>
                      <option value="imagen-avatarizacion">Imagen y Avatarización</option>
                      <option value="publicidad-digital">Publicidad Digital</option>
                      <option value="consultoria">Consultoría Integral</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-body font-medium text-text-primary mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background-surface-2 border border-border-subtle rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent-cyan focus:shadow-glow-cyan-sm transition-all duration-fast resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent-cyan text-background-pure-black px-6 py-4 rounded-lg font-semibold text-body hover:bg-accent-cyan-hover hover:shadow-glow-cyan-md transform hover:scale-105 transition-all duration-fast flex items-center justify-center space-x-2"
                  >
                    <span>Enviar Mensaje</span>
                    <PaperAirplaneIcon className="h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-8">
              <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-background-surface-2 rounded-lg hover:bg-background-surface-3 transition-colors duration-fast group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center text-accent-cyan group-hover:shadow-glow-cyan-sm transition-all duration-fast">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-small text-text-tertiary">{info.label}</div>
                      <div className="text-body font-medium text-text-primary">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-8">
              <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-6">
                Horarios de Atención
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-body text-text-secondary">Lunes - Viernes</span>
                  <span className="text-body font-medium text-text-primary">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body text-text-secondary">Sábados</span>
                  <span className="text-body font-medium text-text-primary">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body text-text-secondary">Domingos</span>
                  <span className="text-body font-medium text-text-tertiary">Cerrado</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent-cyan/10 border border-accent-cyan/20 rounded-lg">
                <p className="text-small text-accent-cyan">
                  🚀 Proyectós urgentes: disponibles 24/7 para consultas
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-8">
              <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-6">
                Síguenos
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-background-surface-2 rounded-lg flex items-center justify-center text-text-secondary ${social.color} hover:shadow-glow-cyan-sm transition-all duration-fast transform hover:scale-105`}
                  >
                    <span className="text-small font-bold">
                      {social.name.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-small text-text-secondary mt-4">
                Mantente al día con nuestras últimas producciones y casos de éxito.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-accent-cyan/10 to-accent-cyan-muted/10 border border-accent-cyan/20 rounded-lg p-12">
          <h3 className="text-h2 lg:text-h2-mobile font-bold font-display text-text-primary mb-4">
            ¿Listo para crear algo increíble?
          </h3>
          <p className="text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Únete a las marcas que ya confían en FlowTrigger para transformar su contenido audiovisual
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-cyan text-background-pure-black px-8 py-4 rounded-lg font-semibold text-body hover:bg-accent-cyan-hover hover:shadow-glow-cyan-md transform hover:scale-105 transition-all duration-fast">
              Solicitar Demo
            </button>
            <button className="border-2 border-border-moderate text-text-primary px-8 py-4 rounded-lg font-semibold text-body hover:border-accent-cyan hover:text-accent-cyan hover:bg-background-surface-2 transition-all duration-standard">
              Ver Precios
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
