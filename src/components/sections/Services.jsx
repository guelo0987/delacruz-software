import { SERVICES, ICON_MAP } from '../../data/constants';
import Tag from '../ui/Tag';
import { Layers } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Services section — dynamic, staggered grid using Framer Motion
 */
export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 80, damping: 20 }
        }
    };

    return (
        <section id="servicios" style={{ padding: '120px 0', background: '#FAFAFC', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle background element */}
            <div style={{ position: 'absolute', top: -200, right: -100, width: 600, height: 600, background: 'radial-gradient(circle, rgba(63,169,245,0.03) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none' }} />

            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: 80 }}
                >
                    <Tag
                        icon={<Layers size={12} />}
                        bg="rgba(63,169,245,.08)"
                        color="#3FA9F5"
                        border="1px solid rgba(63,169,245,.2)"
                        style={{ marginBottom: 20 }}
                    >
                        Nuestros Servicios
                    </Tag>
                    <h2
                        style={{
                            fontWeight: 600,
                            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                            letterSpacing: '-.03em',
                            marginBottom: 16,
                            color: '#050F24'
                        }}
                    >
                        Lo que hacemos
                    </h2>
                    <p
                        style={{
                            fontSize: '1.15rem',
                            color: '#566880',
                            maxWidth: 520,
                            margin: '0 auto',
                            lineHeight: 1.7,
                        }}
                    >
                        Soluciones digitales a medida construidas con tecnología moderna para impulsar el crecimiento de tu negocio.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: 28,
                        alignItems: 'start'
                    }}
                >
                    {SERVICES.map(({ icon, c, bg, t, d }, i) => {
                        const IconComponent = ICON_MAP[icon];
                        // offset middle cards slightly for a dynamic editorial layout
                        const isMiddleInRowOf3 = window.innerWidth > 1024 ? (i % 3 === 1) : false;

                        return (
                            <motion.div
                                key={t}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: '0 30px 60px -15px rgba(11,43,106,.15)',
                                    scale: 1.01
                                }}
                                style={{
                                    background: '#ffffff',
                                    borderRadius: 24,
                                    padding: 40,
                                    border: '1px solid rgba(11,43,106,.05)',
                                    cursor: 'default',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transform: isMiddleInRowOf3 ? 'translateY(24px)' : 'none'
                                }}
                            >
                                <div
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 16,
                                        background: bg,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: c,
                                        marginBottom: 24,
                                        border: `1px solid ${c}20`,
                                        boxShadow: `0 8px 20px -8px ${c}60`
                                    }}
                                >
                                    {IconComponent && <IconComponent size={24} />}
                                </div>
                                <h4
                                    style={{
                                        fontWeight: 600,
                                        fontSize: '1.35rem',
                                        marginBottom: 16,
                                        color: '#0D1B2A',
                                        letterSpacing: '-0.02em',
                                        fontFamily: 'Clash Display, sans-serif'
                                    }}
                                >
                                    {t}
                                </h4>
                                <p style={{ color: '#566880', lineHeight: 1.7, fontSize: '1rem' }}>
                                    {d}
                                </p>

                                {/* subtle glass decoration */}
                                <div style={{ position: 'absolute', bottom: -30, right: -30, width: 120, height: 120, background: bg, opacity: 0.3, filter: 'blur(35px)', borderRadius: '50%' }} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
