import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Bot, Calendar, Settings } from 'lucide-react';
import Tag from '../../ui/Tag';
import Button from '../../ui/Button';
import { PRODUCTO_FEATURES, ICON_MAP, WHATSAPP_CHAT } from '../../../data/constants';

/**
 * Producto section — Chat animation + mini admin panel + "Conoce más" button.
 */
export default function Producto() {
    const [visibleCount, setVisibleCount] = useState(0);
    const sectionRef = useRef(null);
    const hasTriggered = useRef(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggered.current) {
                    hasTriggered.current = true;
                    WHATSAPP_CHAT.forEach((_, i) => {
                        setTimeout(() => setVisibleCount(i + 1), (i + 1) * 650);
                    });
                }
            },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            id="producto"
            ref={sectionRef}
            style={{ padding: '120px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}
        >
            <div
                style={{
                    position: 'absolute', top: 0, right: 0, width: 700, height: 700, borderRadius: '50%',
                    background: 'radial-gradient(circle,rgba(63,169,245,.07) 0%,transparent 65%)', pointerEvents: 'none',
                }}
            />

            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <Tag
                        icon={<Sparkles size={12} />}
                        bg="rgba(63,169,245,.1)" color="#3FA9F5"
                        border="1px solid rgba(63,169,245,.2)"
                        className="rv" style={{ marginBottom: 20 }}
                    >
                        Producto Estrella
                    </Tag>
                    <h2 className="rv d1" style={{
                        fontFamily: 'Poppins,sans-serif', fontWeight: 900,
                        fontSize: 'clamp(2.25rem,4vw,3.75rem)', letterSpacing: '-.05em', marginBottom: 18,
                    }}>
                        Bot de WhatsApp <span className="gt">con IA</span>
                    </h2>
                    <p className="rv d2" style={{ fontSize: '1.125rem', color: '#566880', maxWidth: 550, margin: '0 auto', lineHeight: 1.8 }}>
                        Un asistente virtual que atiende tus clientes por WhatsApp.
                        Funciona para cualquier tipo de negocio.
                    </p>
                </div>

                {/* Two columns: Chat + Mini Admin */}
                <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 48, alignItems: 'flex-start' }}>
                    {/* LEFT — WhatsApp Chat */}
                    <div className="rvl" style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="wa-phone" style={{ width: '100%', maxWidth: 360 }}>
                            <div className="wa-phone-header">
                                <div className="wa-phone-avatar"><Bot size={18} /></div>
                                <div>
                                    <div className="wa-phone-name">DLC Bot</div>
                                    <div className="wa-phone-status">en línea</div>
                                </div>
                            </div>
                            <div className="wa-chat-area" style={{ minHeight: 300 }}>
                                {WHATSAPP_CHAT.slice(0, visibleCount).map((msg, i) => (
                                    <div key={i} className={`wa-bubble ${msg.from === 'user' ? 'wa-bubble-user' : 'wa-bubble-bot'}`}>
                                        {msg.text}
                                    </div>
                                ))}
                                {visibleCount > 0 && visibleCount < WHATSAPP_CHAT.length && WHATSAPP_CHAT[visibleCount]?.from === 'bot' && (
                                    <div className="wa-bubble wa-bubble-bot"
                                        style={{ opacity: 1, animation: 'none', display: 'flex', gap: 4, padding: '12px 16px' }}>
                                        {[0, 1, 2].map(d => (
                                            <div key={d} style={{
                                                width: 7, height: 7, borderRadius: '50%', background: 'rgba(255,255,255,.4)',
                                                animation: `fl 1.2s ${d * 0.15}s ease-in-out infinite`,
                                            }} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Mini Admin Panel */}
                    <div className="rvr" style={{ flex: '1 1 400px' }}>
                        <div style={{
                            borderRadius: 18, overflow: 'hidden',
                            border: '1px solid rgba(11,43,106,.1)', boxShadow: '0 32px 64px -16px rgba(11,43,106,.18)', background: '#fff',
                        }}>
                            {/* Title bar */}
                            <div style={{ background: '#0B2B6A', padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                                {['#ff5f57', '#ffbd2e', '#27c93f'].map(c => (
                                    <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
                                ))}
                                <span style={{ marginLeft: 10, fontSize: '.65rem', fontWeight: 700, color: 'rgba(255,255,255,.35)', letterSpacing: '.15em', textTransform: 'uppercase' }}>
                                    Panel de Administración
                                </span>
                            </div>

                            <div style={{ padding: 16, background: '#f8f9ff' }}>
                                {/* Stats */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 12 }}>
                                    {[
                                        { label: 'Clientes', val: '127', c: '#3FA9F5' },
                                        { label: 'Citas hoy', val: '5', c: '#10B981' },
                                        { label: 'Bot', val: 'Activo', c: '#25D366' },
                                    ].map(({ label, val, c }) => (
                                        <div key={label} style={{ background: '#fff', borderRadius: 12, padding: '10px 8px', border: '1px solid rgba(11,43,106,.06)' }}>
                                            <div style={{ fontSize: '.58rem', fontWeight: 700, color: '#566880', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 3 }}>{label}</div>
                                            <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: '1.15rem', color: c }}>{val}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Citas del día */}
                                <div style={{ background: '#fff', borderRadius: 12, padding: 12, border: '1px solid rgba(11,43,106,.06)', marginBottom: 10 }}>
                                    <div style={{ fontSize: '.65rem', fontWeight: 700, color: '#0B2B6A', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <Calendar size={11} /> Citas del día
                                    </div>
                                    {[
                                        { time: '10:00', name: 'María L.', srv: 'Masaje', sc: '#10B981' },
                                        { time: '2:00 PM', name: 'Juan P.', srv: 'Corte', sc: '#f59e0b' },
                                        { time: '4:30 PM', name: 'Ana R.', srv: 'Manicure', sc: '#10B981' },
                                    ].map(({ time, name, srv, sc }) => (
                                        <div key={time} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 0', borderBottom: '1px solid rgba(11,43,106,.03)' }}>
                                            <span style={{ fontSize: '.65rem', fontWeight: 700, color: '#0B2B6A', width: 50 }}>{time}</span>
                                            <span style={{ fontSize: '.7rem', color: '#0D1B2A', fontWeight: 600, flex: 1 }}>{name}</span>
                                            <span style={{ fontSize: '.6rem', color: '#566880' }}>{srv}</span>
                                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: sc }} />
                                        </div>
                                    ))}
                                </div>

                                {/* Config mini */}
                                <div style={{ background: '#fff', borderRadius: 12, padding: 12, border: '1px solid rgba(11,43,106,.06)' }}>
                                    <div style={{ fontSize: '.65rem', fontWeight: 700, color: '#0B2B6A', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <Settings size={11} /> Configuración
                                    </div>
                                    {[
                                        ['Nombre', 'Asistente Bella'],
                                        ['Horario', '8 AM – 9 PM'],
                                        ['Idioma', 'Español'],
                                    ].map(([k, v]) => (
                                        <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid rgba(11,43,106,.03)' }}>
                                            <span style={{ fontSize: '.68rem', color: '#566880' }}>{k}</span>
                                            <span style={{ fontSize: '.68rem', color: '#0D1B2A', fontWeight: 600 }}>{v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Features below panel */}
                        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {PRODUCTO_FEATURES.map(({ icon, c, bg, t, d }) => {
                                const Ic = ICON_MAP[icon];
                                return (
                                    <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                                        <div style={{
                                            width: 38, height: 38, borderRadius: 11, background: bg,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: c, flexShrink: 0,
                                        }}>
                                            {Ic && <Ic size={17} />}
                                        </div>
                                        <div>
                                            <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: '.85rem', color: '#0D1B2A' }}>{t}</span>
                                            <span style={{ fontSize: '.78rem', color: '#566880', marginLeft: 6 }}>— {d}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                        variant="p"
                        style={{ fontSize: '1.05rem', padding: '16px 32px' }}
                        onClick={() => window.location.hash = '#/bot'}
                    >
                        Conoce más del bot <ArrowRight size={17} />
                    </Button>
                    <Button
                        variant="g"
                        style={{ fontSize: '1.05rem', padding: '16px 32px', background: '#EEF2FF', borderColor: 'rgba(11,43,106,.15)', color: '#0B2B6A' }}
                        onClick={() => window.open('https://bot.dlcsoft.dev', '_blank')}
                    >
                        Panel Admin del Bot <Settings size={17} />
                    </Button>
                </div>
            </div>
        </section>
    );
}
