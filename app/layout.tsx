import './globals.css'

export const metadata = {
  title: 'Apple Store',
  description: 'Best Prices in the market',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
