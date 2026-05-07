'use client'

import { useState } from 'react'

interface Props {
  videoId: string
  title: string
  startSeconds?: number
  thumbnailSrc?: string
}

function sanitizeVideoId(videoId: string) {
  return /^[\w-]{11}$/.test(videoId) ? videoId : ''
}

function sanitizeThumbnailSrc(thumbnailSrc?: string) {
  return thumbnailSrc && /^\/images\/videos\/[\w-]+\.webp$/.test(thumbnailSrc) ? thumbnailSrc : undefined
}

export default function VideoFacade({ videoId, title, startSeconds, thumbnailSrc }: Props) {
  const [playing, setPlaying] = useState(false)
  const safeVideoId = sanitizeVideoId(videoId)
  const safeThumbnailSrc = sanitizeThumbnailSrc(thumbnailSrc)
  const src = safeVideoId
    ? `https://www.youtube.com/embed/${safeVideoId}?autoplay=1${startSeconds ? `&start=${startSeconds}` : ''}`
    : ''
  const thumb = safeThumbnailSrc ?? (safeVideoId ? `https://img.youtube.com/vi/${safeVideoId}/maxresdefault.jpg` : '')

  if (playing && src) {
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
    <button
      className="video-facade"
      onClick={() => {
        if (src) {
          setPlaying(true)
        }
      }}
      type="button"
      aria-label={`Reproduzir vídeo: ${title}`}
    >
      <img src={thumb} alt={title} loading="lazy" decoding="async" />
      <div className="video-play-btn">
        <svg viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="68" height="48" rx="10" fill="#FF0000" />
          <polygon points="28,14 28,34 48,24" fill="white" />
        </svg>
      </div>
    </button>
  )
}
