const checkoutUrl = 'https://pay.kiwify.com.br/7FrQZOt'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="tag">CURSO DE DIVISÃO VOCAL</span>
            <h1 className="title">Aprenda a dividir vozes mesmo sem saber teoria musical.</h1>
            <p className="subtitle">
              Método prático e direto para destravar sua segunda voz e cantar com mais segurança no ministério de louvor.
            </p>
            <a className="button" href={checkoutUrl} target="_blank">
              GARANTIR DESCONTO
            </a>
          </div>

          <div className="hero-image">
            <img src="/images/hero/mega-oferta.webp" alt="Foco em Harmonia" />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Sua voz pode transformar sua vida</h2>

          <div className="mentor">
            <img src="/images/produto/ cantor-transformacao.webp" alt="Transformação" />

            <div>
              <p className="subtitle">
                O curso Foco em Harmonia foi projetado para desbloquear a habilidade de dividir vozes em apenas três passos simples.
              </p>

              <p className="subtitle">
                Mesmo que você nunca tenha estudado campo harmônico, você vai aprender a ouvir, encaixar e construir harmonias de forma prática.
              </p>

              <a className="button" href={checkoutUrl} target="_blank">
                QUERO APRENDER
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Os 3 passos do método</h2>

          <div className="grid-3">
            <div className="card">
              <img src="/images/passos/ passo-1-afinacao.webp" alt="Passo 1" />
              <h3>Firmar a Afinação</h3>
              <p>Desenvolva segurança vocal e aprenda a manter a afinação com estabilidade.</p>
            </div>

            <div className="card">
              <img src="/images/passos/ passo-2-segunda-voz.webp" alt="Passo 2" />
              <h3>Aprender a Segunda</h3>
              <p>Entenda na prática como construir segundas vozes mesmo sem teoria musical.</p>
            </div>

            <div className="card">
              <img src="/images/passos/passo-3-intuicao.webp" alt="Passo 3" />
              <h3>Desenvolver a Intuição</h3>
              <p>Aprenda a ouvir harmonias naturalmente e cantar com confiança.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container mentor">
          <img src="/images/mentor/ marcos-cruz.webp" alt="Marcos Cruz" />

          <div>
            <h2 className="section-title" style={{textAlign:'left'}}>Seu mentor será Marcos Cruz</h2>

            <p className="subtitle">
              Músico profissional e professor de canto com mais de 15 anos de experiência ajudando alunos a destravarem suas vozes.
            </p>

            <p className="subtitle">
              Criador da mentoria Foco em Canto e especialista em treinamento vocal para ministério de louvor.
            </p>

            <a className="button" href={checkoutUrl} target="_blank">
              COMEÇAR AGORA
            </a>
          </div>
        </div>
      </section>

      <section className="footer-cta">
        <div className="container">
          <h2>Comece hoje a desenvolver sua segunda voz.</h2>

          <a className="button" href={checkoutUrl} target="_blank">
            GARANTIR MINHA VAGA
          </a>
        </div>
      </section>
    </main>
  )
}
