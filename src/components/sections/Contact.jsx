import { useState } from 'react';
import { Mail, MessageCircle, Phone, Send, CheckCircle2, MapPin } from 'lucide-react';
import Tag from '../ui/Tag';
import Button from '../ui/Button';
import Input from '../ui/Input';

const CONTACT_CHANNELS = [
    { label: 'WhatsApp', value: '(829) 630-0007', c: '#25D366', icon: <MessageCircle size={18} />, link: 'https://wa.me/18296300007' },
    { label: 'Email', value: 'dlcdev@vielku.resend.app', c: '#3FA9F5', icon: <Mail size={18} />, link: 'mailto:dlcdev@vielku.resend.app' },
    { label: 'Teléfono', value: '(829) 630-0007', c: '#a855f7', icon: <Phone size={18} />, link: 'tel:+18296300007' },
];

/**
 * Contact section — prominent contact cards + form.
 */
export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', msg: '' });
    const [sent, setSent] = useState(false);
    const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    return (
        <section
            id="contacto"
            style={{ padding: '120px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}
        >
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 600,
                    height: 600,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,rgba(63,169,245,.07) 0%,transparent 65%)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '0 24px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 56 }}>
                    <Tag
                        icon={<Mail size={12} />}
                        bg="rgba(63,169,245,.1)"
                        color="#0B2B6A"
                        border="1px solid rgba(63,169,245,.2)"
                        className="rv"
                        style={{ marginBottom: 20 }}
                    >
                        Contáctanos
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
                        ¿Listo para empezar? <span className="gt">Escríbenos</span>
                    </h2>
                    <p className="rv d2" style={{ color: '#566880', fontSize: '1.0625rem', maxWidth: 460, margin: '0 auto', lineHeight: 1.7 }}>
                        Escoge el canal que prefieras. Respuesta garantizada.
                    </p>
                </div>

                {/* Quick contact cards */}
                <div
                    className="rv d2"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: 16,
                        marginBottom: 56,
                        maxWidth: 800,
                        margin: '0 auto 56px',
                    }}
                >
                    {CONTACT_CHANNELS.map(({ label, value, c, icon, link }) => (
                        <a
                            key={label}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14,
                                padding: '20px 24px',
                                borderRadius: 18,
                                background: '#EEF2FF',
                                border: '1px solid rgba(11,43,106,.06)',
                                textDecoration: 'none',
                                transition: 'all .3s',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 16px 40px -12px rgba(11,43,106,.15)';
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
                                    width: 48,
                                    height: 48,
                                    borderRadius: 14,
                                    background: `${c}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: c,
                                    flexShrink: 0,
                                }}
                            >
                                {icon}
                            </div>
                            <div style={{ minWidth: 0, flex: 1 }}>
                                <div
                                    style={{
                                        fontSize: '.72rem',
                                        fontWeight: 700,
                                        color: '#566880',
                                        textTransform: 'uppercase',
                                        letterSpacing: '.07em',
                                        marginBottom: 2,
                                    }}
                                >
                                    {label}
                                </div>
                                <div style={{ fontWeight: 700, color: '#0D1B2A', fontSize: 'clamp(.75rem, 2.5vw, .9375rem)', wordBreak: 'break-all', overflowWrap: 'break-word' }}>{value}</div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Form */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                        className="rv d3"
                        style={{
                            flex: '0 1 600px',
                            background: '#EEF2FF',
                            borderRadius: 28,
                            padding: 44,
                            border: '1px solid rgba(11,43,106,.07)',
                        }}
                    >
                        {sent ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div
                                    style={{
                                        width: 72,
                                        height: 72,
                                        borderRadius: '50%',
                                        background: '#e8fdf0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                    }}
                                >
                                    <CheckCircle2 size={36} color="#10B981" />
                                </div>
                                <h3
                                    style={{
                                        fontFamily: 'Poppins,sans-serif',
                                        fontWeight: 900,
                                        fontSize: '1.5rem',
                                        color: '#0D1B2A',
                                        marginBottom: 10,
                                    }}
                                >
                                    ¡Mensaje enviado!
                                </h3>
                                <p style={{ color: '#566880' }}>Te contactaremos lo antes posible.</p>
                                <Button variant="p" style={{ marginTop: 28 }} onClick={() => setSent(false)}>
                                    Enviar otro mensaje
                                </Button>
                            </div>
                        ) : (
                            <>
                                <h3
                                    style={{
                                        fontFamily: 'Poppins,sans-serif',
                                        fontWeight: 900,
                                        fontSize: '1.375rem',
                                        marginBottom: 24,
                                        color: '#0D1B2A',
                                        textAlign: 'center',
                                    }}
                                >
                                    O déjanos un mensaje
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                        <Input label="Nombre" placeholder="Tu nombre" value={form.name} onChange={set('name')} />
                                        <Input label="Email" type="email" placeholder="tu@email.com" value={form.email} onChange={set('email')} />
                                    </div>
                                    <Input
                                        label="¿En qué podemos ayudarte?"
                                        type="textarea"
                                        placeholder="Cuéntanos brevemente..."
                                        value={form.msg}
                                        onChange={set('msg')}
                                    />
                                    <Button
                                        variant="p"
                                        style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '15px' }}
                                        onClick={() => {
                                            if (form.name && form.email) {
                                                const text = `Hola, mi nombre es ${form.name}. Mi correo es ${form.email}. %0A%0A${form.msg}`;
                                                window.open(`https://wa.me/18296300007?text=${text}`, '_blank');
                                                setSent(true);

                                                fetch("https://formsubmit.co/ajax/dlcdev@vielku.resend.app", {
                                                    method: "POST",
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        'Accept': 'application/json'
                                                    },
                                                    body: JSON.stringify({
                                                        name: form.name,
                                                        email: form.email,
                                                        message: form.msg
                                                    })
                                                }).catch(() => { });
                                            }
                                        }}
                                    >
                                        <Send size={16} /> Enviar mensaje
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
