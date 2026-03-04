import { Bot, CheckCircle2, MessageCircle, TrendingUp } from 'lucide-react';

/**
 * Animated orbital visualization in the hero section.
 */
export default function HeroVis() {
    return (
        <div style={{ position: 'relative', width: 500, height: 500, flexShrink: 0 }}>
            {/* Outer orbit ring */}
            <div
                className="a-spr"
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '1.5px dashed rgba(63,169,245,.2)',
                }}
            />

            {/* Middle orbit ring */}
            <div
                className="a-sp"
                style={{
                    position: 'absolute',
                    inset: 55,
                    borderRadius: '50%',
                    border: '1px solid rgba(11,43,106,.1)',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: -8,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: '#3FA9F5',
                        boxShadow: '0 0 20px #3FA9F5',
                    }}
                />
            </div>

            {/* Inner orbit ring */}
            <div
                className="a-spr"
                style={{
                    position: 'absolute',
                    inset: 118,
                    borderRadius: '50%',
                    border: '1px solid rgba(63,169,245,.25)',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        bottom: -7,
                        right: 16,
                        width: 13,
                        height: 13,
                        borderRadius: '50%',
                        background: '#0B2B6A',
                        boxShadow: '0 0 14px rgba(11,43,106,.9)',
                    }}
                />
            </div>

            {/* Center Bot icon */}
            <div
                className="a-pg"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    width: 92,
                    height: 92,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg,#0B2B6A,#3FA9F5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                }}
            >
                <Bot size={42} color="#fff" />
            </div>

            {/* Live badge */}
            <div
                style={{
                    position: 'absolute',
                    top: 12,
                    left: 36,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#fff',
                    borderRadius: 100,
                    padding: '7px 15px',
                    boxShadow: '0 4px 20px rgba(11,43,106,.14)',
                    border: '1px solid rgba(11,43,106,.06)',
                    zIndex: 5,
                }}
            >
                <div style={{ position: 'relative', width: 9, height: 9 }}>
                    <div
                        className="a-ping"
                        style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#10B981' }}
                    />
                    <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#10B981' }} />
                </div>
                <span
                    style={{
                        fontFamily: 'Poppins,sans-serif',
                        fontWeight: 800,
                        fontSize: '.72rem',
                        color: '#0D1B2A',
                    }}
                >
                    Sistema en vivo
                </span>
            </div>

            {/* Floating card: Sale completed */}
            <div
                className="a-fl"
                style={{
                    position: 'absolute',
                    top: 50,
                    right: -12,
                    background: '#fff',
                    borderRadius: 18,
                    padding: '14px 18px',
                    boxShadow: '0 20px 50px -10px rgba(11,43,106,.22)',
                    border: '1px solid rgba(11,43,106,.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    minWidth: 208,
                    zIndex: 5,
                }}
            >
                <div
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: '#e8fdf0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CheckCircle2 size={18} color="#10B981" />
                </div>
                <div>
                    <div
                        style={{
                            fontFamily: 'Poppins,sans-serif',
                            fontWeight: 800,
                            fontSize: '.8125rem',
                            color: '#0D1B2A',
                        }}
                    >
                        Venta completada ✓
                    </div>
                    <div style={{ fontSize: '.72rem', color: '#566880', marginTop: 2 }}>
                        hace 4 seg · IA resolvió
                    </div>
                </div>
            </div>

            {/* Floating card: Active chats */}
            <div
                className="a-fl2"
                style={{
                    position: 'absolute',
                    bottom: 80,
                    left: -18,
                    background: '#fff',
                    borderRadius: 18,
                    padding: '14px 18px',
                    boxShadow: '0 20px 50px -10px rgba(11,43,106,.22)',
                    border: '1px solid rgba(11,43,106,.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    zIndex: 5,
                }}
            >
                <div
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: '#e8f4fe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <MessageCircle size={18} color="#3FA9F5" />
                </div>
                <div>
                    <div
                        style={{
                            fontFamily: 'Poppins,sans-serif',
                            fontWeight: 800,
                            fontSize: '.8125rem',
                            color: '#0D1B2A',
                        }}
                    >
                        1,847 chats activos
                    </div>
                    <div style={{ fontSize: '.72rem', color: '#566880', marginTop: 2 }}>
                        92% resueltos por IA
                    </div>
                </div>
            </div>

            {/* Floating card: Efficiency */}
            <div
                className="a-fl3"
                style={{
                    position: 'absolute',
                    bottom: 16,
                    right: 8,
                    background: 'linear-gradient(135deg,#0B2B6A,#3FA9F5)',
                    borderRadius: 18,
                    padding: '14px 20px',
                    boxShadow: '0 20px 50px -10px rgba(11,43,106,.5)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    zIndex: 5,
                }}
            >
                <TrendingUp size={18} color="#fff" />
                <div>
                    <div
                        style={{
                            fontFamily: 'Poppins,sans-serif',
                            fontWeight: 800,
                            fontSize: '.8125rem',
                            color: '#fff',
                        }}
                    >
                        +340% eficiencia
                    </div>
                    <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.55)', marginTop: 2 }}>
                        vs. equipo humano
                    </div>
                </div>
            </div>
        </div>
    );
}
