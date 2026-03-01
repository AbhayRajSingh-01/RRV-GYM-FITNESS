import { Reveal } from '../components/utils'

export default function Contact() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="hero-bg" />
        <div className="hero-glow" />
        <div className="container page-hero-content">
          <Reveal><span className="hero-badge">Get In Touch</span></Reveal>
          <Reveal delay={150}><h1>Let&apos;s Start Your <span className="text-gradient">Transformation</span></h1></Reveal>
          <Reveal delay={300}><p className="hero-desc">Have questions or ready to begin? Drop us a message and our team will get back to you within 24 hours.</p></Reveal>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-left">
              <Reveal><h2>We&apos;d Love to <span className="text-gradient">Hear From You</span></h2></Reveal>
              <Reveal delay={100}><p>Whether you have questions about our programs, want to schedule a tour, or are ready to sign up, we&apos;re here to help.</p></Reveal>
              <div className="contact-details">
                {[
                  { title: 'Location', val: 'RRV Gym Fitness, Your City', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
                  { title: 'Phone', val: '+91-98765-43210', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg> },
                  { title: 'Email', val: 'contact@rrvgymfitness.com', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                  { title: 'Hours', val: 'Mon - Sun, 5:00 AM - 11:00 PM', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
                ].map((c, i) => (
                  <Reveal key={i} delay={150 + i * 80} direction="left">
                    <div className="contact-item">
                      <div className="contact-icon">{c.icon}</div>
                      <div><strong>{c.title}</strong><span>{c.val}</span></div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal direction="right" delay={200}>
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will get back to you shortly.') }}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" name="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" name="phone" placeholder="+91-XXXXX-XXXXX" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" name="subject" placeholder="Membership inquiry, general question, etc." />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us about your fitness goals or ask any question..." required />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Map Placeholder ── */}
      <section className="section">
        <div className="container">
          <Reveal><div className="section-label">Find Us</div></Reveal>
          <Reveal delay={100}>
            <div className="section-head">
              <h2>Our <span className="text-gradient">Location</span></h2>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="map-placeholder">
              <div className="map-inner">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <p>Map integration coming soon</p>
                <span>RRV Gym Fitness, Your City</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
