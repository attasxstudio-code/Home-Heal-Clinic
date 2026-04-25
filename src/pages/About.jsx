import React from 'react';
import { Home, HeartPulse, CheckCircle2, Heart, Award, Users, Shield } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    icon: '🏥',
    title: 'Integrated Healthcare Services',
    desc: 'Multiple specialities under one roof — one visit covers consultations, diagnostics, and follow-up care, saving you time and effort.',
  },
  {
    icon: '🔬',
    title: 'Advanced Diagnostic Facilities',
    desc: 'State-of-the-art diagnostic tools including ECG, ECHO, PFT, and comprehensive lab services to ensure accurate results.',
  },
  {
    icon: '👨‍⚕️',
    title: 'Experienced Specialist Doctors',
    desc: 'Our team of experienced doctors across multiple specialities is dedicated to precision diagnosis and effective, patient-centred treatment.',
  },
  {
    icon: '🤝',
    title: 'Patient-First Environment',
    desc: 'Clean, organized, and welcoming clinic designed to put every patient at ease — from arrival through to consultation and discharge.',
  },
];

const STATS = [
  { number: '10+', label: 'Medical Specialists' },
  { number: 'Mon–Sat', label: 'Clinic Open' },
  { number: '5+', label: 'Specialities' },
  { number: '100%', label: 'Patient-First Care' },
];

