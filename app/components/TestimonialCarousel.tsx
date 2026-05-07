'use client'

import { useState } from 'react'

const testimonialItems = [1, 2, 3, 4, 5, 6, 7]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index: number) => {
    const el = document.getElementById('carousel-track') as HTMLElement | null
    if (!el) return

    const slide = el.querySelector('.carousel-slide') as HTMLElement | null
    const nextIndex = Math.max(0, Math.min(index, testimonialItems.length - 1))
    const slideWidth = slide ? slide.getBoundingClientRect().width : el.clientWidth
    const gap = Number.parseFloat(getComputedStyle(el).gap || '0')

    el.scrollTo({ left: nextIndex * (slideWidth + gap), behavior: 'smooth' })
    setActiveIndex(nextIndex)
  }

  const scroll = (dir: number) => scrollToIndex(activeIndex + dir)

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn prev" aria-label="Anterior" onClick={() => scroll(-1)}>&#8249;</button>

      <div className="carousel-track" id="carousel-track">
        {testimonialItems.map((n, index) => (
          <div className="carousel-slide" key={n}>
            <img src={`/images/depoimentos/depoimento-${n}.webp`} alt={`Depoimento ${n}`} />
          </div>
        ))}
      </div>

      <button className="carousel-btn next" aria-label="Próximo" onClick={() => scroll(1)}>&#8250;</button>

      <div className="carousel-dots" aria-label="Navegação dos depoimentos">
        {testimonialItems.map((n, index) => (
          <button
            key={n}
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            aria-label={`Ver depoimento ${n}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
