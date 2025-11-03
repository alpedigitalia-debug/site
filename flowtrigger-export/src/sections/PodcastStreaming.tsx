import React, { useState } from 'react'
import AudioPlayer from '../components/AudioPlayer'
import { 
  MicrophoneIcon, 
  RadioIcon, 
  PlayIcon 
} from '@heroicons/react/24/outline'

const PodcastStreaming: React.FC = () => {
  const [activeEpisode, setActiveEpisode] = useState(0)

  const episodes = [
    {
      title: "El Futuro de la IA en el Audio",
      duration: "45:32",
      description: "Exploramos las últimas tendencias en inteligencia artificial aplicada al audio y música."
    },
    {
      title: "Storytelling Digital: De la Idea al Usuario",
      duration: "38:15",
      description: "Técnicas modernas de narrativa digital para marcas y creadores de contenido."
    },
    {
      title: "Tecnología Audio: Una Perspectiva del Estudio",
      duration: "52:18",
      description: "Descansamos en el estudio y hablamos sobre el equipamiento que marca la diferencia."
    }
  ]

  const platforms = [
    { name: "Apple Podcasts", logo: "🎧", color: "bg-gray-900" },
    { name: "Spotify", logo: "🎧", color: "bg-green-600" },
    { name: "YouTube", logo: "📺", color: "bg-red-600" },
    { name: "Amazon Music", logo: "🔊", color: "bg-orange-600" },
    { name: "Google Podcasts", logo: "🎙️", color: "bg-blue-500" },
    { name: "iVoox", logo: "📻", color: "bg-purple-600" }
  ]

  const analytics = [
    { label: "Escuchas", value: "125K", growth: "+23%" },
    { label: "Suscriptores", value: "12.5K", growth: "+15%" },
    { label: "Avg. Duration", value: "32min", growth: "+8%" },
    { label: "Engagement", value: "89%", growth: "+12%" }
  ]

  return (
    <section id="podcast" className="py-3xl bg-background-near-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-h2 lg:text-h2-mobile font-bold font-display text-text-primary leading-tight tracking-tight mb-4">
                Podcast y
                <span className="block text-accent-cyan text-h2 lg:text-h2-mobile font-bold mt-1">Streaming</span>
              </h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Desde la grabación hasta la distribución global, creamos contenido de audio que conecta con tu audiencia. 
                Nuestro equipo domina desde la edición con IA hasta el análisis de métricas para optimizar el alcance 
                y engagement de tu contenido.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-background-surface-2 rounded-lg flex items-center justify-center text-accent-cyan">
                  <MicrophoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-body font-semibold text-text-primary">Grabación y Edición Profesional</h3>
                  <p className="text-body text-text-secondary">Post-producción con IA para optimizar audio, eliminar ruido y mejorar la claridad de la voz.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-background-surface-2 rounded-lg flex items-center justify-center text-accent-cyan">
                  <RadioIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-body font-semibold text-text-primary">Distribución Multiplataforma</h3>
                  <p className="text-body text-text-secondary">Publicación automática en todas las plataformas principales con optimización SEO.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-body font-semibold text-text-primary">Analíticas Avanzadas</h3>
                  <p className="text-body text-text-secondary">Métricas IAB compatibles con reportes detallados de audiencia y engagement.</p>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-6">
              <h4 className="text-body font-semibold text-text-primary mb-4">Métricas de Rendimiento</h4>
              <div className="grid grid-cols-2 gap-4">
                {analytics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-h3 lg:text-h3-mobile font-bold text-text-primary">{metric.value}</div>
                    <div className="text-small text-text-secondary">{metric.label}</div>
                    <div className="text-tiny text-accent-cyan">{metric.growth}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Podcast Player & Platforms */}
          <div className="space-y-6">
            {/* Episodes List */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg overflow-hidden">
              <div className="p-6 border-b border-border-subtle">
                <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-2">Episodios Recientes</h3>
                <p className="text-body text-text-secondary">FlowTrigger Podcast</p>
              </div>
              
              <div className="divide-y divide-border-subtle">
                {episodes.map((episode, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveEpisode(index)}
                    className={`w-full p-4 text-left hover:bg-background-surface-2 transition-colors duration-fast ${
                      activeEpisode === index ? 'bg-background-surface-2' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-accent-cyan/10 rounded-full flex items-center justify-center">
                        {activeEpisode === index ? (
                          <PlayIcon className="h-5 w-5 text-accent-cyan" />
                        ) : (
                          <MicrophoneIcon className="h-5 w-5 text-text-secondary" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-body font-medium text-text-primary truncate">{episode.title}</h4>
                        <p className="text-small text-text-secondary">{episode.duration}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Episode Player */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-6">
              <AudioPlayer 
                src="/audio/demo-episode.mp3" 
                title={episodes[activeEpisode].title}
                artist="FlowTrigger Podcast"
              />
              <p className="text-body text-text-secondary mt-4 text-center">
                {episodes[activeEpisode].description}
              </p>
            </div>

            {/* Platform Distribution */}
            <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-6">
              <h4 className="text-body font-semibold text-text-primary mb-4 text-center">Disponible en</h4>
              <div className="grid grid-cols-3 gap-4">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-2 p-3 bg-background-surface-2 rounded-lg hover:shadow-glow-cyan-sm transition-all duration-fast"
                  >
                    <span className="text-lg">{platform.logo}</span>
                    <span className="text-small text-text-secondary">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PodcastStreaming
