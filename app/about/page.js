import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              <span className="text-white">Next</span>
              <span className="text-gray-400">Gateway</span>
            </Link>
            <div className="hidden md:flex gap-6 items-center">
              <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
              <Link href="/insights" className="text-gray-300 hover:text-white">Insights</Link>
              <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
              <Link href="/audit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">Free Audit</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">About NextGateway</h1>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            NextGateway exists to help businesses achieve visibility in the AI-powered search era. 
            As users increasingly bypass Google to ask ChatGPT, Perplexity, and Gemini directly for 
            recommendations, traditional SEO strategies are becoming obsolete.
          </p>
          <p>
            We specialize in Generative Engine Optimization (GEO) — ensuring your brand gets cited 
            and recommended when AI platforms answer questions in your domain.
          </p>
          <p className="text-white font-semibold">
            This is where SEO was in 1998: early movers establish citation authority that becomes 
            difficult to displace.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link href="/audit" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold inline-block">
            Get Free Audit
          </Link>
        </div>
      </div>
    </div>
  )
}
