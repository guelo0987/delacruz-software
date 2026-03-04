import { useState, useEffect, useRef, useCallback } from 'react';
import {
    Bot, Image, Mic, Calendar, UserCheck, FileText, ArrowLeft, ArrowRight,
    MessageSquare, BarChart3, Bell, Palette, Settings, Users, Smartphone,
    Store, Stethoscope, Scissors, UtensilsCrossed, ShoppingBag, Shield
} from 'lucide-react';
import Tag from '../components/ui/Tag';
import Button from '../components/ui/Button';
import { useReveal } from '../hooks/useReveal';

/* ── Multi-negocio rotating scenarios ── */
const MULTI_SCENES = [
    {
        biz: '🍽️ Restaurante',
        color: '#f59e0b',
        chat: [
            { from: 'user', text: 'Hola, quiero reservar una mesa' },
            { from: 'bot', text: '🍽️ ¡Bienvenido a Restaurante El Sabor!\n\nMesas disponibles hoy:\n\n🕐 12:00 PM — 2 personas\n🕑 1:30 PM — 4 personas\n🕓 8:00 PM — 2 personas\n\n¿Para cuántas personas?' },
            { from: 'user', text: 'Para 2, a las 8 PM' },
            { from: 'bot', text: '✅ ¡Mesa reservada!\n\n🍽️ 2 personas\n📅 Hoy, 8:00 PM\n📍 Restaurante El Sabor\n\nTe esperamos.' },
        ],
    },
    {
        biz: '🏥 Clínica',
        color: '#3FA9F5',
        chat: [
            { from: 'user', text: 'Necesito una consulta con el Dr. López' },
            { from: 'bot', text: '🏥 ¡Hola! Clínica San Rafael.\n\nDr. López tiene disponible:\n\n📅 Martes 10:00 AM\n📅 Jueves 3:00 PM\n📅 Viernes 9:00 AM\n\n¿Cuál te queda mejor?' },
            { from: 'user', text: 'El jueves a las 3' },
            { from: 'bot', text: '✅ Cita agendada\n\n👨‍⚕️ Dr. López\n📅 Jueves, 3:00 PM\n📍 Clínica San Rafael\n\nTe enviaré recordatorio.' },
        ],
    },
    {
        biz: '💇 Barbería',
        color: '#a855f7',
        chat: [
            { from: 'user', text: 'Quiero un corte para mañana' },
            { from: 'bot', text: '💇 ¡Qué tal! Barbería Classic.\n\nMañana tenemos:\n\n🕐 10:00 AM — Carlos\n🕑 2:00 PM — Miguel\n🕓 5:00 PM — Carlos\n\n¿Con quién prefieres?' },
            { from: 'user', text: 'Con Miguel a las 2' },
            { from: 'bot', text: '✅ ¡Reservado!\n\n💇 Corte con Miguel\n📅 Mañana, 2:00 PM\n\nNos vemos. ✌️' },
        ],
    },
    {
        biz: '🛍️ Tienda',
        color: '#10B981',
        chat: [
            { from: 'user', text: '¿Tienen el iPhone 15 en stock?' },
            { from: 'bot', text: '📱 ¡Sí! TechStore RD:\n\niPhone 15 128GB\n💰 RD$52,900\n📦 En stock — 3 unidades\n🚚 Envío gratis en Santo Domingo\n\n¿Te lo aparto?' },
            { from: 'user', text: 'Sí, apártamelo' },
            { from: 'bot', text: '✅ ¡Apartado!\n\n📱 iPhone 15 128GB\n💰 RD$52,900\n\nTe envío el link de pago. 💳' },
        ],
    },
    {
        biz: '💆 Spa',
        color: '#ec4899',
        chat: [
            { from: 'user', text: 'Hola, ¿qué servicios tienen?' },
            { from: 'bot', text: '💆 ¡Bienvenida a Zen Spa!\n\n✨ Masaje relajante — RD$1,500\n🧖 Facial profundo — RD$2,000\n💅 Manicure + Pedicure — RD$1,200\n🌿 Aromaterapia — RD$1,800\n\n¿Cuál te interesa?' },
            { from: 'user', text: 'Masaje relajante para hoy' },
            { from: 'bot', text: '✅ ¡Agendado!\n\n💆 Masaje relajante\n📅 Hoy, 4:30 PM\n💰 RD$1,500\n\n¡Te esperamos! 🌸' },
        ],
    },
];

