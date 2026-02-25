'use client'
import { useEffect, useRef } from 'react'

export default function Home() {
  const fadeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    fadeRefs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const fade = (i) => (el) => { fadeRefs.current[i] = el }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink: #0f0f0f;
          --paper: #f5f2ec;
          --cream: #faf8f3;
          --accent: #c8873a;
          --accent-light: #e8b06a;
          --muted: #6b6560;
          --rule: #d8d3cb;
          --white: #ffffff;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          color: var(--ink);
          font-size: 16px;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .ng-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 48px;
          background: rgba(245, 242, 236, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--rule);
        }

        .ng-nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--ink);
          text-decoration: none;
          letter-spacing: -0.3px;
        }

        .ng-nav-logo span { color: var(--accent); }

        .ng-nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }

        .ng-nav-links a {
          font-size: 14px;
          font-weight: 500;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.3px;
          transition: color 0.2s;
        }

        .ng-nav-links a:hover { color: var(--ink); }

        .ng-hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding-top: 80px;
        }

        .ng-hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 64px 80px 48px;
          position: relative;
        }

        .ng-hero-left::after {
          content: '';
          position: absolute;
          right: 0; top: 15%; bottom: 15%;
          width: 1px;
          background: var(--rule);
        }

        .ng-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 24px;
        }

        .ng-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 4.5vw, 64px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -1.5px;
          color: var(--ink);
          margin-bottom: 28px;
        }

        .ng-hero-title em {
          font-style: italic;
          color: var(--accent);
        }

        .ng-hero-sub {
          font-size: 18px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.7;
          max-width: 460px;
          margin-bottom: 48px;
        }

        .ng-stats {
          display: flex;
          gap: 40px;
        }

        .ng-stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 600;
          color: var(--ink);
          line-height: 1;
          display: block;
        }

        .ng-stat-label {
          font-size: 12px;
          font-weight: 400;
          color: var(--muted);
          letter-spacing: 0.3px;
          display: block;
          margin-top: 4px;
        }

        .ng-hero-right {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 48px 80px 64px;
          background: var(--paper);
          position: relative;
          overflow: hidden;
        }

        .ng-hero-right::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(200,135,58,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .ng-property-card {
          background: var(--white);
          border-radius: 16px;
          overflow: hidden;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06);
          animation: ngFloat 6s ease-in-out infinite;
        }

        @keyframes ngFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .ng-prop-img {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #2d4a3e 0%, #1a2e26 50%, #0d1f1a 100%);
          position: relative;
          display: flex;
          align-items: flex-end;
          padding: 16px;
        }

        .ng-prop-icon {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -60%);
          font-size: 64px;
          opacity: 0.4;
        }

        .ng-prop-badge {
          position: relative;
          z-index: 1;
          background: var(--accent);
          color: white;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .ng-prop-body { padding: 20px; }

        .ng-prop-location {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 4px;
        }

        .ng-prop-name {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 16px;
        }

        .ng-prop-investors {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--rule);
        }

        .ng-avatars { display: flex; }

        .ng-avatar {
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 2px solid var(--white);
          margin-right: -8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 600;
          color: white;
        }

        .ng-av1 { background: #4a6fa5; }
        .ng-av2 { background: #c8873a; }
        .ng-av3 { background: #4a8c6a; }

        .ng-investor-text {
          font-size: 13px;
          color: var(--muted);
          margin-left: 8px;
        }

        .ng-prop-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
        }

        .ng-metric-value {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          color: var(--ink);
          display: block;
        }

        .ng-metric-value.green { color: #3a8c5a; }

        .ng-metric-label {
          font-size: 11px;
          color: var(--muted);
          display: block;
        }

        .ng-section { padding: 100px 48px; }

        .ng-inner { max-width: 1100px; margin: 0 auto; }

        .ng-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 3vw, 46px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -1px;
          color: var(--ink);
          margin-bottom: 20px;
        }

        .ng-section-body {
          font-size: 17px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.75;
          max-width: 600px;
        }

        .ng-how {
          background: var(--paper);
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
        }

        .ng-how-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          margin-top: 64px;
        }

        .ng-steps { display: flex; flex-direction: column; gap: 40px; }

        .ng-step {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 20px;
          align-items: start;
        }

        .ng-step-num {
          width: 48px; height: 48px;
          border-radius: 50%;
          border: 1.5px solid var(--rule);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          color: var(--accent);
          flex-shrink: 0;
          transition: all 0.3s;
        }

        .ng-step:hover .ng-step-num {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
        }

        .ng-step h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .ng-step p { font-size: 15px; color: var(--muted); line-height: 1.65; }

        .ng-how-visual { position: sticky; top: 120px; }

        .ng-dashboard {
          background: var(--white);
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border: 1px solid var(--rule);
        }

        .ng-dash-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--rule);
        }

        .ng-dash-title {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 600;
          color: var(--ink);
        }

        .ng-dash-period {
          font-size: 12px;
          color: var(--muted);
          background: var(--paper);
          padding: 4px 10px;
          border-radius: 20px;
        }

        .ng-dash-rev-label {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 4px;
        }

        .ng-dash-rev-number {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          color: var(--ink);
        }

        .ng-dash-rev-change {
          font-size: 13px;
          color: #3a8c5a;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .ng-splits { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }

        .ng-split-row { display: flex; align-items: center; gap: 12px; }

        .ng-split-name {
          font-size: 13px; font-weight: 500;
          color: var(--ink); width: 80px; flex-shrink: 0;
        }

        .ng-split-bar-wrap {
          flex: 1; height: 6px;
          background: var(--paper); border-radius: 3px; overflow: hidden;
        }

        .ng-split-bar { height: 100%; border-radius: 3px; background: var(--accent); }

        .ng-split-amount {
          font-size: 13px; font-weight: 500;
          color: var(--ink); width: 64px; text-align: right; flex-shrink: 0;
        }

        .ng-dash-status {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: #3a8c5a; font-weight: 500;
        }

        .ng-status-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #3a8c5a; animation: ngPulse 2s ease-in-out infinite;
        }

        @keyframes ngPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .ng-why-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2px; margin-top: 48px;
          background: var(--rule); border: 1px solid var(--rule);
          border-radius: 16px; overflow: hidden;
        }

        .ng-why-card { background: var(--cream); padding: 40px 36px; transition: background 0.3s; }
        .ng-why-card:hover { background: var(--white); }
        .ng-why-icon { font-size: 28px; margin-bottom: 20px; display: block; }

        .ng-why-card h3 {
          font-family: 'Playfair Display', serif; font-size: 20px;
          font-weight: 600; color: var(--ink); margin-bottom: 12px; line-height: 1.3;
        }

        .ng-why-card p { font-size: 15px; color: var(--muted); line-height: 1.65; }

        .ng-founder { background: var(--ink); color: var(--cream); }

        .ng-founder-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }

        .ng-founder-eyebrow {
          font-size: 11px; font-weight: 500; letter-spacing: 2.5px;
          text-transform: uppercase; color: var(--accent-light); margin-bottom: 20px;
        }

        .ng-founder-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 2.5vw, 40px);
          font-weight: 700; line-height: 1.2;
          letter-spacing: -0.8px; color: var(--cream); margin-bottom: 24px;
        }

        .ng-founder-bio {
          font-size: 16px; font-weight: 300;
          color: rgba(245,242,236,0.65); line-height: 1.8; margin-bottom: 36px;
        }

        .ng-cred-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }

        .ng-cred-list li {
          display: flex; align-items: center; gap: 12px;
          font-size: 15px; color: rgba(245,242,236,0.8);
        }

        .ng-cred-check {
          width: 20px; height: 20px; border-radius: 50%;
          background: rgba(200,135,58,0.2); border: 1px solid var(--accent);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 10px; color: var(--accent-light);
        }

        .ng-founder-cards { display: flex; flex-direction: column; gap: 16px; }

        .ng-founder-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 24px 28px;
        }

        .ng-fc-label {
          font-size: 11px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--accent-light); margin-bottom: 8px;
        }

        .ng-fc-value {
          font-family: 'Playfair Display', serif;
          font-size: 22px; font-weight: 600; color: var(--cream);
        }

        .ng-fc-sub { font-size: 13px; color: rgba(245,242,236,0.5); margin-top: 4px; }

        .ng-approach { border-top: 1px solid var(--rule); }

        .ng-approach-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; margin-top: 64px; align-items: start;
        }

        .ng-approach-quote {
          border-left: 3px solid var(--accent); padding-left: 24px;
          font-family: 'Playfair Display', serif; font-size: 20px;
          font-style: italic; color: var(--ink); line-height: 1.5; margin-top: 32px;
        }

        .ng-pillars { display: flex; flex-direction: column; }

        .ng-pillar {
          padding: 28px 0; border-bottom: 1px solid var(--rule);
          display: grid; grid-template-columns: 28px 1fr;
          gap: 16px; align-items: start;
        }

        .ng-pillar:first-child { border-top: 1px solid var(--rule); }

        .ng-pillar-num {
          font-family: 'Playfair Display', serif; font-size: 13px;
          font-weight: 600; color: var(--accent); padding-top: 2px;
        }

        .ng-pillar h4 { font-size: 16px; font-weight: 500; color: var(--ink); margin-bottom: 6px; }
        .ng-pillar p { font-size: 14px; color: var(--muted); line-height: 1.6; }

        .ng-footer {
          background: var(--paper); border-top: 1px solid var(--rule);
          padding: 48px; display: flex;
          align-items: center; justify-content: space-between;
        }

        .ng-footer-logo {
          font-family: 'Playfair Display', serif; font-size: 20px;
          font-weight: 700; color: var(--ink); text-decoration: none;
        }

        .ng-footer-logo span { color: var(--accent); }
        .ng-footer-copy { font-size: 13px; color: var(--muted); }
        .ng-footer-links { display: flex; gap: 28px; list-style: none; }

        .ng-footer-links a {
          font-size: 13px; color: var(--muted);
          text-decoration: none; transition: color 0.2s;
        }

        .ng-footer-links a:hover { color: var(--ink); }

        .fade-up {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .fade-up.visible { opacity: 1; transform: translateY(0); }

        @media (max-width: 900px) {
          .ng-nav { padding: 16px 24px; }
          .ng-nav-links { display: none; }
          .ng-hero { grid-template-columns: 1fr; }
          .ng-hero-left { padding: 60px 24px 40px; }
          .ng-hero-left::after { display: none; }
          .ng-hero-right { padding: 40px 24px 60px; }
          .ng-section { padding: 72px 24px; }
          .ng-how-grid, .ng-founder-inner, .ng-approach-grid { grid-template-columns: 1fr; gap: 48px; }
          .ng-why-grid { grid-template-columns: 1fr; }
          .ng-stats { gap: 24px; }
          .ng-footer { flex-direction: column; gap: 24px; text-align: center; }
          .ng-how-visual { position: static; }
          .ng-founder-inner { padding: 72px 24px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="ng-nav">
        <a href="/" className="ng-nav-logo">Next<span>Gateway</span></a>
        <ul className="ng-nav-links">
          <li><a href="#how">How It Works</a></li>
          <li><a href="#why">Why Co-Own</a></li>
          <li><a href="#founder">About</a></li>
          <li><a href="#approach">Our Approach</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="ng-hero">
        <div className="ng-hero-left">
          <p className="ng-eyebrow">Vacation Rental Co-Investment</p>
          <h1 className="ng-hero-title">Co-own vacation<br/>rentals. Split profits<br/><em>transparently.</em></h1>
          <p className="ng-hero-sub">NextGateway brings together small groups of investors to acquire and operate short-term rental properties — with AI-optimized pricing, full financial transparency, and automated profit splits.</p>
          <div className="ng-stats">
            <div>
              <span className="ng-stat-number">60–80%</span>
              <span className="ng-stat-label">Occupancy in top markets</span>
            </div>
            <div>
              <span className="ng-stat-number">$3–5K</span>
              <span className="ng-stat-label">Avg net/month per property</span>
            </div>
            <div>
              <span className="ng-stat-number">3–5x</span>
              <span className="ng-stat-label">Partners per deal</span>
            </div>
          </div>
        </div>
        <div className="ng-hero-right">
          <div className="ng-property-card">
            <div className="ng-prop-img">
              <span className="ng-prop-icon">🏡</span>
              <span className="ng-prop-badge">Active · Orlando, FL</span>
            </div>
            <div className="ng-prop-body">
              <p className="ng-prop-location">Kissimmee · 4 bed / 3 bath</p>
              <h3 className="ng-prop-name">Lakeside Villa</h3>
              <div className="ng-prop-investors">
                <div className="ng-avatars">
                  <div className="ng-avatar ng-av1">CL</div>
                  <div className="ng-avatar ng-av2">MR</div>
                  <div className="ng-avatar ng-av3">JT</div>
                </div>
                <span className="ng-investor-text">3 co-investors · equal shares</span>
              </div>
              <div className="ng-prop-metrics">
                <div>
                  <span className="ng-metric-value green">$4,820</span>
                  <span className="ng-metric-label">This month</span>
                </div>
                <div>
                  <span className="ng-metric-value">74%</span>
                  <span className="ng-metric-label">Occupancy</span>
                </div>
                <div>
                  <span className="ng-metric-value">9.2%</span>
                  <span className="ng-metric-label">Annual ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="ng-section ng-how" id="how">
        <div className="ng-inner">
          <p className="ng-eyebrow fade-up" ref={fade(0)}>The Process</p>
          <h2 className="ng-section-title fade-up" ref={fade(1)}>From idea to income<br/>in four steps.</h2>
          <div className="ng-how-grid">
            <div className="ng-steps">
              {[
                { n: '1', title: 'Identify the right property', body: 'We use live market data to pinpoint high-yield vacation rental markets — analyzing occupancy rates, average daily rates, regulatory stability, and entry costs before committing to any deal.' },
                { n: '2', title: 'Form a small investor group', body: '2–5 investors pool capital to acquire the property. Each partner holds a defined ownership percentage with full legal clarity. Lower individual capital requirement, shared risk, shared reward.' },
                { n: '3', title: 'AI handles pricing and operations', body: 'Dynamic pricing tools adjust nightly rates in real time based on demand, local events, and competitor rates. Automated messaging, smart locks, and operations tools keep the property running efficiently.' },
                { n: '4', title: 'Profits split automatically, every month', body: 'Revenue flows through a shared dashboard — completely transparent. Each investor sees exactly what came in, what was spent, and what hits their account. No spreadsheets, no chasing payments.' },
              ].map((s, i) => (
                <div className="ng-step fade-up" ref={fade(2 + i)} key={i}>
                  <div className="ng-step-num">{s.n}</div>
                  <div><h3>{s.title}</h3><p>{s.body}</p></div>
                </div>
              ))}
            </div>
            <div className="ng-how-visual fade-up" ref={fade(6)}>
              <div className="ng-dashboard">
                <div className="ng-dash-header">
                  <span className="ng-dash-title">Monthly Dashboard</span>
                  <span className="ng-dash-period">January 2026</span>
                </div>
                <p className="ng-dash-rev-label">Total Revenue</p>
                <p className="ng-dash-rev-number">$5,340</p>
                <p className="ng-dash-rev-change">↑ 12% vs last month</p>
                <div className="ng-splits">
                  {[
                    { name: 'Investor A', pct: '33%', amt: '$1,270', muted: false },
                    { name: 'Investor B', pct: '33%', amt: '$1,270', muted: false },
                    { name: 'Investor C', pct: '33%', amt: '$1,270', muted: false },
                    { name: 'Expenses', pct: '29%', amt: '−$1,530', muted: true },
                  ].map((r, i) => (
                    <div className="ng-split-row" key={i} style={r.muted ? { opacity: 0.45 } : {}}>
                      <span className="ng-split-name">{r.name}</span>
                      <div className="ng-split-bar-wrap">
                        <div className="ng-split-bar" style={{ width: r.pct, background: r.muted ? '#c0b8ae' : undefined }} />
                      </div>
                      <span className="ng-split-amount" style={r.muted ? { color: 'var(--muted)' } : {}}>{r.amt}</span>
                    </div>
                  ))}
                </div>
                <div className="ng-dash-status">
                  <div className="ng-status-dot" />
                  Payouts sent · Feb 3, 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CO-OWN */}
      <section className="ng-section" id="why">
        <div className="ng-inner">
          <p className="ng-eyebrow fade-up" ref={fade(7)}>Why Co-Ownership</p>
          <h2 className="ng-section-title fade-up" ref={fade(8)}>Lower barrier.<br/>Shared risk. Real returns.</h2>
          <p className="ng-section-body fade-up" ref={fade(9)}>Solo ownership of a vacation rental requires $150K–$300K in upfront capital plus reserves. Co-investing through NextGateway makes quality markets accessible with a fraction of that commitment.</p>
          <div className="ng-why-grid">
            {[
              { icon: '💰', title: 'Reduced Capital Requirement', body: 'Split the down payment and setup costs across 3–5 investors. Enter strong markets like Orlando or Scottsdale for $40–70K instead of $200K+.' },
              { icon: '📊', title: 'Full Financial Transparency', body: 'Every booking, every expense, every payout is visible to all co-owners in real time. No guessing, no disputes, no surprises at month end.' },
              { icon: '🤖', title: 'AI-Optimized Operations', body: 'Dynamic pricing, automated guest communication, and smart property management run in the background — maximizing revenue without constant hands-on management.' },
              { icon: '🏛️', title: 'Tax Advantages', body: 'Short-term rental properties qualify for accelerated depreciation — a meaningful offset against W-2 or business income for high earners.' },
              { icon: '📍', title: 'Data-Driven Market Selection', body: 'We analyze occupancy rates, ADR, supply trends, and regulatory environment before selecting any market. No gut feel — every deal is built on real numbers.' },
              { icon: '🔒', title: 'Physical Asset Backing', body: 'Unlike stocks or digital assets, real property holds intrinsic value. Short-term rental income layers on top of baseline appreciation — two return streams from one investment.' },
            ].map((c, i) => (
              <div className="ng-why-card fade-up" ref={fade(10 + i)} key={i}>
                <span className="ng-why-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="ng-section ng-founder" id="founder">
        <div className="ng-founder-inner">
          <div className="fade-up" ref={fade(16)}>
            <p className="ng-founder-eyebrow">The Founder</p>
            <h2 className="ng-founder-title">Built by an investor.<br/>Backed by 20 years<br/>of enterprise experience.</h2>
            <p className="ng-founder-bio">NextGateway was founded by someone who has spent over two decades solving complex technical and operational problems at scale — for Fortune 500 companies and global enterprises. That same analytical discipline drives how we evaluate markets, structure deals, and operate properties. We built NextGateway to do this the right way: transparently and with aligned partners.</p>
            <ul className="ng-cred-list">
              {[
                '20+ years enterprise technology experience',
                'AWS & Google Cloud certified',
                'Active co-investor in NextGateway deals — not just a platform',
                'South Carolina based, investing in top STR markets nationally',
              ].map((c, i) => (
                <li key={i}><span className="ng-cred-check">✓</span>{c}</li>
              ))}
            </ul>
          </div>
          <div className="ng-founder-cards fade-up" ref={fade(17)}>
            {[
              { label: 'Platform Model', value: 'Co-Investor + Operator', sub: 'NextGateway participates in every deal alongside partners — our incentives are fully aligned.' },
              { label: 'Target Markets', value: 'Orlando · Scottsdale · Nashville', sub: 'High-demand, regulation-stable STR markets with 60–80% average occupancy.' },
              { label: 'Ideal Partner Profile', value: '$40–80K to deploy', sub: 'High earners looking for tax-advantaged real assets with passive, transparent income.' },
              { label: 'Current Stage', value: 'First Deal — Forming Now', sub: 'Identifying our first co-investment opportunity. Reach out to learn more.' },
            ].map((c, i) => (
              <div className="ng-founder-card" key={i}>
                <p className="ng-fc-label">{c.label}</p>
                <p className="ng-fc-value">{c.value}</p>
                <p className="ng-fc-sub">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="ng-section ng-approach" id="approach">
        <div className="ng-inner">
          <div className="ng-approach-grid">
            <div className="fade-up" ref={fade(18)}>
              <p className="ng-eyebrow">Our Philosophy</p>
              <h2 className="ng-section-title">Disciplined investing.<br/>Not speculation.</h2>
              <p className="ng-section-body">The vacation rental market rewards operators who treat it like a business. We research before we buy, model worst-case scenarios, and only enter markets where the fundamentals are strong — not just trending.</p>
              <blockquote className="ng-approach-quote">
                &ldquo;The difference between a property that generates $60,000 annually and one that barely covers its mortgage almost always comes down to market selection — not property quality.&rdquo;
              </blockquote>
            </div>
            <div className="ng-pillars fade-up" ref={fade(19)}>
              {[
                { n: '01', title: 'Market-first selection', body: 'We start with data — occupancy trends, ADR history, supply growth, regulation risk — before ever looking at individual properties.' },
                { n: '02', title: 'Conservative underwriting', body: "We model at 55–60% occupancy even in markets averaging 75%. Deals that don't work in the downside scenario don't get done." },
                { n: '03', title: 'Operational excellence', body: "AI pricing tools, professional photography, and hospitality-grade guest experience aren't optional — they're what separates top-performing properties from average ones." },
                { n: '04', title: 'Radical transparency', body: 'Every co-investor sees every number — bookings, expenses, maintenance costs, payout calculations — in real time. No black boxes.' },
                { n: '05', title: 'Aligned incentives', body: "NextGateway co-invests in every deal. We succeed when you succeed. This isn't a fee-extraction model — it's a partnership." },
              ].map((p, i) => (
                <div className="ng-pillar" key={i}>
                  <span className="ng-pillar-num">{p.n}</span>
                  <div><h4>{p.title}</h4><p>{p.body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ng-footer">
        <a href="/" className="ng-footer-logo">Next<span>Gateway</span></a>
        <p className="ng-footer-copy">© 2026 NextGateway LLC · Wyoming · hello@nextgateway.io</p>
        <ul className="ng-footer-links">
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:hello@nextgateway.io">Contact</a></li>
        </ul>
      </footer>
    </>
  )
}
