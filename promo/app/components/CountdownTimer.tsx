'use client'

import { useEffect, useState } from 'react'

const total = 15 * 60

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(total)

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : total))
    }, 1000)

    return () => clearInterval(id)
  }, [])

  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')
  const isUrgent = seconds < 60

  return (
    <section className="countdown">
      <div className="countdown-label">
        <strong>⚡ OFERTA ESPECIAL</strong>
        Expira em:
      </div>
      <div className="count-box">
        <strong className={isUrgent ? 'pulse' : undefined}>{minutes}</strong>
        <span>Minutos</span>
      </div>
      <div className="count-separator">:</div>
      <div className="count-box">
        <strong className={isUrgent ? 'pulse' : undefined}>{secs}</strong>
        <span>Segundos</span>
      </div>
    </section>
  )
}
