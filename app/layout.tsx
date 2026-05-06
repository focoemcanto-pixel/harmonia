import './globals.css'

export const metadata = {
  title: 'Foco em Harmonia',
  description: 'Curso de divisão vocal para ministério de louvor'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
