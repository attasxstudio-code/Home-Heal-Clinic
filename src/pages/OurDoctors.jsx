import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar, CheckCircle } from 'lucide-react';

const WA_LINK = `https://wa.me/919000000000?text=${encodeURIComponent('Hello! I would like to book an appointment at Apollo Clinic Srinagar.')}`;

const DOCTORS = [
  {
    name: 'Dr. Shabir Ahmad Mir',
    specialty: 'General Physician & Internal Medicine',
    experience: '12+ Years',
    qualifications: 'MBBS, MD (Internal Medicine)',
    icon: '👨‍⚕️',
    tags: ['Chronic Disease Management', 'Preventive Care', 'Wellness Checkups'],
  },
  {
    name: 'Dr. Nazia Rashid',
    specialty: 'Dermatology & Skin Care',
    experience: '9+ Years',
    qualifications: 'MBBS, MD (Dermatology)',
    icon: '🧴',
    tags: ['Skin Conditions', 'Cosmetic Dermatology', 'Hair & Scalp Health'],
  },
  {
    name: 'Dr. Aijaz Hussain',
    specialty: 'Pediatrics & Child Healthcare',
    experience: '10+ Years',
    qualifications: 'MBBS, DCH, MD (Pediatrics)',
    icon: '👶',
    tags: ['Child Nutrition', 'Vaccinations', 'Growth Monitoring'],
  },
  {
    name: 'Dr. Saima Bano',
    specialty: 'Gynecology & Women\'s Health',
    experience: '11+ Years',
    qualifications: 'MBBS, DGO, MS (Obstetrics & Gynaecology)',
    icon: '🌸',
    tags: ['Reproductive Health', 'Prenatal Care', 'Hormonal Disorders'],
  },
  {
    name: 'Dr. Mushtaq Ahmed',
    specialty: 'Orthopedics & Bone Health',
    experience: '14+ Years',
    qualifications: 'MBBS, MS (Orthopedics)',
    icon: '🦴',
    tags: ['Joint & Spine Care', 'Sports Injuries', 'Rehabilitation'],
  },
  {
    name: 'Dr. Asma Yousuf',
    specialty: 'Psychologist & Mental Health',
    experience: '8+ Years',
    qualifications: 'M.Phil Clinical Psychology',
    icon: '🧠',
    tags: ['Anxiety & Depression', 'Counseling', 'Cognitive Therapy'],
  },
];

const scrollToBooking = () => {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
};

function useScrollVisible(ref) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.06 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return vis;
}

const OurDoctors = () => {
  const gridRef = React.useRef(null);
  const vis = useScrollVisible(gridRef);

  return (
    <div>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '1.25rem', display: 'inline-flex' }}>
            👨‍⚕️ Our Specialists
          </span>
          <h1 style={{ color: '#fff', marginBottom: '1.1rem', fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
            Expert Doctors, Compassionate Care
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.1rem', maxWidth: '620px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Apollo Clinic Srinagar brings together experienced specialists across multiple disciplines — so you receive the right care, from the right doctor, under one roof.
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

      {/* ── Doctors Grid ── */}
      <section style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center section-header">
            <span className="pill" style={{ marginBottom: '0.85rem', display: 'inline-flex' }}>⭐ Our Team</span>
            <h2 style={{ color: '#0c4a6e' }}>Meet Our Specialists</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Qualified, experienced, and dedicated — our doctors bring expertise and empathy to every consultation.
            </p>
          </div>

          <div ref={gridRef} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1.5rem',
          }}>
            {DOCTORS.map((doc, i) => (
              <div key={i} className="doctor-card" style={{
                opacity: vis ? 1 : 0,
                transform: vis ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s, box-shadow 0.25s, border-color 0.25s`,
              }}>
                <div className="doctor-avatar">{doc.icon}</div>
                <h3 style={{ color: '#0c4a6e', fontSize: '1.05rem', fontWeight: 800, margin: '0 0 0.2rem' }}>{doc.name}</h3>
                <p style={{ color: '#0369a1', fontWeight: 700, fontSize: '0.88rem', margin: '0 0 0.3rem' }}>{doc.specialty}</p>
                <p style={{ color: '#64748b', fontSize: '0.78rem', margin: '0 0 0.85rem' }}>{doc.qualifications}</p>

                {/* Experience badge */}
                <span style={{
                  background: 'linear-gradient(135deg,#e0f2fe,#d1fae5)',
                  color: '#0369a1', fontWeight: 700, fontSize: '0.75rem',
                  padding: '0.25rem 0.75rem', borderRadius: '20px',
                  marginBottom: '0.85rem', display: 'inline-block',
                }}>
                  {doc.experience} Experience
                </span>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', justifyContent: 'center', marginBottom: '1.2rem' }}>
                  {doc.tags.map((tag, t) => (
                    <span key={t} style={{
                      background: 'rgba(14,165,233,0.08)', color: '#0369a1',
                      padding: '0.2rem 0.6rem', borderRadius: '20px',
                      fontSize: '0.72rem', fontWeight: 600,
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Verified + Book */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: 'auto', width: '100%', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle size={13} color="#059669" />
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>Verified Specialist</span>
                  </div>
                  <Link to="/book" style={{
                    background: 'linear-gradient(135deg,#0369a1,#0ea5e9)',
                    color: '#fff', fontWeight: 700, fontSize: '0.78rem',
                    padding: '0.45rem 1rem', borderRadius: '20px',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(3,105,161,0.35)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                  >
                    Book →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ background: 'linear-gradient(180deg,#f0f9ff,#ecfdf5)', padding: '4rem 0' }}>
        <div className="container">
          <div className="cta-banner">
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
            <h2 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: 'clamp(1.5rem,4vw,2.2rem)' }}>Ready to See a Specialist?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1rem', maxWidth: 520, margin: '0 auto 2rem' }}>
              Book your consultation at Apollo Clinic Srinagar today. Mon–Sat, Karan Nagar.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/book" className="btn btn-white">
                <Calendar size={17} /> Book Appointment
              </Link>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn" style={{ background: '#25D366', color: '#fff', border: 'none' }}>
                <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Us
              </a>
              <a href="tel:+919000000000" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.35)' }}>
                <Phone size={17} /> +91 9000000000
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .doctors-page-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default OurDoctors;
