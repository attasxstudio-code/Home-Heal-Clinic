import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, Calendar, CheckCircle, Clock, MapPin, ArrowRight } from 'lucide-react';

/* ── Constants ── */
const PHONE      = '+91 9000000000';
const PHONE_HREF = 'tel:+919000000000';
const WA_LINK    = `https://wa.me/919000000000?text=${encodeURIComponent('Hello! I would like to enquire about diagnostics and health checkups at Apollo Clinic Srinagar.')}`;

/* ── Scroll-reveal hook ── */
function useInView(threshold = 0.05) {
  const ref = React.useRef(null);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/* ── Diagnostic service data ── */
const DIAGNOSTIC_SERVICES = [
  {
    id: 'ecg', accent: '#db2777', accentLight: '#fce7f3', tag: 'Cardiac',
    title: 'ECG (Electrocardiogram)',
    short: 'Non-invasive heart rhythm and electrical activity assessment.',
    detail: 'A 12-lead ECG records the heart\'s electrical signals to detect arrhythmias, ischemia, and other cardiac abnormalities. Done in-clinic with results available the same day — reviewed by your consulting physician.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    id: 'echo', accent: '#0891b2', accentLight: '#e0f7fa', tag: 'Cardiac',
    title: 'ECHO (Echocardiogram)',
    short: 'Ultrasound imaging of heart structure, valves, and pump function.',
    detail: 'Echocardiography uses high-frequency sound waves to produce detailed images of the heart. Ideal for assessing valve function, chambers, wall motion, and overall cardiac health — non-invasive and highly accurate.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    id: 'pft', accent: '#7c3aed', accentLight: '#ede9fe', tag: 'Respiratory',
    title: 'Pulmonary Function Test (PFT)',
    short: 'Lung capacity and airflow measurement for respiratory evaluation.',
    detail: 'PFT measures how well your lungs work — including total lung capacity, forced expiratory volume, and airflow rates. Essential for diagnosing and managing asthma, COPD, and other chronic respiratory conditions with clinical precision.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8M12 8C12 8 9 5 6 5c-2 0-3 1.5-3 3 0 4 3 6 3 9h12c0-3 3-5 3-9 0-1.5-1-3-3-3-3 0-6 3-6 3z"/>
      </svg>
    ),
  },
  {
    id: 'blood', accent: '#0369a1', accentLight: '#e0f2fe', tag: 'Laboratory',
    title: 'Blood Tests & Lab Work',
    short: 'Comprehensive blood panels with fast, accurate in-house reporting.',
    detail: 'Our in-house lab processes a full range of blood tests — CBC, lipid profile, liver function (LFT), kidney function (KFT), thyroid panel (TSH, T3, T4), HbA1c, and more. Results are accurate, fast, and reviewed by your doctor at the same visit.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8l-5-5H9z"/>
        <polyline points="9 3 9 8 19 8"/>
        <line x1="7" y1="13" x2="17" y2="13"/>
        <line x1="7" y1="17" x2="13" y2="17"/>
      </svg>
    ),
  },
  {
    id: 'urine', accent: '#059669', accentLight: '#d1fae5', tag: 'Laboratory',
    title: 'Urine & Stool Analysis',
    short: 'Routine urinalysis and stool tests for infection and organ health.',
    detail: 'Urine and stool analysis help detect infections, kidney conditions, gastrointestinal disorders, and metabolic abnormalities early. Processed in-house with rapid turnaround and clinical review by your consulting physician.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8l4 4v14a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"/>
        <path d="M9 9h6M9 13h6M9 17h4"/>
      </svg>
    ),
  },
  {
    id: 'diabetes', accent: '#d97706', accentLight: '#fef3c7', tag: 'Metabolic',
    title: 'Diabetes Screening',
    short: 'Fasting glucose, post-meal sugar, and HbA1c for diabetes management.',
    detail: 'Comprehensive diabetes panels including fasting blood glucose, post-prandial sugar, and HbA1c — essential for early detection, treatment monitoring, and long-term diabetes management. Walk-in friendly with same-day results.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
  },
];

