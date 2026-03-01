import { Link } from 'react-router-dom'
import { Reveal, Card3D } from '../components/utils'

export default function Membership() {
  const plans = [
    { plan: 'Starter', price: '999', period: '/month', features: ['Full gym access', 'Locker room access', 'Free WiFi', 'Basic fitness assessment'], featured: false },
    { plan: 'Pro', price: '1,999', period: '/month', features: ['Everything in Starter', '2 PT sessions/month', 'Group classes included', 'Nutrition consultation', 'Progress tracking app'], featured: true },
    { plan: 'Elite', price: '3,999', period: '/month', features: ['Everything in Pro', 'Unlimited PT sessions', 'Recovery zone access', 'Custom meal plans', 'Priority booking', '1-on-1 monthly review'], featured: false },
  ]

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="hero-bg" />
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <Reveal><span className="hero-badge">Membership Plans</span></Reveal>
          <Reveal delay={150}><h1>Invest In <span className="text-gradient">Yourself</span></h1></Reveal>
          <Reveal delay={300}><p className="hero-desc">Flexible plans designed for every fitness level. No hidden fees, no long-term contracts.</p></Reveal>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((p, i) => (
              <Reveal key={i} delay={i * 150}>
                <Card3D className={`pricing-card ${p.featured ? 'featured' : ''}`}>
                  {p.featured && <span className="pricing-badge">Most Popular</span>}
                  <h3>{p.plan}</h3>
                  <div className="pricing-amount">
                    <span className="currency">&#8377;</span>
                    <span className="price">{p.price}</span>
                    <span className="period">{p.period}</span>
                  </div>
                  <ul className="pricing-features">
                    {p.features.map((f, j) => (
                      <li key={j}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`btn btn-block ${p.featured ? 'btn-primary' : 'btn-outline'}`}>Get Started</Link>
                </Card3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="section">
        <div className="container">
          <Reveal><div className="section-label">Benefits</div></Reveal>
          <Reveal delay={100}>
            <div className="section-head">
              <h2>What Every Member <span className="text-gradient">Gets</span></h2>
              <p>All memberships include access to our premium facilities and community.</p>
            </div>
          </Reveal>
          <div className="programs-grid">
            {[
              { title: 'Premium Equipment', desc: 'Over 50 pieces of state-of-the-art machines, free weights, and functional training gear.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11M6.5 17.5h11M3 10h3.5v4H3zM17.5 10H21v4h-3.5zM6.5 6.5v4M6.5 13.5v4M17.5 6.5v4M17.5 13.5v4M6.5 10h11v4h-11z"/></svg> },
              { title: 'Clean Facilities', desc: 'Sanitized locker rooms, spacious training floors, and a welcoming atmosphere.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
              { title: 'Expert Guidance', desc: 'Floor trainers available during all operating hours to assist and guide your workouts.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
              { title: 'Free Parking', desc: 'Ample free parking space so you can focus on your workout, not finding a spot.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
              { title: 'Hydration Station', desc: 'Free filtered water and a juice bar with healthy shakes and post-workout drinks.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg> },
              { title: 'Community Events', desc: 'Monthly fitness challenges, workshops, and social events to keep you motivated.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 100}>
                <Card3D className="program-card">
                  <div className="program-icon">{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </Card3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container">
          <Reveal><div className="section-label">FAQ</div></Reveal>
          <Reveal delay={100}>
            <div className="section-head">
              <h2>Common <span className="text-gradient">Questions</span></h2>
            </div>
          </Reveal>
          <div className="faq-list">
            {[
              { q: 'Is there a joining fee?', a: 'No joining fee! Just pick your plan and you are all set to start training.' },
              { q: 'Can I cancel anytime?', a: 'Yes, all our plans are month-to-month. Cancel anytime with no penalties.' },
              { q: 'Do you offer a free trial?', a: 'Yes! New members get their first week completely free. Just walk in or contact us.' },
              { q: 'What are your operating hours?', a: 'We are open Mon-Sun from 5:00 AM to 11:00 PM. Elite members get 24/7 key card access.' },
              { q: 'Can I freeze my membership?', a: 'Yes, you can freeze your membership for up to 30 days per year for medical or travel reasons.' },
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="faq-item">
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <Reveal>
        <section className="cta-banner">
          <div className="cta-glow" />
          <div className="container cta-inner">
            <h2>Still Have Questions?</h2>
            <p>Our team is ready to help you choose the perfect plan.</p>
            <Link to="/contact" className="btn btn-primary btn-lg btn-glow">
              Contact Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  )
}
