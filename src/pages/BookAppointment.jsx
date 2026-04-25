import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, CheckCircle, MessageCircle } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const WA_LINK = `https://wa.me/919149425496?text=${encodeURIComponent('Hello! I would like to book an appointment at Apollo Clinic Srinagar.')}`;

const TRUST_POINTS = [
  { icon: '✅', text: 'Multi-speciality clinic — one visit, complete care' },
  { icon: '🔬', text: 'In-house diagnostics — ECG, ECHO, PFT, Lab Tests' },
  { icon: '👨‍⚕️', text: 'Experienced, verified specialist doctors' },
  { icon: '🕐', text: 'Open Mon–Sat 12 PM–7 PM · Sunday 10 AM–1:30 PM' },
  { icon: '📍', text: 'Karan Nagar, Near National School, Srinagar' },
  { icon: '🔒', text: 'Your data is handled confidentially' },
];

const BookAppointment = () => (
  <div>
    {/* ── Page Hero ── */}
    <section className="page-hero">
      <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
        <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '1.25rem', display: 'inline-flex' }}>
          📅 Book Appointment
        </span>
        <h1 style={{ color: '#fff', marginBottom: '1.1rem', fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
          Book Your Consultation
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
          Fill out the form below and our team will confirm your slot within hours. Or call us directly for immediate assistance.
        </p>
      </div>
    </section>

    {/* ── Main ── */}
    <section style={{ background: 'linear-gradient(180deg,#f0f9ff,#fff)', padding: '5rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>

          {/* Left: Trust + Info */}
          <div>
            <span className="pill" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Why Book With Us</span>
            <h2 style={{ color: '#0c4a6e', fontSize: 'clamp(1.5rem,3.5vw,2rem)', marginBottom: '0.75rem' }}>
              Expert Care,<br />Made Easy
            </h2>
            <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Apollo Clinic Srinagar makes booking simple and healthcare accessible. Expert specialists, modern diagnostics, and a smooth patient experience — all in Karan Nagar.
            </p>

            {/* Trust checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {TRUST_POINTS.map((tp, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', padding: '0.75rem 1rem', borderRadius: '12px', background: '#fff', border: '1.5px solid #e2e8f0', boxShadow: '0 1px 6px rgba(14,165,233,0.05)' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>{tp.icon}</span>
                  <span style={{ fontSize: '0.88rem', color: '#334155', fontWeight: 500, lineHeight: 1.5 }}>{tp.text}</span>
                </div>
              ))}
            </div>

            {/* Direct contact strip */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #e2e8f0' }}>
              <div style={{ background: 'linear-gradient(135deg,#0369a1,#0ea5e9)', padding: '0.85rem 1.25rem' }}>
                <p style={{ color: '#fff', fontWeight: 800, fontSize: '0.9rem', margin: 0 }}>📞 Prefer to call or message?</p>
              </div>
              <div style={{ background: '#fff', padding: '1.1rem 1.25rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="tel:+919149425496" className="btn btn-call" style={{ flex: 1, minWidth: 130, fontSize: '0.88rem', padding: '0.65rem 1rem' }}>
                  <Phone size={15} /> Call Now
                </a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ flex: 1, minWidth: 130, fontSize: '0.88rem', padding: '0.65rem 1rem' }}>
                  <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default BookAppointment;