/* ── Health packages ── */
const PACKAGES = [
  {
    name: 'Basic Health Screen',
    subtitle: 'Essential Annual Wellness Checkup',
    featured: false,
    accent: '#0369a1', accentLight: '#e0f2fe',
    tests: [
      'Complete Blood Count (CBC)',
      'Blood Glucose (Fasting)',
      'Lipid Profile',
      'Urine Routine Examination',
      'Blood Pressure Assessment',
      'BMI & Body Weight Check',
    ],
  },
  {
    name: 'Comprehensive Health Package',
    subtitle: 'Full Body Assessment — Most Popular',
    featured: true,
    accent: '#0369a1', accentLight: '#e0f2fe',
    tests: [
      'CBC + Lipid Profile + Glucose',
      'Liver & Kidney Function Tests',
      'Thyroid Profile (TSH / T3 / T4)',
      'Urine & Stool Analysis',
      'ECG (Heart Rhythm)',
      'Blood Pressure & Pulse',
      'BMI & Body Weight',
      'Physician Consultation Included',
    ],
  },
  {
    name: 'Cardiac Risk Assessment',
    subtitle: 'Heart Health Focus Package',
    featured: false,
    accent: '#db2777', accentLight: '#fce7f3',
    tests: [
      'ECG (12-Lead)',
      'ECHO (Echocardiogram)',
      'Lipid Profile (Full)',
      'Blood Glucose & HbA1c',
      'Blood Pressure Monitoring',
      'Cardiologist Consultation',
    ],
  },
];

/* ── Diagnostic service card ── */
const DiagServiceCard = ({ svc, vis, delay, onBook }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: '#fff',
        borderRadius: '20px',
        border: `1.5px solid ${hov ? svc.accent + '38' : '#edf2f7'}`,
        boxShadow: hov
          ? `0 20px 48px rgba(0,0,0,0.08), 0 0 0 1px ${svc.accent}14`
          : '0 2px 14px rgba(14,31,63,0.05)',
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.28s cubic-bezier(0.34,1.4,0.64,1)',
        opacity: vis ? 1 : 0,
        transitionDelay: `${delay}s`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top accent strip */}
      <div style={{
        height: '3px',
        background: `linear-gradient(90deg,${svc.accent},${svc.accent}55)`,
        opacity: hov ? 1 : 0.35,
        transition: 'opacity 0.26s',
        flexShrink: 0,
      }} />

      <div style={{ padding: '1.65rem 1.55rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Icon + tag row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
          <div style={{
            width: 50, height: 50, borderRadius: '14px',
            background: hov ? svc.accent : svc.accentLight,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: hov ? '#fff' : svc.accent,
            transition: 'all 0.26s ease',
            boxShadow: hov ? `0 6px 18px ${svc.accent}40` : 'none',
          }}>
            {svc.icon}
          </div>
          <span style={{
            background: svc.accentLight, color: svc.accent,
            fontSize: '0.62rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.09em',
            padding: '0.22rem 0.65rem', borderRadius: '999px',
          }}>
            {svc.tag}
          </span>
        </div>

        <h3 style={{ color: '#0c1f3f', fontWeight: 800, fontSize: '1rem', lineHeight: 1.22, margin: '0 0 0.5rem' }}>
          {svc.title}
        </h3>
        <p style={{ color: '#64748b', fontSize: '0.83rem', lineHeight: 1.68, margin: '0 0 0.85rem' }}>
          {svc.short}
        </p>
        <div style={{ height: '1px', background: '#f0f4f8', margin: '0 0 0.85rem' }} />
        <p style={{ color: '#475569', fontSize: '0.79rem', lineHeight: 1.72, margin: '0 0 1.1rem', flex: 1 }}>
          {svc.detail}
        </p>
        <button
          onClick={onBook}
          style={{
            width: '100%',
            padding: '0.7rem 1rem',
            background: hov ? svc.accent : '#fff',
            color: hov ? '#fff' : svc.accent,
            border: `1.5px solid ${svc.accent}`,
            borderRadius: '12px',
            fontWeight: 700, fontSize: '0.84rem',
            cursor: 'pointer', fontFamily: 'inherit',
            transition: 'all 0.22s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
            marginTop: 'auto',
          }}
        >
          <Calendar size={13} /> Book This Test
        </button>
      </div>
    </div>
  );
};

