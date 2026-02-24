import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-6">
              <span className="text-blue-500 text-sm font-medium">The Future of Search is AI-Powered</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Gateway to <span className="text-blue-500">AI Visibility</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              NextGateway helps businesses achieve visibility in AI platforms like ChatGPT, Perplexity, and Google Gemini through Generative Engine Optimization (GEO).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/audit" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-lg font-semibold text-center">
                Get Your Free GEO Audit
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all text-lg font-semibold border border-white/10 text-center">
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">58%</div>
                <div className="text-sm text-gray-400">Replaced Google with AI for product research</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">2-7x</div>
                <div className="text-sm text-gray-400">Fewer citations than traditional search</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">89%</div>
                <div className="text-sm text-gray-400">B2B buyers use AI in purchasing decisions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">The AI Visibility Problem</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Traditional SEO is becoming obsolete. Users are bypassing Google and asking ChatGPT, Perplexity, and Gemini directly for recommendations.
                </p>
                <p>
                  But AI platforms cite only 2-7 sources per response — not 10 blue links. If your business isn't being recommended by AI, you're invisible to the fastest-growing segment of search behavior.
                </p>
                <p className="text-white font-semibold">
                  This is the GEO revolution — and the window to establish authority is closing fast.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">What is GEO?</h3>
              <p className="text-gray-300 mb-6">
                Generative Engine Optimization (GEO) is the practice of optimizing your content and brand so AI platforms cite and recommend you when users ask relevant questions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span className="text-gray-300">Structured Q&A content optimized for AI comprehension</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span className="text-gray-300">Third-party citation building (Reddit, G2, LinkedIn)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span className="text-gray-300">E-E-A-T signals that establish topical authority</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span className="text-gray-300">Schema markup and semantic optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span className="text-gray-300">Original research and data AI models must cite</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Two Ways We Help</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose GEO consulting to drive business growth, or access infrastructure intelligence to navigate the AI buildout
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GEO Consulting */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">GEO Consulting</h3>
              <p className="text-gray-300 mb-6">
                Full-service Generative Engine Optimization to get your business cited by ChatGPT, Perplexity, and Gemini when prospects search for solutions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Free GEO audit
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Content optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Citation building
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Performance tracking
                </li>
              </ul>
              <Link href="/services" className="text-blue-500 hover:text-blue-400 font-semibold inline-flex items-center">
                Learn more →
              </Link>
            </div>

            {/* Infrastructure Intelligence */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Infrastructure Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Authoritative analysis on the $625B+ AI infrastructure buildout — data centers, power, networking, and compute architecture for investors and operators.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Technical deep-dives
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Bottleneck analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Infrastructure trends
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Sponsorship opportunities
                </li>
              </ul>
              <Link href="/services" className="text-blue-500 hover:text-blue-400 font-semibold inline-flex items-center">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Establish AI Visibility?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Start with a free GEO audit. We'll analyze your current AI visibility and show you exactly where the opportunities are.
          </p>
          <Link href="/audit" className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-lg font-semibold">
            Get Your Free Audit
          </Link>
          <p className="text-sm text-gray-400 mt-6">No credit card required · Results in 24-48 hours</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2026 NextGateway LLC. All rights reserved.</p>
            <p className="mt-2">Based in South Carolina, serving clients globally</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
