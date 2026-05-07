'use client'

import { useRef } from 'react'

export default function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scroll = (dir: number) => {
    const el = trackRef.current
    if (el) el.scrollBy({ left: dir * (el.clientWidth / 3), behavior: 'smooth' })
  }

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn prev" aria-label="Anterior" onClick={() => scroll(-1)}>&#8249;</button>
      <div className="carousel-track" id="carousel-track" ref={trackRef}>
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <div className="carousel-slide" key={n}>
            <img src={`/images/depoimentos/depoimento-${n}.webp`} alt={`Depoimento ${n}`} />
          </div>
        ))}
      </div>
      <button className="carousel-btn next" aria-label="Próximo" onClick={() => scroll(1)}>&#8250;</button>
    </div>
  )
}