/* ── Package card ── */
const PkgCard = ({ pkg, vis, delay, onBook }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: pkg.featured ? 'linear-gradient(160deg,#0c1f3f 0%,#0f3460 55%,#0369a1 100%)' : '#fff',
        borderRadius: '22px',
        border: pkg.featured
          ? 'none'
          : `1.5px solid ${hov ? pkg.accent + '38' : '#edf2f7'}`,
        boxShadow: hov
          ? `0 22px 52px rgba(0,0,0,${pkg.featured ? '0.2' : '0.08'})`
          : `0 2px 16px rgba(14,31,63,${pkg.featured ? '0.15' : '0.05'})`,
        transform: hov ? 'translateY(-5px)' : 'none',
        transition: 'all 0.28s cubic-bezier(0.34,1.4,0.64,1)',
        opacity: vis ? 1 : 0,
        transitionDelay: `${delay}s`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top accent strip */}
      {!pkg.featured && (
        <div style={{
          height: '3px',
          background: `linear-gradient(90deg,${pkg.accent},${pkg.accent}55)`,
          opacity: hov ? 1 : 0.35,
          transition: 'opacity 0.26s',
        }} />
      )}
      {pkg.featured && (
        <>
          <div style={{ position:'absolute',top:'-50px',right:'-50px',width:180,height:180,borderRadius:'50%',background:'radial-gradient(circle,rgba(255,255,255,0.1),transparent 70%)',pointerEvents:'none' }} />
          <div style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            background: '#0ea5e9',
            color: '#fff', fontSize: '0.68rem', fontWeight: 800,
            padding: '0.22rem 0.65rem', borderRadius: '999px',
            letterSpacing: '0.04em',
          }}>
            Most Popular
          </div>
        </>
      )}

      <div style={{ padding: '1.85rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          color: pkg.featured ? '#fff' : '#0c1f3f',
          fontWeight: 900, fontSize: '1.1rem', lineHeight: 1.2,
          margin: '0 0 0.3rem',
        }}>
          {pkg.name}
        </h3>
        <p style={{
          color: pkg.featured ? 'rgba(255,255,255,0.6)' : '#64748b',
          fontSize: '0.82rem', margin: '0 0 1.35rem',
        }}>
          {pkg.subtitle}
        </p>

        <div style={{ height: '1px', background: pkg.featured ? 'rgba(255,255,255,0.12)' : '#f0f4f8', margin: '0 0 1.35rem' }} />

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
          {pkg.tests.map((test, t) => (
            <li key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.84rem', color: pkg.featured ? 'rgba(255,255,255,0.85)' : '#334155' }}>
              <CheckCircle size={14} color={pkg.featured ? '#4ade80' : '#059669'} style={{ flexShrink: 0, marginTop: '2px' }} />
              {test}
            </li>
          ))}
        </ul>

        <button
          onClick={onBook}
          style={{
            width: '100%',
            padding: '0.82rem 1rem',
            background: pkg.featured
              ? '#0ea5e9'
              : hov ? pkg.accent : '#fff',
            color: pkg.featured ? '#fff' : hov ? '#fff' : pkg.accent,
            border: pkg.featured ? 'none' : `1.5px solid ${pkg.accent}`,
            borderRadius: '13px',
            fontWeight: 700, fontSize: '0.88rem',
            cursor: 'pointer', fontFamily: 'inherit',
            transition: 'all 0.22s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
            boxShadow: pkg.featured ? '0 4px 16px rgba(14,165,233,0.35)' : 'none',
          }}
          onMouseEnter={e => { if (pkg.featured) e.currentTarget.style.background='#0284c7'; }}
          onMouseLeave={e => { if (pkg.featured) e.currentTarget.style.background='#0ea5e9'; }}
        >
          <Calendar size={14} /> Book This Package
        </button>
      </div>
    </div>
  );
};

