import Link from 'next/link'

export default function NetworkBottleneck() {
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

      <article className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <div className="text-sm text-gray-400 mb-4">February 24, 2026 · 10 min read</div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Why Network Infrastructure is the Bottleneck in AI Scale
          </h1>
          <p className="text-xl text-gray-300">
            InfiniBand vs. Ethernet, GPU clustering challenges, and the networking constraints limiting AI compute.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            Full article content coming from markdown - this is a placeholder page to make the link work.
            The complete 3,100-word article is in /home/claude/nextgateway-content/network-infrastructure-bottleneck-ai.md
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            Article covers: InfiniBand vs Ethernet market shift (2025), cost differences ($1.2M for 512-GPU cluster),
            performance gaps (1-2μs vs 5-10μs latency), GPU clustering challenges, collective operations,
            topology evolution, and future trends.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-400">
          <p>Last updated: February 24, 2026</p>
          <div className="mt-4">
            <Link href="/insights" className="text-blue-500 hover:text-blue-400">← Back to Insights</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
