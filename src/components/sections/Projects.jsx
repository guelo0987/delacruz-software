import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Globe, ArrowRight } from 'lucide-react';
import Tag from '../ui/Tag';
import Button from '../ui/Button';
import { PROJECTS, ICON_MAP } from '../../data/constants';

/**
 * Projects section — what DLC Software can build. Horizontal carousel + CTA.
 */
export default function Projects() {
    const ref = useRef(null);
    const scroll = (dir) => ref.current?.scrollBy({ left: dir * 420, behavior: 'smooth' });

    return (
        <section id="proyectos" style={{ padding: '120px 0', background: '#fff' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: 48,
                        flexWrap: 'wrap',
                        gap: 20,
                    }}
                >
                    <div>
                        <Tag
                            icon={<Globe size={12} />}
                            bg="#EEF2FF"
                            color="#0B2B6A"
                            border="1px solid rgba(11,43,106,.1)"
                            className="rv"
                            style={{ marginBottom: 16 }}
                        >
                            Proyectos
                        </Tag>
                        <h2
                            className="rv d1"
                            style={{
                                fontFamily: 'Poppins,sans-serif',
                                fontWeight: 900,
                                fontSize: 'clamp(1.875rem,3vw,2.75rem)',
                                letterSpacing: '-.05em',
                                marginBottom: 8,
                            }}
                        >
                            Lo que podemos construir
                        </h2>
                        <p className="rv d2" style={{ color: '#566880', fontSize: '1rem', maxWidth: 420 }}>
                            Soluciones reales para problemas reales. Cada proyecto es hecho a medida.
                        </p>
                    </div>
                    <div className="rv" style={{ display: 'flex', gap: 10 }}>
                        {[
                            { Icon: ChevronLeft, dir: -1 },
                            { Icon: ChevronRight, dir: 1 },
                        ].map(({ Icon, dir }, i) => (
                            <button
                                key={i}
                                onClick={() => scroll(dir)}
                                style={{
                                    width: 42,
                                    height: 42,
                                    borderRadius: '50%',
                                    border: '1.5px solid rgba(11,43,106,.14)',
                                    background: '#fff',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#0B2B6A',
                                    transition: 'all .2s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#0B2B6A';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#fff';
                                    e.currentTarget.style.color = '#0B2B6A';
                                }}
                            >
                                <Icon size={18} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Scrollable row */}
                <div
                    ref={ref}
                    className="ns"
                    style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 8, marginBottom: 48 }}
                >
                    {PROJECTS.map((p, i) => {
                        const IconComponent = ICON_MAP[p.icon];
                        return (
                            <div
                                key={p.t}
                                className={`rv d${(i % 3) + 1}`}
                                style={{
                                    minWidth: 260,
                                    maxWidth: 340,
                                    background: '#EEF2FF',
                                    borderRadius: 24,
                                    border: '1px solid rgba(11,43,106,.06)',
                                    padding: 28,
                                    flexShrink: 0,
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
                                        background: p.bg,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: p.c,
                                        marginBottom: 16,
                                        border: `1px solid ${p.c}20`,
                                    }}
                                >
                                    {IconComponent && <IconComponent size={20} />}
                                </div>
                                <div
                                    style={{
                                        fontSize: '.72rem',
                                        fontWeight: 700,
                                        color: '#566880',
                                        textTransform: 'uppercase',
                                        letterSpacing: '.1em',
                                        marginBottom: 5,
                                    }}
                                >
                                    {p.cat}
                                </div>
                                <h4
                                    style={{
                                        fontFamily: 'Poppins,sans-serif',
                                        fontWeight: 900,
                                        fontSize: '1.1875rem',
                                        marginBottom: 10,
                                        color: '#0D1B2A',
                                    }}
                                >
                                    {p.t}
                                </h4>
                                <p style={{ color: '#566880', lineHeight: 1.7, fontSize: '.875rem', marginBottom: 18 }}>
                                    {p.d}
                                </p>
                                <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                                    {p.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            style={{
                                                background: 'rgba(11,43,106,.06)',
                                                color: '#0B2B6A',
                                                fontSize: '.7rem',
                                                fontWeight: 700,
                                                padding: '3px 11px',
                                                borderRadius: 100,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="rv" style={{ textAlign: 'center' }}>
                    <p style={{ color: '#566880', fontSize: '1.0625rem', marginBottom: 20 }}>
                        ¿Tienes un proyecto en mente? Cuéntanos y te damos una solución.
                    </p>
                    <Button
                        variant="p"
                        style={{ fontSize: '1rem' }}
                        onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Hablemos de tu proyecto <ArrowRight size={16} />
                    </Button>
                </div>
            </div>
        </section>
    );
}