/* ── Main page ── */
const Diagnostics = () => {
  const navigate = useNavigate();
  const [servRef, servVis] = useInView(0.04);
  const [pkgRef,  pkgVis]  = useInView(0.04);
  const [infoRef, infoVis] = useInView(0.1);

  const goCheckup = () => { navigate('/book-checkup'); window.scrollTo(0, 0); };

  return (
    <div style={{ background: '#fff' }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg,#0c1f3f 0%,#0f3460 50%,#0369a1 100%)',
        padding: 'clamp(5rem,10vw,7rem) 0 clamp(4rem,8vw,6rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position:'absolute',top:'-80px',right:'-80px',width:360,height:360,borderRadius:'50%',background:'radial-gradient(circle,rgba(14,165,233,0.18),transparent 65%)',pointerEvents:'none' }} />
        <div style={{ position:'absolute',bottom:'-60px',left:'-60px',width:260,height:260,borderRadius:'50%',background:'radial-gradient(circle,rgba(219,39,119,0.12),transparent 70%)',pointerEvents:'none' }} />
        <div style={{ position:'absolute',top:'15%',right:'7%',width:200,height:200,opacity:0.04,pointerEvents:'none' }}>
          <svg viewBox="0 0 200 200" fill="white">
            <rect x="75" y="0" width="50" height="200" rx="8"/>
            <rect x="0" y="75" width="200" height="50" rx="8"/>
          </svg>
        </div>

        <div className="container" style={{ position:'relative',zIndex:1,textAlign:'center' }}>
          <div style={{
            display:'inline-flex',alignItems:'center',gap:'0.45rem',
            background:'rgba(255,255,255,0.12)',border:'1px solid rgba(255,255,255,0.2)',
            borderRadius:'999px',padding:'0.3rem 0.9rem',marginBottom:'1.25rem',
          }}>
            <div style={{ width:6,height:6,borderRadius:'50%',background:'#4ade80',boxShadow:'0 0 6px #4ade80' }} />
            <span style={{ fontSize:'0.7rem',fontWeight:700,color:'rgba(255,255,255,0.9)',textTransform:'uppercase',letterSpacing:'0.08em' }}>
              Lab & Diagnostics
            </span>
          </div>
          <h1 style={{
            color:'#fff',
            fontSize:'clamp(2rem,5vw,3.2rem)',
            fontWeight:900,lineHeight:1.12,
            margin:'0 0 1.1rem',letterSpacing:'-0.02em',
          }}>
            Accurate Diagnostics,{' '}
            <span style={{ color:'#67e8f9' }}>Faster Answers</span>
          </h1>
          <p style={{
            color:'rgba(255,255,255,0.75)',
            fontSize:'clamp(0.95rem,2vw,1.1rem)',
            lineHeight:1.75,maxWidth:600,margin:'0 auto 2.5rem',
          }}>
            Apollo Clinic Srinagar offers a comprehensive range of in-house diagnostic services — from cardiac tests and blood panels to respiratory evaluation and preventive health packages, all reviewed by your doctor.
          </p>
          <div style={{ display:'flex',gap:'0.75rem',justifyContent:'center',flexWrap:'wrap' }}>
            <button onClick={goCheckup} style={{
              display:'inline-flex',alignItems:'center',gap:'0.4rem',
              padding:'0.8rem 1.5rem',
              background:'#fff',color:'#0369a1',
              border:'none',borderRadius:'12px',
              fontWeight:800,fontSize:'0.9rem',
              cursor:'pointer',fontFamily:'inherit',
              boxShadow:'0 4px 20px rgba(0,0,0,0.2)',
              transition:'all 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform='scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
            >
              <Calendar size={16} /> Book a Checkup
            </button>
            <a href={PHONE_HREF} style={{
              display:'inline-flex',alignItems:'center',gap:'0.4rem',
              padding:'0.8rem 1.4rem',
              background:'rgba(255,255,255,0.12)',
              border:'1.5px solid rgba(255,255,255,0.3)',
              borderRadius:'12px',color:'#fff',
              fontWeight:700,fontSize:'0.9rem',
              textDecoration:'none',transition:'all 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.12)'}
            >
              <Phone size={16} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUST INTRO STRIP
      ══════════════════════════════════════ */}
      <section ref={infoRef} style={{ background:'#fafbfc',borderBottom:'1px solid #f0f4f8',padding:'2.75rem 0' }}>
        <div className="container">
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',
            gap:'1rem',
            opacity: infoVis ? 1 : 0,
            transform: infoVis ? 'none' : 'translateY(14px)',
            transition:'opacity 0.55s ease,transform 0.55s ease',
          }}>
            {[
              { icon: <CheckCircle size={18} color="#059669" />, title: 'Same-Day Results', body: 'Most routine tests processed and reported on the same day.' },
              { icon: <CheckCircle size={18} color="#059669" />, title: 'In-House Lab', body: 'No external facility needed — everything done at our clinic.' },
              { icon: <CheckCircle size={18} color="#059669" />, title: 'Doctor-Reviewed Reports', body: 'Results are reviewed and explained by your consulting physician.' },
              { icon: <CheckCircle size={18} color="#059669" />, title: 'Walk-In Friendly', body: 'No referral required. Come in anytime during clinic hours.' },
              { icon: <CheckCircle size={18} color="#059669" />, title: 'Confidential & Secure', body: 'Your diagnostic reports are kept strictly private and confidential.' },
            ].map((item, i) => (
              <div key={i} style={{
                display:'flex',alignItems:'flex-start',gap:'0.75rem',
                padding:'1.1rem 1.25rem',
                background:'#fff',
                border:'1.5px solid #edf2f7',
                borderRadius:'16px',
              }}>
                <div style={{ marginTop:'0.08rem',flexShrink:0 }}>{item.icon}</div>
                <div>
                  <div style={{ color:'#0c1f3f',fontWeight:800,fontSize:'0.88rem',marginBottom:'0.25rem' }}>{item.title}</div>
                  <div style={{ color:'#64748b',fontSize:'0.78rem',lineHeight:1.6 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DIAGNOSTIC SERVICES GRID
      ══════════════════════════════════════ */}
      <section style={{
        background:'#fff',
        padding:'5.5rem 0',
        position:'relative',overflow:'hidden',
      }}>
        <div style={{
          position:'absolute',inset:0,pointerEvents:'none',
          backgroundImage:'radial-gradient(circle at 90% 15%,rgba(219,39,119,0.025) 0%,transparent 55%), radial-gradient(circle at 5% 80%,rgba(3,105,161,0.025) 0%,transparent 50%)',
        }} />
        <div className="container" style={{ position:'relative',zIndex:1 }}>
          <div style={{ maxWidth:620,marginBottom:'3rem' }}>
            <div style={{
              display:'inline-flex',alignItems:'center',gap:'0.45rem',
              background:'#e0f2fe',borderRadius:'999px',
              padding:'0.28rem 0.85rem',marginBottom:'0.9rem',
            }}>
              <div style={{ width:6,height:6,borderRadius:'50%',background:'#0369a1' }} />
              <span style={{ fontSize:'0.7rem',fontWeight:700,color:'#0369a1',textTransform:'uppercase',letterSpacing:'0.08em' }}>
                Diagnostic Services
              </span>
            </div>
            <h2 style={{
              color:'#0c1f3f',
              fontSize:'clamp(1.7rem,3.8vw,2.4rem)',
              fontWeight:800,lineHeight:1.18,margin:'0 0 0.75rem',
            }}>
              Clinical Tests &{' '}
              <span style={{
                background:'linear-gradient(135deg,#0369a1,#0ea5e9)',
                WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
              }}>
                Diagnostic Services
              </span>
            </h2>
            <p style={{ color:'#64748b',fontSize:'0.95rem',lineHeight:1.7,margin:0 }}>
              All tests are conducted in-house at Apollo Clinic — using quality-controlled equipment and reviewed by your consulting doctor at the same appointment.
            </p>
          </div>

          <div ref={servRef} style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',
            gap:'1.1rem',
          }}>
            {DIAGNOSTIC_SERVICES.map((svc, i) => (
              <DiagServiceCard key={svc.id} svc={svc} vis={servVis} delay={i * 0.05} onBook={goCheckup} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HEALTH PACKAGES
      ══════════════════════════════════════ */}
      <section style={{
        background:'#fafbfc',
        borderTop:'1px solid #f0f4f8',
        padding:'5.5rem 0',
        position:'relative',overflow:'hidden',
      }}>
        <div style={{
          position:'absolute',inset:0,pointerEvents:'none',
          backgroundImage:'radial-gradient(circle at 15% 30%,rgba(3,105,161,0.03) 0%,transparent 55%)',
        }} />
        <div className="container" style={{ position:'relative',zIndex:1 }}>
          <div style={{ maxWidth:620,marginBottom:'3rem' }}>
            <div style={{
              display:'inline-flex',alignItems:'center',gap:'0.45rem',
              background:'#d1fae5',borderRadius:'999px',
              padding:'0.28rem 0.85rem',marginBottom:'0.9rem',
            }}>
              <div style={{ width:6,height:6,borderRadius:'50%',background:'#047857' }} />
              <span style={{ fontSize:'0.7rem',fontWeight:700,color:'#047857',textTransform:'uppercase',letterSpacing:'0.08em' }}>
                Checkup Packages
              </span>
            </div>
            <h2 style={{
              color:'#0c1f3f',
              fontSize:'clamp(1.7rem,3.8vw,2.4rem)',
              fontWeight:800,lineHeight:1.18,margin:'0 0 0.75rem',
            }}>
              Health Checkup{' '}
              <span style={{
                background:'linear-gradient(135deg,#047857,#059669)',
                WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
              }}>
                Packages
              </span>
            </h2>
            <p style={{ color:'#64748b',fontSize:'0.95rem',lineHeight:1.7,margin:0 }}>
              Structured screening packages designed to give you a complete picture of your health — from essential basics to full-body assessment, including physician consultation.
            </p>
          </div>

          <div ref={pkgRef} style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
            gap:'1.25rem',
          }}>
            {PACKAGES.map((pkg, i) => (
              <PkgCard key={i} pkg={pkg} vis={pkgVis} delay={i * 0.1} onBook={goCheckup} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INFO STRIP
      ══════════════════════════════════════ */}
      <section style={{ background:'#fff',borderTop:'1px solid #f0f4f8',padding:'3.5rem 0' }}>
        <div className="container">
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',
            gap:'1.1rem',
          }}>
            {[
              { icon: <Clock size={20} color="#0369a1"/>, label:'Diagnostic Hours', lines:['Mon – Sat: 12:00 PM – 7:00 PM','Sunday: 10:00 AM – 1:30 PM'] },
              { icon: <MapPin size={20} color="#059669"/>, label:'Our Location', lines:['Near National School, Arham Towers','Karan Nagar, Srinagar, J&K'] },
              { icon: <Phone size={20} color="#7c3aed"/>, label:'Contact Us', lines:[PHONE,'Call or WhatsApp for test queries'] },
            ].map((item, i) => (
              <div key={i} style={{
                display:'flex',alignItems:'flex-start',gap:'0.85rem',
                padding:'1.4rem 1.35rem',
                background:'#fafbfc',
                border:'1.5px solid #edf2f7',
                borderRadius:'18px',
                boxShadow:'0 2px 10px rgba(14,31,63,0.04)',
              }}>
                <div style={{
                  width:44,height:44,borderRadius:'13px',
                  background:'#fff',border:'1px solid #edf2f7',
                  display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ color:'#0c1f3f',fontWeight:800,fontSize:'0.88rem',marginBottom:'0.35rem' }}>{item.label}</div>
                  {item.lines.map((l, li) => (
                    <div key={li} style={{ color:'#64748b',fontSize:'0.82rem',lineHeight:1.6 }}>{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════ */}
      <section style={{ background:'#fafbfc',padding:'4rem 0' }}>
        <div className="container">
          <div style={{
            background:'linear-gradient(135deg,#0c1f3f 0%,#0369a1 60%,#0ea5e9 100%)',
            borderRadius:'22px',
            padding:'clamp(2rem,4vw,2.75rem) clamp(1.5rem,4vw,3rem)',
            position:'relative',overflow:'hidden',
            display:'flex',alignItems:'center',justifyContent:'space-between',
            gap:'1.5rem',flexWrap:'wrap',
          }}>
            <div style={{ position:'absolute',top:'-60px',right:'-60px',width:240,height:240,borderRadius:'50%',background:'radial-gradient(circle,rgba(255,255,255,0.08),transparent 65%)',pointerEvents:'none' }} />
            <div style={{ zIndex:1 }}>
              <div style={{ color:'#bae6fd',fontSize:'0.72rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'0.4rem' }}>
                Apollo Clinic Srinagar
              </div>
              <h2 style={{ color:'#fff',fontWeight:800,fontSize:'clamp(1.1rem,3vw,1.6rem)',lineHeight:1.2,margin:'0 0 0.5rem' }}>
                Book your health checkup today.
              </h2>
              <p style={{ color:'rgba(255,255,255,0.7)',fontSize:'0.9rem',margin:0,lineHeight:1.65 }}>
                Early detection matters. Schedule your checkup at Apollo Clinic — Mon to Sun, Karan Nagar, Srinagar.
              </p>
            </div>
            <div style={{ display:'flex',gap:'0.75rem',flexWrap:'wrap',zIndex:1 }}>
              <button onClick={goCheckup} style={{
                display:'inline-flex',alignItems:'center',gap:'0.4rem',
                padding:'0.8rem 1.5rem',
                background:'#fff',color:'#0369a1',
                border:'none',borderRadius:'12px',
                fontWeight:800,fontSize:'0.9rem',
                cursor:'pointer',fontFamily:'inherit',
                boxShadow:'0 4px 18px rgba(0,0,0,0.15)',transition:'all 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform='scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
              >
                <Calendar size={15} /> Book a Checkup
              </button>
              <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
                display:'inline-flex',alignItems:'center',gap:'0.4rem',
                padding:'0.8rem 1.3rem',
                background:'#25D366',
                border:'none',
                borderRadius:'12px',color:'#fff',
                fontWeight:700,fontSize:'0.88rem',
                textDecoration:'none',transition:'all 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity='0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity='1'}
              >
                WhatsApp Us
              </a>
              <a href={PHONE_HREF} style={{
                display:'inline-flex',alignItems:'center',gap:'0.4rem',
                padding:'0.8rem 1.3rem',
                background:'rgba(255,255,255,0.12)',
                border:'1.5px solid rgba(255,255,255,0.3)',
                borderRadius:'12px',color:'#fff',
                fontWeight:700,fontSize:'0.88rem',
                textDecoration:'none',transition:'all 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.12)'}
              >
                <Phone size={14} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Diagnostics;
