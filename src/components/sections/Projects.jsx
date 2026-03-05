import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Globe, ArrowRight, ExternalLink } from 'lucide-react';
import Tag from '../ui/Tag';
import Button from '../ui/Button';
import { PROJECTS, ICON_MAP } from '../../data/constants';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Projects section — Featuring 'Gigante' prominently, then dynamic horizontal carousel using Framer Motion
 */
export default function Projects() {
    const ref = useRef(null);
    const scroll = (dir) => ref.current?.scrollBy({ left: dir * 420, behavior: 'smooth' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 70, damping: 20 }
        }
    };

    return (
        <section id="proyectos" style={{ padding: '120px 0', background: '#FAFAFC', position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: 64,
                        flexWrap: 'wrap',
                        gap: 24,
                    }}
                >
                    <div style={{ maxWidth: 500 }}>
                        <Tag
                            icon={<Globe size={12} />}
                            bg="#EEF2FF"
                            color="#0B2B6A"
                            border="1px solid rgba(11,43,106,.1)"
                            style={{ marginBottom: 20 }}
                        >
                            Casos de Éxito
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
                            Lo que construimos
                        </h2>
                        <p style={{ color: '#566880', fontSize: '1.15rem', lineHeight: 1.7 }}>
                            Soluciones reales para problemas reales. Diseñamos y desarrollamos productos a medida que impulsan resultados.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: 12 }}>
                        {[
                            { Icon: ChevronLeft, dir: -1 },
                            { Icon: ChevronRight, dir: 1 },
                        ].map(({ Icon, dir }, i) => (
                            <button
                                key={i}
                                onClick={() => scroll(dir)}
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: '50%',
                                    border: '1px solid rgba(11,43,106,.1)',
                                    background: '#EEF2FF',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#0B2B6A',
                                    transition: 'all .3s cubic-bezier(0.16, 1, 0.3, 1)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#0B2B6A';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#EEF2FF';
                                    e.currentTarget.style.color = '#0B2B6A';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <Icon size={20} />
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Featured Project: Gigante */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                    style={{
                        background: '#ffffff',
                        borderRadius: 32,
                        padding: '12px',
                        border: '1px solid rgba(11,43,106,.05)',
                        marginBottom: 64,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 24,
                        alignItems: 'center',
                        boxShadow: '0 40px 80px -20px rgba(11,43,106,.08)',
                        overflow: 'hidden',
                        position: 'relative'
                    }}
                    className="featured-project-grid"
                >
                    {/* Media container */}
                    <div
                        style={{
                            background: '#F8FAFC',
                            borderRadius: 24,
                            height: '100%',
                            minHeight: 400,
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* Decorative glow */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(63,169,245,0.1) 0%, transparent 70%)', filter: 'blur(30px)' }} />

                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            src="/gigante_landing.png"
                            alt="Gigante Landing Page"
                            style={{
                                width: '90%',
                                height: 'auto',
                                borderRadius: 16,
                                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                                position: 'relative',
                                zIndex: 1,
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Content container */}
                    <div style={{ padding: '40px 48px 40px 24px' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '6px 14px',
                            background: '#FFF1F2',
                            color: '#E11D48',
                            borderRadius: 100,
                            fontSize: '.75rem',
                            fontWeight: 700,
                            letterSpacing: '.1em',
                            textTransform: 'uppercase',
                            marginBottom: 20
                        }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E11D48' }} />
                            Proyecto Destacado
                        </div>

                        <h3 style={{
                            fontFamily: 'Clash Display, sans-serif',
                            fontWeight: 600,
                            fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                            lineHeight: 1.1,
                            letterSpacing: '-.02em',
                            color: '#050F24',
                            marginBottom: 24
                        }}>
                            Gigante
                        </h3>
                        <p style={{
                            color: '#566880',
                            fontSize: '1.15rem',
                            lineHeight: 1.6,
                            marginBottom: 32
                        }}>
                            Desarrollo de una plataforma web de alto impacto para Gigante, enfocada en maximizar conversiones y ofrecer una experiencia de usuario fluida y moderna. Diseñada para destacarse.
                        </p>

                        <Button
                            variant="p"
                            style={{ padding: '16px 32px', borderRadius: '16px', fontSize: '1rem' }}
                            onClick={() => window.open('https://www.ferreteriagigante.com/', '_blank')}
                        >
                            Ver caso completo <ExternalLink size={18} />
                        </Button>
                    </div>
                </motion.div>

                {/* Additional CSS for responsive grid */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @media (max-width: 900px) {
                        .featured-project-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}} />

                {/* Scrollable row */}
                <motion.div
                    ref={ref}
                    className="ns"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    style={{
                        display: 'flex',
                        gap: 24,
                        overflowX: 'auto',
                        paddingBottom: 24,
                        marginBottom: 64,
                        scrollSnapType: 'x mandatory'
                    }}
                >
                    {PROJECTS.map((p, i) => {
                        const IconComponent = ICON_MAP[p.icon];
                        return (
                            <motion.div
                                key={p.t}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: '0 30px 60px -15px rgba(11,43,106,.15)',
                                    scale: 1.01
                                }}
                                style={{
                                    minWidth: 320,
                                    maxWidth: 380,
                                    background: '#ffffff',
                                    borderRadius: 24,
                                    border: '1px solid rgba(11,43,106,.05)',
                                    padding: 36,
                                    flexShrink: 0,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    scrollSnapAlign: 'start'
                                }}
                            >
                                <div
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 16,
                                        background: p.bg,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: p.c,
                                        marginBottom: 20,
                                        border: `1px solid ${p.c}20`,
                                        boxShadow: `0 8px 20px -8px ${p.c}60`
                                    }}
                                >
                                    {IconComponent && <IconComponent size={24} />}
                                </div>
                                <div
                                    style={{
                                        fontSize: '.75rem',
                                        fontWeight: 700,
                                        color: p.c,
                                        textTransform: 'uppercase',
                                        letterSpacing: '.12em',
                                        marginBottom: 8,
                                    }}
                                >
                                    {p.cat}
                                </div>
                                <h4
                                    style={{
                                        fontFamily: 'Clash Display, sans-serif',
                                        fontWeight: 600,
                                        fontSize: '1.45rem',
                                        marginBottom: 12,
                                        color: '#0D1B2A',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    {p.t}
                                </h4>
                                <p style={{ color: '#566880', lineHeight: 1.7, fontSize: '1rem', marginBottom: 24 }}>
                                    {p.d}
                                </p>

                                {/* subtle edge glow matching category color */}
                                <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, background: p.bg, opacity: 0.25, filter: 'blur(35px)', borderRadius: '50%', pointerEvents: 'none' }} />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}
                >
                    <p style={{ color: '#566880', fontSize: '1.25rem', marginBottom: 24, lineHeight: 1.6 }}>
                        ¿Tienes un proyecto ambicioso en mente? Cuéntanos y diseñamos la arquitectura perfecta.
                    </p>
                    <Button
                        variant="p"
                        style={{ fontSize: '1.05rem', padding: '16px 32px', borderRadius: '16px' }}
                        onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Hablemos de tu proyecto <ArrowRight size={18} />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