/* ── Other tab scenarios (single conversation each) ── */
const OTHER_TABS = [
    {
        id: 'img',
        label: '📷 Imágenes',
        icon: Image,
        chat: [
            { from: 'user', text: '📷 [Foto de un producto]' },
            { from: 'bot', text: '¡Buena elección! 👀 Ese es nuestro:\n\n✨ Sérum facial vitamina C\n💰 RD$1,200\n📦 En stock — envío en 24h\n\n¿Te lo aparto o quieres ver más opciones?' },
            { from: 'user', text: 'Apártamelo' },
            { from: 'bot', text: '✅ ¡Listo! Producto apartado.\n\nTe envío el link de pago por aquí. 💳' },
        ],
    },
    {
        id: 'voice',
        label: '🎙️ Voz',
        icon: Mic,
        chat: [
            { from: 'user', text: '🎤 [Nota de voz — 0:12]' },
            { from: 'bot', text: '🎧 Escuché tu mensaje:\n"Quiero saber si tienen disponibilidad para mañana en la tarde"\n\n📅 Mañana en la tarde tenemos:\n\n🕑 2:00 PM\n🕓 4:00 PM\n🕔 5:30 PM\n\n¿Cuál te queda mejor?' },
            { from: 'user', text: 'A las 4' },
            { from: 'bot', text: '✅ Cita agendada — mañana a las 4:00 PM.\n\nTe enviaré un recordatorio. 🔔' },
        ],
    },
    {
        id: 'citas',
        label: '📅 Citas',
        icon: Calendar,
        chat: [
            { from: 'user', text: 'Quiero mover mi cita del jueves' },
            { from: 'bot', text: 'Encontré tu cita:\n\n📅 Jueves 6 de marzo, 3:00 PM\n💇 Corte + barba\n\n¿A qué día quieres moverla?' },
            { from: 'user', text: 'Al viernes a las 5' },
            { from: 'bot', text: '✅ Cita movida:\n\n📅 Viernes 7 de marzo, 5:00 PM\n💇 Corte + barba\n\nListo, te espero el viernes. ✌️' },
        ],
    },
    {
        id: 'escalation',
        label: '👤 Transferir',
        icon: UserCheck,
        chat: [
            { from: 'user', text: 'Tengo un problema con mi pedido' },
            { from: 'bot', text: 'Entiendo que tienes un inconveniente. 😔\n\n¿Podrías darme el número de tu pedido para revisar?' },
            { from: 'user', text: 'Es el #2847, llegó dañado' },
            { from: 'bot', text: '⚠️ Lamento mucho eso. Voy a transferirte con un agente humano para resolver esto de inmediato.\n\n🔄 Conectando con el equipo...\n\n*Un agente te atenderá en breve.*' },
        ],
    },
];

/* ── All tabs for the UI ── */
const TAB_LABELS = [
    { id: 'multi', label: '🏢 Multi-negocio' },
    ...OTHER_TABS.map(t => ({ id: t.id, label: t.label })),
];

const BUSINESS_TYPES = [
    { icon: Stethoscope, name: 'Clínicas', c: '#3FA9F5' },
    { icon: Scissors, name: 'Salones', c: '#a855f7' },
    { icon: UtensilsCrossed, name: 'Restaurantes', c: '#f59e0b' },
    { icon: ShoppingBag, name: 'Tiendas', c: '#10B981' },
    { icon: Store, name: 'Servicios', c: '#ec4899' },
    { icon: Smartphone, name: 'Startups', c: '#0B2B6A' },
];

const ADMIN_SIDEBAR = [
    { name: 'Dashboard', active: true },
    { name: 'Conversaciones' },
    { name: 'Citas' },
    { name: 'Catálogo' },
    { name: 'Configuración' },
    { name: 'Reportes' },
];

/* ── Component ── */
export default function BotPage() {
    useReveal();
    const [activeTab, setActiveTab] = useState(0);         // 0 = multi, 1-4 = other tabs
    const [multiScene, setMultiScene] = useState(0);        // which scene within multi-negocio
    const [visibleCount, setVisibleCount] = useState(0);
    const [chatFade, setChatFade] = useState(false);        // for fade transition
    const chatRef = useRef(null);
    const hasTriggered = useRef(false);
    const timersRef = useRef([]);
    const autoLoopRef = useRef(null);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    // Clear all pending timers
    const clearTimers = useCallback(() => {
        timersRef.current.forEach(t => clearTimeout(t));
        timersRef.current = [];
        if (autoLoopRef.current) { clearTimeout(autoLoopRef.current); autoLoopRef.current = null; }
    }, []);

    // Animate a given chat array, optionally auto-advance after
    const animateChat = useCallback((msgs, onDone) => {
        clearTimers();
        setVisibleCount(0);
        setChatFade(false);
        msgs.forEach((_, i) => {
            const t = setTimeout(() => setVisibleCount(i + 1), (i + 1) * 700);
            timersRef.current.push(t);
        });
        if (onDone) {
            const totalTime = (msgs.length + 1) * 700 + 2200; // show complete + pause
            const t = setTimeout(onDone, totalTime);
            timersRef.current.push(t);
        }
    }, [clearTimers]);

    // Start multi-negocio auto-loop from a given scene index
    const startMultiLoop = useCallback((sceneIdx) => {
        const idx = sceneIdx % MULTI_SCENES.length;
        setMultiScene(idx);
        const scene = MULTI_SCENES[idx];
        animateChat(scene.chat, () => {
            // Fade out, then switch to next scene
            setChatFade(true);
            autoLoopRef.current = setTimeout(() => {
                startMultiLoop(idx + 1);
            }, 600);
        });
    }, [animateChat]);

    // Trigger on first view
    useEffect(() => {
        const el = chatRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggered.current) {
                    hasTriggered.current = true;
                    startMultiLoop(0);
                }
            },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => { obs.disconnect(); clearTimers(); };
    }, [startMultiLoop, clearTimers]);

    function switchTab(idx) {
        clearTimers();
        setActiveTab(idx);
        setChatFade(false);
        if (idx === 0) {
            // Multi-negocio: start auto-loop
            startMultiLoop(0);
        } else {
            // Other tabs: single animation, no loop
            animateChat(OTHER_TABS[idx - 1].chat);
        }
    }

    // Get current chat messages
    const currentChat = activeTab === 0
        ? MULTI_SCENES[multiScene].chat
        : OTHER_TABS[activeTab - 1].chat;

    const currentBiz = activeTab === 0 ? MULTI_SCENES[multiScene] : null;

    return (
        <div style={{ paddingTop: 68 }}>
            {/* ═══════ HERO ═══════ */}
            <section style={{
                padding: '80px 0 60px',
                background: 'linear-gradient(165deg, #EEF2FF 0%, #E0E8FF 50%, #EEF2FF 100%)',
                position: 'relative', overflow: 'hidden',
            }}>
                {/* Decorative blobs */}
                <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(63,169,245,.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: -80, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,211,102,.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
                    <button
                        onClick={() => (window.location.hash = '')}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32,
                            background: 'none', border: '1.5px solid rgba(11,43,106,.12)', borderRadius: 10,
                            padding: '8px 16px', cursor: 'pointer', color: '#566880', fontSize: '.85rem',
                            fontWeight: 600, fontFamily: 'Poppins,sans-serif', transition: 'all .2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0B2B6A'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#566880'; }}
                    >
                        <ArrowLeft size={14} /> Volver al inicio
                    </button>

                    <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 420px' }}>
                            {/* Meta API badge */}
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px',
                                borderRadius: 100, marginBottom: 24,
                                background: 'linear-gradient(135deg, rgba(24,119,242,.08), rgba(37,211,102,.08))',
                                border: '1px solid rgba(24,119,242,.15)',
                            }}>
                                <Shield size={13} color="#1877F2" />
                                <span style={{ fontSize: '.72rem', fontWeight: 700, color: '#1877F2', letterSpacing: '.03em' }}>
                                    API Oficial — Meta for Developers
                                </span>
                            </div>

                            <h1 className="rv d1" style={{
                                fontFamily: 'Poppins,sans-serif', fontWeight: 800,
                                fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', letterSpacing: '-.03em', marginBottom: 20,
                                lineHeight: 1.1, color: '#0D1B2A',
                            }}>
                                Tu asistente
                                <br />
                                <span style={{
                                    background: 'linear-gradient(135deg, #0B2B6A 20%, #3FA9F5 80%)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                }}>para WhatsApp</span>
                            </h1>
                            <p className="rv d2" style={{ fontSize: '1.05rem', color: '#566880', lineHeight: 1.8, marginBottom: 28, maxWidth: 450 }}>
                                Conectado directo a la <strong style={{ color: '#0B2B6A' }}>API oficial de Meta</strong>.
                                Sin software de terceros, sin intermediarios. Tu bot, tu WhatsApp, tu control total.
                            </p>
                            <div className="rv d3" style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                                {BUSINESS_TYPES.map(({ icon: Icon, name, c }) => (
                                    <span key={name} style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 5,
                                        padding: '5px 12px', borderRadius: 8,
                                        background: '#fff', border: '1px solid rgba(11,43,106,.06)',
                                        fontSize: '.75rem', fontWeight: 600, color: '#566880',
                                        boxShadow: '0 2px 8px rgba(11,43,106,.04)',
                                    }}>
                                        <Icon size={12} color={c} /> {name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right side — tiny phone preview */}
                        <div className="rv d3 hm" style={{ flex: '0 0 200px' }}>
                            <div style={{
                                width: 180, borderRadius: 24, background: '#111B21', overflow: 'hidden',
                                boxShadow: '0 24px 48px -12px rgba(11,43,106,.25)', transform: 'rotate(3deg)',
                            }}>
                                <div style={{ background: '#1F2C34', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg,#25D366,#128C7E)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Bot size={11} color="#fff" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '.55rem', fontWeight: 700, color: '#E9EDEF' }}>DLC Bot</div>
                                        <div style={{ fontSize: '.4rem', color: '#25D366' }}>en línea</div>
                                    </div>
                                </div>
                                <div style={{ padding: '8px 6px', background: '#0B141A', minHeight: 120 }}>
                                    <div style={{ background: '#1F2C34', padding: '4px 7px', borderRadius: 6, fontSize: '.5rem', color: '#E9EDEF', marginBottom: 4, maxWidth: '80%' }}>
                                        ¡Hola! ¿En qué te puedo ayudar? 😊
                                    </div>
                                    <div style={{ background: '#005C4B', padding: '4px 7px', borderRadius: 6, fontSize: '.5rem', color: '#E9EDEF', marginLeft: 'auto', maxWidth: '70%', textAlign: 'right' }}>
                                        Quiero una cita
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════ CAPABILITIES ═══════ */}
            <section style={{ padding: '100px 0', background: '#fff' }}>
                <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <h2 className="rv" style={{
                            fontFamily: 'Poppins,sans-serif', fontWeight: 700,
                            fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '-.02em', marginBottom: 10, color: '#0D1B2A',
                        }}>
                            ¿Qué puede hacer?
                        </h2>
                        <p className="rv d1" style={{ color: '#566880', maxWidth: 400, margin: '0 auto', fontSize: '.95rem' }}>
                            Cada interacción potenciada por inteligencia artificial.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
                        {[
                            { icon: MessageSquare, title: 'Texto', desc: 'Responde preguntas y guía al cliente.', c: '#3FA9F5' },
                            { icon: Image, title: 'Imágenes', desc: 'Analiza fotos y da precios.', c: '#a855f7' },
                            { icon: Mic, title: 'Notas de voz', desc: 'Transcribe y responde audio.', c: '#f59e0b' },
                            { icon: Calendar, title: 'Citas', desc: 'Agenda y modifica en Google Calendar.', c: '#10B981' },
                            { icon: FileText, title: 'Catálogos', desc: 'Lee PDFs y busca productos.', c: '#ec4899' },
                            { icon: UserCheck, title: 'Humano', desc: 'Transfiere al dueño si necesario.', c: '#EF4444' },
                        ].map(({ icon: Icon, title, desc, c }, i) => (
                            <div key={title} className={`rv d${(i % 3) + 1}`} style={{
                                display: 'flex', gap: 14, alignItems: 'center',
                                padding: '16px 18px', borderRadius: 14,
                                border: '1px solid rgba(11,43,106,.06)', background: '#fafbff',
                                transition: 'all .25s',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 28px -8px rgba(11,43,106,.1)'; e.currentTarget.style.background = '#fff'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.background = '#fafbff'; }}
                            >
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${c}12`, color: c, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon size={18} />
                                </div>
                                <div>
                                    <span style={{ fontWeight: 700, fontSize: '.88rem', color: '#0D1B2A' }}>{title}</span>
                                    <span style={{ fontSize: '.8rem', color: '#566880', marginLeft: 6 }}>— {desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ INTERACTIVE DEMO ═══════ */}
            <section ref={chatRef} style={{ padding: '100px 0', background: '#EEF2FF' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 16 }}>
                        <h2 className="rv" style={{
                            fontFamily: 'Poppins,sans-serif', fontWeight: 700,
                            fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '-.02em', marginBottom: 10, color: '#0D1B2A',
                        }}>
                            Así se ve en acción
                        </h2>
                        <p className="rv d1" style={{ color: '#566880', maxWidth: 400, margin: '0 auto', fontSize: '.95rem' }}>
                            Selecciona un caso de uso y mira la conversación.
                        </p>
                    </div>

                    {/* Tab bar */}
                    <div style={{
                        display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap',
                        marginBottom: 40, padding: '12px 16px', borderRadius: 16,
                        background: '#fff', border: '1px solid rgba(11,43,106,.06)',
                        maxWidth: 680, margin: '0 auto 40px',
                        boxShadow: '0 4px 16px rgba(11,43,106,.05)',
                    }}>
                        {TAB_LABELS.map((tab, i) => (
                            <button
                                key={tab.id}
                                onClick={() => switchTab(i)}
                                style={{
                                    padding: '8px 14px', borderRadius: 10, border: 'none', cursor: 'pointer',
                                    fontSize: '.78rem', fontWeight: 600, fontFamily: 'Poppins,sans-serif',
                                    background: activeTab === i ? '#0B2B6A' : 'transparent',
                                    color: activeTab === i ? '#fff' : '#566880',
                                    transition: 'all .2s',
                                    boxShadow: activeTab === i ? '0 4px 12px rgba(11,43,106,.25)' : 'none',
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                        {/* Chat */}
                        <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Business name badge — only for multi-negocio */}
                            {currentBiz && (
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 6,
                                    padding: '5px 14px', borderRadius: 100, marginBottom: 12,
                                    background: `${currentBiz.color}12`, border: `1px solid ${currentBiz.color}25`,
                                    transition: 'all .4s ease',
                                    opacity: chatFade ? 0 : 1,
                                }}>
                                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: currentBiz.color }} />
                                    <span style={{ fontSize: '.75rem', fontWeight: 700, color: currentBiz.color }}>
                                        {currentBiz.biz}
                                    </span>
                                </div>
                            )}
                            <div className="wa-phone" style={{ width: '100%', maxWidth: 380, opacity: chatFade ? 0 : 1, transition: 'opacity .4s ease' }}>
                                <div className="wa-phone-header">
                                    <div className="wa-phone-avatar"><Bot size={18} /></div>
                                    <div>
                                        <div className="wa-phone-name">DLC Bot</div>
                                        <div className="wa-phone-status">en línea</div>
                                    </div>
                                </div>
                                <div className="wa-chat-area" style={{ minHeight: 340 }}>
                                    {currentChat.slice(0, visibleCount).map((msg, i) => (
                                        <div key={`${activeTab}-${multiScene}-${i}`} className={`wa-bubble ${msg.from === 'user' ? 'wa-bubble-user' : 'wa-bubble-bot'}`}>
                                            {msg.text}
                                        </div>
                                    ))}
                                    {visibleCount > 0 && visibleCount < currentChat.length && currentChat[visibleCount]?.from === 'bot' && (
                                        <div className="wa-bubble wa-bubble-bot" style={{ opacity: 1, animation: 'none', display: 'flex', gap: 4, padding: '12px 16px' }}>
                                            {[0, 1, 2].map(d => (
                                                <div key={d} style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(255,255,255,.4)', animation: `fl 1.2s ${d * 0.15}s ease-in-out infinite` }} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Admin Panel */}
                        <div style={{ flex: '1 1 440px' }}>
                            <div style={{
                                borderRadius: 16, overflow: 'hidden',
                                border: '1px solid rgba(11,43,106,.08)', boxShadow: '0 24px 48px -16px rgba(11,43,106,.15)', background: '#fff',
                            }}>
                                <div style={{ background: '#0B2B6A', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                                    {['#ff5f57', '#ffbd2e', '#27c93f'].map(c => (
                                        <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
                                    ))}
                                    <span style={{ marginLeft: 8, fontSize: '.6rem', fontWeight: 600, color: 'rgba(255,255,255,.3)', letterSpacing: '.12em', textTransform: 'uppercase' }}>Tu Panel</span>
                                </div>

                                <div style={{ display: 'flex', minHeight: 400 }}>
                                    <div className="hm" style={{ width: 130, background: '#071B44', padding: '10px 0', display: 'flex', flexDirection: 'column', gap: 1, flexShrink: 0 }}>
                                        {ADMIN_SIDEBAR.map(({ name, active }) => (
                                            <div key={name} style={{
                                                padding: '7px 12px', fontSize: '.7rem', fontWeight: active ? 700 : 500,
                                                color: active ? '#fff' : 'rgba(255,255,255,.3)',
                                                background: active ? 'rgba(63,169,245,.15)' : 'transparent',
                                                borderLeft: active ? '2px solid #3FA9F5' : '2px solid transparent',
                                            }}>
                                                {name}
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{ flex: 1, padding: 12, background: '#f8f9ff', overflow: 'auto' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, marginBottom: 10 }}>
                                            {[
                                                { label: 'Clientes', val: '127', c: '#3FA9F5' },
                                                { label: 'Citas hoy', val: '5', c: '#10B981' },
                                                { label: 'IA', val: '94%', c: '#f59e0b' },
                                            ].map(({ label, val, c }) => (
                                                <div key={label} style={{ background: '#fff', borderRadius: 8, padding: '8px 6px', border: '1px solid rgba(11,43,106,.04)' }}>
                                                    <div style={{ fontSize: '.52rem', fontWeight: 700, color: '#566880', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
                                                    <span style={{ fontWeight: 800, fontSize: '1rem', color: c }}>{val}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ background: '#fff', borderRadius: 8, padding: 10, border: '1px solid rgba(11,43,106,.04)', marginBottom: 8 }}>
                                            <div style={{ fontSize: '.58rem', fontWeight: 700, color: '#0B2B6A', textTransform: 'uppercase', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                                                <MessageSquare size={9} /> Conversaciones
                                            </div>
                                            {[
                                                { init: 'ML', name: 'María L.', msg: 'Reservó mesa para 2', c: '#3FA9F5', st: 'Bot' },
                                                { init: 'JP', name: 'Juan P.', msg: 'Envió foto de producto', c: '#a855f7', st: 'Bot' },
                                                { init: 'AR', name: 'Ana R.', msg: 'Problema con pedido', c: '#EF4444', st: 'Agente' },
                                            ].map(({ init, name, msg, c, st }) => (
                                                <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 0', borderBottom: '1px solid rgba(11,43,106,.03)' }}>
                                                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${c}15`, color: c, fontSize: '.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{init}</div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: '.62rem', fontWeight: 700, color: '#0D1B2A' }}>{name}</div>
                                                        <div style={{ fontSize: '.55rem', color: '#566880' }}>{msg}</div>
                                                    </div>
                                                    <span style={{ fontSize: '.48rem', fontWeight: 700, color: st === 'Bot' ? '#10B981' : '#EF4444', background: st === 'Bot' ? '#10B98112' : '#EF444412', padding: '1px 6px', borderRadius: 100 }}>{st}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ background: '#fff', borderRadius: 8, padding: 10, border: '1px solid rgba(11,43,106,.04)', marginBottom: 8 }}>
                                            <div style={{ fontSize: '.58rem', fontWeight: 700, color: '#0B2B6A', textTransform: 'uppercase', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                                                <Calendar size={9} /> Citas hoy
                                            </div>
                                            {[
                                                { time: '10:00', name: 'María', srv: 'Masaje', sc: '#10B981' },
                                                { time: '2:00', name: 'Juan', srv: 'Corte', sc: '#f59e0b' },
                                                { time: '4:30', name: 'Ana', srv: 'Manicure', sc: '#10B981' },
                                            ].map(({ time, name, srv, sc }) => (
                                                <div key={time} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 0', borderBottom: '1px solid rgba(11,43,106,.02)' }}>
                                                    <span style={{ fontSize: '.6rem', fontWeight: 700, color: '#0B2B6A', width: 35 }}>{time}</span>
                                                    <span style={{ fontSize: '.62rem', fontWeight: 600, flex: 1 }}>{name}</span>
                                                    <span style={{ fontSize: '.55rem', color: '#566880' }}>{srv}</span>
                                                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: sc }} />
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ background: '#fff', borderRadius: 8, padding: 10, border: '1px solid rgba(11,43,106,.04)' }}>
                                            <div style={{ fontSize: '.58rem', fontWeight: 700, color: '#0B2B6A', textTransform: 'uppercase', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                                                <Settings size={9} /> Config
                                            </div>
                                            {[['Bot', 'Asistente Bella'], ['Horario', '8AM – 9PM'], ['API', 'Meta Official']].map(([k, v]) => (
                                                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0' }}>
                                                    <span style={{ fontSize: '.6rem', color: '#566880' }}>{k}</span>
                                                    <span style={{ fontSize: '.6rem', fontWeight: 600, color: '#0D1B2A' }}>{v}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════ CTA ═══════ */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #0B2B6A 0%, #112D5E 100%)',
                textAlign: 'center',
            }}>
                <div style={{ maxWidth: 550, margin: '0 auto', padding: '0 24px' }}>
                    <h2 style={{
                        fontFamily: 'Poppins,sans-serif', fontWeight: 700,
                        fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-.02em',
                        color: '#fff', marginBottom: 14,
                    }}>
                        ¿Quieres un bot para tu negocio?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '1rem', marginBottom: 28, lineHeight: 1.7 }}>
                        Conectado a la API oficial de Meta. Sin intermediarios.
                    </p>
                    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button variant="w" onClick={() => window.open('https://wa.me/18296300007', '_blank')}>
                            <MessageSquare size={16} /> WhatsApp
                        </Button>
                        <Button variant="g" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.2)' }}
                            onClick={() => { window.location.hash = ''; setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
                            Formulario <ArrowRight size={16} />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
