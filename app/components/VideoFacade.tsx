'use client'

import { useState } from 'react'

interface Props {
  videoId: string
  title: string
  startSeconds?: number
}

export default function VideoFacade({ videoId, title, startSeconds }: Props) {
  const [playing, setPlaying] = useState(false)
  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1${startSeconds ? `&start=${startSeconds}` : ''}`
  const thumbSrc = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div className="video-facade" onClick={() => setPlaying(true)}>
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
