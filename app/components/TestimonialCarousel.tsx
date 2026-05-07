'use client'

export default function TestimonialCarousel() {
  const scroll = (dir: number) => {
    const el = document.getElementById('carousel-track') as HTMLElement | null
    if (el) el.scrollBy({ left: dir * (el.clientWidth / 3), behavior: 'smooth' })
  }

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn prev" type="button" aria-label="Depoimento anterior" onClick={() => scroll(-1)}>
        ‹
      </button>
      <div id="carousel-track" className="carousel-track">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div className="carousel-slide" key={item}>
            <img src={`/images/depoimentos/depoimento-${item}.webp`} alt={`Depoimento ${item}`} loading="lazy" />
          </div>
        ))}
      </div>
      <button className="carousel-btn next" type="button" aria-label="Próximo depoimento" onClick={() => scroll(1)}>
        ›
      </button>
    </div>
  )
}
