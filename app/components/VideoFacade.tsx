'use client'

import { useState } from 'react'

interface Props {
  videoId: string
  title: string
  startSeconds?: number
  thumbnailSrc?: string
}

export default function VideoFacade({ videoId, title, startSeconds, thumbnailSrc }: Props) {
  const [playing, setPlaying] = useState(false)
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1${startSeconds ? `&start=${startSeconds}` : ''}`
  const thumb = thumbnailSrc ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  if (playing) {
    return (
      <div className="video-facade" style={{ cursor: 'default' }}>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button className="video-facade" onClick={() => setPlaying(true)} type="button" aria-label={`Reproduzir ${title}`}>
      <img src={thumb} alt={title} />
      <div className="video-play-btn">
        <svg viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="68" height="48" rx="10" fill="#FF0000" />
          <polygon points="28,14 28,34 48,24" fill="white" />
        </svg>
      </div>
    </button>
  )
}
