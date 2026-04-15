import React from 'react';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import BookingForm from '../components/BookingForm';

/* ─── scroll helper ─── */
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const WA_LINK = `https://wa.me/916006846560?text=${encodeURIComponent('Hello! I would like to book an appointment at Apollo Clinic Srinagar.')}`;

/* WhatsApp SVG icon */
const WAIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/* ════════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════════ */
const Home = () => (
  <div>
    <HeroSection />
    <HomecareServices />
    <DoctorsSection />
    <TestimonialsSection />
    <BookingSection />

    {/* ── Floating WhatsApp button ── */}
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        zIndex: 999,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg,#25D366,#128C7E)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        transition: 'all 0.25s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.55)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)'; }}
    >
      <WAIcon size={26} />
    </a>

    {/* ── Sticky bottom CTA bar (mobile only) ── */}
    <div className="sticky-cta-bar">
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="sticky-cta-btn"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.65rem', textDecoration: 'none' }}
      >
        📅 Book Appointment
      </a>
    </div>

    <style>{`
      /* Floating WhatsApp pulse ring */
      @keyframes waPulse {
        0%   { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.4); }
        70%  { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 14px rgba(37,211,102,0); }
        100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0); }
      }

      /* Sticky CTA bar */
      .sticky-cta-bar {
        display: none;
        position: fixed;
        bottom: 0; left: 0; right: 0;
        z-index: 998;
        padding: 0.75rem 1rem;
        background: rgba(255,255,255,0.97);
        backdrop-filter: blur(16px);
        border-top: 1px solid rgba(37,211,102,0.2);
        box-shadow: 0 -4px 20px rgba(0,0,0,0.08);
      }
      .sticky-cta-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.65rem;
        width: 100%;
        padding: 0.95rem 1rem;
        background: linear-gradient(135deg,#25D366,#128C7E);
        color: #fff;
        font-weight: 800;
        font-size: 1rem;
        border-radius: 14px;
        text-decoration: none;
        min-height: 54px;
        box-shadow: 0 4px 16px rgba(37,211,102,0.35);
        transition: all 0.2s;
      }
      .sticky-cta-btn:active { filter: brightness(0.92); transform: scale(0.99); }

      @media (max-width: 768px) {
        .sticky-cta-bar { display: block; }
        /* Push floating button higher to avoid overlap with sticky CTA */
        a[aria-label="Chat on WhatsApp"] {
          bottom: 90px !important;
        }
      }

      /* ── Hero mobile overrides ── */
      @media (max-width: 768px) {
        .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        .hero-visual-card { display: none !important; }
        .hero-section { min-height: auto !important; padding: 3rem 0 5rem !important; }
        .hero-badge-row { gap: 0.5rem !important; }
        .hero-btn-row { flex-direction: column !important; gap: 0.75rem !important; }
        .hero-btn-row .btn { width: 100% !important; min-height: 52px !important; font-size: 1.05rem !important; justify-content: center !important; }
        .hero-h1 { font-size: clamp(2rem, 8vw, 3rem) !important; }
        .hero-sub { font-size: 1rem !important; }
      }

      /* ── Services mobile overrides ── */
      @media (max-width: 768px) {
        .services-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
        .services-cta { flex-direction: column !important; gap: 1.5rem !important; }
        .services-cta-btn { width: 100% !important; justify-content: center !important; }
        .services-phone-row { flex-direction: column !important; gap: 0.5rem !important; }
        .services-phone-row a { text-align: center !important; justify-content: center !important; }
      }

      /* ── Doctors mobile ── */
      @media (max-width: 768px) {
        .doctors-grid { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }
      }
      @media (max-width: 480px) {
        .doctors-grid { grid-template-columns: 1fr !important; }
      }

      /* ── Booking section mobile ── */
      @media (max-width: 768px) {
        .booking-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        .booking-section { padding: 3.5rem 0 5.5rem !important; }
      }
    `}</style>
  </div>
);

