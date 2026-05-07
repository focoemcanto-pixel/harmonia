'use client'

const testimonials = [1, 2, 3, 4, 5, 6, 7]

export default function TestimonialCarousel() {
  const scroll = (direction: number) => {
    const element = document.getElementById('carousel-track')

    if (!element) {
      return
    }

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const distance = isMobile ? element.offsetWidth : element.offsetWidth / 3

    element.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn prev" aria-label="Anterior" onClick={() => scroll(-1)} type="button">
        &#8249;
      </button>
      <div className="carousel-track" id="carousel-track">
        {testimonials.map((testimonial) => (
          <div className="carousel-slide" key={testimonial}>
            <img
              src={`/images/depoimentos/depoimento-${testimonial}.webp`}
              alt={`Depoimento ${testimonial}`}
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
