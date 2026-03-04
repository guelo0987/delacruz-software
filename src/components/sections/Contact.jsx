import { useState } from 'react';
import { Mail, MessageCircle, Phone, Send, CheckCircle2 } from 'lucide-react';
import Tag from '../ui/Tag';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { motion } from 'framer-motion';

const CONTACT_CHANNELS = [
    { label: 'WhatsApp', value: '(829) 630-0007', c: '#25D366', icon: <MessageCircle size={20} />, link: 'https://wa.me/18296300007' },
    { label: 'Email', value: 'dlcdev@vielku.resend.app', c: '#3FA9F5', icon: <Mail size={20} />, link: 'mailto:dlcdev@vielku.resend.app' },
    { label: 'Teléfono', value: '(829) 630-0007', c: '#a855f7', icon: <Phone size={20} />, link: 'tel:+18296300007' },
];

/**
 * Contact section — premium contact cards + form with glassmorphism interactions.
 */
export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', msg: '' });
    const [sent, setSent] = useState(false);
    const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 80, damping: 20 }
        }
    };

    return (
        <section
            id="contacto"
            style={{ padding: '140px 0', background: '#FAFAFC', position: 'relative', overflow: 'hidden' }}
        >
            <div
                style={{
                    position: 'absolute',
                    bottom: -200,
                    right: -200,
                    width: 800,
                    height: 800,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,rgba(63,169,245,.05) 0%,transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 0
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: 64 }}
                >
                    <Tag
                        icon={<Mail size={12} />}
                        bg="rgba(63,169,245,.08)"
                        color="#0B2B6A"
                        border="1px solid rgba(63,169,245,.2)"
                        style={{ marginBottom: 24 }}
                    >
                        Contáctanos
                    </Tag>
                    <h2
                        style={{
                            fontFamily: 'Clash Display, sans-serif',
                            fontWeight: 600,
                            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                            letterSpacing: '-.02em',
                            marginBottom: 16,
                            color: '#050F24'
                        }}
                    >
                        ¿Listo para empezar? <span className="gt">Escríbenos</span>
                    </h2>
                    <p style={{ color: '#566880', fontSize: '1.15rem', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
                        Escoge el canal que prefieras. Desarrollamos soluciones a la medida de los desafíos de tu empresa.
                    </p>
                </motion.div>

                {/* Quick contact cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 20,
                        marginBottom: 72,
                        maxWidth: 900,
                        margin: '0 auto 72px',
                    }}
                >
                    {CONTACT_CHANNELS.map(({ label, value, c, icon, link }) => (
                        <motion.a
                            variants={itemVariants}
                            key={label}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                y: -6,
                                boxShadow: '0 25px 50px -12px rgba(11,43,106,.15)',
                                scale: 1.02
                            }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 18,
                                padding: '24px 28px',
                                borderRadius: 24,
                                background: '#ffffff',
                                border: '1px solid rgba(11,43,106,.05)',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div
                                style={{
                                    width: 54,
                                    height: 54,
                                    borderRadius: 16,
                                    background: `${c}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: c,
                                    flexShrink: 0,
                                    boxShadow: `0 8px 20px -8px ${c}50`
                                }}
                            >
                                {icon}
                            </div>
                            <div style={{ minWidth: 0, flex: 1, zIndex: 1 }}>
                                <div
                                    style={{
                                        fontSize: '.75rem',
                                        fontWeight: 700,
                                        color: '#566880',
                                        textTransform: 'uppercase',
                                        letterSpacing: '.1em',
                                        marginBottom: 4,
                                    }}
                                >
                                    {label}
                                </div>
                                <div style={{ fontWeight: 600, color: '#0D1B2A', fontSize: '1.05rem', wordBreak: 'break-all', fontFamily: 'Clash Display, sans-serif' }}>{value}</div>
                            </div>
                            {/* Accent glow on hover/subtle bg */}
                            <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, background: c, opacity: 0.1, filter: 'blur(20px)', borderRadius: '50%' }} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Form */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.3 }}
                        style={{
                            flex: '0 1 680px',
                            background: '#ffffff',
                            borderRadius: 32,
                            padding: '48px 56px',
                            border: '1px solid rgba(11,43,106,.05)',
                            boxShadow: '0 40px 80px -20px rgba(11,43,106,.08)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* decorative corner blur for the form */}
                        <div style={{ position: 'absolute', top: -100, left: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(63,169,245,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

                        {sent ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ textAlign: 'center', padding: '40px 0' }}
                            >
                                <div
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: '50%',
                                        background: '#e8fdf0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 24px',
                                        boxShadow: '0 12px 30px -10px rgba(16,185,129,.3)'
                                    }}
                                >
                                    <CheckCircle2 size={40} color="#10B981" />
                                </div>
                                <h3
                                    style={{
                                        fontFamily: 'Clash Display, sans-serif',
                                        fontWeight: 600,
                                        fontSize: '1.75rem',
                                        color: '#0D1B2A',
                                        marginBottom: 12,
                                    }}
                                >
                                    ¡Mensaje enviado!
                                </h3>
                                <p style={{ color: '#566880', fontSize: '1.05rem' }}>Procesaremos tu solicitud y te contactaremos a la brevedad.</p>
                                <Button variant="p" style={{ marginTop: 32, padding: '14px 32px', borderRadius: '16px' }} onClick={() => setSent(false)}>
                                    Enviar otro mensaje
                                </Button>
                            </motion.div>
                        ) : (
                            <>
                                <h3
                                    style={{
                                        fontFamily: 'Clash Display, sans-serif',
                                        fontWeight: 600,
                                        fontSize: '1.65rem',
                                        marginBottom: 32,
                                        color: '#0D1B2A',
                                        textAlign: 'center',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                >
                                    O déjanos un mensaje directo
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: 'relative', zIndex: 1 }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                                        <Input label="Nombre" placeholder="Tu nombre" value={form.name} onChange={set('name')} />
                                        <Input label="Email" type="email" placeholder="tu@email.com" value={form.email} onChange={set('email')} />
                                    </div>
                                    <Input
                                        label="¿En qué podemos ayudarte?"
                                        type="textarea"
                                        placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                                        value={form.msg}
                                        onChange={set('msg')}
                                    />
                                    <Button
                                        variant="p"
                                        style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '18px', borderRadius: '16px', marginTop: 12 }}
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
                                        <Send size={18} /> Enviar mensaje
                                    </Button>
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
