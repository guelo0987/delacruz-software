import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { NAV_LINKS } from '../../data/constants';

/**
 * Main navigation bar with scroll effect and mobile drawer.
 */
export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    background: scrolled ? 'rgba(238,242,255,.96)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(24px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(11,43,106,.08)' : 'none',
                    transition: 'all .35s',
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        margin: '0 auto',
                        padding: '0 24px',
                        height: 68,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Logo />
                    <div className="hm" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                        {NAV_LINKS.map(([label, href]) => (
                            <a key={label} href={href} className="nav-a">
                                {label}
                            </a>
                        ))}
                    </div>
                    <div className="hm" style={{ display: 'flex', gap: 10 }}>
                        <Button
                            variant="g"
                            style={{ padding: '9px 20px', fontSize: '.875rem' }}
                            onClick={() => scrollTo('contacto')}
                        >
                            Contactar
                        </Button>
                        <Button
                            variant="p"
                            style={{ padding: '9px 20px', fontSize: '.875rem' }}
                            onClick={() => (window.location.hash = '#/bot')}
                        >
                            El Bot →
                        </Button>
                    </div>
                    <button
                        className="sm"
                        onClick={() => setMobileOpen(true)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#0B2B6A',
                            alignItems: 'center',
                        }}
                    >
                        <Menu size={26} />
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: '#050F24',
                        zIndex: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1.75rem',
                        animation: 'si .3s ease',
                    }}
                >
                    <button
                        onClick={() => setMobileOpen(false)}
                        style={{
                            position: 'absolute',
                            top: 22,
                            right: 22,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#fff',
                        }}
                    >
                        <X size={28} />
                    </button>
                    <Logo light />
                    {NAV_LINKS.map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                fontFamily: 'Poppins,sans-serif',
                                fontWeight: 900,
                                fontSize: '1.75rem',
                                color: '#fff',
                                textDecoration: 'none',
                                letterSpacing: '-.04em',
                            }}
                        >
                            {label}
                        </a>
                    ))}
                    <Button
                        variant="p"
                        style={{ marginTop: 8, fontSize: '1rem', padding: '14px 32px' }}
                        onClick={() => {
                            setMobileOpen(false);
                            scrollTo('contacto');
                        }}
                    >
                        <Phone size={16} /> Hablar ahora
                    </Button>
                </div>
            )}
        </>
    );
}
