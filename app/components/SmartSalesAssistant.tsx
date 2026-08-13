'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'

const HUMAN_WHATSAPP = 'https://wa.me/5571996125869'
const STOP = new Set(['a','o','os','as','de','da','do','das','dos','e','em','no','na','nos','nas','um','uma','para','por','com','que','qual','como','eu','voce','você','tem','é','eh'])
type Msg = { role: 'bot' | 'user'; text: string }
function norm(s:string){ return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9\s]/g,' ') }
function tokens(s:string){ return norm(s).split(/\s+/).filter(w=>w.length>2 && !STOP.has(w)) }
function collectPageKnowledge(){
  const selectors = 'h1,h2,h3,p,li,summary,details,.hero-price-card,.offer-price-block,.price,.faq-item'
  return Array.from(document.querySelectorAll<HTMLElement>(selectors)).map(el=>el.innerText.replace(/\s+/g,' ').trim()).filter(t=>t.length>=18&&t.length<=420).filter((t,i,a)=>a.indexOf(t)===i)
}
function findCheckout(){ return document.querySelector<HTMLAnchorElement>('a[href*="pay.kiwify.com.br"]')?.href || '' }
function answerFromPage(question:string){
  const q=norm(question), data=collectPageKnowledge(), checkout=findCheckout()
  if(/checkout|comprar|inscri|matric|link|pagamento/.test(q)&&checkout) return `Claro! O link de inscrição desta oferta é: ${checkout}`
  const intentWords=tokens(question), boosts:string[]=[]
  if(/preco|valor|quanto|custa|parcela|parcelamento/.test(q)) boosts.push('r$','12x','preço','valor','vista','parcela')
  if(/vitalicio|acesso|tempo|prazo/.test(q)) boosts.push('vitalício','acesso','tempo')
  if(/garantia|reembolso/.test(q)) boosts.push('garantia','dias','reembolso')
  if(/conteudo|modulo|aula|curso|aprendo/.test(q)) boosts.push('aula','módulo','treinamento','aprender','divisão')
  if(/serve|para quem|iniciante|zero/.test(q)) boosts.push('para quem','começando','zero','ministério','louvor')
  const scored=data.map(text=>{const n=norm(text);let score=intentWords.reduce((s,w)=>s+(n.includes(w)?3:0),0);score+=boosts.reduce((s,w)=>s+(n.includes(norm(w))?2:0),0);return{text,score}}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score)
  if(!scored.length)return ''
  const best=scored.slice(0,2).map(x=>x.text).join(' ')
  return best.length>520?best.slice(0,517)+'...':best
}
export default function SmartSalesAssistant(){
  const [open,setOpen]=useState(false),[input,setInput]=useState('')
  const [messages,setMessages]=useState<Msg[]>([{role:'bot',text:'Oi! 👋 Posso tirar suas dúvidas sobre esta oferta. Pergunte sobre valor, parcelamento, acesso, garantia, conteúdo ou inscrição.'}])
  useEffect(()=>{const onClick=(e:MouseEvent)=>{const target=e.target as HTMLElement|null;const a=target?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement|null;if(!a||a.dataset.humanWhatsapp==='true')return;e.preventDefault();e.stopPropagation();setOpen(true)};document.addEventListener('click',onClick,true);return()=>document.removeEventListener('click',onClick,true)},[])
  const quick=useMemo(()=>['Qual o valor?','O acesso é vitalício?','Tem garantia?','Quero o link de inscrição'],[])
  function ask(text:string){const q=text.trim();if(!q)return;const found=answerFromPage(q);const reply=found||'Não encontrei essa informação com segurança nesta página. Nesse caso, é melhor falar diretamente com nosso atendimento.';setMessages(m=>[...m,{role:'user',text:q},{role:'bot',text:reply}]);setInput('')}
  function submit(e:FormEvent){e.preventDefault();ask(input)}
  return <>{open&&<div style={{position:'fixed',right:18,bottom:92,width:'min(390px,calc(100vw - 28px))',height:'min(560px,72vh)',zIndex:100000,background:'#fff',borderRadius:22,boxShadow:'0 24px 80px rgba(0,0,0,.28)',overflow:'hidden',display:'flex',flexDirection:'column',fontFamily:'Inter,Arial,sans-serif',border:'1px solid rgba(0,0,0,.08)'}}><div style={{padding:'16px 18px',background:'linear-gradient(135deg,#171717,#292929)',color:'#fff',display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><strong style={{display:'block',fontSize:16}}>Assistente Foco em Harmonia</strong><span style={{fontSize:12,opacity:.75}}>Dúvidas rápidas sobre esta oferta</span></div><button onClick={()=>setOpen(false)} aria-label="Fechar" style={{border:0,background:'transparent',color:'#fff',fontSize:25,cursor:'pointer'}}>×</button></div><div style={{flex:1,overflowY:'auto',padding:14,background:'#f6f7f8'}}>{messages.map((m,i)=><div key={i} style={{display:'flex',justifyContent:m.role==='user'?'flex-end':'flex-start',margin:'8px 0'}}><div style={{maxWidth:'84%',padding:'10px 12px',borderRadius:14,background:m.role==='user'?'#202124':'#fff',color:m.role==='user'?'#fff':'#222',fontSize:14,lineHeight:1.45,boxShadow:m.role==='bot'?'0 1px 5px rgba(0,0,0,.08)':'none',whiteSpace:'pre-wrap',overflowWrap:'anywhere'}}>{m.text}</div></div>)}<div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:10}}>{quick.map(q=><button key={q} onClick={()=>ask(q)} style={{border:'1px solid #ddd',background:'#fff',borderRadius:999,padding:'7px 9px',fontSize:12,cursor:'pointer'}}>{q}</button>)}</div></div><form onSubmit={submit} style={{padding:10,borderTop:'1px solid #eee',display:'flex',gap:8,background:'#fff'}}><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Digite sua dúvida..." style={{flex:1,minWidth:0,border:'1px solid #ddd',borderRadius:12,padding:'11px 12px',fontSize:14,outline:'none'}}/><button style={{border:0,borderRadius:12,padding:'0 14px',background:'#202124',color:'#fff',fontWeight:700,cursor:'pointer'}}>Enviar</button></form><a data-human-whatsapp="true" href={HUMAN_WHATSAPP} target="_blank" rel="noreferrer" style={{textAlign:'center',padding:'11px 14px',background:'#25D366',color:'#fff',fontWeight:800,textDecoration:'none',fontSize:14}}>Falar com um atendente no WhatsApp</a></div>}</>
}
