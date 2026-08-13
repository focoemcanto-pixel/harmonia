'use client'

import { useEffect } from 'react'
import SmartSalesAssistant from './SmartSalesAssistant'

const CHECKOUT_PREFIXES = ['https://pay.kiwify.com.br']
const WHATSAPP_URL = 'https://wa.me/5571996125869'

function buildSck(): string {
  try {
    const url = new URL(window.top?.location.href ?? window.location.href)
    const src = url.searchParams.get('utm_source') ?? ''
    const medium = url.searchParams.get('utm_medium') ?? ''
    const campaign = url.searchParams.get('utm_campaign') ?? ''
    const term = url.searchParams.get('utm_term') ?? ''
    const content = url.searchParams.get('utm_content') ?? ''
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
        if (a.dataset.humanWhatsapp === 'true') return
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
        const isCheckout = CHECKOUT_PREFIXES.some((prefix) => a.href.startsWith(prefix))
        if (!isCheckout) return
        const separator = a.href.includes('?') ? '&' : '?'
        a.href += separator + pageParams.toString() + sck
      })
    }

    return () => observer.disconnect()
  }, [])

  return <SmartSalesAssistant />
}
