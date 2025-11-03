import React, { useState } from 'react'
import { PlayIcon, EyeIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const YouTubeChannels: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState(0)

  const services = [
    {
      icon: <PlayIcon className="h-6 w-6" />,
      title: "Creación de Contenido",
      description: "Desarrollo de estrategias de contenido, guiones y conceptos únicos para tu canal"
    },
    {
      icon: <EyeIcon className="h-6 w-6" />,
      title: "Pilotaje Profesional",
      description: "Producción completa de videos con tecnología de vanguardia y post-producción avanzada"
    },
    {
      icon: <CurrencyDollarIcon className="h-6 w-6" />,
      title: "Monetización Estratégica",
      description: "Optimización para ingresos, partnerships y creación de múltiples fuentes de revenue"
    }
  ]

  const metrics = [
    { label: "Suscriptores", value: "500K+", growth: "+45%" },
    { label: "Visualizaciones", value: "2.5M+", growth: "+60%" },
    { label: "RPM Promedio", value: "$4.50", growth: "+25%" },
    { label: "Retención", value: "85%", growth: "+15%" }
  ]

  const channelTypes = [
    { 
      type: "Educativo", 
      icon: "🎓", 
      description: "Tutoriales, cursos online y contenido formativo",
      examples: ["Programación", "Diseño", "Marketing Digital"]
    },
    { 
      type: "Entretenimiento", 
      icon: "🎬", 
      description: "Vlogs, gaming, comedy y contenido viral",
      examples: ["Gaming", "Comedy Sketches", "Lifestyle"]
    },
    { 
      type: "Corporativo", 
      icon: "🏢", 
      description: "Contenido de marca y marketing digital",
      examples: ["Testimonios", "Productos", "Brand Story"]
    },
    { 
      type: "Nicho Específico", 
      icon: "🎯", 
      description: "Contenido especializado por industria",
      examples: ["Fitness", "Cocina", "Tech Reviews"]
    }
  ]

  return (
    <section id="youtube" className="py-3xl bg-background-near-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Content and Services */}
          <div className="space-y-8">
            <div>
              <h2 className="text-h2 lg:text-h2-mobile font-bold font-display text-text-primary leading-tight tracking-tight mb-4">
                YouTube
                <span className="block text-accent-cyan text-h2 lg:text-h2-mobile font-bold mt-1">Channels</span>
              </h2>
              <p className="text-body text-text-secondary leading-relaxed">
                <strong>Creación, pilotaje y monetización de canales de YouTube</strong> que conectan con tu audiencia. 
                Desde la estrategia inicial hasta el crecimiento sostenible, te acompañamos en cada paso del proceso 
                para maximizar el impacto y los ingresos de tu contenido.
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-6">
              <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary">Nuestros Servicios</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-background-surface-2/30 rounded-lg border border-border-subtle hover:border-accent-cyan/30 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center text-accent-cyan">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-text-primary mb-1">{service.title}</h4>
                      <p className="text-body text-text-secondary">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Channel Types */}
            <div className="space-y-6">
              <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary">Tipos de Canal</h3>
              <div className="grid grid-cols-2 gap-4">
                {channelTypes.map((channel, index) => (
                  <div key={index} className="p-4 bg-background-surface-1 border border-border-subtle rounded-lg hover:shadow-glow-cyan-sm transition-all duration-300">
                    <div className="text-2xl mb-2">{channel.icon}</div>
                    <h4 className="text-small font-semibold text-text-primary mb-1">{channel.type}</h4>
                    <p className="text-tiny text-text-secondary mb-2">{channel.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {channel.examples.map((example, idx) => (
                        <span key={idx} className="text-tiny text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics and Results */}
          <div className="space-y-6">
            {/* Live Metrics */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary">Métricas en Tiempo Real</h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMetric(index)}
                    className={`text-left p-3 rounded-lg transition-all duration-300 ${
                      activeMetric === index 
                        ? 'bg-accent-cyan/10 border border-accent-cyan/30' 
                        : 'bg-background-surface-2/30 hover:bg-background-surface-2/50'
                    }`}
                  >
                    <div className="text-h4 lg:text-h4-mobile font-bold text-text-primary">{metric.value}</div>
                    <div className="text-small text-text-secondary">{metric.label}</div>
                    <div className="text-tiny text-green-400">{metric.growth}</div>
                  </button>
                ))}
              </div>

              <div className="bg-background-pure-black/50 rounded-lg p-4 border border-accent-cyan/20">
                <h4 className="text-body font-semibold text-accent-cyan mb-2">Caso de Éxito</h4>
                <p className="text-body text-text-secondary mb-2">
                  "TechFlow Channel" - Canal de tecnología que pasó de 0 a 500K suscriptores en 8 meses
                </p>
                <div className="flex items-center space-x-4 text-small text-text-tertiary">
                  <span>📈 +850% crecimiento</span>
                  <span>💰 $15K/mes RPM</span>
                  <span>🎯 92% retención</span>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-6">
              <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-4">Proceso de Trabajo</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Estrategia", desc: "Análisis de nicho y competencia" },
                  { step: "2", title: "Desarrollo", desc: "Creación de contenido y branding" },
                  { step: "3", title: "Producción", desc: "Grabación y edición profesional" },
                  { step: "4", title: "Optimización", desc: "SEO y monetización avanzada" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-accent-cyan/20 rounded-full flex items-center justify-center text-accent-cyan font-bold text-small">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-text-primary">{item.title}</h4>
                      <p className="text-small text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-cyan/5 border border-accent-cyan/20 rounded-lg p-6 text-center">
              <UserGroupIcon className="h-12 w-12 text-accent-cyan mx-auto mb-3" />
              <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-2">
                ¿Listo para tu canal de YouTube?
              </h3>
              <p className="text-body text-text-secondary mb-4">
                Comienza hoy mismo y convierte tu pasión en un negocio rentable
              </p>
              <button className="px-6 py-3 bg-accent-cyan text-background-pure-black font-semibold rounded-lg hover:bg-accent-cyan-hover transition-colors duration-300">
                🚀 Iniciar Proyecto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YouTubeChannels