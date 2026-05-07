const checkoutUrl = 'https://pay.kiwify.com.br/7FrQZOt'
const whatsappUrl = 'https://wa.me/5571999999999'

const benefits = [
  'Afinação firme e precisa.',
  'Percepção e independência auditiva apurada.',
  'Consciência teórica da harmonização.',
  'Confiança para abrir voz.',
  'Habilidade para estudar kits vocais e adaptar qualquer música ao seu tom.',
  'Capacidade de abrir voz intuitivamente.'
]

const faqs = [
  ['Esse curso serve para quem está começando do zero?', 'Sim. O método foi pensado para quem quer aprender divisão vocal de forma prática, mesmo sem dominar teoria musical.'],
  ['Quanto tempo tenho para completar o curso?', 'O acesso é vitalício. Você pode estudar no seu ritmo e revisar as aulas sempre que precisar.'],
  ['Em quanto tempo verei resultados?', 'Os primeiros resultados podem aparecer já nas primeiras semanas, desde que você pratique os exercícios propostos.'],
  ['Preciso de algum equipamento específico?', 'Não. Você precisa apenas de internet, celular ou computador e disposição para praticar.'],
  ['Posso parcelar o valor do treinamento?', 'Sim. O pagamento pode ser parcelado conforme as opções disponíveis no checkout.'],
  ['Como funciona a garantia?', 'Você tem 7 dias de garantia incondicional. Se não for para você, devolvemos seu dinheiro.'],
]

