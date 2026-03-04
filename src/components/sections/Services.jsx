import { SERVICES, ICON_MAP } from '../../data/constants';
import Tag from '../ui/Tag';
import { Layers } from 'lucide-react';

/**
 * Services section — clean grid of what DLC Software offers.
 */
export default function Services() {
    return (
        <section id="servicios" style={{ padding: '120px 0', background: '#fff' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <Tag
                        icon={<Layers size={12} />}
                        bg="rgba(63,169,245,.1)"
                        color="#3FA9F5"
                        border="1px solid rgba(63,169,245,.2)"
                        className="rv"
                        style={{ marginBottom: 20 }}
                    >
                        Nuestros Servicios
                    </Tag>
                    <h2
                        className="rv d1"
                        style={{
                            fontFamily: 'Poppins,sans-serif',
                            fontWeight: 900,
                            fontSize: 'clamp(2rem,3.5vw,3rem)',
                            letterSpacing: '-.05em',
                            marginBottom: 14,
                        }}
                    >
                        Lo que hacemos
                    </h2>
                    <p
                        className="rv d2"
                        style={{
                            fontSize: '1.0625rem',
                            color: '#566880',
                            maxWidth: 480,
                            margin: '0 auto',
                            lineHeight: 1.7,
                        }}
                    >
                        Soluciones digitales a medida para impulsar tu negocio.
                    </p>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: 20,
                    }}
                >
                    {SERVICES.map(({ icon, c, bg, t, d }, i) => {
                        const IconComponent = ICON_MAP[icon];
                        return (
                            <div
                                key={t}
                                className={`rv d${(i % 3) + 1}`}
                                style={{
                                    background: '#EEF2FF',
                                    borderRadius: 22,
                                    padding: 30,
                                    border: '1px solid rgba(11,43,106,.06)',
                                    transition: 'all .3s',
                                    cursor: 'default',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 24px 60px -12px rgba(11,43,106,.12)';
                                    e.currentTarget.style.background = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = '';
                                    e.currentTarget.style.boxShadow = '';
                                    e.currentTarget.style.background = '#EEF2FF';
                                }}
                            >
                                <div
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 15,
                                        background: bg,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: c,
                                        marginBottom: 18,
                                        border: `1px solid ${c}20`,
                                    }}
                                >
                                    {IconComponent && <IconComponent size={22} />}
                                </div>
                                <h4
                                    style={{
                                        fontFamily: 'Poppins,sans-serif',
                                        fontWeight: 900,
                                        fontSize: '1.125rem',
                                        marginBottom: 8,
                                        color: '#0D1B2A',
                                    }}
                                >
                                    {t}
                                </h4>
                                <p style={{ color: '#566880', lineHeight: 1.65, fontSize: '.875rem' }}>
                                    {d}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
