'use client'
/**
 * UtmLinker — propaga parâmetros UTM da URL para todos os links de checkout
 * e mantém os links de WhatsApp apontando para o número oficial de suporte.
 *
 * Como funciona:
 * 1. Corrige todos os links wa.me para o número oficial.
 * 2. Lê os parâmetros da URL atual (?utm_source=...&utm_medium=...etc).
 * 3. Após a página carregar, percorre todos os <a> que apontam para os
 *    domínios listados em CHECKOUT_PREFIXES e acrescenta os params.
 * 4. Também monta o parâmetro `sck` no formato esperado pela Kiwify.
 *
 * Para desativar: basta remover a linha <UtmLinker /> de app/layout.tsx.
 */

import { useEffect } from 'react'

const CHECKOUT_PREFIXES = [
  'https://pay.kiwify.com.br',
]

const WHATSAPP_URL = 'https://wa.me/5571996950264'

function buildSck(): string {
  try {
    const url = new URL(window.top?.location.href ?? window.location.href)
    const src      = url.searchParams.get('utm_source')   ?? ''
    const medium   = url.searchParams.get('utm_medium')   ?? ''
    const campaign = url.searchParams.get('utm_campaign') ?? ''
    const term     = url.searchParams.get('utm_term')     ?? ''
    const content  = url.searchParams.get('utm_content')  ?? ''

    // só monta sck se havia pelo menos utm_source
    if (!src && !medium && !campaign && !term && !content) return ''
    return `&sck=${src}|${medium}|${campaign}|${term}|${content}`
  } catch {
    return ''
  }
}

export default function UtmLinker() {
  useEffect(() => {
    function updateWhatsappLinks() {
      document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me/"]').forEach((a) => {
        a.href = WHATSAPP_URL
      })
    }

    updateWhatsappLinks()

    const observer = new MutationObserver(updateWhatsappLinks)
    observer.observe(document.body, { childList: true, subtree: true })

    const pageParams = new URLSearchParams(window.location.search)

    if (pageParams.toString()) {
      const sck = buildSck()

      document.querySelectorAll<HTMLAnchorElement>('a').forEach((a) => {
        const isCheckout = CHECKOUT_PREFIXES.some((prefix) =>
          a.href.startsWith(prefix)
        )
        if (!isCheckout) return

        const separator = a.href.includes('?') ? '&' : '?'
        a.href += separator + pageParams.toString() + sck
      })
    }

    return () => observer.disconnect()
  }, [])

  return null // componente invisível, só executa lógica
}