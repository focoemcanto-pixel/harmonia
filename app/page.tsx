'use client'

import { useRef, useState } from 'react'

const checkoutUrl = 'https://pay.kiwify.com.br/7FrQZOt'
const whatsappUrl = 'https://wa.me/5571999999999'

const benefits = [
  'Afinação firme e precisa.',
  'Percepção auditiva mais apurada.',
  'Mais consciência na hora de harmonizar.',
  'Confiança para abrir segunda voz.',
  'Segurança para estudar kits vocais e adaptar músicas ao seu tom.',
  'Capacidade de encontrar vozes de forma mais intuitiva.'
]

const faqs = [
  ['Esse curso serve para quem está começando do zero?', 'Sim. As aulas foram organizadas para quem quer aprender divisão vocal de forma prática, mesmo sem domínio de teoria musical.'],
  ['Quanto tempo tenho para completar o curso?', 'O acesso é vitalício. Você pode estudar no seu ritmo, repetir as aulas e revisar os exercícios sempre que precisar.'],
  ['Em quanto tempo verei resultados?', 'Isso depende da sua prática, mas muitos alunos percebem evolução nas primeiras semanas ao seguir o passo a passo.'],
  ['Preciso de algum equipamento específico?', 'Não. Você só precisa de internet, celular ou computador e constância para praticar os exercícios.'],
  ['Posso parcelar o valor do treinamento?', 'Sim. O checkout mostra as opções de parcelamento disponíveis no momento da compra.'],
  ['Como funciona a garantia?', 'Você tem 7 dias de garantia incondicional. Se entender que o treinamento não é para você, pode solicitar o reembolso dentro desse prazo.'],
]

