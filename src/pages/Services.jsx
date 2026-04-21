import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

const WA_LINK = `https://wa.me/919000000000?text=${encodeURIComponent('Hello! I would like to enquire about your services at Apollo Clinic Srinagar.')}`;

const SERVICES = [
  {
    icon: '👨‍⚕️',
    title: 'General Physician Consultation',
    desc: 'Comprehensive evaluation and treatment for common illnesses, chronic conditions, fever, infections, and general wellbeing. Our physicians offer thorough diagnosis and clear treatment plans for patients of all ages.',
    tags: ['Fever & Infections', 'Chronic Disease', 'Preventive Care', 'Follow-ups'],
  },
  {
    icon: '🧴',
    title: 'Dermatology & Skin Care',
    desc: 'Expert dermatological care for skin conditions, allergies, infections, cosmetic concerns, and long-term skin health management. Trusted by patients across Srinagar for results-driven skin care.',
    tags: ['Acne & Eczema', 'Skin Allergies', 'Hair Loss', 'Cosmetic Concerns'],
  },
  {
    icon: '👶',
    title: 'Pediatrics & Child Care',
    desc: 'Specialized healthcare for infants, children, and adolescents. Our pediatricians offer growth monitoring, vaccinations, nutrition counseling, and management of childhood illnesses in a child-friendly environment.',
    tags: ['Vaccinations', 'Growth Monitoring', 'Child Nutrition', 'Illness Management'],
  },
  {
    icon: '🌸',
    title: 'Gynecology & Women\'s Health',
    desc: 'Comprehensive women\'s health services from routine checkups, menstrual health, and reproductive care to specialist consultations. Delivered with sensitivity, privacy, and clinical expertise.',
    tags: ['Menstrual Health', 'Reproductive Care', 'Prenatal Support', 'Hormonal Health'],
  },
  {
    icon: '🦴',
    title: 'Orthopedics',
    desc: 'Diagnosis and management of bone, joint, muscle, and spine conditions. Whether it\'s a sports injury, chronic joint pain, or post-surgery rehabilitation — our orthopedic team supports your recovery.',
    tags: ['Bone & Joint Pain', 'Sports Injuries', 'Spine Care', 'Rehabilitation'],
  },
  {
    icon: '❤️',
    title: 'ECG, ECHO & Cardiac Testing',
    desc: 'Accurate cardiac diagnostics using ECG and ECHO technology to monitor heart rhythm, structure, and function. Essential for cardiac risk assessment, screening, and ongoing heart health management.',
    tags: ['ECG', 'ECHO', 'Cardiac Risk Assessment', 'Heart Monitoring'],
  },
  {
    icon: '🔬',
    title: 'Blood Tests & Laboratory Services',
    desc: 'Comprehensive blood panels and laboratory diagnostics with rapid turnaround. From routine CBC and lipid profiles to specialty testing — accurate results delivered efficiently.',
    tags: ['CBC & Lipid Profile', 'Diabetes Screening', 'Thyroid Tests', 'Specialty Labs'],
  },
  {
    icon: '🫁',
    title: 'Pulmonary Function Tests (PFT)',
    desc: 'Lung capacity and respiratory health assessments for patients with asthma, COPD, chronic cough, and breathing difficulties. Critical for accurate respiratory diagnosis and long-term management.',
    tags: ['Asthma Testing', 'COPD Assessment', 'Breathing Evaluation', 'Lung Capacity'],
  },
  {
    icon: '🛡️',
    title: 'Preventive Health Checkups',
    desc: 'Structured health screening packages designed to detect risks early, before they become serious conditions. Ideal for individuals, families, and working professionals seeking proactive health management.',
    tags: ['Annual Checkups', 'Diabetes Screening', 'Blood Pressure', 'Cancer Screening'],
  },
  {
    icon: '💪',
    title: 'Physiotherapy & Rehabilitation',
    desc: 'Specialized physiotherapy programs targeting pain relief, mobility restoration, and post-surgical rehabilitation. Our physiotherapists design personalized recovery plans for lasting results.',
    tags: ['Post-Surgery Recovery', 'Pain Management', 'Mobility Therapy', 'Sports Rehab'],
  },
];

