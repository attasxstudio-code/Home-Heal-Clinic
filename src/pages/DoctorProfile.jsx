import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Calendar, Phone, MapPin, Clock, ChevronLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { ALL_DOCTORS } from './OurDoctors';

const PHONE      = '+91 9149425496';
const PHONE_HREF = 'tel:+919149425496';

const DoctorProfile = () => {
  const { id }    = useParams();
  const navigate  = useNavigate();
  const doc       = ALL_DOCTORS.find(d => d.id === id);

  const [form, setForm] = React.useState({
    name: '', phone: '',
    date: new Date().toISOString().split('T')[0],
  });
  const [submitted, setSubmitted] = React.useState(false);

  const goBack  = () => { navigate('/doctors'); window.scrollTo(0, 0); };
  const goBook  = () => { navigate('/book');    window.scrollTo(0, 0); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    // Save to admin dashboard with doctor name
    const existing = JSON.parse(localStorage.getItem('clinic_leads') || '[]');
    const newLead = {
      id:        Date.now(),
      name:      form.name,
      phone:     form.phone,
      date:      form.date,
      notes:     `Appointment requested with ${doc.name} (${doc.specialty})`,
      doctor:    doc.name,
      specialty: doc.specialty,
      status:    'Pending',
      createdAt: new Date().toISOString(),
      source:    `Doctor Profile — ${doc.name}`,
    };
    localStorage.setItem('clinic_leads', JSON.stringify([newLead, ...existing]));

    setSubmitted(true);
  };

  if (!doc) {
    return (
      <div style={{ textAlign: 'center', padding: '8rem 2rem' }}>
        <h2 style={{ color: 'var(--heading)', marginBottom: '1rem' }}>Doctor not found</h2>
        <p style={{ color: 'var(--body)', marginBottom: '1.5rem' }}>This doctor profile does not exist or may have moved.</p>
        <button className="btn btn-primary" onClick={() => { navigate('/doctors'); window.scrollTo(0,0); }} style={{ borderRadius: 'var(--r-full)' }}>
          <ChevronLeft size={15} /> Back to Doctors
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* ── Breadcrumb / back ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0.85rem 0' }}>
        <div className="container">
          <button onClick={goBack} style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            background: 'none', border: 'none', color: 'var(--blue)', fontWeight: 600, fontSize: '0.85rem',
            cursor: 'pointer', fontFamily: 'inherit', padding: 0,
          }}>
            <ChevronLeft size={16} /> Back to Doctors
          </button>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        <div className="doctor-profile-layout">

          {/* ════════════ LEFT COLUMN ════════════ */}
          <div>

            {/* Profile header */}
            <div className="doctor-profile-header">
              {/* Avatar */}
              <div className="doctor-profile-avatar">
                {doc.initials}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Badges */}
                <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.65rem' }}>
                  <span style={{ background: 'var(--blue-light)', border: '1px solid var(--blue-border)', borderRadius: 'var(--r-sm)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--blue)', padding: '0.2rem 0.55rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {doc.specialty}
                  </span>
                  <span style={{ background: 'var(--green-light)', border: '1px solid var(--green-border)', borderRadius: 'var(--r-sm)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--green)', padding: '0.2rem 0.55rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Accepting New Patients
                  </span>
                </div>

                <h1 style={{ fontSize: 'clamp(1.25rem,3.5vw,1.6rem)', marginBottom: '0.25rem', color: 'var(--heading)' }}>{doc.name}</h1>
                <div style={{ fontSize: '0.9rem', color: 'var(--body)', fontWeight: 500, marginBottom: '0.75rem' }}>
                  {doc.dept} Specialist
                </div>

                {/* Meta */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--body)' }}>
                    <CheckCircle size={13} color="var(--blue)" />
                    <span>{doc.qual}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--body)' }}>
                    <CheckCircle size={13} color="var(--blue)" />
                    <span>{doc.exp} Experience</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--body)' }}>
                    <CheckCircle size={13} color="var(--blue)" />
                    <span>{doc.languages.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Overview */}
            <div className="doctor-profile-section">
              <h2>Professional Overview</h2>
              {doc.bio.split('\n\n').filter(Boolean).map((para, i) => (
                <p key={i} style={{ marginBottom: i < doc.bio.split('\n\n').length - 1 ? '1rem' : 0, lineHeight: 1.75, color: 'var(--body)', fontSize: '0.92rem' }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Specialized Treatments */}
            <div className="doctor-profile-section">
              <h2>Specialized Treatments</h2>
              <p style={{ color: 'var(--body)', fontSize: '0.87rem', marginBottom: '1.25rem' }}>
                Tailored care services covering every aspect of {doc.specialty.toLowerCase()}.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.85rem' }}>
                {doc.specializedCare.map((care, i) => (
                  <div key={i} className="care-card">
                    <div className="care-card-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M2 12h20"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--heading)', marginBottom: '0.3rem' }}>{care.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--body)', lineHeight: 1.6 }}>{care.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications & Location */}
            <div className="doctor-profile-section">
              <h2>Clinic Details</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 'var(--r-md)', background: 'var(--blue-light)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--heading)', marginBottom: '0.2rem' }}>Location</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--body)' }}>Near National School, Arham Towers, Karan Nagar, Srinagar</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 'var(--r-md)', background: 'var(--blue-light)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--heading)', marginBottom: '0.2rem' }}>Contact</div>
                    <a href={PHONE_HREF} style={{ fontSize: '0.8rem', color: 'var(--blue)', fontWeight: 600 }}>{PHONE}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ════════════ RIGHT SIDEBAR ════════════ */}
          <div>
            <div className="appt-sidebar">

              {/* Quick book or full form */}

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--green-light)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <CheckCircle size={22} />
                  </div>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--heading)' }}>Request Sent</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--body)', marginBottom: '1.25rem' }}>
                    We'll call you shortly to confirm your appointment with {doc.name}.
                  </p>
                  <button className="btn btn-outline-blue w-full" onClick={() => setSubmitted(false)} style={{ borderRadius: 'var(--r-md)', justifyContent: 'center' }}>
                    Book Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ color: 'var(--heading)', marginBottom: '0.25rem' }}>Request Appointment</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--body)', marginBottom: '1.25rem' }}>
                    Select a preferred date and time to consult with {doc.name.split(' ')[0]}.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text" className="form-input"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel" className="form-input"
                        placeholder="Your contact number"
                        value={form.phone}
                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Preferred Date</label>
                      <input
                        type="date" className="form-input"
                        value={form.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', borderRadius: 'var(--r-md)', padding: '0.8rem' }}
                    >
                      <Calendar size={15} /> Request Consultation
                    </button>
                  </form>

                  <div style={{ marginTop: '0.85rem', textAlign: 'center' }}>
                    <button onClick={goBook} style={{
                      background: 'none', border: 'none', color: 'var(--blue)', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                    }}>
                      Or use the full booking form <ArrowRight size={11} style={{ verticalAlign: 'middle' }} />
                    </button>
                  </div>
                </>
              )}

              {/* Consultation Hours */}
              <div style={{ borderTop: '1px solid var(--border)', marginTop: '1.25rem', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.85rem' }}>
                  <Clock size={14} color="var(--blue)" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--heading)' }}>Consultation Hours</span>
                </div>
                {doc.hours.map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.45rem', fontSize: '0.8rem' }}>
                    <span style={{ color: 'var(--body)' }}>{row.day}</span>
                    <span style={{
                      fontWeight: 700,
                      color: row.time === 'Closed' || row.time === 'Not available' ? 'var(--red)' : 'var(--heading)',
                    }}>
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick phone link */}
              <a href={PHONE_HREF} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem',
                marginTop: '1rem', padding: '0.65rem',
                background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)',
                color: 'var(--body)', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue-border)'; e.currentTarget.style.color = 'var(--blue)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--body)'; }}
              >
                <Phone size={13} /> {PHONE}
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
