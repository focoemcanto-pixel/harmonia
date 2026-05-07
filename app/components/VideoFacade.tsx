'use client'
import { useState, useEffect, useRef } from 'react'

interface Props {
  videoId: string
  title: string
  startSeconds?: number
  thumbnailSrc?: string
}

export default function VideoFacade({ videoId, title, startSeconds, thumbnailSrc }: Props) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const durationRef = useRef<number>(0)
  const thumbSrc = thumbnailSrc ?? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  // Monta a URL do embed diretamente — iframe criado no clique = iOS respeita o gesto do usuário
  const params = new URLSearchParams({
    autoplay: '1',
    playsinline: '1',   // obrigatório para iOS não abrir em tela cheia forçado
    controls: '0',      // sem controles nativos do YouTube
    modestbranding: '1',
    rel: '0',
    iv_load_policy: '3',
    fs: '1',            // mantém botão de tela cheia
    enablejsapi: '1',   // permite comunicação via postMessage para barra de progresso
    ...(startSeconds ? { start: String(startSeconds) } : {}),
  })
  const embedSrc = `https://www.youtube.com/embed/${videoId}?${params}`

  // Recebe atualizações de tempo do iframe do YouTube via postMessage
  useEffect(() => {
    if (!playing) return

    function onMessage(e: MessageEvent) {
      if (e.origin !== 'https://www.youtube.com') return
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data
        const info = data?.info
        if (info?.duration) durationRef.current = info.duration
        if (info?.currentTime != null && durationRef.current > 0) {
          setProgress((info.currentTime / durationRef.current) * 100)
        }
      } catch {}
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [playing])

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    if (!iframeRef.current || !durationRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: 'seekTo', args: [ratio * durationRef.current, true] }),
      'https://www.youtube.com'
    )
  }

  return (
    <div className="video-facade">
      {playing ? (
        <>
          <iframe
            ref={iframeRef}
            src={embedSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
          <div className="video-progress-bar" onClick={handleSeek}>
            <div className="video-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </>
      ) : (
        <div className="video-thumb" onClick={() => setPlaying(true)}>
          <img src={thumbSrc} alt={title} />
          <div className="video-play-btn">
            <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
              <rect width="68" height="48" rx="10" fill="#FF0000"/>
              <polygon points="28,14 28,34 48,24" fill="white"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
