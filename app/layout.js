import './globals.css'

export const metadata = {
  title: 'NextGateway | Co-Own Vacation Rentals. Split Profits Transparently.',
  description: 'NextGateway brings together small groups of investors to co-own and operate AI-optimized short-term rental properties with full financial transparency.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NextGateway LLC",
          "description": "Co-investment platform for short-term rental properties. Small groups of investors acquire and operate vacation rentals with AI-optimized pricing and transparent profit splits.",
          "url": "https://nextgateway.io",
          "foundingDate": "2026",
          "founder": {
            "@type": "Person",
            "description": "Enterprise technology professional with 20+ years experience solving complex problems at scale for Fortune 500 companies and global enterprises."
          },
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "SC",
            "addressCountry": "US"
          },
          "areaServed": "US",
          "serviceType": ["Short-Term Rental Co-Investment", "Vacation Rental Management", "Real Estate Co-Ownership"],
          "knowsAbout": ["Short-Term Rentals", "Vacation Rental Investment", "Real Estate Co-Ownership", "Airbnb Investing", "STR Management"]
        })}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
