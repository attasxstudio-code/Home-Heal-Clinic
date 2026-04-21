import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, ChevronDown, MapPin } from 'lucide-react';
import BookingForm from '../components/BookingForm';

/* ─── Constants ─── */
const PHONE    = '+91 9000000000';
const PHONE_HREF = 'tel:+919000000000';
const WA_NUM   = '919000000000';
const WA_LINK  = `https://wa.me/${WA_NUM}?text=${encodeURIComponent('Hello! I would like to book an appointment at Apollo Clinic Srinagar.')}`;

/* ─── WhatsApp SVG ─── */
const WAIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Reusable scroll hook ─── */
function useScrollVisible(ref, threshold = 0.06) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [ref, threshold]);
  return vis;
}

/* ════════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════════ */
const Home = () => {
  const navigate = useNavigate();
  const goBook  = () => { navigate('/book'); window.scrollTo(0, 0); };

  return (
    <div>
      <HeroSection goBook={goBook} />
      <TrustStrip />
      <WhyChooseSection />
      <ServicesSection goBook={goBook} />
      <DoctorsSection goBook={goBook} />
      <DiagnosticsSection goBook={goBook} />
      <TestimonialsSection />
      <ContactTimingsSection />
      <FAQPreview goBook={goBook} />
      <FinalCTA goBook={goBook} />

      {/* ── Floating WhatsApp ── */}
      <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed', bottom: '88px', right: '16px', zIndex: 999,
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'linear-gradient(135deg,#25D366,#128C7E)',
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)', transition: 'all 0.25s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <WAIcon size={24} />
      </a>

      {/* ── Sticky mobile CTA ── */}
      <div className="sticky-cta-bar" id="sticky-cta">
        <button className="sticky-cta-btn" onClick={goBook}>📅 Book Appointment</button>
      </div>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        /* Sticky CTA */
        .sticky-cta-bar {
          display: none; position: fixed;
          bottom: 0; left: 0; right: 0; z-index: 998;
          padding: 0.65rem 1rem 0.75rem;
          background: rgba(255,255,255,0.98); backdrop-filter: blur(20px);
          border-top: 1px solid rgba(14,165,233,0.12);
          box-shadow: 0 -4px 20px rgba(0,0,0,0.07);
        }
        .sticky-cta-btn {
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          width: 100%; padding: 0.9rem 1rem;
          background: linear-gradient(135deg,#0369a1,#0ea5e9);
          color: #fff; font-weight: 800; font-size: 1rem;
          border-radius: 14px; border: none; cursor: pointer;
          min-height: 52px; box-shadow: 0 4px 16px rgba(3,105,161,0.3);
          transition: all 0.2s; font-family: inherit;
        }
        .sticky-cta-btn:active { filter:brightness(0.92); transform:scale(0.99); }

        /* Hero */
        @media (max-width:768px) {
          .sticky-cta-bar { display: block; }
          a[aria-label="Chat on WhatsApp"] { bottom: 80px !important; right: 12px !important; }
          .hero-section { padding: 3rem 0 4.5rem !important; min-height: auto !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-visual { display: none !important; }
          .hero-h1 { font-size: clamp(1.8rem,7.5vw,2.5rem) !important; }
          .hero-btns { flex-direction: column !important; gap: 0.65rem !important; }
          .hero-btns .btn, .hero-btns a { width:100% !important; min-height:50px !important; justify-content:center !important; }
        }

        /* Trust strip */
        @media (max-width:600px) {
          .trust-strip { flex-wrap: nowrap; overflow-x: auto; justify-content: flex-start; }
          .trust-item  { flex-shrink: 0; }
        }

        /* Why choose */
        @media (max-width:768px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }

        /* Services */
        @media (max-width:768px) {
          .svc-grid { grid-template-columns: 1fr !important; gap: 0.85rem !important; }
        }
        @media (max-width:600px) {
          .svc-grid { grid-template-columns: 1fr !important; }
        }

        /* Doctors */
        @media (max-width:768px) {
          .doc-grid { grid-template-columns: 1fr 1fr !important; gap: 0.85rem !important; }
        }
        @media (max-width:430px) {
          .doc-grid { grid-template-columns: 1fr !important; }
        }

        /* Diagnostics */
        @media (max-width:768px) {
          .diag-feat-grid { grid-template-columns: 1fr 1fr !important; }
          .diag-pkg-grid  { grid-template-columns: 1fr !important; }
        }

        /* Testimonials */
        @media (max-width:768px) {
          .testi-grid-home { grid-template-columns: 1fr !important; }
        }

        /* Contact section */
        @media (max-width:768px) {
          .contact-home-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }

        /* FAQ */
        @media (max-width:768px) {
          .faq-preview-container { max-width: 100% !important; }
        }

        /* Section padding on mobile */
        @media (max-width:768px) {
          .home-section { padding: 3.5rem 0 !important; }
        }
      `}</style>
    </div>
  );
};

/* ─── 1. Hero ─── */
const HeroSection = ({ goBook }) => (
  <section id="home" className="hero-section blob-wrap" style={{
    background: 'linear-gradient(160deg,#f0f9ff 0%,#e8f4fd 45%,#f0fdf4 100%)',
    minHeight: '90vh', display: 'flex', alignItems: 'center',
    padding: '5.5rem 0', position: 'relative', overflow: 'hidden',
  }}>
    <div className="blob-top-right" />
    <div className="blob-bottom-left" />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

        {/* Text */}
        <div className="animate-fade-in">
          <span className="pill" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
            🏥 Multi-Speciality Clinic · Karan Nagar, Srinagar
          </span>
          <h1 className="hero-h1" style={{ color: '#0c4a6e', marginBottom: '1.1rem', lineHeight: 1.12, letterSpacing: '-0.03em' }}>
            Expert Healthcare.<br />
            <span style={{ background: 'linear-gradient(135deg,#0369a1,#059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Close to Home.
            </span>
          </h1>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.75, marginBottom: '1.85rem', maxWidth: '500px' }}>
            Apollo Clinic Srinagar brings together experienced specialists, in-house diagnostics, and preventive healthcare — delivering a complete, patient-first experience in Karan Nagar.
          </p>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {['✅ Multi-Speciality', '🕐 Mon–Sun Open', '🔬 In-House Diagnostics', '❤️ Patient-First Care'].map((badge, i) => (
              <span key={i} style={{
                background: '#fff', color: '#0369a1',
                padding: '0.3rem 0.8rem', borderRadius: '20px',
                fontSize: '0.78rem', fontWeight: 700,
                border: '1.5px solid rgba(14,165,233,0.2)',
                boxShadow: '0 1px 6px rgba(14,165,233,0.08)',
              }}>{badge}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-btns" style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={goBook} style={{ padding: '0.95rem 1.85rem', fontSize: '1rem' }}>
              📅 Book Appointment
            </button>
            <a href={PHONE_HREF} className="btn btn-call" style={{ padding: '0.95rem 1.85rem', fontSize: '1rem', textDecoration: 'none' }}>
              <Phone size={17} /> Call Now
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ padding: '0.95rem 1.85rem', fontSize: '1rem', textDecoration: 'none' }}>
              <WAIcon size={17} /> WhatsApp
            </a>
          </div>
        </div>

        {/* Visual card */}
        <div className="hero-visual animate-fade-in-d1" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            background: 'linear-gradient(145deg,#0c4a6e 0%,#0369a1 50%,#047857 100%)',
            borderRadius: '28px', padding: '2.5rem',
            boxShadow: '0 28px 70px rgba(3,105,161,0.28)',
            width: '100%', maxWidth: '370px',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(5,150,105,0.1)', pointerEvents: 'none' }} />

            <div style={{ fontSize: '2.75rem', marginBottom: '0.85rem' }}>🏥</div>
            <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>Apollo Clinic Srinagar</h3>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.86rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Trusted multi-speciality care with experienced doctors, modern diagnostics, and a seamless patient experience in Karan Nagar.
            </p>

            {[
              { icon: '🩺', text: 'Multiple Specialities' },
              { icon: '🔬', text: 'Advanced Diagnostics' },
              { icon: '❤️', text: 'Preventive Health Checks' },
              { icon: '👨‍👩‍👧', text: 'Family Healthcare' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.65rem',
                padding: '0.55rem 0.85rem', borderRadius: '10px',
                background: 'rgba(255,255,255,0.1)', marginBottom: '0.5rem',
              }}>
                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 2. Trust Strip ─── */
const TRUST_ITEMS = [
  { icon: '🏥', text: 'Multi-Speciality Care' },
  { icon: '👨‍⚕️', text: 'Experienced Doctors' },
  { icon: '📅', text: 'Easy Appointments' },
  { icon: '🔬', text: 'In-House Diagnostics' },
  { icon: '📍', text: 'Karan Nagar, Srinagar' },
  { icon: '✅', text: 'Trusted Clinic' },
];
const TrustStrip = () => (
  <div className="trust-strip" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '0.85rem 0', overflow: 'hidden' }}>
    {TRUST_ITEMS.map((item, i) => (
      <div key={i} className="trust-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1.75rem', borderRight: i < TRUST_ITEMS.length - 1 ? '1px solid #e2e8f0' : 'none', whiteSpace: 'nowrap' }}>
        <span style={{ fontSize: '1rem' }}>{item.icon}</span>
        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>{item.text}</span>
      </div>
    ))}
  </div>
);

/* ─── 3. Why Choose Apollo ─── */
const WHY_ITEMS = [
  { icon: '🏥', title: 'All Specialities, One Roof', desc: 'See a general physician, dermatologist, pediatrician, gynecologist, orthopedic specialist, or psychologist — all in one visit, without referrals to distant clinics.' },
  { icon: '🔬', title: 'In-House Diagnostics', desc: 'ECG, ECHO, pulmonary function tests, blood work, and routine lab services — available in-house for fast, accurate results without extra travel.' },
  { icon: '👨‍⚕️', title: 'Experienced Specialists', desc: 'Our team of verified, experienced doctors brings specialist-level expertise across all departments, with a clinical approach focused on accuracy and effective treatment.' },
  { icon: '🤝', title: 'Patient-First Environment', desc: 'Clean, organized, and welcoming. Every aspect of Apollo Clinic is designed to make your experience as smooth, comfortable, and reassuring as possible.' },
];
const WhyChooseSection = () => {
  const ref = React.useRef(null);
  const vis = useScrollVisible(ref);
  return (
    <section id="why-choose" className="home-section" style={{ background: 'linear-gradient(180deg,#f0f9ff,#fff)', padding: '5rem 0' }}>
      <div className="container">
        <div className="text-center section-header">
          <span className="pill" style={{ marginBottom: '0.85rem', display: 'inline-flex' }}>⭐ Why Choose Us</span>
          <h2 style={{ color: '#0c4a6e' }}>Why Patients Trust Apollo Clinic</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>We combine specialist expertise, modern diagnostics, and a patient-first philosophy to deliver healthcare that truly makes a difference.</p>
        </div>
        <div ref={ref} className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {WHY_ITEMS.map((item, i) => (
            <div key={i} className="why-card" style={{
              opacity: vis ? 1 : 0,
              transform: vis ? 'translateY(0)' : 'translateY(22px)',
              transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`,
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.85rem' }}>{item.icon}</div>
              <h3 style={{ color: '#0c4a6e', fontWeight: 800, fontSize: '1rem', marginBottom: '0.6rem' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 4. Services ─── */
const SERVICES_HOME = [
  { icon: '👨‍⚕️', title: 'General Physician',      desc: 'Fever, infections, chronic conditions, and general wellness consultations.' },
  { icon: '🧴', title: 'Dermatology',               desc: 'Skin conditions, hair health, and cosmetic skin concerns.' },
  { icon: '👶', title: 'Pediatrics',                 desc: 'Infant and child healthcare including growth monitoring and vaccinations.' },
  { icon: '🌸', title: "Gynecology",                 desc: "Women's health, reproductive care, and specialist consultations." },
  { icon: '🦴', title: 'Orthopedics',                desc: 'Bone, joint, and spine care for pain and mobility conditions.' },
  { icon: '❤️', title: 'ECG & ECHO',                 desc: 'Advanced cardiac testing for heart rhythm and structural evaluation.' },
  { icon: '🔬', title: 'Lab & Blood Tests',          desc: 'Comprehensive blood panels and lab diagnostics with fast results.' },
  { icon: '🫁', title: 'Pulmonary Tests (PFT)',      desc: 'Lung function assessment for respiratory conditions.' },
  { icon: '🛡️', title: 'Preventive Checkups',       desc: 'Annual health screening packages to detect risks early.' },
  { icon: '💪', title: 'Physiotherapy',              desc: 'Rehabilitation programs for pain relief and post-surgery recovery.' },
];
const ServicesSection = ({ goBook }) => {
  const ref = React.useRef(null);
  const vis = useScrollVisible(ref);
  return (
    <section id="services" className="home-section" style={{ background: '#fff', padding: '5rem 0' }}>
      <div className="container">
        <div className="text-center section-header">
          <span className="pill" style={{ marginBottom: '0.85rem', display: 'inline-flex' }}>🏥 Our Services</span>
          <h2 style={{ color: '#0c4a6e' }}>Comprehensive Healthcare Services</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            From primary care to specialist consultations and advanced diagnostics — all under one roof in Karan Nagar.
          </p>
        </div>
        <div ref={ref} className="svc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {SERVICES_HOME.map((svc, i) => (
            <div key={i} className="service-card" style={{
              opacity: vis ? 1 : 0,
              transform: vis ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.45s ease ${i * 0.04}s, transform 0.35s ease ${i * 0.04}s`,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div className="service-icon-wrap"><span style={{ fontSize: '1.3rem', lineHeight: 1 }}>{svc.icon}</span></div>
                <div>
                  <h3 style={{ color: '#0c4a6e', fontWeight: 800, fontSize: '0.9rem', lineHeight: 1.3, margin: '0 0 0.3rem' }}>{svc.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.55, margin: 0 }}>{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap', background: 'linear-gradient(135deg,#0369a1,#0ea5e9 55%,#059669)', borderRadius: '20px', padding: '2.25rem', boxShadow: '0 18px 50px rgba(3,105,161,0.25)' }}>
          <div>
            <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.3rem' }}>Need a Consultation?</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', margin: '0 0 0.75rem' }}>Mon–Sat · Multi-Speciality · Karan Nagar, Srinagar</p>
            <a href={PHONE_HREF} style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem', background: 'rgba(255,255,255,0.18)', padding: '0.35rem 0.9rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.3)', textDecoration: 'none', display: 'inline-block' }}>
              📱 {PHONE}
            </a>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button className="btn btn-white" onClick={goBook} style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>📅 Book Now</button>
            <Link to="/services" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', fontSize: '0.9rem', padding: '0.75rem 1.5rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 5. Doctors ─── */
const DOCTORS_HOME = [
  { icon: '👨‍⚕️', name: 'Dr. Shabir Ahmad Mir',  specialty: 'General Physician',    exp: '12+ Yrs' },
  { icon: '🧴',  name: 'Dr. Nazia Rashid',        specialty: 'Dermatologist',         exp: '9+ Yrs'  },
  { icon: '👶',  name: 'Dr. Aijaz Hussain',       specialty: 'Pediatrician',          exp: '10+ Yrs' },
  { icon: '🌸',  name: 'Dr. Saima Bano',          specialty: 'Gynecologist',          exp: '11+ Yrs' },
  { icon: '🦴',  name: 'Dr. Mushtaq Ahmed',       specialty: 'Orthopedic Specialist', exp: '14+ Yrs' },
  { icon: '🧠',  name: 'Dr. Asma Yousuf',         specialty: 'Psychologist',          exp: '8+ Yrs'  },
];
const DoctorsSection = ({ goBook }) => {
  const ref = React.useRef(null);
  const vis = useScrollVisible(ref);
  return (
    <section id="doctors" className="home-section" style={{ background: 'linear-gradient(180deg,#f8fafc,#fff)', padding: '5rem 0' }}>
      <div className="container">
        <div className="text-center section-header">
          <span className="pill" style={{ marginBottom: '0.85rem', display: 'inline-flex' }}>👨‍⚕️ Our Team</span>
          <h2 style={{ color: '#0c4a6e' }}>Expert Doctors Across Specialities</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Experienced, verified specialists across all key departments — accurate diagnosis, compassionate care.</p>
        </div>
        <div ref={ref} className="doc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: '1.1rem', marginBottom: '2.5rem' }}>
          {DOCTORS_HOME.map((doc, i) => (
            <div key={i} className="doctor-card" style={{
              opacity: vis ? 1 : 0,
              transform: vis ? 'translateY(0)' : 'translateY(22px)',
              transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`,
            }}>
              <div className="doctor-avatar">{doc.icon}</div>
              <h3 style={{ color: '#0c4a6e', fontWeight: 800, fontSize: '0.9rem', margin: '0 0 0.2rem', lineHeight: 1.3 }}>{doc.name}</h3>
              <p style={{ color: '#0369a1', fontWeight: 700, fontSize: '0.8rem', margin: '0 0 0.4rem' }}>{doc.specialty}</p>
              <span style={{ background: 'linear-gradient(135deg,#e0f2fe,#d1fae5)', color: '#0369a1', fontWeight: 700, fontSize: '0.72rem', padding: '0.2rem 0.65rem', borderRadius: '20px', marginBottom: '1rem', display: 'inline-block' }}>
                {doc.exp} Experience
              </span>
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.85rem', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle size={12} color="#059669" />
                  <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>Verified</span>
                </div>
                <button onClick={goBook} style={{ background: 'linear-gradient(135deg,#0369a1,#0ea5e9)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', padding: '0.35rem 0.85rem', borderRadius: '20px', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 14px rgba(3,105,161,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >Book →</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/doctors" className="btn btn-outline" style={{ textDecoration: 'none' }}>
            View All Doctors <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ─── 6. Diagnostics ─── */
const DIAG_FEATURES = [
  { icon: '❤️', title: 'ECG', desc: 'Heart rhythm assessment' },
  { icon: '🔊', title: 'ECHO', desc: 'Cardiac ultrasound imaging' },
  { icon: '🫁', title: 'PFT', desc: 'Lung function testing' },
  { icon: '🔬', title: 'Lab Tests', desc: 'Full blood & urine work' },
  { icon: '🩸', title: 'Diabetes Panel', desc: 'HbA1c & glucose tests' },
  { icon: '🛡️', title: 'Health Packages', desc: 'Annual checkup bundles' },
];
const DiagnosticsSection = ({ goBook }) => {
  const ref = React.useRef(null);
  const vis = useScrollVisible(ref);
  return (
    <section id="diagnostics" className="home-section" style={{ background: 'linear-gradient(180deg,#f0f9ff,#f8fafc)', padding: '5rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span className="pill" style={{ marginBottom: '1rem', display: 'inline-flex' }}>🔬 Diagnostics</span>
            <h2 style={{ color: '#0c4a6e', marginBottom: '0.85rem' }}>In-House Diagnostics & Health Checkups</h2>
            <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Apollo Clinic Srinagar offers comprehensive in-house diagnostic services — from cardiac testing to lab work — so you get accurate results without visiting a separate facility.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={goBook} style={{ fontSize: '0.92rem' }}>📅 Book a Checkup</button>
              <Link to="/diagnostics" className="btn btn-outline" style={{ textDecoration: 'none', fontSize: '0.92rem' }}>
                View Packages <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div ref={ref} className="diag-feat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem' }}>
            {DIAG_FEATURES.map((f, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '14px', padding: '1.15rem',
                border: '1.5px solid #e2e8f0', textAlign: 'center',
                boxShadow: '0 2px 10px rgba(14,165,233,0.05)',
                transition: 'all 0.25s',
                opacity: vis ? 1 : 0,
                transform: vis ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: `${i * 0.06}s`,
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ea5e9'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(14,165,233,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(14,165,233,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.45rem' }}>{f.icon}</div>
                <h4 style={{ color: '#0c4a6e', fontWeight: 800, fontSize: '0.82rem', marginBottom: '0.2rem' }}>{f.title}</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.72rem', margin: 0, lineHeight: 1.4 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 7. Testimonials ─── */
const TESTIMONIALS = [
  { name: 'Aisha Bhat',   loc: 'Karan Nagar',  rating: 5, text: 'Very clean and hygienic facility. The doctors were thorough and attentive. I didn\'t have to wait long and the staff were genuinely helpful. Highly recommend Apollo Clinic.' },
  { name: 'Irfan Wani',   loc: 'Srinagar',     rating: 5, text: 'Excellent service and a professional environment. The diagnostic tests were done in-house which saved a lot of time. Very impressed with the organisation and care.' },
  { name: 'Noor Fatima',  loc: 'Srinagar',     rating: 5, text: 'The pediatric care for my child was exceptional. The doctor was patient and explained everything clearly. A reliable clinic for the whole family.' },
];
const TestimonialsSection = () => {
  const ref = React.useRef(null);
  const vis = useScrollVisible(ref);
  return (
    <section id="testimonials" className="home-section" style={{ background: '#fff', padding: '5rem 0' }}>
      <div className="container">
        <div className="text-center section-header">
          <span className="pill" style={{ marginBottom: '0.85rem', display: 'inline-flex' }}>⭐ Reviews</span>
          <h2 style={{ color: '#0c4a6e' }}>What Our Patients Say</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Real experiences from patients who trust Apollo Clinic Srinagar for their healthcare.</p>
        </div>
        <div ref={ref} className="testi-grid-home" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.2rem' }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-card" style={{
              opacity: vis ? 1 : 0,
              transform: vis ? 'translateY(0)' : 'translateY(22px)',
              transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.4s ease ${i * 0.1}s`,
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px', marginBottom: '0.85rem' }}>
                {Array.from({ length: t.rating }).map((_, s) => <span key={s} style={{ color: '#f59e0b', fontSize: '1rem' }}>★</span>)}
              </div>
              <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.7, margin: '0 0 1.1rem', fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#0369a1,#0ea5e9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 800, color: '#fff', flexShrink: 0 }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1e293b' }}>{t.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 500 }}>{t.loc} · Apollo Clinic</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 8. Contact + Timings + Map ─── */
const ContactTimingsSection = () => (
  <section id="contact" className="home-section" style={{ background: 'linear-gradient(180deg,#f0f9ff,#ecfdf5)', padding: '5rem 0' }}>
    <div className="container">
      <div className="text-center section-header">
        <span className="pill" style={{ marginBottom: '0.85rem', display: 'inline-flex' }}>📍 Find Us</span>
        <h2 style={{ color: '#0c4a6e' }}>Location, Timings & Contact</h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>We're conveniently located in Karan Nagar, Srinagar. Open Mon–Sun. Walk-ins welcome.</p>
      </div>

      <div className="contact-home-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
        {/* Left: map + address */}
        <div>
          <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 6px 28px rgba(14,165,233,0.09)', marginBottom: '1.25rem' }}>
            <div style={{ background: 'linear-gradient(135deg,#0369a1,#0ea5e9)', padding: '0.85rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={14} color="#fff" />
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.84rem' }}>Near National School, Arham Towers, Karan Nagar, Srinagar</span>
            </div>
            <iframe
              width="100%" height="230"
              style={{ border: 0, display: 'block' }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=34.0806043,74.7988594&hl=en&z=17&output=embed&iwloc=near"
              title="Apollo Clinic - Karan Nagar, Srinagar"
            />
          </div>
          <a href="https://maps.google.com/?q=34.0806043,74.7988594" target="_blank" rel="noreferrer"
            className="btn btn-outline" style={{ width: '100%', textDecoration: 'none', justifyContent: 'center' }}>
            <MapPin size={15} /> Get Directions →
          </a>
        </div>

        {/* Right: timings + contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Timings */}
          <div className="info-box">
            <h3 style={{ color: '#0c4a6e', fontWeight: 800, fontSize: '0.97rem', marginBottom: '1rem' }}>🕐 Working Hours</h3>
            {[
              { day: 'Monday – Saturday', time: '12:00 PM – 7:00 PM', open: true },
              { day: 'Sunday',             time: '10:00 AM – 1:30 PM', open: true },
            ].map((t, i) => (
              <div key={i} className="timing-row">
                <span className="timing-day">{t.day}</span>
                <span className="timing-time timing-open">{t.time}</span>
              </div>
            ))}
            <div style={{ marginTop: '0.85rem', padding: '0.65rem 0.85rem', background: 'rgba(5,150,105,0.07)', borderRadius: '10px', border: '1px solid rgba(5,150,105,0.15)' }}>
              <p style={{ color: '#047857', fontWeight: 600, fontSize: '0.78rem', margin: 0 }}>✅ Walk-ins welcome · Prior appointment recommended for specialist care</p>
            </div>
          </div>

          {/* Contact */}
          <div className="info-box">
            <h3 style={{ color: '#0c4a6e', fontWeight: 800, fontSize: '0.97rem', marginBottom: '1rem' }}>📞 Get In Touch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href={PHONE_HREF} className="btn btn-call" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
                <Phone size={16} /> Call: {PHONE}
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
                <WAIcon size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 9. FAQ Preview ─── */
const FAQ_PREVIEW = [
  { q: 'How do I book an appointment?', a: 'Fill out our online form, call us at +91 9000000000, or send a WhatsApp message. We confirm your slot within a few hours.' },
  { q: 'Do you offer in-house diagnostics?', a: 'Yes. We offer ECG, ECHO, pulmonary function tests, blood tests, and more — all in-house without needing to visit a separate lab.' },
  { q: 'What are your working hours?', a: 'Monday to Saturday: 12:00 PM – 7:00 PM. Sunday: 10:00 AM – 1:30 PM. Walk-ins are welcome.' },
  { q: 'Which specialities are available?', a: 'General Physician, Dermatology, Pediatrics, Gynecology, Orthopedics, Psychology, Physiotherapy, and in-house diagnostic services.' },
];

const FAQItemHome = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        <ChevronDown size={17} className="faq-chevron" />
      </button>
      <div className="faq-answer"><p style={{ margin: 0 }}>{item.a}</p></div>
    </div>
  );
};

const FAQPreview = ({ goBook }) => (
  <section id="faq" className="home-section" style={{ background: '#fff', padding: '5rem 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
        <div>
          <span className="pill" style={{ marginBottom: '1rem', display: 'inline-flex' }}>💬 FAQ</span>
          <h2 style={{ color: '#0c4a6e', marginBottom: '0.85rem' }}>Common Questions</h2>
          <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            Find quick answers to the most common questions about our clinic, services, timings, and booking process.
          </p>
          <Link to="/faq" className="btn btn-outline" style={{ textDecoration: 'none' }}>
            View All FAQs <ArrowRight size={15} />
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {FAQ_PREVIEW.map((item, i) => <FAQItemHome key={i} item={item} />)}
        </div>
      </div>
    </div>
  </section>
);

/* ─── 10. Final CTA ─── */
const FinalCTA = ({ goBook }) => (
  <section id="booking" className="home-section" style={{ background: 'linear-gradient(180deg,#f0f9ff,#ecfdf5)', padding: '5rem 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        {/* CTA Info */}
        <div>
          <span className="pill" style={{ marginBottom: '1rem', display: 'inline-flex' }}>📅 Book Now</span>
          <h2 style={{ color: '#0c4a6e', marginBottom: '0.85rem' }}>Ready for Expert Healthcare?</h2>
          <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '2rem' }}>
            Book your consultation at Apollo Clinic Srinagar. Fill out the form and we'll confirm your slot within hours — or call us directly for immediate assistance.
          </p>

          {/* Final CTA card */}
          <div style={{ background: 'linear-gradient(135deg,#0369a1,#0ea5e9 55%,#059669)', borderRadius: '20px', padding: '2rem', boxShadow: '0 16px 45px rgba(3,105,161,0.25)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>🌟</div>
            <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.35rem' }}>Apollo Clinic Srinagar</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
              Multi-Speciality · In-House Diagnostics · Mon–Sun Open<br />
              Near National School, Arham Towers, Karan Nagar, Srinagar
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '0.6rem 1.1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.3)', fontWeight: 700, fontSize: '0.83rem', textDecoration: 'none' }}>
                <Phone size={14} /> {PHONE}
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#25D366', color: '#fff', padding: '0.6rem 1.1rem', borderRadius: '12px', border: 'none', fontWeight: 700, fontSize: '0.83rem', textDecoration: 'none' }}>
                <WAIcon size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div>
          <BookingForm />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
