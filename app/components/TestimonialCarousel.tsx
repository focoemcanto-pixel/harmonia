'use client'

import { useEffect, useRef, useState } from 'react'

const testimonials = [1, 2, 3, 4, 5, 6, 7]

export default function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const updateMatches = () => setIsMobile(mediaQuery.matches)

    updateMatches()
    mediaQuery.addEventListener('change', updateMatches)

    return () => {
      mediaQuery.removeEventListener('change', updateMatches)
    }
  }, [])

  const scroll = (direction: number) => {
    const element = trackRef.current

    if (!element) {
      return
    }

    const distance = isMobile ? element.offsetWidth : element.offsetWidth / 3

    element.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn prev" aria-label="Anterior" onClick={() => scroll(-1)} type="button">
        &#8249;
      </button>
      <div className="carousel-track" ref={trackRef}>
        {testimonials.map((testimonial) => (
          <div className="carousel-slide" key={testimonial}>
            <img
              src={`/images/depoimentos/depoimento-${testimonial}.webp`}
              alt={`Depoimento ${testimonial}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <button className="carousel-btn next" aria-label="Próximo" onClick={() => scroll(1)} type="button">
        &#8250;
      </button>
    </div>
  )
}
