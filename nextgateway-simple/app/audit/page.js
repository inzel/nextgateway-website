'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Audit() {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    email: ''
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Audit requested:', formData)
    setSubmitted(true)
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

      <div className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">Free GEO Audit</h1>
        <p className="text-xl text-gray-300 mb-12">
          Get a comprehensive analysis of your current AI visibility in 24-48 hours
        </p>

        {submitted ? (
          <div className="bg-blue-600/20 border border-blue-600/30 rounded-xl p-12 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-3xl font-bold mb-4">Request Received!</h3>
            <p className="text-xl text-gray-300">
              We'll deliver your audit within 24-48 hours to {formData.email}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-8">
            <div>
              <label className="block text-sm font-medium mb-2">Company Name *</label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                placeholder="Acme Inc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Website URL *</label>
              <input
                type="url"
                name="website"
                required
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                placeholder="you@company.com"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg"
            >
              Get My Free Audit
            </button>

            <p className="text-xs text-gray-400 text-center">
              No credit card required · Results in 24-48 hours
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