export default function Home() {
  const testimonialImages = [
    '/images/depoimentos/depoimento-1.webp',
    '/images/depoimentos/depoimento-2.webp',
    '/images/depoimentos/depoimento-3.webp',
    '/images/depoimentos/depoimento-4.webp',
    '/images/depoimentos/depoimento-5.webp',
    '/images/depoimentos/depoimento-6.webp',
    '/images/depoimentos/depoimento-7.webp',
  ]
  const [isVideo1Open, setIsVideo1Open] = useState(false)
  const [isVideo2Open, setIsVideo2Open] = useState(false)
  const testimonialTrackRef = useRef<HTMLDivElement>(null)

  const scrollTestimonials = (direction: 'prev' | 'next') => {
    const track = testimonialTrackRef.current
    if (!track) return

    const slide = track.querySelector('.carousel-slide') as HTMLElement | null
    const gap = Number.parseFloat(getComputedStyle(track).gap || '0')
    const slideWidth = slide ? slide.getBoundingClientRect().width + gap : track.offsetWidth / 3
    const distance = direction === 'prev' ? -slideWidth : slideWidth
    track.scrollBy({ left: distance, behavior: 'smooth' })
  }

  return (
    <main>
      <a className="whatsapp" href={whatsappUrl} target="_blank" aria-label="WhatsApp">☘</a>

      <section className="countdown">
        <div className="count-box"><strong>00</strong><span>Minutos</span></div>
        <div className="count-box"><strong>00</strong><span>Segundos</span></div>
      </section>

      <section className="hero-original">
        <div className="container narrow center">
          <img className="offer-banner" src="/images/hero/mega-oferta.webp" alt="Mega semana de ofertas" />

          <h1>Aprenda a Dividir Voz no Louvor com Segurança e Naturalidade, mesmo sem saber teoria musical</h1>
          <p className="lead">Um treinamento prático para desenvolver percepção, afinação e independência vocal — e finalmente cantar segunda voz com mais confiança no ministério de louvor.</p>

          <div className="video-facade" id="video1" onClick={() => setIsVideo1Open(true)}>
            {isVideo1Open ? (
              <iframe
                src="https://www.youtube.com/embed/F1pYjGMCqAM?start=7&autoplay=1"
                title="Como dividir voz"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img src="https://img.youtube.com/vi/F1pYjGMCqAM/maxresdefault.jpg" alt="Como dividir voz" width="1280" height="720" />
                <div className="video-play-btn">
                  <svg viewBox="0 0 68 48" fill="none"><rect width="68" height="48" rx="10" fill="#FF0000" /><polygon points="28,16 28,32 46,24" fill="white" /></svg>
                </div>
              </>
            )}
          </div>

          <a className="button primary wide" href={checkoutUrl} target="_blank">EU QUERO AGORA</a>

          <div className="trust-badges">
            <div className="trust-badge">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
              <span>Acesso Imediato</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-badge">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <span>7 Dias de Garantia</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-badge">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <span>Pagamento Seguro</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark split-section">
        <div className="container split">
          <div>
            <h2>O Foco em Harmonia é o <span>treinamento ideal</span> para:</h2>
            <ul className="check-list">
              <li><strong>Ministros de louvor:</strong> para quem quer apoiar o grupo dividindo voz com firmeza, sem perder a melodia principal.</li>
              <li><strong>Quem tem pouco tempo:</strong> aulas objetivas, pensadas para caber na rotina e gerar prática real.</li>
              <li><strong>Quem busca praticidade:</strong> nada de complicar com teoria pesada; o foco é ouvir, entender e aplicar.</li>
              <li><strong>Quem quer resultado:</strong> um caminho claro para desenvolver afinação, percepção e segurança vocal.</li>
            </ul>
          </div>
          <img className="product-img" src="/images/produto/notebook-curso.webp" alt="Plataforma do curso" />
        </div>
      </section>

      <section className="section transform-section">
        <div className="container split reverse-mobile">
          <img className="feature-img" src="/images/produto/cantor-transformacao.webp" alt="Cantor em transformação vocal" />
          <div>
            <h2>Sua voz pode ser a chave para <span>transformar sua vida!</span></h2>
            <p>O Foco em Harmonia foi criado para desbloquear sua habilidade de dividir vozes com um caminho simples, progressivo e fácil de aplicar.</p>
            <p><strong>Passo 1:</strong> firmar sua afinação.</p>
            <p><strong>Passo 2:</strong> aprender a construir a segunda voz.</p>
            <p><strong>Passo 3:</strong> desenvolver sua intuição vocal.</p>
            <div className="outline-card">Os exercícios são práticos e pensados para situações reais de canto, ajudando você a reconhecer caminhos harmônicos e aplicar as vozes com mais segurança.</div>
            <a className="button primary wide" href={checkoutUrl} target="_blank">QUERO APRENDER A DIVIDIR</a>
          </div>
        </div>
      </section>

      <section className="section steps-section light">
        <div className="container">
          <h2 className="black-title">No curso Foco em Harmonia, você vai dividir voz e desenvolver a sua percepção</h2>
          <div className="steps-grid">
            <article className="step-card"><img src="/images/passos/passo-1-afinacao.webp" alt="Passo 1" /><span>PASSO 01</span><h3>Firmar a afinação</h3><p>O primeiro passo é desenvolver estabilidade vocal para manter sua voz firme, mesmo ouvindo outra linha melódica ao mesmo tempo.</p></article>
            <article className="step-card"><img src="/images/passos/passo-2-segunda-voz.webp" alt="Passo 2" /><span>PASSO 02</span><h3>Aprender a segunda voz</h3><p>Depois de firmar a base, você aprende a construir a voz complementar com precisão e encaixe musical.</p></article>
            <article className="step-card"><img src="/images/passos/passo-3-intuicao.webp" alt="Passo 3" /><span>PASSO 03</span><h3>Desenvolver a intuição</h3><p>Com prática guiada, você passa a perceber caminhos naturais para harmonizar sem depender de alguém cantando no seu ouvido.</p></article>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <h2>Veja os <span>Resultados que alguns dos nossos alunos</span> já alcançaram</h2>
          <div className="carousel-wrapper">
            <button className="carousel-btn prev" aria-label="Anterior" onClick={() => {
              scrollTestimonials('prev')
            }}>&#8249;</button>
            <div
              className="carousel-track"
              id="testimonial-track"
              ref={testimonialTrackRef}
              tabIndex={0}
              aria-label="Carrossel de depoimentos"
              onKeyDown={(event) => {
                if (event.key === 'ArrowLeft') scrollTestimonials('prev')
                if (event.key === 'ArrowRight') scrollTestimonials('next')
              }}
            >
              {testimonialImages.map((src, index) => (
                <div className="carousel-slide" key={src}>
                  <img src={src} alt={`Depoimento ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-btn next" aria-label="Próximo" onClick={() => {
              scrollTestimonials('next')
            }}>&#8250;</button>
          </div>
        </div>
      </section>

      <section className="section recap">
        <div className="container">
          <h2><span>Recapitulando...</span> você sairá desse curso sabendo:</h2>
          <div className="benefit-grid">
            {benefits.map((item) => <div className="benefit" key={item}>✅ <p>{item}</p></div>)}
          </div>
          <a className="button primary centered" href={checkoutUrl} target="_blank">QUERO APRENDER A DIVIDIR</a>
        </div>
      </section>

      <section className="section dark center access-section">
        <div className="container narrow">
          <div className="video-facade" id="video2" onClick={() => setIsVideo2Open(true)}>
            {isVideo2Open ? (
              <iframe
                src="https://www.youtube.com/embed/yb-6zZv763k?autoplay=1"
                title="Viagem pelo curso"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img src="https://img.youtube.com/vi/yb-6zZv763k/maxresdefault.jpg" alt="Viagem pelo curso" width="1280" height="720" />
                <div className="video-play-btn">
                  <svg viewBox="0 0 68 48" fill="none"><rect width="68" height="48" rx="10" fill="#FF0000" /><polygon points="28,16 28,32 46,24" fill="white" /></svg>
                </div>
              </>
            )}
          </div>
          <h2>Aprenda a <span>qualquer hora e em qualquer lugar!</span></h2>
          <h3>ACESSO VITALÍCIO</h3>
          <div className="trust-row compact"><div>✅ 7 Módulos Gravados</div><div>✅ Treinamento 100% online</div><div>✅ Aulas direto ao ponto</div></div>
        </div>
      </section>

      <section className="section offer-section">
        <div className="container offer-grid">
          <div>
            <p className="old-price">De: <s>R$397,00</s> Por:</p>
            <h2 className="price">12 x 10,13</h2>
            <p className="cash-price">ou R$ 97,00 à vista</p>
            <ul className="offer-list">
              <li>✓ 7 módulos de aulas</li>
              <li>✓ Comunidade exclusiva para alunos</li>
              <li>✓ Módulo bônus: como achar seu tom</li>
              <li>✓ Teste de extensão e classificação vocal</li>
              <li>✓ Atividades práticas para o dia a dia</li>
              <li>✓ Acesso vitalício</li>
            </ul>
            <a className="button primary wide" href={checkoutUrl} target="_blank">QUERO APRENDER AGORA</a>
          </div>
          <div className="logo-offer"><img src="/images/oferta/logo-foco-em-harmonia.webp" alt="Foco em Harmonia" /><p>Comece a desenvolver sua habilidade para dividir voz e viva essa transformação hoje mesmo!</p></div>
        </div>
      </section>

      <section className="section guarantee dark">
        <div className="container split">
          <img className="guarantee-img" src="/images/oferta/garantia-7-dias.webp" alt="Garantia de 7 dias" />
          <div><h2>7 dias de garantia incondicional — <span>ou seu dinheiro de volta!</span></h2><p>Experimente o treinamento por 7 dias. Se entender que ele não é para você, basta solicitar o reembolso dentro do prazo de garantia.</p></div>
        </div>
      </section>

      <section className="section mentor-section">
        <div className="container split">
          <div><h2>Seu mentor vocal nessa jornada será <span>Marcos Cruz</span></h2><p>Marcos Cruz é músico profissional e professor de canto, técnica vocal e piano com mais de 15 anos de experiência. Já ajudou centenas de alunos a destravarem suas vozes e atua com treinamento vocal para grupos de louvor.</p><a className="button primary" href={checkoutUrl} target="_blank">FAZER PARTE</a></div>
          <img className="mentor-img" src="/images/mentor/marcos-cruz.webp" alt="Marcos Cruz" />
        </div>
      </section>

      <section className="section faq dark">
        <div className="container">
          <h2>Perguntas Frequentes</h2>
          <div className="faq-list">
            {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>
    </main>
  )
}
