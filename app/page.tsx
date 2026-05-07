import TestimonialCarousel from './components/TestimonialCarousel'
import VideoFacade from './components/VideoFacade'
import CountdownTimer from './components/CountdownTimer'

const checkoutUrl = 'https://pay.kiwify.com.br/7FrQZOt'
const whatsappUrl = 'https://wa.me/5571997178807'

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
  return (
    <main>
      <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">☎</a>

      <CountdownTimer />

      <section className="hero-original">
        <div className="container narrow center">
          <img className="offer-banner" src="/images/hero/mega-oferta.webp" alt="Mega semana de ofertas" />
          <h1>Aprenda a Dividir Voz no Louvor com Segurança e Naturalidade, mesmo sem saber teoria musical</h1>
          <p className="lead">Um treinamento prático para desenvolver percepção, afinação e independência vocal — e finalmente cantar segunda voz com mais confiança no ministério de louvor.</p>

          <VideoFacade
            videoId="F1pYjGMCqAM"
            title="Como dividir voz"
            startSeconds={7}
            thumbnailSrc="/images/videos/thumb-como-dividir-voz.webp"
          />

          <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">EU QUERO AGORA</a>

          <div className="trust-badges">
            <div className="trust-badge"><span>Acesso Imediato</span></div>
            <div className="trust-divider" />
            <div className="trust-badge"><span>7 Dias de Garantia</span></div>
            <div className="trust-divider" />
            <div className="trust-badge"><span>Pagamento Seguro</span></div>
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
            <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">QUERO APRENDER A DIVIDIR</a>
          </div>
        </div>
      </section>

      <section className="section steps-section light">
        <div className="container">
          <h2 className="black-title">No curso Foco em Harmonia, você vai dividir voz e desenvolver a sua percepção</h2>
          <div className="steps-grid">
            <article className="step-card">
              <img src="/images/passos/passo-1-afinacao.webp" alt="Passo 1" />
              <span>PASSO 01</span>
              <h3>Firmar a afinação</h3>
              <p>O primeiro passo é desenvolver estabilidade vocal para manter sua voz firme, mesmo ouvindo outra linha melódica ao mesmo tempo.</p>
            </article>
            <article className="step-card">
              <img src="/images/passos/passo-2-segunda-voz.webp" alt="Passo 2" />
              <span>PASSO 02</span>
              <h3>Aprender a segunda voz</h3>
              <p>Depois de firmar a base, você aprende a construir a voz complementar com precisão e encaixe musical.</p>
            </article>
            <article className="step-card">
              <img src="/images/passos/passo-3-intuicao.webp" alt="Passo 3" />
              <span>PASSO 03</span>
              <h3>Desenvolver a intuição</h3>
              <p>Com prática guiada, você passa a perceber caminhos naturais para harmonizar sem depender de alguém cantando no seu ouvido.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <h2>Veja os <span>Resultados que alguns dos nossos alunos</span> já alcançaram</h2>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="section recap">
        <div className="container">
          <h2><span>Recapitulando...</span> você sairá desse curso sabendo:</h2>
          <div className="benefit-grid">
            {benefits.map((item) => <div className="benefit" key={item}>✅ <p>{item}</p></div>)}
          </div>
          <a className="button primary centered" href={checkoutUrl} target="_blank" rel="noreferrer">QUERO APRENDER A DIVIDIR</a>
        </div>
      </section>

      <section className="section dark center access-section">
        <div className="container narrow">
          <VideoFacade
            videoId="yb-6zZv763k"
            title="Viagem pelo curso"
            thumbnailSrc="/images/videos/thumb-viagem-pelo-curso.webp"
          />
          <h2>Aprenda a <span>qualquer hora e em qualquer lugar!</span></h2>
          <h3>ACESSO VITALÍCIO</h3>
          <div className="trust-row compact">
            <div>✅ 7 Módulos Gravados</div>
            <div>✅ Treinamento 100% online</div>
            <div>✅ Aulas direto ao ponto</div>
          </div>
        </div>
      </section>

      <section className="section offer-section">
        <div className="container narrow center">
          <div className="logo-offer">
            <img src="/images/oferta/logo-foco-em-harmonia.webp" alt="Foco em Harmonia" />
          </div>
          <div className="offer-price-block">
            <p className="old-price">De: <s>R$397,00</s> Por apenas:</p>
            <div className="price-installment">
              <span className="price-times">12x</span>
              <span className="price-value">R$&nbsp;10,13</span>
            </div>
            <p className="cash-price">ou <strong>R$ 97,00</strong> à vista</p>
          </div>
          <ul className="offer-list">
            <li>✓ 7 módulos de aulas</li>
            <li>✓ Comunidade exclusiva para alunos</li>
            <li>✓ Módulo bônus: como achar seu tom</li>
            <li>✓ Teste de extensão e classificação vocal</li>
            <li>✓ Atividades práticas para o dia a dia</li>
            <li>✓ Acesso vitalício</li>
          </ul>
          <a className="button primary wide" href={checkoutUrl} target="_blank" rel="noreferrer">QUERO APRENDER AGORA</a>
        </div>
      </section>

      <section className="section guarantee dark">
        <div className="container split">
          <img className="guarantee-img" src="/images/oferta/garantia-7-dias.webp" alt="Garantia de 7 dias" />
          <div>
            <h2>7 dias de garantia incondicional — <span>ou seu dinheiro de volta!</span></h2>
            <p>Experimente o treinamento por 7 dias. Se entender que ele não é para você, basta solicitar o reembolso dentro desse prazo — sem perguntas, sem burocracia.</p>
          </div>
        </div>
      </section>

      <section className="section mentor-section">
        <div className="container split">
          <div>
            <h2>Seu mentor vocal nessa jornada será <span>Marcos Cruz</span></h2>
            <p>Marcos Cruz é músico profissional e professor de canto, técnica vocal e piano com mais de 15 anos de experiência. Já ajudou centenas de alunos a desenvolver sua voz e cantar com mais confiança no ministério.</p>
          </div>
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
