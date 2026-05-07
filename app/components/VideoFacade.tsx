'use client'
import { useState, useRef } from 'react'

interface Props {
  videoId: string
  title: string
  startSeconds?: number
  thumbnailSrc?: string
}

export default function VideoFacade({ videoId, title, startSeconds, thumbnailSrc }: Props) {
  const [playing, setPlaying] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const thumbSrc = thumbnailSrc ?? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  const params = new URLSearchParams({
    autoplay: '1',
    playsinline: '1',  // iOS: toca inline sem forçar fullscreen do sistema
    controls: '0',     // sem controles nativos do YouTube
    modestbranding: '1',
    rel: '0',
    iv_load_policy: '3',
    fs: '0',           // desativa fullscreen do YouTube (usamos botão próprio)
    ...(startSeconds ? { start: String(startSeconds) } : {}),
  })
  const embedSrc = `https://www.youtube.com/embed/${videoId}?${params}`

  function handleFullscreen() {
    const el = wrapperRef.current
    if (!el) return
    if (el.requestFullscreen) {
      el.requestFullscreen()
    } else if ((el as any).webkitRequestFullscreen) {
      // Safari / iOS
      ;(el as any).webkitRequestFullscreen()
    } else if (iframeRef.current && (iframeRef.current as any).webkitRequestFullscreen) {
      // Fallback: pede fullscreen direto no iframe (iOS)
      ;(iframeRef.current as any).webkitRequestFullscreen()
    }
  }

  return (
    <div ref={wrapperRef} className="video-facade">
      {/* Thumbnail sempre visível até iframe carregar — elimina tela preta */}
      <div
        className="video-thumb"
        onClick={() => setPlaying(true)}
        style={{
          opacity: iframeLoaded ? 0 : 1,
          pointerEvents: playing ? 'none' : 'auto',
          transition: 'opacity 0.4s ease',
        }}
      >
        <img src={thumbSrc} alt={title} />
        {!playing && (
          <div className="video-play-btn">
            <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
              <rect width="68" height="48" rx="10" fill="#FF0000"/>
              <polygon points="28,14 28,34 48,24" fill="white"/>
            </svg>
          </div>
        )}
      </div>

      {/* Iframe renderizado em cima da thumbnail, aparece com fade após carregar */}
      {playing && (
        <iframe
          ref={iframeRef}
          src={embedSrc}
          title={title}
          onLoad={() => setIframeLoaded(true)}
          style={{ opacity: iframeLoaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      )}

      {/* Botão de tela cheia customizado — aparece quando o vídeo está tocando */}
      {playing && iframeLoaded && (
        <button
          className="video-fullscreen-btn"
          onClick={handleFullscreen}
          aria-label="Tela cheia"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
          </svg>
        </button>
      )}
    </div>
  )
}
