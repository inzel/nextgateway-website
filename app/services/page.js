import Link from 'next/link'

export default function Services() {
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
        <h1 className="text-5xl font-bold mb-6">Services</h1>
        <p className="text-xl text-gray-300 mb-16">
          GEO consulting to drive business growth, and AI infrastructure intelligence
        </p>

        {/* Founding Client Special */}
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-8 mb-16">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">🚀</div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Founding Client Special</h2>
              <p className="text-gray-300 text-lg">Limited to the first 5 clients</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-black/30 rounded-xl p-6">
              <div className="text-sm text-blue-400 font-semibold mb-2">FOUNDATION</div>
              <div className="text-3xl font-bold mb-2">
                $375<span className="text-lg text-gray-400">/mo</span>
                <span className="ml-3 text-sm line-through text-gray-500">$750/mo</span>
              </div>
              <div className="text-green-400 font-semibold text-sm">Save 50% · Rate locked for 12 months</div>
            </div>
            
            <div className="bg-black/30 rounded-xl p-6">
              <div className="text-sm text-blue-400 font-semibold mb-2">GROWTH</div>
              <div className="text-3xl font-bold mb-2">
                $1,250<span className="text-lg text-gray-400">/mo</span>
                <span className="ml-3 text-sm line-through text-gray-500">$2,500/mo</span>
              </div>
              <div className="text-green-400 font-semibold text-sm">Save 50% · Rate locked for 12 months</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-black/30 rounded-lg">
            <p className="text-gray-300 mb-3">
              <strong className="text-white">In exchange for the founding rate,</strong> you'll help us build case studies and provide feedback on our process. This helps us refine our approach while you get exceptional value.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Detailed case study documenting your results</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Testimonial for our website (with your approval)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Monthly feedback sessions to improve our process</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>First access to new features and services</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <Link 
              href="/audit" 
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all"
            >
              Start with Free Audit →
            </Link>
            <p className="text-xs text-gray-400 mt-3">Spots filling fast · Only 5 available</p>
          </div>
        </div>

        {/* Regular Pricing */}
        <h2 className="text-3xl font-bold mb-8">Standard Pricing</h2>
        <p className="text-gray-400 mb-8">After founding client spots are filled</p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Foundation</h3>
            <div className="text-4xl font-bold mb-4">$750<span className="text-lg text-gray-400">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li>✓ Free GEO audit</li>
              <li>✓ Content optimization</li>
              <li>✓ Monthly reports</li>
            </ul>
            <Link href="/audit" className="block text-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg">
              Get Started
            </Link>
          </div>

          <div className="bg-white/5 border border-blue-600 rounded-xl p-8">
            <div className="text-xs font-bold text-blue-500 mb-4">MOST POPULAR</div>
            <h3 className="text-2xl font-bold mb-4">Growth</h3>
            <div className="text-4xl font-bold mb-4">$2,500<span className="text-lg text-gray-400">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li>✓ Everything in Foundation</li>
              <li>✓ Citation building</li>
              <li>✓ Original research</li>
            </ul>
            <Link href="/audit" className="block text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
              Get Started
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-4">Custom</div>
            <ul className="space-y-3 mb-8">
              <li>✓ Everything in Growth</li>
              <li>✓ Dedicated strategist</li>
              <li>✓ Multi-brand support</li>
            </ul>
            <Link href="/audit" className="block text-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Services FAQ */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Common Questions About GEO Services</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">How much does GEO cost?</h3>
              <p className="text-gray-300">
                Our GEO consulting starts at $750/month for the Foundation package, $2,500/month for Growth, and custom pricing for Enterprise. Founding clients (first 5) get 50% off for 12 months. All plans are month-to-month with no long-term contracts required.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">What's included in a GEO audit?</h3>
              <p className="text-gray-300">
                Our free audit includes AI citation testing (testing your domain across ChatGPT, Perplexity, Claude, and Gemini), content structure analysis, authority signal evaluation, competitor benchmarking, and a prioritized opportunity map. Results are delivered within 24-48 hours as a detailed report.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">How long does GEO take to show results?</h3>
              <p className="text-gray-300">
                Initial improvements (content optimization, schema implementation) can be completed in 2-4 weeks. You'll typically see your first AI citations within 4-8 weeks. Significant authority (consistent citations across multiple platforms and queries) develops over 3-6 months as citation signals compound.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">What makes NextGateway different from SEO agencies?</h3>
              <p className="text-gray-300">
                We're founded by infrastructure engineers with 20+ years scaling systems for Fortune 500 technology companies, not marketers. We understand how AI models work at the protocol level, use first-principles thinking rather than generic playbooks, and focus specifically on AI platform citations rather than traditional search rankings.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Do you work with businesses in my industry?</h3>
              <p className="text-gray-300">
                We work with B2B companies across all industries, from startups to mid-market to enterprise. Our GEO approach is customized to your specific category, target audience, and competitive landscape. We're currently focused on B2B SaaS, professional services, and technology companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
