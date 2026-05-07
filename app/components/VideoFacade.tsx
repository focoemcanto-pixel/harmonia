'use client'

import { useState } from 'react'

interface Props {
  videoId: string
  title: string
  startSeconds?: number
}

const thumbnailMap: Record<string, string> = {
  F1pYjGMCqAM: '/images/videos/thumb-como-dividir-voz.webp',
  'yb-6zZv763k': '/images/videos/thumb-viagem-pelo-curso.webp',
}

export default function VideoFacade({ videoId, title, startSeconds }: Props) {
  const [playing, setPlaying] = useState(false)
  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1${startSeconds ? `&start=${startSeconds}` : ''}`
  const thumbSrc = thumbnailMap[videoId] ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const play = () => setPlaying(true)

  return (
    <div
      className="video-facade"
      onClick={play}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.code === 'Space') {
          event.preventDefault()
          play()
        }
      }}
      aria-label={`Play video: ${title}`}
      role="button"
      tabIndex={0}
    >
      {playing ? (
        <iframe
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img src={thumbSrc} alt={title} />
          <div className="video-play-btn">
            <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
              <rect width="68" height="48" rx="10" fill="#FF0000" />
              <polygon points="28,14 28,34 48,24" fill="white" />
            </svg>
          </div>
        </>
      )}
    </div>
  )
}