/* ─── Hero ─── */
const HeroSection = () => {
  const [hov, setHov] = React.useState(null);

  return (
    <section id="home" className="hero-section" style={{
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(160deg,#f0f9ff 0%,#e0f2fe 40%,#ecfdf5 100%)',
      minHeight: '88vh', display: 'flex', alignItems: 'center',
      padding: '5rem 0',
    }}>
      {/* Background blobs */}
      <div style={{ position:'absolute', top:'-120px', right:'-100px', width:'520px', height:'520px', borderRadius:'50%',
        background:'radial-gradient(circle,rgba(14,165,233,0.13) 0%,transparent 70%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-80px', left:'-80px', width:'400px', height:'400px', borderRadius:'50%',
        background:'radial-gradient(circle,rgba(16,185,129,0.12) 0%,transparent 70%)', pointerEvents:'none' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <div className="hero-grid" style={{
          display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
          gap:'4rem', alignItems:'center',
        }}>

          {/* Text */}
          <div className="animate-fade-in">
            <span className="pill" style={{ marginBottom:'1.25rem', display:'inline-block' }}>
              🏥 Multi-Speciality Clinic · Karan Nagar, Srinagar
            </span>
            <h1 className="hero-h1" style={{ color:'#0c4a6e', marginBottom:'1rem', lineHeight:1.15 }}>
              Advanced Healthcare,<br />
              <span style={{ background:'linear-gradient(135deg,#0ea5e9,#10b981)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                Under One Roof
              </span>
            </h1>
            <p className="hero-sub" style={{ fontSize:'1.1rem', color:'#475569', lineHeight:1.7, marginBottom:'1.75rem', maxWidth:'480px' }}>
              Apollo Clinic Srinagar brings together expert specialists, advanced diagnostics, and preventive healthcare — delivering a complete, patient-first experience in Karan Nagar.
            </p>

            {/* Trust badges */}
            <div className="hero-badge-row" style={{ display:'flex', gap:'0.65rem', flexWrap:'wrap', marginBottom:'1.75rem' }}>
              {['✅ Multi-Speciality', '🕐 Mon–Sat Open', '🔬 Advanced Diagnostics'].map((badge, i) => (
                <span key={i} style={{
                  background:'rgba(14,165,233,0.1)', color:'#0369a1',
                  padding:'0.35rem 0.85rem', borderRadius:'20px',
                  fontSize:'0.8rem', fontWeight:600, border:'1px solid rgba(14,165,233,0.2)',
                }}>{badge}</span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-btn-row" style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <a
                href={`https://wa.me/916006846560?text=${encodeURIComponent('Hello! I would like to book an appointment at Apollo Clinic Srinagar.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ padding:'0.9rem 1.75rem', fontSize:'1rem', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:'0.5rem' }}
              >
                📅 Book Appointment
              </a>
              <button className="btn btn-outline"
                style={{ padding:'0.9rem 1.75rem', fontSize:'1rem' }}
                onClick={() => scrollTo('services')}>
                View Services <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </button>
            </div>
          </div>

          {/* Visual card — hidden on mobile */}
          <div className="hero-visual-card animate-fade-in" style={{ display:'flex', justifyContent:'center' }}>
            <div style={{
              background:'linear-gradient(135deg,#0369a1 0%,#0ea5e9 50%,#059669 100%)',
              borderRadius:'28px', padding:'2.5rem',
              boxShadow:'0 24px 60px rgba(3,105,161,0.3)',
              width:'100%', maxWidth:'380px',
              position:'relative', overflow:'hidden',
            }}>
              <div style={{ position:'absolute', top:'-40px', right:'-40px', width:'180px', height:'180px', borderRadius:'50%',
                background:'rgba(255,255,255,0.08)', pointerEvents:'none' }} />
              <div style={{ fontSize:'3.5rem', marginBottom:'1rem' }}>🏥</div>
              <h3 style={{ color:'#fff', fontWeight:800, fontSize:'1.35rem', marginBottom:'0.75rem' }}>
                Apollo Clinic Srinagar
              </h3>
              <p style={{ color:'rgba(255,255,255,0.82)', fontSize:'0.9rem', lineHeight:1.65, marginBottom:'1.5rem' }}>
                Trusted multi-speciality care with expert doctors, modern diagnostics, and a seamless patient experience.
              </p>
              {[
                '🩺 Multiple Specialities',
                '🔬 Advanced Diagnostics',
                '❤️ Preventive Health Checks',
                '👨‍👩‍👧 Family Healthcare',
              ].map((item, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.6rem',
                  padding:'0.55rem 0.85rem', borderRadius:'10px',
                  background:'rgba(255,255,255,0.12)', marginBottom:'0.5rem',
                  backdropFilter:'blur(4px)',
                }}>
                  <span style={{ fontSize:'0.88rem', color:'rgba(255,255,255,0.9)', fontWeight:500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Services ─── */
const SERVICES = [
  { icon: '👨‍⚕️', title: 'General Physician Consultation',      desc: 'Comprehensive evaluation and treatment for common illnesses, chronic conditions, and general wellbeing.' },
  { icon: '🧴', title: 'Dermatology & Skin Care',               desc: 'Expert care for skin conditions, infections, cosmetic concerns, and long-term skin health.' },
  { icon: '👶', title: 'Pediatrics (Child Care)',                desc: 'Specialized healthcare for infants, children, and adolescents — safe, gentle, and family-friendly.' },
  { icon: '🌸', title: 'Gynecology & Women\'s Health',           desc: 'Comprehensive women\'s health services from routine checkups to specialist consultations.' },
  { icon: '🦴', title: 'Orthopedics',                           desc: 'Diagnosis and management of bone, joint, and muscle conditions for lasting mobility and comfort.' },
  { icon: '❤️', title: 'ECG, ECHO & Cardiac Testing',           desc: 'Accurate cardiac diagnostics with ECG and ECHO to monitor and protect your heart health.' },
  { icon: '🔬', title: 'Blood Tests & Laboratory Services',      desc: 'Comprehensive blood panels and lab reports delivered quickly with high precision.' },
  { icon: '🫁', title: 'Pulmonary Function Tests (PFT)',         desc: 'Lung capacity and respiratory health assessments for respiratory conditions and monitoring.' },
  { icon: '🛡️', title: 'Preventive Health Checkups',            desc: 'Routine screening packages to detect risks early and keep you in optimal health year-round.' },
  { icon: '💪', title: 'Physiotherapy',                         desc: 'Specialized rehabilitation and physiotherapy programs for pain relief and faster recovery.' },
];

const HomecareServices = () => {
  const [hovered, setHovered] = React.useState(null);
  const [visible, setVisible] = React.useState({});
  const refs = React.useRef([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(p => ({ ...p, [e.target.dataset.index]: true }));
      }),
      { threshold: 0.08 }
    );
    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" style={{
      position:'relative', overflow:'hidden',
      background:'linear-gradient(180deg,#f0f9ff 0%,#f8fafc 55%,#ecfdf5 100%)',
      padding:'5rem 0',
    }}>
      <div style={{ position:'absolute', top:'-130px', right:'-130px', width:'520px', height:'520px', borderRadius:'50%',
        background:'radial-gradient(circle,rgba(14,165,233,0.09) 0%,transparent 70%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-90px', left:'-90px', width:'420px', height:'420px', borderRadius:'50%',
        background:'radial-gradient(circle,rgba(16,185,129,0.09) 0%,transparent 70%)', pointerEvents:'none' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        {/* Header */}
        <div className="text-center" style={{ marginBottom:'3rem' }}>
          <span className="pill" style={{ marginBottom:'1rem', display:'inline-block' }}>🏥 Our Services</span>
          <h2 style={{ color:'#0c4a6e', margin:'0 0 1rem' }}>Comprehensive Healthcare Services</h2>
          <p style={{ maxWidth:'580px', margin:'0 auto', color:'#475569', fontSize:'1rem', lineHeight:1.7 }}>
            From primary consultations to advanced diagnostics — Apollo Clinic Srinagar offers a full spectrum of healthcare services under one roof for you and your family.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid" style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',
          gap:'1.1rem', marginBottom:'3rem',
        }}>
          {SERVICES.map((svc, i) => {
            const isVis = !!visible[i];
            const isHov = hovered === i;
            return (
              <div key={i} data-index={i} ref={el => { refs.current[i] = el; }}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                style={{
                  position:'relative', borderRadius:'16px', padding:'1.5rem',
                  border:`1.5px solid ${isHov ? '#0ea5e9' : '#e4f0fb'}`,
                  background: isHov ? 'linear-gradient(140deg,#f0f9ff,#ecfdf5)' : '#fff',
                  opacity: isVis ? 1 : 0,
                  transform: isVis ? (isHov ? 'translateY(-6px) scale(1.015)' : 'translateY(0)') : 'translateY(28px)',
                  transition: `opacity 0.5s ease ${i * 0.04}s, transform 0.28s ease, box-shadow 0.28s, border-color 0.25s, background 0.25s`,
                  boxShadow: isHov ? '0 16px 40px rgba(14,165,233,0.16)' : '0 2px 10px rgba(0,0,0,0.04)',
                  display: 'flex', flexDirection: 'column', gap: '0.6rem',
                }}>
                {/* Icon */}
                <div style={{
                  width:52, height:52, borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center',
                  background: isHov ? 'linear-gradient(135deg,#0ea5e9,#10b981)' : 'linear-gradient(135deg,#e0f2fe,#d1fae5)',
                  transform: isHov ? 'rotate(-5deg) scale(1.1)' : 'rotate(0) scale(1)',
                  transition:'all 0.28s ease', flexShrink: 0,
                }}>
                  <span style={{ fontSize:'1.65rem', lineHeight:1 }}>{svc.icon}</span>
                </div>
                {/* Checkmark badge */}
                <div style={{
                  position:'absolute', top:'1.1rem', right:'1.1rem', width:22, height:22, borderRadius:'50%',
                  background: isHov ? '#10b981' : '#e2e8f0',
                  display:'flex', alignItems:'center', justifyContent:'center', transition:'background 0.25s',
                }}>
                  <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize:'1rem', fontWeight:700, lineHeight:1.35, color: isHov ? '#0c4a6e' : '#1e293b',
                  margin:0, transition:'color 0.25s' }}>{svc.title}</h3>
                <p style={{ fontSize:'0.85rem', color:'#64748b', lineHeight:1.6, margin:0 }}>{svc.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="services-cta" style={{
          background:'linear-gradient(135deg,#0369a1 0%,#0ea5e9 50%,#059669 100%)',
          borderRadius:'20px', padding:'2.25rem',
          display:'flex', alignItems:'center', justifyContent:'space-between',
          gap:'2rem', flexWrap:'wrap',
          boxShadow:'0 20px 50px rgba(3,105,161,0.28)',
        }}>
          <div style={{ flex:1, minWidth:220 }}>
            <div style={{ fontSize:'2rem', marginBottom:'0.4rem' }}>📞</div>
            <h3 style={{ margin:'0 0 0.25rem', color:'#fff', fontSize:'1.35rem', fontWeight:800 }}>Book a Consultation</h3>
            <p style={{ margin:'0 0 0.85rem', color:'rgba(255,255,255,0.82)', fontSize:'0.9rem' }}>Mon–Sat Open · Multi-Speciality Clinic · Karan Nagar, Srinagar</p>
            <div className="services-phone-row" style={{ display:'flex', gap:'0.65rem', flexWrap:'wrap' }}>
              {['+91 6006846560'].map(num => (
                <a key={num} href={`tel:${num.replace(/\s/g,'')}`} style={{
                  color:'#fff', fontWeight:700, fontSize:'0.88rem', textDecoration:'none',
                  background:'rgba(255,255,255,0.18)', padding:'0.35rem 0.85rem',
                  borderRadius:'20px', border:'1px solid rgba(255,255,255,0.32)',
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                }}>📱 {num}</a>
              ))}
            </div>
          </div>
          <a
            href={`https://wa.me/916006846560?text=${encodeURIComponent('Hello! I would like to book an appointment at Apollo Clinic Srinagar.')}`}
            target="_blank"
            rel="noreferrer"
            className="services-cta-btn"
            style={{
              display:'flex', alignItems:'center', gap:'0.6rem',
              background:'#fff', color:'#059669',
              border:'none', borderRadius:'12px',
              padding:'0.9rem 1.75rem', fontWeight:800, fontSize:'0.95rem',
              cursor:'pointer', boxShadow:'0 4px 14px rgba(0,0,0,0.15)',
              transition:'all 0.25s ease', whiteSpace:'nowrap',
              minHeight: '52px', textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='scale(1.05)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(0,0,0,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='0 4px 14px rgba(0,0,0,0.15)'; }}
          >
            📅 Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─── Doctors ─── */
const SPECIALISTS = [
  { role: 'General Physician',        icon: '👨‍⚕️', tags: ['Internal Medicine', 'Chronic Care', 'Wellness'] },
  { role: 'Dermatologist',            icon: '🧴', tags: ['Skin Conditions', 'Cosmetic Care', 'Hair Health'] },
  { role: 'Pediatrician',             icon: '👶', tags: ['Child Care', 'Vaccinations', 'Growth Monitoring'] },
  { role: 'Gynecologist',             icon: '🌸', tags: ["Women's Health", 'Reproductive Care', 'Checkups'] },
  { role: 'Orthopedic Specialist',    icon: '🦴', tags: ['Bone & Joint', 'Spine Care', 'Rehabilitation'] },
  { role: 'Psychologist',             icon: '🧠', tags: ['Mental Health', 'Therapy', 'Counseling'] },
];

const DoctorsSection = () => {
  const [hov, setHov] = React.useState(null);
  const [vis, setVis]  = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.12 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="doctors" style={{ background:'#fff', padding:'5rem 0' }} ref={ref}>
      <div className="container">
        <div className="text-center" style={{ marginBottom:'3rem' }}>
          <span className="pill" style={{ marginBottom:'1rem', display:'inline-block' }}>👨‍⚕️ Our Specialists</span>
          <h2 style={{ color:'#0c4a6e', margin:0 }}>Expert Doctors Across Specialities</h2>
          <p style={{ color:'#64748b', marginTop:'0.75rem', fontSize:'1rem', maxWidth:540, margin:'0.75rem auto 0' }}>
            Apollo Clinic Srinagar brings experienced specialists together — offering accurate diagnosis and compassionate care across multiple fields of medicine.
          </p>
        </div>

        <div className="doctors-grid" style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',
          gap:'1.25rem',
        }}>
          {SPECIALISTS.map((spec, i) => (
            <div key={i}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              style={{
                borderRadius:'20px', padding:'1.75rem 1.5rem', textAlign:'center',
                border:`1.5px solid ${hov === i ? '#0ea5e9' : '#e0eef8'}`,
                background: hov === i ? 'linear-gradient(140deg,#f0f9ff,#ecfdf5)' : '#fff',
                boxShadow: hov === i ? '0 20px 52px rgba(14,165,233,0.18)' : '0 4px 20px rgba(14,165,233,0.08)',
                transform: vis ? (hov === i ? 'translateY(-8px)' : 'translateY(0)') : 'translateY(28px)',
                opacity: vis ? 1 : 0,
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.3s ease, box-shadow 0.3s, border-color 0.3s, background 0.3s`,
                cursor: 'default',
              }}
            >
              {/* Icon */}
              <div style={{
                width: 72, height: 72, borderRadius: '50%', margin: '0 auto 1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: hov === i ? 'linear-gradient(135deg,#0ea5e9,#10b981)' : 'linear-gradient(135deg,#e0f2fe,#d1fae5)',
                fontSize: '2rem',
                border: `3px solid ${hov === i ? '#0ea5e9' : '#cce5f6'}`,
                transition: 'all 0.3s',
              }}>
                {spec.icon}
              </div>

              <h3 style={{ color: hov === i ? '#0c4a6e' : '#1e293b', fontWeight:800, fontSize:'1rem', marginBottom:'0.75rem' }}>
                {spec.role}
              </h3>

              {/* Tags */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem', justifyContent:'center' }}>
                {spec.tags.map((tag, t) => (
                  <span key={t} style={{
                    background: hov === i ? 'rgba(14,165,233,0.12)' : 'rgba(14,165,233,0.07)',
                    color:'#0369a1', padding:'0.2rem 0.6rem', borderRadius:'20px',
                    fontSize:'0.72rem', fontWeight:600, transition:'background 0.3s',
                  }}>{tag}</span>
                ))}
              </div>

              {/* Verified badge */}
              <div style={{
                display:'flex', alignItems:'center', justifyContent:'center', gap:'0.45rem',
                borderTop:`1px solid ${hov === i ? '#bae6fd' : '#e0eef8'}`,
                paddingTop:'0.9rem', marginTop:'0.9rem', transition:'border-color 0.3s',
              }}>
                <CheckCircle size={14} color="#10b981" />
                <span style={{ color:'#475569', fontSize:'0.78rem', fontWeight:500 }}>Qualified Specialist</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Booking & Contact ─── */
const BookingSection = () => (
  <section id="booking" className="booking-section" style={{
    position:'relative', overflow:'hidden',
    background:'linear-gradient(180deg,#f0f9ff 0%,#ecfdf5 100%)',
    padding:'5rem 0',
  }}>
    <div style={{ position:'absolute', top:'-100px', right:'-100px', width:'400px', height:'400px', borderRadius:'50%',
      background:'radial-gradient(circle,rgba(14,165,233,0.1) 0%,transparent 70%)', pointerEvents:'none' }} />
    <div style={{ position:'absolute', bottom:'-70px', left:'-70px', width:'340px', height:'340px', borderRadius:'50%',
      background:'radial-gradient(circle,rgba(16,185,129,0.1) 0%,transparent 70%)', pointerEvents:'none' }} />

    <div className="container" style={{ position:'relative', zIndex:1 }}>
      <div className="booking-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'4rem', alignItems:'center' }}>
        {/* Left info */}
        <div>
          <span className="pill" style={{ marginBottom:'1.1rem', display:'inline-block' }}>📅 Book Your Consultation</span>
          <h2 style={{ color:'#0c4a6e', marginBottom:'1rem' }}>Ready for Expert Healthcare?</h2>
          <p style={{ fontSize:'1.05rem', color:'#475569', lineHeight:1.75, marginBottom:'2rem' }}>
            Book your appointment at Apollo Clinic Srinagar. Fill in the form and we will confirm your slot via WhatsApp.
          </p>

          <div style={{
            borderRadius:'18px', overflow:'hidden',
            border:'1.5px solid #cce5f6',
            boxShadow:'0 8px 28px rgba(14,165,233,0.1)',
          }}>
            <div style={{
              background:'linear-gradient(135deg,#0369a1,#0ea5e9)',
              padding:'0.9rem 1.25rem',
              display:'flex', alignItems:'center', gap:'0.6rem',
            }}>
              <MapPin size={16} color="#fff" />
              <span style={{ color:'#fff', fontWeight:700, fontSize:'0.9rem' }}>
                Karan Nagar, Near National School, Srinagar
              </span>
            </div>
            <iframe
              width="100%" height="220"
              style={{ border:0, display:'block' }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Karan+Nagar,+Srinagar,+Jammu+and+Kashmir&hl=en&z=15&output=embed"
              title="Apollo Clinic - Karan Nagar, Srinagar"
            />
          </div>

          {/* Quick contact buttons */}
          <div style={{ display:'flex', gap:'0.75rem', marginTop:'1.25rem', flexWrap:'wrap' }}>
            <a href="tel:+916006846560" style={{
              display:'flex', alignItems:'center', gap:'0.45rem',
              background:'linear-gradient(135deg,#0369a1,#0ea5e9)',
              color:'#fff', padding:'0.65rem 1.25rem', borderRadius:'12px',
              fontWeight:700, fontSize:'0.88rem', textDecoration:'none',
              boxShadow:'0 4px 14px rgba(3,105,161,0.28)',
            }}>📞 Call Us</a>
            <a
              href={`https://wa.me/916006846560?text=${encodeURIComponent('Hello! I would like to book an appointment at Apollo Clinic Srinagar.')}`}
              target="_blank" rel="noreferrer"
              style={{
                display:'flex', alignItems:'center', gap:'0.45rem',
                background:'linear-gradient(135deg,#25D366,#128C7E)',
                color:'#fff', padding:'0.65rem 1.25rem', borderRadius:'12px',
                fontWeight:700, fontSize:'0.88rem', textDecoration:'none',
                boxShadow:'0 4px 14px rgba(37,211,102,0.3)',
              }}>
              <WAIcon size={16} />
              WhatsApp Booking
            </a>
          </div>
        </div>

        {/* Form */}
        <div style={{ position:'relative', zIndex:10 }}>
          <BookingForm />
        </div>
      </div>
    </div>
  </section>
);

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    name: 'Verified Patient',
    initials: 'V',
    text: 'The clinic was very clean and hygienic, and the facilities were excellent. I didn\'t have to wait long and the staff provided great customer service.',
    rating: 5,
  },
  {
    name: 'Verified Patient',
    initials: 'V',
    text: 'Highly impressed with the professionalism and efficiency of the staff. The entire experience felt smooth and well-organized.',
    rating: 5,
  },
  {
    name: 'Verified Patient',
    initials: 'V',
    text: 'The doctors are kind and provide good care. Overall, a reliable place for quality healthcare.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [hov, setHov] = React.useState(null);
  const [vis, setVis] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" style={{ background: 'linear-gradient(180deg,#f8fafc 0%,#fff 100%)', padding: '5rem 0' }} ref={ref}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <span className="pill" style={{ marginBottom: '1rem', display: 'inline-block' }}>⭐ Patient Reviews</span>
          <h2 style={{ color: '#0c4a6e', margin: 0 }}>What Our Patients Say</h2>
          <p style={{ color: '#64748b', marginTop: '0.75rem', fontSize: '1rem', maxWidth: 520, margin: '0.75rem auto 0' }}>
            Real experiences from patients who trusted Apollo Clinic Srinagar with their healthcare needs.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.25rem' }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              style={{
                borderRadius: '20px', padding: '2rem 1.75rem',
                border: `1.5px solid ${hov === i ? '#0ea5e9' : '#e0eef8'}`,
                background: hov === i ? 'linear-gradient(140deg,#f0f9ff,#ecfdf5)' : '#fff',
                boxShadow: hov === i ? '0 16px 42px rgba(14,165,233,0.18)' : '0 2px 12px rgba(14,165,233,0.06)',
                transform: vis ? (hov === i ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(28px)',
                opacity: vis ? 1 : 0,
                transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.3s ease, box-shadow 0.3s, border-color 0.3s, background 0.3s`,
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} style={{ color: '#f59e0b', fontSize: '1.15rem' }}>★</span>
                ))}
              </div>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, margin: '0 0 1.25rem', fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: hov === i ? 'linear-gradient(135deg,#0ea5e9,#10b981)' : 'linear-gradient(135deg,#e0f2fe,#d1fae5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', fontWeight: 800, color: hov === i ? '#fff' : '#0369a1',
                  transition: 'all 0.3s',
                }}>✓</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: hov === i ? '#0c4a6e' : '#1e293b' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500 }}>Apollo Clinic Srinagar</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
