import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Reveal, Card3D, AnimatedCounter } from '../components/utils'

export default function Home() {
  // BMI Calculator state
  const [bmiWeight, setBmiWeight] = useState('')
  const [bmiHeight, setBmiHeight] = useState('')
  const [bmiAge, setBmiAge] = useState('')
  const [bmiGender, setBmiGender] = useState('male')
  const [bmiCalculated, setBmiCalculated] = useState(false)

  const bmiValue = useMemo(() => {
    const w = parseFloat(bmiWeight)
    const h = parseFloat(bmiHeight) / 100
    if (w > 0 && h > 0) return (w / (h * h)).toFixed(1)
    return null
  }, [bmiWeight, bmiHeight])

  const bmiCategory = useMemo(() => {
    const v = parseFloat(bmiValue)
    if (!v) return null
    if (v < 18.5) return { label: 'Underweight', color: '#3b82f6', advice: 'You may need to gain some weight. Focus on calorie-surplus meals with lean proteins and complex carbs.' }
    if (v < 25) return { label: 'Normal', color: '#22c55e', advice: 'Great job! Maintain your healthy weight with balanced nutrition and regular exercise.' }
    if (v < 30) return { label: 'Overweight', color: '#f59e0b', advice: 'Consider a slight calorie deficit with increased physical activity to reach a healthier weight.' }
    return { label: 'Obese', color: '#ef4444', advice: 'We recommend consulting a professional. Our trainers can create a safe, effective plan for you.' }
  }, [bmiValue])

  const handleBmiSubmit = (e) => {
    e.preventDefault()
    if (bmiValue) setBmiCalculated(true)
  }

  const resetBmi = () => {
    setBmiWeight('')
    setBmiHeight('')
    setBmiAge('')
    setBmiGender('male')
    setBmiCalculated(false)
  }

  const dietPlan = useMemo(() => {
    if (!bmiCategory) return null
    const v = parseFloat(bmiValue)
    if (v < 18.5) {
      return {
        goal: 'Healthy Weight Gain', calories: '2,500 - 3,000',
        meals: [
          { time: 'Breakfast (7:00 AM)', items: ['Oatmeal with banana, nuts & honey', 'Whole eggs (3) scrambled with cheese', 'Glass of full-fat milk'] },
          { time: 'Mid-Morning (10:00 AM)', items: ['Protein shake with peanut butter', 'Trail mix (almonds, dates, raisins)'] },
          { time: 'Lunch (1:00 PM)', items: ['Brown rice with chicken breast (200g)', 'Dal (lentil soup) with ghee', 'Mixed vegetable salad with olive oil'] },
          { time: 'Pre-Workout (4:00 PM)', items: ['Banana with almond butter', 'Handful of dried fruits'] },
          { time: 'Post-Workout (6:30 PM)', items: ['Whey protein shake', 'Sweet potato (boiled)'] },
          { time: 'Dinner (8:30 PM)', items: ['Paneer/tofu curry with roti (3)', 'Grilled fish or chicken', 'Warm turmeric milk before bed'] },
        ],
        tips: ['Eat every 2-3 hours', 'Never skip breakfast', 'Add healthy fats like ghee, nuts, avocado', 'Strength training 4x/week to build muscle, not just fat'],
      }
    }
    if (v < 25) {
      return {
        goal: 'Maintain & Build Lean Muscle', calories: '2,000 - 2,400',
        meals: [
          { time: 'Breakfast (7:00 AM)', items: ['Greek yogurt with berries & granola', 'Whole grain toast with avocado', 'Green tea or black coffee'] },
          { time: 'Mid-Morning (10:00 AM)', items: ['Apple with almond butter', 'Handful of mixed nuts'] },
          { time: 'Lunch (1:00 PM)', items: ['Grilled chicken/paneer salad bowl', 'Quinoa or brown rice (1 cup)', 'Steamed broccoli and carrots'] },
          { time: 'Pre-Workout (4:00 PM)', items: ['Banana and protein bar', 'Black coffee for energy boost'] },
          { time: 'Post-Workout (6:30 PM)', items: ['Protein shake with banana', 'Boiled eggs (2)'] },
          { time: 'Dinner (8:30 PM)', items: ['Grilled fish/chicken with veggies', 'Multigrain roti (2)', 'Light soup or salad'] },
        ],
        tips: ['Balance macros: 40% carbs, 30% protein, 30% fats', 'Stay hydrated (3-4L water daily)', 'Mix cardio and strength training', 'Get 7-8 hours of quality sleep'],
      }
    }
    if (v < 30) {
      return {
        goal: 'Fat Loss & Toning', calories: '1,600 - 1,900',
        meals: [
          { time: 'Breakfast (7:00 AM)', items: ['Egg white omelette (4 whites) with spinach', 'Whole wheat toast (1 slice)', 'Green tea (no sugar)'] },
          { time: 'Mid-Morning (10:00 AM)', items: ['Cucumber & carrot sticks with hummus', 'Green juice or coconut water'] },
          { time: 'Lunch (1:00 PM)', items: ['Grilled chicken breast (150g) with salad', 'Brown rice (half cup) or 1 roti', 'Steamed vegetables with lemon'] },
          { time: 'Evening Snack (4:00 PM)', items: ['Roasted chana (chickpeas)', 'Buttermilk or green tea'] },
          { time: 'Post-Workout (6:30 PM)', items: ['Protein shake (water-based)', 'Apple or papaya slices'] },
          { time: 'Dinner (7:30 PM)', items: ['Grilled fish or tofu stir-fry', 'Vegetable soup (no cream)', 'Avoid carbs after 7 PM'] },
        ],
        tips: ['Create a 500-calorie daily deficit', 'Increase protein intake to preserve muscle', 'HIIT workouts 4-5x/week', 'Avoid processed foods, sugar, and fried items', 'Eat dinner before 8 PM'],
      }
    }
    return {
      goal: 'Weight Management Program', calories: '1,400 - 1,700',
      meals: [
        { time: 'Breakfast (7:00 AM)', items: ['Vegetable smoothie (spinach, celery, ginger)', 'Boiled eggs (2) or egg white omelette', 'Green tea with lemon'] },
        { time: 'Mid-Morning (10:00 AM)', items: ['Fruit bowl (papaya, watermelon)', 'Herbal tea or buttermilk'] },
        { time: 'Lunch (12:30 PM)', items: ['Grilled chicken/fish (150g) with salad', 'Millet roti (1) or small portion of brown rice', 'Curd (low-fat)'] },
        { time: 'Evening Snack (3:30 PM)', items: ['Handful of almonds (10-12)', 'Vegetable juice or green tea'] },
        { time: 'Post-Workout (6:00 PM)', items: ['Protein shake (water-based, low-cal)', 'Boiled egg whites (3)'] },
        { time: 'Dinner (7:00 PM)', items: ['Clear vegetable soup', 'Grilled paneer/tofu with steamed veggies', 'No heavy carbs at dinner'] },
      ],
      tips: ['Consult our in-house nutritionist for a personalized plan', 'Start with low-impact exercises (walking, swimming)', 'Gradually increase workout intensity', 'Track all meals in a food diary', 'Stay hydrated - minimum 4L water/day', 'Avoid sugar, refined flour, and packaged foods'],
    }
  }, [bmiValue, bmiCategory])

  return (
    <>
      {/* ── Hero ── */}
      <section id="hero" className="hero">
        <div className="hero-bg" />
        <div className="hero-glow" />
        <div className="hero-grid-bg" />
        <div className="hero-content">
          <Reveal direction="down" delay={100}>
            <span className="hero-badge">No. 1 Premium Fitness Club</span>
          </Reveal>
          <Reveal delay={200}>
            <h1>
              FORGE YOUR
              <br />
              <span className="text-gradient">STRONGEST</span>
              <br />
              SELF
            </h1>
          </Reveal>
          <Reveal delay={350}>
            <p className="hero-desc">
              Premium training, world-class equipment, and a relentless community. This is where
              transformation begins.
            </p>
          </Reveal>
          <Reveal delay={500}>
            <div className="hero-actions">
              <Link to="/membership" className="btn btn-primary btn-lg btn-glow">
                Start Your Journey
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="#programs" className="btn btn-outline btn-lg">
                Explore Programs
              </a>
            </div>
          </Reveal>
          <Reveal delay={650}>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">
                  <AnimatedCounter target="10000" suffix="+" />
                </span>
                <span className="stat-label">Members</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">
                  <AnimatedCounter target="50" suffix="+" />
                </span>
                <span className="stat-label">Equipment</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">
                  <AnimatedCounter target="15" />
                </span>
                <span className="stat-label">Expert Trainers</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">24/7</span>
                <span className="stat-label">Access</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="marquee-content">
              {['STRENGTH','POWER','DISCIPLINE','ENDURANCE','TRANSFORM','CONQUER'].map(w => (
                <span key={w + i}>{w}<span className="marquee-dot" /></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Programs ── */}
      <section id="programs" className="section">
        <div className="container">
          <Reveal><div className="section-label">Our Programs</div></Reveal>
          <Reveal delay={100}>
            <div className="section-head">
              <h2>Train Harder.<br /><span className="text-gradient">Train Smarter.</span></h2>
              <p>Programs designed for every level, engineered for maximum results.</p>
            </div>
          </Reveal>
          <div className="programs-grid">
            {[
              { title: 'Strength & Power', desc: 'Progressive overload programs to build raw strength, power, and dense muscle mass.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11M6.5 17.5h11M3 10h3.5v4H3zM17.5 10H21v4h-3.5zM6.5 6.5v4M6.5 13.5v4M17.5 6.5v4M17.5 13.5v4M6.5 10h11v4h-11z"/></svg>, tag: 'Most Popular' },
              { title: 'HIIT & Conditioning', desc: 'High-intensity interval circuits that torch fat and skyrocket your cardiovascular fitness.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
              { title: 'Personal Training', desc: 'One-on-one coaching tailored to your unique goals, schedule, and body type.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
              { title: 'Group Classes', desc: 'High-energy group sessions — from boxing and yoga to functional training.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
              { title: 'Nutrition Coaching', desc: 'Custom meal plans and macro guidance to fuel your training and accelerate recovery.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg> },
              { title: 'Recovery & Mobility', desc: 'Stretching, foam rolling, and recovery protocols to keep you injury-free.', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <Card3D className="program-card">
                  {p.tag && <span className="program-tag">{p.tag}</span>}
                  <div className="program-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <Link to="/contact" className="card-link">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </Card3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trainers ── */}
      <section id="trainers" className="section">
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

      {/* ── Testimonials ── */}
      <section id="testimonials" className="section">
        <div className="container">
          <Reveal><div className="section-label">Testimonials</div></Reveal>
          <Reveal delay={100}>
            <div className="section-head">
              <h2>What Our Members <span className="text-gradient">Say</span></h2>
            </div>
          </Reveal>
          <div className="testimonials-grid">
            {[
              { name: 'Arjun M.', text: 'RRV completely changed how I approach fitness. The trainers are exceptional and the environment is unmatched. Down 18kg in 6 months!', rating: 5 },
              { name: 'Sneha T.', text: "Best gym I've ever been to. The group classes are incredible and the community keeps me coming back every single day.", rating: 5 },
              { name: 'Karan P.', text: 'The personal training program here is next level. My strength has doubled and I feel better than I did in my 20s.', rating: 5 },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <Card3D className="testimonial-card">
                  <div className="stars">{[...Array(t.rating)].map((_, j) => (<svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>))}</div>
                  <p>&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author"><div className="author-avatar">{t.name[0]}</div><span>{t.name}</span></div>
                </Card3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <Reveal>
        <section className="cta-banner">
          <div className="cta-glow" />
          <div className="container cta-inner">
            <h2>Ready to Transform?</h2>
            <p>Join today and get your first week completely free. No contracts, no excuses.</p>
            <Link to="/membership" className="btn btn-primary btn-lg btn-glow">
              Claim Free Trial
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>
      </Reveal>

      {/* ── BMI Calculator ── */}
      <section id="bmi" className="section">
        <div className="container">
          <Reveal><div className="section-label">Health Tools</div></Reveal>
          <Reveal delay={100}>
            <div className="section-head">
              <h2>BMI <span className="text-gradient">Calculator</span></h2>
              <p>Know your Body Mass Index and get a personalized diet plan tailored to your body.</p>
            </div>
          </Reveal>
          <div className="bmi-layout">
            <Reveal delay={200}>
              <div className="bmi-calculator">
                <form onSubmit={handleBmiSubmit} className="bmi-form">
                  <div className="bmi-form-grid">
                    <div className="form-group">
                      <label htmlFor="bmi-weight">Weight (kg)</label>
                      <input id="bmi-weight" type="number" min="20" max="300" step="0.1" placeholder="e.g. 70" value={bmiWeight} onChange={(e) => setBmiWeight(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bmi-height">Height (cm)</label>
                      <input id="bmi-height" type="number" min="100" max="250" step="0.1" placeholder="e.g. 175" value={bmiHeight} onChange={(e) => setBmiHeight(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bmi-age">Age</label>
                      <input id="bmi-age" type="number" min="10" max="100" placeholder="e.g. 25" value={bmiAge} onChange={(e) => setBmiAge(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bmi-gender">Gender</label>
                      <div className="gender-toggle">
                        <button type="button" className={`gender-btn ${bmiGender === 'male' ? 'active' : ''}`} onClick={() => setBmiGender('male')}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="14" r="5"/><line x1="19" y1="5" x2="13.6" y2="10.4"/><line x1="19" y1="5" x2="14" y2="5"/><line x1="19" y1="5" x2="19" y2="10"/></svg>
                          Male
                        </button>
                        <button type="button" className={`gender-btn ${bmiGender === 'female' ? 'active' : ''}`} onClick={() => setBmiGender('female')}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><line x1="12" y1="13" x2="12" y2="21"/><line x1="9" y1="18" x2="15" y2="18"/></svg>
                          Female
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bmi-actions">
                    <button type="submit" className="btn btn-primary btn-block">Calculate BMI <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></button>
                    {bmiCalculated && <button type="button" className="btn btn-outline btn-block" onClick={resetBmi}>Reset</button>}
                  </div>
                </form>
                {bmiCalculated && bmiValue && bmiCategory && (
                  <div className="bmi-result">
                    <div className="bmi-score" style={{ borderColor: bmiCategory.color }}><span className="bmi-number" style={{ color: bmiCategory.color }}>{bmiValue}</span><span className="bmi-label">BMI Score</span></div>
                    <div className="bmi-info">
                      <div className="bmi-category" style={{ color: bmiCategory.color }}>{bmiCategory.label}</div>
                      <p>{bmiCategory.advice}</p>
                      <div className="bmi-scale"><div className="scale-bar"><div className="scale-segment underweight" /><div className="scale-segment normal" /><div className="scale-segment overweight" /><div className="scale-segment obese" /><div className="scale-pointer" style={{ left: `${Math.min(Math.max(((parseFloat(bmiValue) - 15) / 25) * 100, 0), 100)}%` }} /></div><div className="scale-labels"><span>15</span><span>18.5</span><span>25</span><span>30</span><span>40</span></div></div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
            <Reveal direction="right" delay={300}>
              <div className="bmi-info-side">
                <h3>What is BMI?</h3>
                <p>Body Mass Index (BMI) is a simple calculation using your height and weight to estimate body fat. While not perfect, it&apos;s a useful starting point to understand your health status.</p>
                <div className="bmi-ranges">
                  {[{ label: 'Underweight', range: 'Below 18.5', color: '#3b82f6' },{ label: 'Normal', range: '18.5 - 24.9', color: '#22c55e' },{ label: 'Overweight', range: '25 - 29.9', color: '#f59e0b' },{ label: 'Obese', range: '30 and above', color: '#ef4444' }].map((r, i) => (
                    <div key={i} className="bmi-range"><div className="range-dot" style={{ background: r.color }} /><div><strong>{r.label}</strong><span>{r.range}</span></div></div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Diet Plan ── */}
      {bmiCalculated && dietPlan && (
        <section id="diet-plan" className="section diet-section">
          <div className="container">
            <Reveal><div className="section-label">Your Personalized Plan</div></Reveal>
            <Reveal delay={100}>
              <div className="section-head">
                <h2>Your <span className="text-gradient">Diet Plan</span></h2>
                <p>Based on your BMI of {bmiValue} ({bmiCategory.label}), here&apos;s a recommended nutrition plan.</p>
              </div>
            </Reveal>
            <div className="diet-overview">
              {[
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>, title: 'Goal', val: dietPlan.goal },
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>, title: 'Daily Calories', val: `${dietPlan.calories} kcal` },
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'Meals Per Day', val: `${dietPlan.meals.length} meals` },
              ].map((d, i) => (
                <Reveal key={i} delay={i * 100}><div className="diet-overview-card"><div className="diet-overview-icon">{d.icon}</div><div><strong>{d.title}</strong><span>{d.val}</span></div></div></Reveal>
              ))}
            </div>
            <div className="diet-meals">
              {dietPlan.meals.map((meal, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="meal-card"><div className="meal-header"><div className="meal-number">{i + 1}</div><h4>{meal.time}</h4></div><ul className="meal-items">{meal.items.map((item, j) => (<li key={j}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>{item}</li>))}</ul></div>
                </Reveal>
              ))}
            </div>
            <Reveal><div className="diet-tips"><h3><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> Pro Tips</h3><ul>{dietPlan.tips.map((tip, i) => <li key={i}>{tip}</li>)}</ul></div></Reveal>
            <Reveal delay={100}><div className="diet-disclaimer"><p>This is a general diet plan based on BMI. For a fully personalized nutrition program, book a consultation with our certified nutritionist.</p><Link to="/contact" className="btn btn-primary">Book Nutrition Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></Reveal>
          </div>
        </section>
      )}
    </>
  )
}
