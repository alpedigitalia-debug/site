import React, { useState } from 'react'
import { 
  UserIcon, 
  PhotoIcon, 
  CubeIcon,
  ArrowPathIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

const ImagenAvatarizacion: React.FC = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(0)

  const portfolio = [
    {
      title: "Avatar Corporativo",
      category: "Branding",
      image: "/images/3D_Digital_Avatar_Man_Modern_Graphics.jpg",
      description: "Identidad visual completa para startup tecnológica"
    },
    {
      title: "Renders 3D",
      category: "Visualización",
      image: "/images/3d_digital_avatar_human_realism_comparison_graphics.jpg",
      description: "Arquitectura y productos en 3D fotorrealista"
    },
    {
      title: "Avatar Virtual",
      category: "Metaverso",
      image: "/images/metahuman_3d_avatar_character_creation_graphics.jpg",
      description: "Avatar personalizable para plataformas digitales"
    },
    {
      title: "Diseño Editorial",
      category: "Diseño",
      image: "/images/global_ufo_sightings_map_dark_theme_data_visualization.jpg",
      description: "Magazines, portadas y materiales promocionales"
    },
    {
      title: "Ilustración Digital",
      category: "Arte",
      image: "/images/digital_matrix_code_rain_green_blue_cyberpunk_wallpaper.jpg",
      description: "Estilo cyberpunk para eventos y campañas"
    },
    {
      title: "Prototipado UX",
      category: "Producto",
      image: "/images/futuristic_hud_interface_overlay_transparent_dark_tech.png",
      description: "Interfaces para aplicaciones y web"
    }
  ]

  const services = [
    {
      icon: <PhotoIcon className="h-6 w-6" />,
      title: "Diseño Gráfico",
      description: "Identidades visuales, materiales corporativos y diseños para redes sociales con estética futurista."
    },
    {
      icon: <CubeIcon className="h-6 w-6" />,
      title: "Avatarización 3D",
      description: "Avatares fotorrealistas personalizables para metaversos, redes sociales y aplicaciones empresariales."
    },
    {
      icon: <UserIcon className="h-6 w-6" />,
      title: "Branding Corporativo",
      description: "Identidad visual completa con manual de marca, aplicaciones y materiales promocionales."
    },
    {
      icon: <ArrowPathIcon className="h-6 w-6" />,
      title: "Renderizado Visual",
      description: "Visualizaciones de productos, arquitectura y experiencias inmersivas para presentaciones."
    }
  ]

  return (
    <section id="avatarizacion" className="py-3xl bg-background-pure-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 lg:text-h2-mobile font-bold font-display text-text-primary leading-tight tracking-tight mb-4">
            Imagen y
            <span className="block text-accent-cyan text-h2 lg:text-h2-mobile font-bold mt-1">Avatarización IA</span>
          </h2>
          <p className="text-body-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Transformamos conceptos en identidades visuales impactantes. Desde avatares digitales personalizables 
            hasta diseño gráfico con estética futurista, creamos assets digitales que conectan con tu audiencia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-background-surface-1 border border-border-subtle rounded-lg p-6 hover:shadow-card-hover hover:transform hover:-translate-y-1 transition-all duration-standard group">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center text-accent-cyan group-hover:shadow-glow-cyan-sm group-hover:scale-110 transition-all duration-fast mb-4">
                {service.icon}
              </div>
              <h3 className="text-body font-semibold text-text-primary mb-2">{service.title}</h3>
              <p className="text-body text-text-secondary leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Portfolio Gallery */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Portfolio Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {portfolio.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPortfolio(index)}
                  className="relative group cursor-pointer overflow-hidden rounded-lg bg-background-surface-1 border border-border-subtle hover:border-border-moderate transition-all duration-standard"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-standard"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-overlay-dark opacity-0 group-hover:opacity-100 transition-opacity duration-standard flex items-center justify-center">
                    <div className="text-center">
                      <EyeIcon className="h-8 w-8 text-accent-cyan mx-auto mb-2" />
                      <p className="text-body text-text-primary">Ver detalles</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-accent-cyan/10 text-accent-cyan text-tiny rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-body font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-small text-text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Portfolio Detail */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-background-surface-1 border border-border-subtle rounded-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={portfolio[selectedPortfolio].image}
                    alt={portfolio[selectedPortfolio].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan text-small rounded-full">
                      {portfolio[selectedPortfolio].category}
                    </span>
                  </div>
                  
                  <h3 className="text-h3 lg:text-h3-mobile font-semibold text-text-primary mb-3">
                    {portfolio[selectedPortfolio].title}
                  </h3>
                  
                  <p className="text-body text-text-secondary mb-6">
                    {portfolio[selectedPortfolio].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-small font-semibold text-text-primary">Tecnologías Utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Blender', 'Unreal Engine', 'After Effects', 'Figma', 'Photoshop'].map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-background-surface-2 text-text-secondary text-tiny rounded border border-border-subtle">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImagenAvatarizacion
