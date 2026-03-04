import { ArrowRight, Activity, ChevronDown } from 'lucide-react';
import Particles from './Particles';
import Typer from './Typer';
import HeroVis from './HeroVis';
import Tag from '../../ui/Tag';
import Button from '../../ui/Button';

/**
 * Hero section — DLC Software intro with typing effect and orbital viz.
 */
export default function Hero() {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: 68,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
            <Particles />

            {/* Background radials */}
            <div
                style={{
                    position: 'absolute',
                    top: '25%',
                    right: '-10%',
                    width: 700,
                    height: 700,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,rgba(63,169,245,.12) 0%,transparent 65%)',
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '-5%',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,rgba(11,43,106,.07) 0%,transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '60px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 40,
                    width: '100%',
                    position: 'relative',
                    zIndex: 2,
                    flexWrap: 'wrap',
                }}
            >
                <div style={{ flex: '1 1 480px', maxWidth: 600 }}>
                    <Tag
                        icon={<Activity size={12} />}
                        bg="rgba(63,169,245,.12)"
                        color="#0B2B6A"
                        border="1px solid rgba(63,169,245,.28)"
                        className="rv d1"
                        style={{ marginBottom: 28 }}
                    >
                        De La Cruz Software
                    </Tag>

                    <h1
                        className="rv d2"
                        style={{
                            fontFamily: 'Poppins,sans-serif',
                            fontWeight: 900,
                            fontSize: 'clamp(2.75rem,5.5vw,4.5rem)',
                            lineHeight: 1.02,
                            letterSpacing: '-.05em',
                            marginBottom: 24,
                            color: '#0D1B2A',
                        }}
                    >
                        Software a medida,
                        <br />
                        <Typer />
                    </h1>

                    <p
                        className="rv d3"
                        style={{
                            fontSize: '1.125rem',
                            color: '#566880',
                            lineHeight: 1.8,
                            marginBottom: 40,
                            maxWidth: 500,
                            fontWeight: 400,
                        }}
                    >
                        Creamos{' '}
                        <strong style={{ color: '#0B2B6A', fontWeight: 700 }}>
                            soluciones digitales
                        </strong>{' '}
                        que automatizan y potencian tu negocio. Desde bots de WhatsApp hasta
                        aplicaciones web y móviles.
                    </p>

                    <div className="rv d4" style={{ display: 'flex', gap: 13, flexWrap: 'wrap' }}>
                        <Button
                            variant="p"
                            style={{ fontSize: '1rem', padding: '14px 28px' }}
                            onClick={() =>
                                document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Nuestros Servicios <ArrowRight size={17} />
                        </Button>
                        <Button
                            variant="g"
                            style={{ fontSize: '1rem', padding: '14px 28px' }}
                            onClick={() =>
                                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Contactar
                        </Button>
                    </div>
                </div>

                <div
                    className="rvr d3 hm"
                    style={{ flex: '1 1 460px', display: 'flex', justifyContent: 'center' }}
                >
                    <HeroVis />
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 28,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                    color: '#566880',
                    fontSize: '.7rem',
                    fontWeight: 600,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    zIndex: 2,
                }}
            >
                <span>Scroll</span>
                <ChevronDown size={14} style={{ animation: 'fl 1.6s ease-in-out infinite' }} />
            </div>
        </section>
    );
}
