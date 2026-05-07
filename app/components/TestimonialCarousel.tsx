'use client'

export default function TestimonialCarousel() {
  const scroll = (dir: number) => {
    const el = document.getElementById('carousel-track') as HTMLElement | null
    if (el) el.scrollBy({ left: dir * (el.clientWidth / 3), behavior: 'smooth' })
  }
  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn prev" aria-label="Anterior" onClick={() => scroll(-1)}>&#8249;</button>
      <div className="carousel-track" id="carousel-track">
        {[1,2,3,4,5,6,7].map(n => (
          <div className="carousel-slide" key={n}>
            <img src={`/images/depoimentos/depoimento-${n}.webp`} alt={`Depoimento ${n}`} />
          </div>
        ))}
      </div>
      <button className="carousel-btn next" aria-label="Próximo" onClick={() => scroll(1)}>&#8250;</button>
    </div>
  )
}
