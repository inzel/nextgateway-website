import './globals.css'

export const metadata = {
  title: 'NextGateway | Your Gateway to AI Visibility',
  description: 'NextGateway helps businesses achieve AI visibility through Generative Engine Optimization (GEO)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
