import Link from 'next/link'

export default function Insights() {
  const articles = [
    {
      title: 'The Complete Guide to Generative Engine Optimization (GEO) in 2026',
      excerpt: 'Everything you need to know about optimizing for AI-powered search platforms like ChatGPT, Perplexity, and Google Gemini.',
      category: 'GEO Strategy',
      readTime: '15 min read',
      date: 'Feb 17, 2026',
      slug: '/insights/complete-guide-to-geo-2026'
    },
    {
      title: 'AI Data Center Buildout: $625B in Hyperscaler CapEx and What It Means',
      excerpt: 'A deep-dive into the infrastructure investment powering the AI revolution and where the bottlenecks are.',
      category: 'AI Infrastructure',
      readTime: '12 min read',
      date: 'Coming Soon',
      slug: null
    },
    {
      title: 'Why Network Infrastructure is the Bottleneck in AI Scale',
      excerpt: 'InfiniBand vs. Ethernet, GPU clustering challenges, and the networking constraints limiting AI compute.',
      category: 'AI Infrastructure',
      readTime: '10 min read',
      date: 'Coming Soon',
      slug: null
    }
  ]

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

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">Insights</h1>
        <p className="text-xl text-gray-300 mb-16">
          Deep-dives on GEO strategy and AI infrastructure intelligence
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div 
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-400">{article.date}</span>
                  {article.slug ? (
                    <Link href={article.slug} className="text-sm text-blue-500 font-medium hover:text-blue-400">
                      Read more →
                    </Link>
                  ) : (
                    <span className="text-sm text-gray-500">Coming soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
