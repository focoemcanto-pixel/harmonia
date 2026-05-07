'use client'

import { useRef } from 'react'

const SLIDES_PER_VIEW = 3
const testimonials = [
  { id: 1, alt: 'Depoimento de aluna sobre os resultados do curso Foco em Harmonia' },
  { id: 2, alt: 'Depoimento de aluno mostrando sua experiência com o treinamento' },
  { id: 3, alt: 'Depoimento de aluna relatando evolução para dividir voz' },
  { id: 4, alt: 'Depoimento de aluno recomendando o curso Foco em Harmonia' },
  { id: 5, alt: 'Depoimento de aluna celebrando seu desenvolvimento vocal' },
  { id: 6, alt: 'Depoimento de aluno destacando a didática do curso' },
  { id: 7, alt: 'Depoimento de aluna contando sua transformação no louvor' },
]

export default function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scroll = (dir: number) => {
    const el = trackRef.current
    if (el) el.scrollBy({ left: dir * (el.clientWidth / SLIDES_PER_VIEW), behavior: 'smooth' })
  }

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn prev" aria-label="Anterior" onClick={() => scroll(-1)}>&#8249;</button>
      <div className="carousel-track" ref={trackRef}>
        {testimonials.map(({ id, alt }) => (
          <div className="carousel-slide" key={id}>
            <img src={`/images/depoimentos/depoimento-${id}.webp`} alt={alt} />
          </div>
        ))}
      </div>
      <button className="carousel-btn next" aria-label="Próximo" onClick={() => scroll(1)}>&#8250;</button>
    </div>
  )
}
