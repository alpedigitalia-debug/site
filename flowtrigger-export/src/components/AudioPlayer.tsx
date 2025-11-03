import React, { useState } from 'react'
import { PlayIcon, PauseIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline'

const AudioPlayer: React.FC<{ src: string; title: string; artist: string }> = ({ src, title, artist }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const audio = e.currentTarget
    setCurrentTime(audio.currentTime)
    setDuration(audio.duration || 0)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = document.getElementById(`audio-${title}`) as HTMLAudioElement
    if (audio && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      audio.currentTime = percent * duration
      setCurrentTime(percent * duration)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="bg-background-surface-1 border border-border-subtle rounded-lg p-6 shadow-card hover:shadow-card-hover hover:bg-background-surface-2 transition-all duration-standard">
      <audio
        id={`audio-${title}`}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
      />
      
      <div className="flex items-center space-x-4">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-background-surface-2 rounded-full flex items-center justify-center hover:bg-accent-cyan hover:text-background-pure-black transition-all duration-fast group"
        >
          {isPlaying ? (
            <PauseIcon className="h-6 w-6" />
          ) : (
            <PlayIcon className="h-6 w-6 ml-0.5" />
          )}
        </button>

        {/* Track Info */}
        <div className="flex-1">
          <h4 className="text-body font-semibold text-text-primary">{title}</h4>
          <p className="text-small text-text-secondary">{artist}</p>
        </div>

        {/* Volume */}
        <SpeakerWaveIcon className="h-5 w-5 text-text-secondary" />
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div 
          className="w-full h-1.5 bg-background-surface-3 rounded-full cursor-pointer"
          onClick={handleProgressClick}
        >
          <div 
            className="h-full bg-gradient-to-r from-accent-cyan to-accent-cyan-muted rounded-full transition-all duration-fast"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-tiny text-text-tertiary font-code">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
