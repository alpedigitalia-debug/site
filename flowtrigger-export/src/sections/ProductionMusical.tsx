import React from 'react'
import AudioPlayer from '../components/AudioPlayer'
import { MusicalNoteIcon, MicrophoneIcon, CpuChipIcon } from '@heroicons/react/24/outline'

const ProductionMusical: React.FC = () => {
  const features = [
    {
      icon: <MusicalNoteIcon className="h-8 w-8" />,
      title: "Estudio de Grabación Profesional",
      description: "Captura y mezcla de audio con equipamiento de última generación para resultados cinematográficos."
    },
    {
      icon: <CpuChipIcon className="h-8 w-8" />,
      title: "Producción Musical con IA",
      description: "Aprovecha la inteligencia artificial para acelerar el proceso creativo y descubrir nuevas sonoridades."
    },
    {
      icon: <MicrophoneIcon className="h-8 w-8" />,
      title: "Mezcla y Masterización",
      description: "Post-producción profesional para entregar tracks listos para distribución y streaming."
    }
  ]

  const gear = [
    "Ableton Live 12", "Logic Pro X", "Pro Tools", "Plugins UAD", "Micrófonos Neumann", "Monitores Genelec"
  ]

  return (
    <section id="musica" className="py-3xl bg-background-near-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-h2 lg:text-h2-mobile font-bold font-display text-text-primary leading-tight tracking-tight mb-4">
                Producción Musical
                <span className="block text-accent-cyan text-h2 lg:text-h2-mobile font-bold mt-1">Profesional</span>
              </h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Transformamos tus ideas musicales en realidades sonoras excepcionales. Desde la composición inicial hasta la masterización final, 
                nuestro estudio equipado con tecnología de vanguardia y herramientas de IA te acompaña en cada paso del proceso creativo.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-background-surface-1 rounded-lg flex items-center justify-center text-accent-cyan group-hover:shadow-glow-cyan-sm group-hover:scale-110 transition-all duration-fast">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-body font-semibold text-text-primary mb-1">{feature.title}</h3>
                    <p className="text-body text-text-secondary">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-6">
              <h4 className="text-body font-semibold text-text-primary mb-4">Equipamiento y Software</h4>
              <div className="flex flex-wrap gap-3">
                {gear.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-background-surface-2 text-text-secondary text-small rounded-full border border-border-subtle">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Audio Player */}
          <div className="space-y-6">
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-8 shadow-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MusicalNoteIcon className="h-8 w-8 text-accent-cyan" />
                </div>
                <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary">Demo Track</h3>
                <p className="text-body text-text-secondary mt-1">Escucha una muestra de nuestro trabajo</p>
              </div>
              
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  src="/images/professional-recording-microphone-studio-dark-theme.jpg" 
                  alt="Estudio de grabación profesional FlowTrigger"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-overlay-dark" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <MusicalNoteIcon className="h-10 w-10 text-accent-cyan" />
                    </div>

                  </div>
                </div>
              </div>
              
              <AudioPlayer 
                src="/audio/demo-track.mp3" 
                title="Synthwave Dreams" 
                artist="FlowTrigger Production"
              />
              
              {/* Placeholder for actual audio files */}
              <div className="mt-4 p-4 bg-background-surface-2 rounded-lg border border-border-subtle">
                <p className="text-small text-text-tertiary text-center">
                  Contenido de audio demo - Producción original de FlowTrigger
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductionMusical
