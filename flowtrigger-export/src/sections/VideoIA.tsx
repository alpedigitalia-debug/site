import React, { useState } from 'react'
import { VideoCameraIcon, CpuChipIcon, SparklesIcon } from '@heroicons/react/24/outline'

const VideoIA: React.FC = () => {
  const [activeTab, setActiveTab] = useState('generacion')

  const tabs = [
    { id: 'generacion', label: 'Generación', icon: <SparklesIcon className="h-5 w-5" /> },
    { id: 'edicion', label: 'Edición', icon: <VideoCameraIcon className="h-5 w-5" /> },
    { id: 'vfx', label: 'VFX', icon: <CpuChipIcon className="h-5 w-5" /> }
  ]

  const useCases = [
    {
      title: "Marketing Digital",
      description: "Crea contenido promocional impactante con IA para marcas y empresas.",
      metrics: "85% más engagement"
    },
    {
      title: "Contenido Social",
      description: "Videos optimizados para cada plataforma con algoritmos de IA.",
      metrics: "3x más viralidad"
    },
    {
      title: "Publicidad",
      description: "Campañas publicitarias con generación automática de variaciones.",
      metrics: "60% mejor conversión"
    },
    {
      title: "Filmmaking",
      description: "Post-producción y efectos especiales potenciados por inteligencia artificial.",
      metrics: "90% menos tiempo"
    }
  ]

  return (
    <section id="video-ia" className="py-3xl bg-background-pure-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-h2 lg:text-h2-mobile font-bold font-display text-text-primary leading-tight tracking-tight mb-4">
                Video con Inteligencia Artificial
                <span className="block text-accent-cyan text-h2 lg:text-h2-mobile font-bold mt-1">y Unreal Engine</span>
              </h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Revoluciona tu producción audiovisual con tecnología de inteligencia artificial. Desde la generación automática 
                de contenido hasta la post-producción potenciada por IA, transformamos ideas en experiencias visuales 
                cinematográficas en una fracción del tiempo tradicional.
              </p>
            </div>

            {/* Tabs */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-6">
              <div className="flex flex-wrap gap-2 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-body transition-all duration-fast ${
                      activeTab === tab.id
                        ? 'bg-accent-cyan text-background-pure-black'
                        : 'bg-background-surface-2 text-text-secondary hover:text-accent-cyan'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="min-h-[120px]">
                {activeTab === 'generacion' && (
                  <div className="space-y-3">
                    <h4 className="text-body font-semibold text-text-primary">Generación con IA</h4>
                    <p className="text-body text-text-secondary">Crea videos completos desde texto usando modelos de difusión avanzados. Incluye generación de personajes, escenarios y transiciones automáticas.</p>
                  </div>
                )}
                {activeTab === 'edicion' && (
                  <div className="space-y-3">
                    <h4 className="text-body font-semibold text-text-primary">Edición Inteligente</h4>
                    <p className="text-body text-text-secondary">IA para corte automático, corrección de color inteligente y mejora de audio. Reduce el tiempo de edición hasta en un 80%.</p>
                  </div>
                )}
                {activeTab === 'vfx' && (
                  <div className="space-y-3">
                    <h4 className="text-body font-semibold text-text-primary">VFX y Unreal Engine</h4>
                    <p className="text-body text-text-secondary">Efectos visuales cinematográficos en tiempo real usando Unreal Engine 5. Renderizado fotorrealista con tecnologías Lumen y Nanite.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-6">
              <h4 className="text-body font-semibold text-text-primary mb-4">Stack Tecnológico</h4>
              <div className="grid grid-cols-2 gap-3 text-small">
                <div className="text-text-secondary">• Runway ML</div>
                <div className="text-text-secondary">• Stable Video Diffusion</div>
                <div className="text-text-secondary">• Unreal Engine 5</div>
                <div className="text-text-secondary">• After Effects AI</div>
                <div className="text-text-secondary">• DaVinci Resolve</div>
                <div className="text-text-secondary">• Custom AI Models</div>
              </div>
            </div>
          </div>

          {/* Video Demo Area */}
          <div className="space-y-6">
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg overflow-hidden shadow-card">
              {/* Video placeholder */}
              <div className="relative aspect-video bg-background-pure-black flex items-center justify-center">
                <img 
                  src="/images/ai-video-editing-revolution-digital-production-tech.jpg" 
                  alt="Demo Video IA - FlowTrigger"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-overlay-dark" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <VideoCameraIcon className="h-10 w-10 text-accent-cyan" />
                    </div>
                    <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-2">Demo Interactiva</h3>
                    <p className="text-body text-text-secondary">Antes vs Después con IA</p>
                  </div>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-small text-text-tertiary font-code">00:42 / 02:15</span>
                  <span className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan text-small rounded-full">4K HDR</span>
                </div>
                <div className="w-full h-1.5 bg-background-surface-3 rounded-full">
                  <div className="h-full w-1/3 bg-gradient-to-r from-accent-cyan to-accent-cyan-muted rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Use Cases Grid */}
            <div className="grid grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-background-surface-1 border border-border-subtle rounded-lg p-4 hover:shadow-card-hover hover:transform hover:-translate-y-1 transition-all duration-standard">
                  <h4 className="text-small font-semibold text-text-primary mb-2">{useCase.title}</h4>
                  <p className="text-tiny text-text-secondary mb-3 leading-relaxed">{useCase.description}</p>
                  <span className="text-tiny text-accent-cyan font-medium">{useCase.metrics}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoIA
