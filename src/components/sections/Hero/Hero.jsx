import { ArrowRight, Activity, ChevronDown } from 'lucide-react';
import Particles from './Particles';
import Typer from './Typer';
import HeroVis from './HeroVis';
import Tag from '../../ui/Tag';
import Button from '../../ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Hero section — Refined editorial layout with orbital viz and fluid motion.
 */
export default function Hero() {
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityParallax = useTransform(scrollY, [0, 300], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        }
    };

    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: 68,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'transparent' // var(--bg) fallback
            }}
        >
            <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }} />
            <Particles />

            {/* Background radials - softened and expanded for depth */}
            <div
                style={{
                    position: 'absolute',
                    top: '15%',
                    right: '-15%',
                    width: 900,
                    height: 900,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,rgba(63,169,245,.08) 0%,transparent 65%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: 700,
                    height: 700,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,rgba(11,43,106,.05) 0%,transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{
                    maxWidth: 1300,
                    margin: '0 auto',
                    padding: '80px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 60,
                    width: '100%',
                    position: 'relative',
                    zIndex: 2,
                    flexWrap: 'wrap',
                }}
            >
                <div style={{ flex: '1 1 500px', maxWidth: 680, zIndex: 10 }}>
                    <motion.div variants={itemVariants}>
                        <Tag
                            icon={<Activity size={12} />}
                            bg="rgba(63,169,245,.08)"
                            color="#0B2B6A"
                            border="1px solid rgba(63,169,245,.2)"
                            style={{ marginBottom: 32, backdropFilter: 'blur(10px)' }}
                        >
                            De La Cruz Software
                        </Tag>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        style={{
                            fontWeight: 600,
                            fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
                            lineHeight: 1.05,
                            letterSpacing: '-.03em',
                            marginBottom: 28,
                            color: '#050F24',
                        }}
                    >
                        <span className="sr-only">Agencia de Desarrollo Web en República Dominicana. </span>
                        Software a medida,<br />
                        <span style={{ color: '#0B2B6A' }}><Typer /></span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        style={{
                            fontSize: '1.25rem',
                            color: '#566880',
                            lineHeight: 1.7,
                            marginBottom: 48,
                            maxWidth: 540,
                            fontWeight: 400,
                        }}
                    >
                        Creamos <strong style={{ color: '#0B2B6A', fontWeight: 600 }}>soluciones digitales</strong> que automatizan y potencian tu negocio. Desde bots inteligentes hasta plataformas corporativas.
                    </motion.p>

                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                        <Button
                            variant="p"
                            style={{
                                fontSize: '1.05rem',
                                padding: '16px 32px',
                                borderRadius: '16px'
                            }}
                            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explorar Servicios <ArrowRight size={18} />
                        </Button>
                        <Button
                            variant="g"
                            style={{
                                fontSize: '1.05rem',
                                padding: '16px 32px',
                                borderRadius: '16px',
                                background: 'rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(5px)'
                            }}
                            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contactar
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    className="hm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ flex: '1 1 440px', display: 'flex', justifyContent: 'center', position: 'relative' }}
                >
                    <HeroVis />
                </motion.div>
            </motion.div>

            {/* Scroll indicator with Parallax */}
            <motion.div
                style={{
                    y: yParallax,
                    opacity: opacityParallax,
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                    color: '#566880',
                    fontSize: '.75rem',
                    fontWeight: 600,
                    letterSpacing: '.15em',
                    textTransform: 'uppercase',
                    zIndex: 10,
                }}
            >
                <span style={{ opacity: 0.7 }}>Scroll</span>
                <ChevronDown size={16} style={{ animation: 'fl 2s ease-in-out infinite' }} />
            </motion.div>
        </section>
    );
}
