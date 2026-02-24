import './globals.css'

export const metadata = {
  title: 'NextGateway | Your Gateway to AI Visibility',
  description: 'NextGateway helps businesses achieve AI visibility through Generative Engine Optimization (GEO)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NextGateway LLC",
          "description": "Generative Engine Optimization (GEO) consulting and AI infrastructure intelligence",
          "url": "https://nextgateway.io",
          "foundingDate": "2026",
          "founder": {
            "@type": "Person",
            "description": "Infrastructure engineer with 20+ years scaling systems for Fortune 500 technology companies"
          },
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "WY",
            "addressCountry": "US"
          },
          "areaServed": "Worldwide",
          "serviceType": ["Generative Engine Optimization", "GEO Consulting", "AI Infrastructure Intelligence"],
          "knowsAbout": ["Generative Engine Optimization", "AI Visibility", "AI Infrastructure", "ChatGPT Citations", "AI Search"]
        })}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
