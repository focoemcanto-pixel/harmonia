'use client'
/**
 * UtmLinker — propaga parâmetros UTM da URL para todos os links de checkout.
 *
 * Como funciona:
 * 1. Lê os parâmetros da URL atual (?utm_source=...&utm_medium=...etc).
 * 2. Após a página carregar, percorre todos os <a> que apontam para os
 *    domínios listados em CHECKOUT_PREFIXES e acrescenta os params.
 * 3. Também monta o parâmetro `sck` no formato esperado pela Kiwify.
 *
 * Para desativar: basta remover a linha <UtmLinker /> de app/layout.tsx.
 */

import { useEffect } from 'react'

const CHECKOUT_PREFIXES = [
  'https://pay.kiwify.com.br',
]

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
    const pageParams = new URLSearchParams(window.location.search)
    if (!pageParams.toString()) return // sem UTM na URL — nada a fazer

    const sck = buildSck()

    document.querySelectorAll<HTMLAnchorElement>('a').forEach((a) => {
      const isCheckout = CHECKOUT_PREFIXES.some((prefix) =>
        a.href.startsWith(prefix)
      )
      if (!isCheckout) return

      const separator = a.href.includes('?') ? '&' : '?'
      a.href += separator + pageParams.toString() + sck
    })
  }, [])

  return null // componente invisível, só executa lógica
}
