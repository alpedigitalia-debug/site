import React from 'react'
import { 
  RocketLaunchIcon, 
  DevicePhoneMobileIcon,
  ArrowTrendingUpIcon,
  EyeIcon,
  HeartIcon,
  CursorArrowRaysIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const CanalizacionPublicidad: React.FC = () => {
  const processSteps = [
    {
      step: "01",
      title: "Estrategia",
      description: "Definimos objetivos, audiencia target y canales óptimos para maximizar impacto y ROI.",
      icon: <RocketLaunchIcon className="h-6 w-6" />
    },
    {
      step: "02", 
      title: "Creación",
      description: "Desarrollamos contenido audiovisual personalizado adaptado a cada plataforma y audiencia.",
      icon: <RocketLaunchIcon className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Distribución", 
      description: "Publicamos en canales seleccionados con timing optimizado y segmentación precisa.",
      icon: <DevicePhoneMobileIcon className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Optimización",
      description: "Análisis continuo de métricas para ajustar estrategia y mejorar resultados en tiempo real.",
      icon: <ArrowTrendingUpIcon className="h-6 w-6" />
    }
  ]

  const metrics = [
    {
      icon: <EyeIcon className="h-8 w-8" />,
      title: "Alcance",
      value: "2.5M+",
      description: "Impresiones mensuales",
      color: "text-accent-cyan"
    },
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: "Engagement", 
      value: "8.3%",
      description: "Tasa promedio",
      color: "text-accent-cyan"
    },
    {
      icon: <CursorArrowRaysIcon className="h-8 w-8" />,
      title: "Conversiones",
      value: "4.7%", 
      description: "Click-through rate",
      color: "text-accent-cyan"
    },
    {
      icon: <CurrencyDollarIcon className="h-8 w-8" />,
      title: "ROI",
      value: "380%",
      description: "Retorno promedio",
      color: "text-accent-cyan"
    }
  ]

  const platforms = [
    { name: "Google Ads", description: "Search, Display y YouTube", color: "bg-blue-600" },
    { name: "Meta Ads", description: "Facebook e Instagram", color: "bg-blue-700" },
    { name: "TikTok Ads", description: "Video nativo viral", color: "bg-black" },
    { name: "LinkedIn Ads", description: "B2B y corporativo", color: "bg-blue-800" },
    { name: "YouTube Ads", description: "Video pre-roll y TrueView", color: "bg-red-600" },
    { name: "Amazon Ads", description: "Sponsored Products", color: "bg-orange-500" }
  ]

  return (
    <section id="publicidad" className="py-3xl bg-background-near-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 lg:text-h2-mobile font-bold font-display text-text-primary leading-tight tracking-tight mb-4">
            Canalización y Publicidad
            <span className="block text-accent-cyan text-h2 lg:text-h2-mobile font-bold mt-1">Digital</span>
          </h2>
          <p className="text-body-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Conectamos tu marca con la audiencia perfecta a través de campañas digitales basadas en datos, 
            optimización con IA y contenido audiovisual que genera resultados medibles.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-cyan-muted to-accent-cyan"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-background-pure-black border-2 border-accent-cyan rounded-full flex items-center justify-center shadow-glow-cyan-sm">
                    <span className="text-h3 lg:text-h3-mobile font-bold text-accent-cyan">{step.step}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-background-surface-1 border border-border-subtle rounded-lg p-6 hover:shadow-card-hover transition-all duration-standard">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-accent-cyan">
                        {step.icon}
                      </div>
                      <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary">{step.title}</h3>
                    </div>
                    <p className="text-body text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-background-surface-1 border border-border-subtle rounded-lg p-6 text-center hover:shadow-card-hover hover:transform hover:-translate-y-1 transition-all duration-standard">
              <div className={`${metric.color} mx-auto mb-4`}>
                {metric.icon}
              </div>
              <div className="text-h2 lg:text-h2-mobile font-bold text-text-primary mb-1">{metric.value}</div>
              <div className="text-body font-semibold text-text-primary mb-1">{metric.title}</div>
              <div className="text-small text-text-secondary">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Platforms & Tools */}
        <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-6">
                <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-4">Plataformas Activas</h3>
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img 
                    src="/images/digital_marketing_campaign_analytics_dashboard_visualization.jpg" 
                    alt="Dashboard de Marketing Digital - FlowTrigger"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-overlay-dark" />
                </div>
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-background-surface-2 rounded-lg hover:bg-background-surface-3 transition-colors duration-fast">
                  <div>
                    <h4 className="text-body font-medium text-text-primary">{platform.name}</h4>
                    <p className="text-small text-text-secondary">{platform.description}</p>
                  </div>
                  <div className={`w-4 h-4 ${platform.color} rounded-full`}></div>
                </div>
              ))}
            </div>
              </div>
            </div>

          {/* Services Detail */}
          <div className="space-y-6">
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-6">
              <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-4">Servicios Incluidos</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                  <span className="text-body text-text-secondary">Estrategia de contenido personalizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                  <span className="text-body text-text-secondary">Campañas publicitarias multicanal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                  <span className="text-body text-text-secondary">SEO y optimización orgánica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                  <span className="text-body text-text-secondary">Analíticas y reportes detallados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                  <span className="text-body text-text-secondary">A/B testing continuo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                  <span className="text-body text-text-secondary">Optimización con IA</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-cyan-muted/10 border border-accent-cyan/20 rounded-lg p-6 text-center">
              <h4 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-2">
                ¿Listo para escalar tu marca?
              </h4>
              <p className="text-body text-text-secondary mb-4">
                Hablemos de tu proyecto y creemos una estrategia que convierta
              </p>
              <button 
                onClick={() => {
                  const element = document.querySelector('#contacto')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-accent-cyan text-background-pure-black px-6 py-3 rounded-lg font-semibold text-body hover:bg-accent-cyan-hover hover:shadow-glow-cyan-md transform hover:scale-105 transition-all duration-fast"
              >
                Solicitar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CanalizacionPublicidad
