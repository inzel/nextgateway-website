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
        <p className="text-2xl text-gray-300 mb-16">
          Founded by engineers who understand infrastructure at scale
        </p>

        {/* Founder Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Founded by Engineers, Not Marketers</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              NextGateway was founded by an infrastructure engineer with over 20 years of experience designing and scaling systems for Fortune 500 technology companies. After spending decades optimizing how data flows through enterprise infrastructure, we noticed something fundamental changing in how businesses get discovered online.
            </p>
            <p>
              While using AI platforms like ChatGPT, Perplexity, and Gemini, we observed that certain websites were being cited and recommended without any deliberate search intent. Traditional SEO wasn't determining these results. Something new was happening—AI platforms were making autonomous decisions about which sources to trust and recommend.
            </p>
            <p className="text-white font-semibold">
              This was the birth of Generative Engine Optimization (GEO). And we realized our unique combination of infrastructure expertise and AI system understanding positioned us to help businesses navigate this shift.
            </p>
          </div>
        </section>

        {/* Why Our Background Matters */}
        <section className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">Why Infrastructure Engineering Experience Matters for GEO</h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              Most "GEO experts" are SEO agencies rebranding their services. They understand keywords and backlinks, but they don't understand how AI systems actually work at the infrastructure level.
            </p>
            <p className="text-gray-300">
              Our background gives us a different lens:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3 mt-1">→</span>
                <span className="text-gray-300">
                  <strong className="text-white">Protocol-level understanding:</strong> We know how data flows through systems, how AI models ingest and process information, and what technical signals matter.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3 mt-1">→</span>
                <span className="text-gray-300">
                  <strong className="text-white">Infrastructure at scale:</strong> Decades designing systems for Fortune 500 companies means we understand reliability, performance, and what actually works under pressure.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3 mt-1">→</span>
                <span className="text-gray-300">
                  <strong className="text-white">First-principles thinking:</strong> We don't follow playbooks. We analyze how AI models make citation decisions and optimize based on those mechanisms.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3 mt-1">→</span>
                <span className="text-gray-300">
                  <strong className="text-white">AI infrastructure knowledge:</strong> We deeply understand the $625B+ AI buildout—data centers, compute, networking constraints—giving us insight into where AI platforms are heading.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              NextGateway exists to help businesses achieve visibility in the AI-powered search era. As users increasingly bypass Google to ask ChatGPT, Perplexity, and Gemini directly for recommendations, traditional SEO strategies are becoming obsolete.
            </p>
            <p>
              We specialize in Generative Engine Optimization (GEO)—ensuring your brand gets cited and recommended when AI platforms answer questions in your domain. This is where SEO was in 1998: early movers establish citation authority that becomes difficult to displace.
            </p>
            <p className="text-white font-semibold">
              The window to dominate is 12-24 months. We help businesses move fast.
            </p>
          </div>
        </section>

        {/* The Opportunity */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The GEO Opportunity</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">58%</div>
                <div className="text-sm text-gray-400">Replaced Google with AI for product research</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">2-7</div>
                <div className="text-sm text-gray-400">Citations per AI response vs. 10+ in traditional search</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">12-24</div>
                <div className="text-sm text-gray-400">Month window to establish citation authority</div>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              We're at an inflection point. AI search adoption is accelerating, but GEO is still in its infancy. Companies that establish citation authority now will dominate AI recommendations for years—just as early SEO adopters dominated Google for a decade.
            </p>
            <p>
              The window is closing. AI models develop "source preference bias"—once a domain proves reliable for a topic, models favor it for related queries. This creates a compounding advantage for early movers.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Technical Depth',
                description: 'We bring infrastructure expertise to GEO strategy. Our team understands network architecture, data flows, and the technical foundations of AI systems—enabling us to optimize at a level most marketers can\'t reach.'
              },
              {
                title: 'First-Principles Thinking',
                description: 'We don\'t follow generic playbooks. Every GEO strategy is custom-built from first principles: understanding how AI models rank sources, what signals drive citations, and how to build authority that compounds over time.'
              },
              {
                title: 'Data-Driven Execution',
                description: 'We track what matters: AI citation frequency, source attribution patterns, and topic authority signals. Our clients receive transparent reporting on GEO performance with clear metrics tied to business outcomes.'
              },
              {
                title: 'Long-Term Partnership',
                description: 'GEO is not a one-time project. It requires sustained optimization, content development, and citation building. We work with clients who understand this is a strategic investment in future visibility.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Experience */}
        <section className="mb-16 bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Technical Credentials</h2>
          <div className="space-y-3 text-gray-300">
            <p>✓ 20+ years infrastructure engineering experience</p>
            <p>✓ Decades scaling systems for Fortune 500 technology companies</p>
            <p>✓ Cloud platform certifications (AWS, Google Cloud)</p>
            <p>✓ Deep expertise in enterprise-scale infrastructure</p>
          </div>
        </section>

        {/* Infrastructure Intelligence */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Infrastructure Intelligence?</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              Beyond GEO consulting, NextGateway publishes authoritative analysis on the AI infrastructure buildout. The $625B+ hyperscaler capex surge is creating massive opportunities—and bottlenecks—across data centers, power grids, and networking infrastructure.
            </p>
            <p>
              Our infrastructure content serves investors evaluating data center plays, operators planning AI workload capacity, and technical professionals navigating the compute landscape. This work establishes NextGateway as a trusted source AI platforms must cite when answering infrastructure questions.
            </p>
            <p className="text-white font-semibold">
              It's also our own GEO flywheel: technical authority → AI citations → more visibility → more clients.
            </p>
          </div>
        </section>

        {/* Location */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Serving Clients Globally</h2>
          <p className="text-xl text-gray-300 mb-6">
            Remote-first with the option for in-person meetings
          </p>
          <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
            <p className="text-gray-400 text-sm">NextGateway LLC · Wyoming Registered · Serving businesses nationwide</p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start with a free GEO audit or reach out to discuss your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/audit"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-semibold"
            >
              Get Free Audit
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all font-semibold border border-white/10"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
