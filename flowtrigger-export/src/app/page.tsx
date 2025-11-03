import HeroSection from '../src/sections/HeroSection'
import ProductionMusical from '../src/sections/ProductionMusical'
import VideoIA from '../src/sections/VideoIA'
import PodcastStreaming from '../src/sections/PodcastStreaming'
import YouTubeChannels from '../src/sections/YouTubeChannels'
import ImagenAvatarizacion from '../src/sections/ImagenAvatarizacion'
import CanalizacionPublicidad from '../src/sections/CanalizacionPublicidad'
import Contacto from '../src/sections/Contacto'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductionMusical />
      <VideoIA />
      <PodcastStreaming />
      <YouTubeChannels />
      <ImagenAvatarizacion />
      <CanalizacionPublicidad />
      <Contacto />
    </>
  )
}