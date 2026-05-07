'use client'
import { useState, useEffect, useRef } from 'react'

interface Props {
  videoId: string
  title: string
  startSeconds?: number
  thumbnailSrc?: string
}

// Loader global da YT IFrame API — suporta múltiplas instâncias na mesma página
const ytCallbacks: Array<() => void> = []
let ytApiState: 'idle' | 'loading' | 'ready' = 'idle'

function loadYTApi(onReady: () => void) {
  if (typeof window === 'undefined') return
  if (ytApiState === 'ready') {
    // Aguarda o próximo frame para garantir que a div já está no DOM
    requestAnimationFrame(() => onReady())
    return
  }
  ytCallbacks.push(onReady)
  if (ytApiState === 'loading') return
  ytApiState = 'loading'
  const script = document.createElement('script')
  script.src = 'https://www.youtube.com/iframe_api'
  document.head.appendChild(script)
  ;(window as any).onYouTubeIframeAPIReady = () => {
    ytApiState = 'ready'
    ytCallbacks.forEach(cb => cb())
    ytCallbacks.length = 0
  }
}

export default function VideoFacade({ videoId, title, startSeconds, thumbnailSrc }: Props) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const thumbSrc = thumbnailSrc ?? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  useEffect(() => {
    if (!playing) return

    loadYTApi(() => {
      if (!containerRef.current) return
      playerRef.current = new (window as any).YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,   // sem controles nativos do YouTube
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          playsinline: 1,
          fs: 1,          // mantém botão de fullscreen
          start: startSeconds ?? 0,
        },
        events: {
          onReady(e: any) {
            e.target.playVideo()
            intervalRef.current = setInterval(() => {
              const cur: number = e.target.getCurrentTime?.() ?? 0
              const dur: number = e.target.getDuration?.() ?? 0
              if (dur > 0) setProgress((cur / dur) * 100)
            }, 500)
          },
        },
      })
    })

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      playerRef.current?.destroy?.()
      playerRef.current = null
    }
  }, [playing])

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    if (!playerRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    const dur: number = playerRef.current.getDuration?.() ?? 0
    playerRef.current.seekTo(ratio * dur, true)
  }

  return (
    <div className="video-facade">
      {playing ? (
        <>
          <div ref={containerRef} className="video-player-div" />
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