function useScrollVisible(ref) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.05 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return vis;
}

const Services = () => {
  const gridRef = React.useRef(null);
  const vis = useScrollVisible(gridRef);

  return (
    <div>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '1.25rem', display: 'inline-flex' }}>
            🏥 Our Services
          </span>
          <h1 style={{ color: '#fff', marginBottom: '1.1rem', fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
            Comprehensive Healthcare, Under One Roof
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.1rem', maxWidth: '620px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Apollo Clinic Srinagar offers a complete range of specialist consultations, diagnostic services, and preventive health programs — all in one convenient location in Karan Nagar.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book" className="btn btn-white">
              <Calendar size={17} /> Book Appointment
            </Link>
            <a href={`tel:+919000000000`} className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.35)' }}>
              <Phone size={17} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center section-header">
            <span className="pill" style={{ marginBottom: '0.85rem', display: 'inline-flex' }}>🩺 Specialities</span>
            <h2 style={{ color: '#0c4a6e' }}>Our Medical Services</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              From primary care to specialist consultations and advanced diagnostics — we cover the full spectrum of your healthcare needs.
            </p>
          </div>

          <div ref={gridRef} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
            gap: '1.25rem',
          }}>
            {SERVICES.map((svc, i) => (
              <div key={i} className="service-card" style={{
                opacity: vis ? 1 : 0,
                transform: vis ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${i * 0.055}s, transform 0.4s ease ${i * 0.055}s, box-shadow 0.25s, border-color 0.25s`,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '0.75rem' }}>
                  <div className="service-icon-wrap">
                    <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{svc.icon}</span>
                  </div>
                  <h3 style={{ color: '#0c4a6e', fontWeight: 800, fontSize: '0.97rem', lineHeight: 1.3, margin: 0 }}>{svc.title}</h3>
                </div>
                <p style={{ color: '#64748b', lineHeight: 1.65, fontSize: '0.85rem', margin: '0 0 0.85rem' }}>{svc.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.85rem' }}>
                  {svc.tags.map((tag, t) => (
                    <span key={t} style={{
                      background: 'rgba(14,165,233,0.08)', color: '#0369a1',
                      padding: '0.2rem 0.6rem', borderRadius: '20px',
                      fontSize: '0.72rem', fontWeight: 600,
                    }}>{tag}</span>
                  ))}
                </div>
                <Link to="/book" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  color: '#0369a1', fontWeight: 700, fontSize: '0.82rem',
                  marginTop: 'auto',
                }}>
                  Book this service <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Info strip ── */}
      <section style={{ background: 'linear-gradient(180deg,#f0f9ff,#fff)', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.25rem',
          }}>
            {[
              { icon: '🕐', title: 'Opening Hours', lines: ['Mon – Sat: 12:00 PM – 7:00 PM', 'Sunday: 10:00 AM – 1:30 PM'] },
              { icon: '📍', title: 'Our Location', lines: ['Near National School, Arham Towers', 'Karan Nagar, Srinagar, J&K'] },
              { icon: '📞', title: 'Get In Touch', lines: ['+91 9000000000', 'WhatsApp or Call'] },
            ].map((item, i) => (
              <div key={i} className="info-box" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h4 style={{ color: '#0c4a6e', fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.4rem' }}>{item.title}</h4>
                  {item.lines.map((l, li) => <p key={li} style={{ color: '#475569', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{l}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(180deg,#fff,#ecfdf5)', padding: '4rem 0' }}>
        <div className="container">
          <div className="cta-banner">
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
            <h2 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: 'clamp(1.5rem,4vw,2.1rem)' }}>Need a Consultation?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 500, margin: '0 auto 2rem', fontSize: '1rem' }}>
              Walk in or book your appointment at Apollo Clinic Srinagar. Expert care, close to home.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/book" className="btn btn-white"><Calendar size={17} /> Book Now</Link>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn" style={{ background: '#25D366', color: '#fff', border: 'none' }}>WhatsApp Us</a>
              <a href="tel:+919000000000" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.35)' }}>
                <Phone size={17} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .services-page-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Services;