export default function Home() {
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
          <p className="lead">Método testado e comprovado por centenas de alunos. O Foco em Harmonia ensina você a dominar a arte de cantar em segunda voz com um passo a passo simples e direto.</p>

          <div className="video-card">
            <img src="/images/videos/thumb-como-dividir-voz.webp" alt="Como dividir voz" />
            <span className="play">▶</span>
          </div>

          <a className="button primary wide" href={checkoutUrl} target="_blank">EU QUERO AGORA</a>

          <div className="trust-row">
            <div>▣ <strong>Acesso Imediato</strong></div>
            <div>☆ <strong>7 Dias de Garantia</strong></div>
            <div>▣ <strong>Pagamento Seguro</strong></div>
          </div>
        </div>
      </section>

      <section className="section dark split-section">
        <div className="container split">
          <div>
            <h2>O Foco em Harmonia é o <span>treinamento ideal</span> para:</h2>
            <ul className="check-list">
              <li><strong>Ministros de louvor:</strong> ideal para quem precisa dar suporte dividindo voz sem atrapalhar a melodia.</li>
              <li><strong>Com pouco tempo de estudo:</strong> método direto para aprender dentro do seu horário e disponibilidade.</li>
              <li><strong>Buscam praticidade:</strong> aulas focadas em percepção, afinação e aplicação real no louvor.</li>
              <li><strong>Valorizam cursos objetivos:</strong> aprenda com etapas claras, exercícios práticos e resultados perceptíveis.</li>
            </ul>
          </div>
          <img className="product-img" src="/images/produto/notebook-curso.webp" alt="Plataforma do curso" />
        </div>
      </section>

      <section className="section transform-section">
        <div className="container split reverse-mobile">
          <img className="feature-img" src="/images/produto/ cantor-transformacao.webp" alt="Cantor em transformação vocal" />
          <div>
            <h2>Sua voz pode ser a chave para <span>transformar sua vida!</span></h2>
            <p>O curso Foco em Harmonia foi projetado para desbloquear a habilidade de dividir vozes em três passos simples, mesmo que você não tenha conhecimento teórico sobre campo harmônico.</p>
            <p><strong>Passo 1:</strong> Firmar a Afinação</p>
            <p><strong>Passo 2:</strong> Aprender a Segunda</p>
            <p><strong>Passo 3:</strong> Desenvolver a Intuição</p>
            <div className="outline-card">Os exercícios são altamente práticos, permitindo que você aplique os conceitos em situações reais de canto e ajuste os exercícios ao seu tom e classificação vocal.</div>
            <a className="button primary wide" href={checkoutUrl} target="_blank">QUERO APRENDER A DIVIDIR</a>
          </div>
        </div>
      </section>

      <section className="section steps-section light">
        <div className="container">
          <h2 className="black-title">No curso Foco em Harmonia, você vai dividir voz e desenvolver a sua percepção</h2>
          <div className="steps-grid">
            <article className="step-card"><img src="/images/passos/ passo-1-afinacao.webp" alt="Passo 1" /><span>PASSO 01</span><h3>Firmar a afinação</h3><p>Desenvolva a habilidade de manter a voz principal, mesmo ao ouvir uma segunda voz ou qualquer interferência externa.</p></article>
            <article className="step-card"><img src="/images/passos/ passo-2-segunda-voz.webp" alt="Passo 2" /><span>PASSO 02</span><h3>Aprender a segunda voz</h3><p>Aprenda a manter essa voz adicional com precisão, sem se desviar da melodia principal.</p></article>
            <article className="step-card"><img src="/images/passos/passo-3-intuicao.webp" alt="Passo 3" /><span>PASSO 03</span><h3>Desenvolver a intuição</h3><p>Com a prática, você será capaz de criar harmonias naturalmente em qualquer situação.</p></article>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <h2>Veja os <span>Resultados que alguns dos nossos alunos</span> já alcançaram</h2>
          <div className="testimonial-grid">
            <img src="/images/depoimentos/ depoimento-1.webp" alt="Depoimento 1" />
            <img src="/images/depoimentos/ depoimento-2.webp" alt="Depoimento 2" />
            <img src="/images/depoimentos/ depoimento-3.webp" alt="Depoimento 3" />
          </div>
        </div>
      </section>

      <section className="section recap">
        <div className="container">
          <h2><span>Recapitulando...</span> Você sairá desse curso, sabendo:</h2>
          <div className="benefit-grid">
            {benefits.map((item) => <div className="benefit" key={item}>✅ <p>{item}</p></div>)}
          </div>
          <a className="button primary centered" href={checkoutUrl} target="_blank">QUERO APRENDER A CANTAR</a>
        </div>
      </section>

      <section className="section dark center">
        <div className="container narrow">
          <div className="video-card small-video">
            <img src="/images/videos/ thumb-viagem-pelo-curso.webp" alt="Viagem pelo curso" />
            <span className="play">▶</span>
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
            <p>ou R$ 97,00 à vista</p>
            <ul className="offer-list">
              <li>✓ 7 Módulos de aulas</li>
              <li>✓ Comunidade exclusiva para alunos</li>
              <li>✓ Módulo bônus: Como achar seu tom</li>
              <li>✓ Teste de extensão e classificação</li>
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
          <img className="guarantee-img" src="/images/oferta/ garantia-7-dias.webp" alt="Garantia de 7 dias" />
          <div><h2>7 dias de garantia incondicional — <span>ou seu dinheiro de volta!</span></h2><p>Você tem 7 dias para experimentar o treinamento. Se por qualquer motivo achar que o método não é para você, devolvemos 100% do seu dinheiro, sem burocracia.</p></div>
        </div>
      </section>

      <section className="section mentor-section">
        <div className="container split">
          <div><h2>Seu mentor vocal nessa jornada será <span>Marcos Cruz</span></h2><p>Marcos Cruz é músico profissional e professor de canto, técnica vocal e piano com mais de 15 anos de experiência. Ele já ajudou centenas de alunos a destravarem suas vozes e atua como instrutor de técnica vocal em grupos de louvor.</p><a className="button primary" href={checkoutUrl} target="_blank">FAZER PARTE</a></div>
          <img className="mentor-img" src="/images/mentor/ marcos-cruz.webp" alt="Marcos Cruz" />
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
