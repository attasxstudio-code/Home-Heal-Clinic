import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';
import '../index.css';

const Navbar = () => {
  const [isOpen,   setIsOpen]   = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [moreOpen, setMoreOpen] = React.useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus when route changes
  React.useEffect(() => {
    setIsOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  // Close "more" dropdown when clicking outside
  React.useEffect(() => {
    const handler = () => setMoreOpen(false);
    if (moreOpen) document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [moreOpen]);

  const scrollToId = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
        else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 160);
    } else {
      if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goTo = (path) => { navigate(path); window.scrollTo(0, 0); };

  const primaryLinks = [
    { label: 'Home',       action: () => scrollToId('home') },
    { label: 'Services',   action: () => goTo('/services')  },
    { label: 'Doctors',    action: () => goTo('/doctors')   },
    { label: 'Diagnostics',action: () => goTo('/diagnostics') },
  ];

  const moreLinks = [
    { label: '🏥 About Us',          action: () => goTo('/about')    },
    { label: '📍 Contact & Timings', action: () => goTo('/contact')  },
    { label: '💬 FAQ',               action: () => goTo('/faq')      },
  ];

  const navBg    = scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)';
  const navBorder= scrolled ? '1px solid rgba(14,165,233,0.12)' : '1px solid rgba(14,165,233,0.06)';
  const navShadow= scrolled ? '0 2px 24px rgba(14,165,233,0.09)' : 'none';

  return (
    <>
      <nav id="main-nav" style={{
        position: 'sticky', top: 0, zIndex: 200,
        background: navBg, backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: navBorder,
        boxShadow: navShadow,
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 1.25rem' }}>

          {/* ── Logo ── */}
          <button onClick={() => scrollToId('home')} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <div style={{
              background: '#fff', borderRadius: '12px', padding: '4px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 12px rgba(14,165,233,0.15)',
              border: '1.5px solid rgba(14,165,233,0.12)', flexShrink: 0,
            }}>
              <img src="/logo.jpg" alt="Apollo Clinic Logo" height="40" width="auto"
                style={{ objectFit: 'contain', borderRadius: '8px', display: 'block' }} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', lineHeight: 1.1, letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg,#0369a1,#047857)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Apollo Clinic
              </div>
              <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Srinagar
              </div>
            </div>
          </button>

          {/* ── Desktop Links ── */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
            {primaryLinks.map(({ label, action }) => (
              <button key={label} onClick={action} className="nav-link-btn">
                {label}
              </button>
            ))}

            {/* "More" dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                className="nav-link-btn"
                onClick={e => { e.stopPropagation(); setMoreOpen(!moreOpen); }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              >
                More <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: moreOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>
              {moreOpen && (
                <div onClick={e => e.stopPropagation()} style={{
                  position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                  background: '#fff', border: '1.5px solid #e2e8f0',
                  borderRadius: '14px', padding: '0.5rem',
                  boxShadow: '0 12px 40px rgba(14,165,233,0.12)',
                  minWidth: '210px', zIndex: 300,
                  animation: 'fadeInUp 0.18s ease',
                }}>
                  {moreLinks.map(({ label, action }) => (
                    <button key={label} onClick={() => { action(); setMoreOpen(false); }}
                      style={{
                        display: 'block', width: '100%', textAlign: 'left',
                        padding: '0.65rem 0.9rem', background: 'none', border: 'none',
                        color: '#334155', fontSize: '0.88rem', fontWeight: 600,
                        borderRadius: '8px', cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#f0f9ff'; e.currentTarget.style.color = '#0369a1'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#334155'; }}
                    >{label}</button>
                  ))}
                </div>
              )}
            </div>

            <button className="btn btn-primary" onClick={() => goTo('/book')}
              style={{ marginLeft: '0.6rem', padding: '0.55rem 1.35rem', fontSize: '0.88rem', borderRadius: '9999px' }}>
              <Calendar size={15} /> Book Appointment
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            id="nav-hamburger"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="nav-mobile-toggle"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {isOpen && (
          <div className="nav-mobile-menu">
            {[...primaryLinks, ...moreLinks].map(({ label, action }) => (
              <button key={label} onClick={() => { action(); setIsOpen(false); }} className="nav-mobile-link">
                {label}
              </button>
            ))}
            <button className="btn btn-primary"
              onClick={() => { goTo('/book'); setIsOpen(false); }}
              style={{ width: '100%', marginTop: '0.85rem', padding: '0.9rem', fontSize: '1rem', minHeight: '52px', borderRadius: '14px' }}>
              <Calendar size={17} /> Book Appointment
            </button>
          </div>
        )}
      </nav>

      <style>{`
        .nav-link-btn {
          background: none; border: none;
          padding: 0.5rem 0.8rem; border-radius: 8px;
          font-weight: 600; font-size: 0.88rem; color: #334155;
          cursor: pointer; transition: all 0.2s; font-family: inherit;
          white-space: nowrap;
        }
        .nav-link-btn:hover {
          background: rgba(14,165,233,0.08);
          color: #0369a1;
        }
        .nav-mobile-toggle {
          display: none;
          background: none;
          border: 1.5px solid rgba(14,165,233,0.2);
          border-radius: 10px;
          color: #0369a1;
          padding: 8px;
          min-width: 44px; min-height: 44px;
          align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s;
        }
        .nav-mobile-menu {
          background: rgba(248,250,252,0.99);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(14,165,233,0.08);
          padding: 0.5rem 1.25rem 1.25rem;
        }
        .nav-mobile-link {
          display: flex; width: 100%; text-align: left;
          padding: 0.9rem 0.6rem;
          background: none; border: none;
          border-bottom: 1px solid rgba(14,165,233,0.07);
          font-size: 0.97rem; font-weight: 600; color: #334155;
          cursor: pointer; align-items: center; gap: 0.5rem;
          min-height: 48px; font-family: inherit;
          transition: color 0.2s;
        }
        .nav-mobile-link:hover { color: #0369a1; }

        @media (max-width: 768px) {
          .nav-desktop        { display: none !important; }
          .nav-mobile-toggle  { display: flex !important; }
          #main-nav .container { padding-left: 1rem !important; padding-right: 1rem !important; }
        }

        @keyframes fadeInUp {
          from { opacity:0; transform: translateY(8px); }
          to   { opacity:1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
