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
    <div
      className="video-facade"
      role="button"
      tabIndex={0}
      aria-label={title}
      onClick={() => setPlaying(true)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setPlaying(true)
        }
      }}
    >
      {playing ? (
        <iframe
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <img src={thumbSrc} alt={title} loading="lazy" />
          <svg className="video-play-btn" viewBox="0 0 68 48" aria-hidden="true">
            <path
              d="M66.52 7.71a8 8 0 0 0-5.63-5.66C55.94.67 34 .67 34 .67s-21.94 0-26.89 1.38A8 8 0 0 0 1.48 7.7C.1 12.67.1 24 .1 24s0 11.33 1.38 16.3a8 8 0 0 0 5.63 5.66C12.06 47.33 34 47.33 34 47.33s21.94 0 26.89-1.38a8 8 0 0 0 5.63-5.66C67.9 35.33 67.9 24 67.9 24s0-11.33-1.38-16.29Z"
              fill="#f00"
            />
            <path d="M45 24 27 14v20" fill="#fff" />
          </svg>
        </>
      )}
    </div>
  )
}
