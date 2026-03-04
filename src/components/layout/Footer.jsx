import Logo from '../ui/Logo';
import { FOOTER_COLUMNS } from '../../data/constants';

/**
 * Site footer with logo, social links, and footer columns.
 */
export default function Footer() {
    const SOCIALS = [
        { label: 'IG', url: 'https://www.instagram.com/delacruzsoft/' },
        { label: 'FB', url: 'https://www.facebook.com/delacruzsoftware' },
    ];

    return (
        <footer style={{ background: '#050F24', padding: '72px 0 32px', color: 'rgba(255,255,255,.4)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                <div
                    className="footer-grid"
                    style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 56 }}
                >
                    <div>
                        <Logo light />
                        <p style={{ marginTop: 20, lineHeight: 1.8, fontSize: '.875rem', maxWidth: 280 }}>
                            Soluciones de software a medida para negocios que quieren crecer con tecnología.
                        </p>
                        <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
                            {SOCIALS.map(({ label, url }) => (
                                <a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: 34,
                                        height: 34,
                                        borderRadius: 9,
                                        background: 'rgba(255,255,255,.06)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'all .2s',
                                        color: 'rgba(255,255,255,.4)',
                                        fontSize: '.68rem',
                                        fontWeight: 800,
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(63,169,245,.2)';
                                        e.currentTarget.style.color = '#3FA9F5';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,.06)';
                                        e.currentTarget.style.color = 'rgba(255,255,255,.4)';
                                    }}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {FOOTER_COLUMNS.map(([heading, links]) => (
                        <div key={heading}>
                            <div
                                style={{
                                    fontFamily: 'Poppins,sans-serif',
                                    fontWeight: 800,
                                    color: '#fff',
                                    marginBottom: 20,
                                    fontSize: '.875rem',
                                    letterSpacing: '.06em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {heading}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {links.map(l => (
                                    <a
                                        key={l}
                                        href="#"
                                        style={{
                                            color: 'rgba(255,255,255,.32)',
                                            textDecoration: 'none',
                                            fontSize: '.875rem',
                                            fontWeight: 500,
                                            transition: 'color .2s',
                                        }}
                                        onMouseEnter={e => (e.target.style.color = '#fff')}
                                        onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,.32)')}
                                    >
                                        {l}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        borderTop: '1px solid rgba(255,255,255,.06)',
                        paddingTop: 28,
                        textAlign: 'center',
                    }}
                >
                    <span style={{ fontSize: '.8rem' }}>
                        © {new Date().getFullYear()} De La Cruz Software S.R.L. Todos los derechos reservados.
                    </span>
                </div>
            </div>
        </footer>
    );
}