const About = () => {
  const [hov, setHov] = React.useState(null);
  const [statVis, setStatVis] = React.useState(false);
  const statsRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatVis(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="animate-fade-in" style={{ background: 'var(--color-bg)' }}>

      {/* ── Hero Banner ── */}
      <section className="page-hero">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="pill" style={{ marginBottom: '1.2rem', display: 'inline-block',
            background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(8px)' }}>
            🏥 About Apollo Clinic
          </span>
          <h1 style={{ color: '#fff', marginBottom: '1.25rem', fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
            Trusted Healthcare,<br/>Built for Srinagar
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>
            Apollo Clinic Srinagar is part of a trusted healthcare network focused on delivering high-quality, accessible medical care — combining expert doctors, modern diagnostics, and a patient-first approach.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section ref={statsRef} style={{ background:'#fff', padding:'3.5rem 0', borderBottom:'1px solid #e0eef8' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:'1.5rem' }}>
            {STATS.map((stat, i) => (
              <div key={i} style={{
                textAlign:'center', padding:'1.5rem 1rem',
                borderRadius:'16px', border:'1.5px solid #e0eef8',
                background: statVis ? 'linear-gradient(135deg,#f0f9ff,#ecfdf5)' : '#fff',
                opacity: statVis ? 1 : 0,
                transform: statVis ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.55s ease ${i * 0.1}s`,
                boxShadow:'0 4px 16px rgba(14,165,233,0.08)',
              }}>
                <div style={{ fontSize:'2rem', fontWeight:900,
                  background:'linear-gradient(135deg,#0369a1,#10b981)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                  {stat.number}
                </div>
                <div style={{ color:'#64748b', fontSize:'0.85rem', fontWeight:600, marginTop:'0.3rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story & Approach ── */}
      <section style={{ background:'var(--gradient-surface,linear-gradient(180deg,#f0f9ff,#f8fafc 55%,#ecfdf5))', padding:'5rem 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.75rem' }}>

            {/* Story */}
            <div style={{
              background:'#fff', borderRadius:'20px', padding:'2.25rem',
              border:'1.5px solid #cce5f6',
              boxShadow:'0 4px 20px rgba(14,165,233,0.09)',
              transition:'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(14,165,233,0.16)'; e.currentTarget.style.borderColor='#0ea5e9'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(14,165,233,0.09)'; e.currentTarget.style.borderColor='#cce5f6'; }}
            >
              <div style={{ width:50, height:50, borderRadius:'13px', background:'linear-gradient(135deg,#e0f2fe,#d1fae5)',
                display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1.25rem', fontSize:'1.5rem' }}>
                🏥
              </div>
              <h2 style={{ color:'#0c4a6e', fontSize:'1.5rem', marginBottom:'1rem' }}>About Apollo Clinic</h2>
              <p style={{ color:'#475569', lineHeight:1.75, marginBottom:'0.85rem' }}>
                Apollo Clinic Srinagar is located in Karan Nagar, near National School, Arham Towers — bringing trusted, multi-speciality healthcare to the heart of Srinagar.
              </p>
              <p style={{ color:'#475569', lineHeight:1.75, marginBottom:'0.85rem' }}>
                Part of a trusted healthcare network, the clinic combines expert doctors across multiple specialities with modern diagnostic tools and a patient-first approach to ensure accurate diagnosis and effective treatment.
              </p>
              <p style={{ color:'#475569', lineHeight:1.75, margin:0 }}>
                With multiple specialities available in one place, Apollo Clinic provides convenience, reliability, and a seamless healthcare experience for patients and families alike.
              </p>
            </div>

            {/* Approach */}
            <div style={{
              background:'#fff', borderRadius:'20px', padding:'2.25rem',
              border:'1.5px solid #cce5f6',
              boxShadow:'0 4px 20px rgba(14,165,233,0.09)',
              transition:'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(14,165,233,0.16)'; e.currentTarget.style.borderColor='#0ea5e9'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(14,165,233,0.09)'; e.currentTarget.style.borderColor='#cce5f6'; }}
            >
              <div style={{ width:50, height:50, borderRadius:'13px', background:'linear-gradient(135deg,#e0f2fe,#d1fae5)',
                display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1.25rem', fontSize:'1.5rem' }}>
                💊
              </div>
              <h2 style={{ color:'#0c4a6e', fontSize:'1.5rem', marginBottom:'1rem' }}>Our Services at a Glance</h2>
              <p style={{ color:'#475569', lineHeight:1.75 }}>
                Apollo Clinic Srinagar offers a comprehensive range of medical services across specialities — all under one roof:
              </p>
              <ul style={{ listStyle:'none', padding:0, margin:'1rem 0', display:'flex', flexDirection:'column', gap:'0.65rem' }}>
                {[
                  'General Physician Consultation',
                  'Dermatology & Skin Care',
                  'Pediatrics & Child Care',
                  'Gynecology & Women\'s Health',
                  'Orthopedics & Bone Health',
                  'ECG, ECHO & Cardiac Testing',
                  'Blood Tests & Laboratory Services',
                  'Pulmonary Function Tests (PFT)',
                  'Preventive Health Checkups',
                  'Physiotherapy & Rehabilitation',
                ].map((item, i) => (
                  <li key={i} style={{ display:'flex', alignItems:'center', gap:'0.6rem', color:'#334155', fontWeight:500, fontSize:'0.93rem' }}>
                    <div style={{ width:20, height:20, borderRadius:'50%', background:'linear-gradient(135deg,#0ea5e9,#10b981)',
                      display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Differentiators ── */}
      <section style={{ background:'#fff', padding:'5rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom:'3rem' }}>
            <span className="pill" style={{ marginBottom:'0.85rem', display:'inline-block' }}>⭐ Why Choose Us</span>
            <h2 style={{ color:'#0c4a6e', margin:0 }}>What Makes Apollo Clinic Different</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'1.2rem' }}>
            {DIFFERENTIATORS.map((item, i) => (
              <div key={i}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  padding:'1.75rem 1.5rem',
                  borderRadius:'18px',
                  border:`1.5px solid ${hov === i ? '#0ea5e9' : '#e0eef8'}`,
                  background: hov === i ? 'linear-gradient(140deg,#f0f9ff,#ecfdf5)' : '#fff',
                  boxShadow: hov === i ? '0 14px 36px rgba(14,165,233,0.16)' : '0 2px 10px rgba(14,165,233,0.05)',
                  transform: hov === i ? 'translateY(-5px)' : 'none',
                  transition:'all 0.3s ease',
                  borderLeft: `4px solid ${hov === i ? '#0ea5e9' : '#0369a1'}`,
                }}>
                <div style={{ fontSize:'2rem', marginBottom:'0.85rem' }}>{item.icon}</div>
                <h3 style={{ color: hov === i ? '#0c4a6e' : '#1e293b', fontSize:'1rem', fontWeight:700, marginBottom:'0.6rem' }}>
                  {item.title}
                </h3>
                <p style={{ color:'#64748b', fontSize:'0.88rem', lineHeight:1.65, margin:0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Banner ── */}
      <section style={{ padding:'5rem 0 6rem', background:'linear-gradient(180deg,#f0f9ff,#ecfdf5)' }}>
        <div className="container">
          <div style={{
            background:'linear-gradient(135deg,#0369a1 0%,#0ea5e9 50%,#059669 100%)',
            borderRadius:'24px', padding:'3.5rem 2.5rem',
            textAlign:'center', position:'relative', overflow:'hidden',
            boxShadow:'0 22px 55px rgba(3,105,161,0.28)',
          }}>
            {/* decorative circles */}
            <div style={{ position:'absolute', top:'-60px', right:'-60px', width:'220px', height:'220px', borderRadius:'50%',
              background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:'-40px', left:'-40px', width:'180px', height:'180px', borderRadius:'50%',
              background:'rgba(16,185,129,0.1)', pointerEvents:'none' }} />

            <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>❤️</div>
            <h2 style={{ color:'#fff', fontSize:'clamp(1.6rem,3.5vw,2.2rem)', marginBottom:'1.25rem', fontWeight:800 }}>
              Our Mission at Apollo Clinic
            </h2>
            <p style={{ fontSize:'1.2rem', fontStyle:'italic', color:'rgba(255,255,255,0.88)',
              maxWidth:'680px', margin:'0 auto 2rem', lineHeight:1.7 }}>
              "To make high-quality, multi-speciality healthcare accessible, reliable, and compassionate for every patient and family in Srinagar."
            </p>
            <div style={{ display:'inline-block', background:'rgba(255,255,255,0.15)',
              borderRadius:'12px', padding:'1rem 1.75rem', border:'1px solid rgba(255,255,255,0.25)',
              backdropFilter:'blur(8px)' }}>
              <p style={{ color:'rgba(255,255,255,0.82)', fontSize:'0.95rem', margin:0, lineHeight:1.65 }}>
                Whether you need a routine consultation, specialist care, or advanced diagnostic services —
                Apollo Clinic Srinagar is here with expertise, convenience, and care focused entirely on you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
