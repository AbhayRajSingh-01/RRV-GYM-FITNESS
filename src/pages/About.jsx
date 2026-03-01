import { Link } from 'react-router-dom'
import { Reveal, Card3D } from '../components/utils'

export default function About() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="hero-bg" />
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <Reveal><span className="hero-badge">Our Story</span></Reveal>
          <Reveal delay={150}><h1>About <span className="text-gradient">RRV GYM</span></h1></Reveal>
          <Reveal delay={300}><p className="hero-desc">More than a gym. A movement built on discipline, community, and relentless pursuit of greatness.</p></Reveal>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div className="about-text">
              <Reveal><h2>We Don&apos;t Just Build Bodies.<br /><span className="text-gradient">We Build Champions.</span></h2></Reveal>
              <Reveal delay={150}>
                <p>
                  Founded with a singular mission — to create a training environment where ordinary people achieve extraordinary results.
                  At RRV Gym Fitness, we combine science-backed training methodologies with a relentless atmosphere that fuels results.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <p>
                  Whether you&apos;re stepping into a gym for the first time or you&apos;re a seasoned athlete chasing new records,
                  our world-class coaches and cutting-edge facilities are engineered to push your limits. Every rep, every set, every drop of sweat brings you closer.
                </p>
              </Reveal>
              <div className="about-features">
                {[
                  { title: 'Science-Backed Programs', sub: 'Periodized training built by certified coaches', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
                  { title: '24/7 Open Access', sub: 'Train on your schedule, not ours', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
                  { title: 'Elite Community', sub: 'Surround yourself with driven individuals', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
                  { title: 'Modern Equipment', sub: '50+ pieces of premium, well-maintained machines', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11M6.5 17.5h11M3 10h3.5v4H3zM17.5 10H21v4h-3.5zM6.5 6.5v4M6.5 13.5v4M17.5 6.5v4M17.5 13.5v4M6.5 10h11v4h-11z"/></svg> },
                ].map((f, i) => (
                  <Reveal key={i} delay={300 + i * 100} direction="left">
                    <div className="about-feature">
                      <div className="feature-icon">{f.icon}</div>
                      <div><strong>{f.title}</strong><span>{f.sub}</span></div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal direction="right" delay={200}>
              <div className="about-visual">
                <Card3D className="about-image-card">
                  <div className="about-img-placeholder">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  </div>
                  <div className="about-img-badge"><span className="badge-num">8+</span><span>Years of Excellence</span></div>
                </Card3D>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="section">
        <div className="container">
          <Reveal><div className="section-label">Our Values</div></Reveal>
          <Reveal delay={100}>
            <div className="section-head">
              <h2>What Drives <span className="text-gradient">Us</span></h2>
              <p>The principles that shape every experience at RRV Gym.</p>
            </div>
          </Reveal>
          <div className="programs-grid">
            {[
              { title: 'Discipline', desc: 'Consistency beats motivation. We build habits that last a lifetime, not quick fixes.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
              { title: 'Community', desc: 'You are the average of the people you surround yourself with. Our tribe pushes each other.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
              { title: 'Results', desc: 'Every program is designed with measurable outcomes. We track, we adapt, we deliver.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg> },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 120}>
                <Card3D className="program-card">
                  <div className="program-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </Card3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trainers ── */}
      <section className="section">
        <div className="container">
          <Reveal><div className="section-label">Our Team</div></Reveal>
          <Reveal delay={100}>
            <div className="section-head">
              <h2>Meet The <span className="text-gradient">Experts</span></h2>
              <p>Certified professionals obsessed with your progress.</p>
            </div>
          </Reveal>
          <div className="trainers-grid">
            {[
              { name: 'Rohan Verma', role: 'Head Strength Coach', specialty: 'Powerlifting & Performance', initials: 'RV' },
              { name: 'Riya Sharma', role: 'Nutrition Specialist', specialty: 'Body Transformation', initials: 'RS' },
              { name: 'Vikram Singh', role: 'Functional Training', specialty: 'Mobility & Conditioning', initials: 'VS' },
              { name: 'Priya Kapoor', role: 'Group Fitness Lead', specialty: 'HIIT & Boxing', initials: 'PK' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 120} direction="up">
                <Card3D className="trainer-card">
                  <div className="trainer-avatar"><span>{t.initials}</span></div>
                  <h3>{t.name}</h3>
                  <p className="trainer-role">{t.role}</p>
                  <p className="trainer-specialty">{t.specialty}</p>
                </Card3D>
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
            <h2>Ready to Join Us?</h2>
            <p>Become part of the RRV family. Start your transformation today.</p>
            <Link to="/membership" className="btn btn-primary btn-lg btn-glow">
              View Membership Plans
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  )
}
