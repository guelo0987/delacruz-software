import { DASHBOARD_SIDEBAR, DASHBOARD_STATS, DASHBOARD_FEED } from '../../../data/constants';

/**
 * Dashboard mockup showing admin panel preview.
 */
export default function Dashboard() {
    const bars = [32, 58, 42, 75, 50, 68, 90];

    return (
        <div
            style={{
                background: '#fff',
                borderRadius: 22,
                border: '1px solid rgba(11,43,106,.1)',
                boxShadow: '0 40px 80px -20px rgba(11,43,106,.28)',
                overflow: 'hidden',
                width: '100%',
            }}
        >
            {/* Title bar */}
            <div style={{ background: '#0B2B6A', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 8 }}>
                {['#ff5f57', '#ffbd2e', '#27c93f'].map((c) => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
                <span
                    style={{
                        marginLeft: 12,
                        fontSize: '.68rem',
                        fontWeight: 700,
                        color: 'rgba(255,255,255,.32)',
                        letterSpacing: '.2em',
                        textTransform: 'uppercase',
                    }}
                >
                    DLC · Admin Panel v3
                </span>
                <div
                    style={{
                        marginLeft: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        background: 'rgba(16,185,129,.12)',
                        borderRadius: 100,
                        padding: '3px 10px',
                    }}
                >
                    <div
                        style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#10B981',
                            boxShadow: '0 0 8px #10B981',
                        }}
                    />
                    <span style={{ fontSize: '.65rem', fontWeight: 700, color: '#10B981' }}>LIVE</span>
                </div>
            </div>

            <div style={{ display: 'flex', height: 430 }}>
                {/* Sidebar */}
                <div
                    style={{
                        width: 168,
                        background: '#071B44',
                        padding: 14,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        flexShrink: 0,
                    }}
                >
                    {DASHBOARD_SIDEBAR.map(([label, active]) => (
                        <div
                            key={label}
                            style={{
                                padding: '9px 12px',
                                borderRadius: 9,
                                background: active ? 'rgba(63,169,245,.18)' : 'transparent',
                                color: active ? '#fff' : 'rgba(255,255,255,.32)',
                                fontSize: '.78rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                            }}
                        >
                            <div
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: active ? '#3FA9F5' : 'rgba(255,255,255,.15)',
                                }}
                            />
                            {label}
                        </div>
                    ))}
                    <div style={{ flex: 1 }} />
                    <div
                        style={{
                            padding: '9px 12px',
                            borderRadius: 9,
                            background: 'rgba(16,185,129,.1)',
                            color: '#10B981',
                            fontSize: '.72rem',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                        }}
                    >
                        <div
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: '#10B981',
                                boxShadow: '0 0 8px #10B981',
                            }}
                        />
                        Sistema Activo
                    </div>
                </div>

                {/* Main content */}
                <div style={{ flex: 1, padding: 18, background: '#EEF2FF', overflowY: 'auto' }}>
                    {/* Stat cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 14 }}>
                        {DASHBOARD_STATS.map(([value, label, color, change]) => (
                            <div
                                key={label}
                                style={{
                                    background: '#fff',
                                    borderRadius: 13,
                                    padding: '13px 12px',
                                    border: '1px solid rgba(11,43,106,.06)',
                                    boxShadow: '0 2px 10px -4px rgba(11,43,106,.08)',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '.65rem',
                                        fontWeight: 700,
                                        color: '#566880',
                                        textTransform: 'uppercase',
                                        letterSpacing: '.07em',
                                        marginBottom: 5,
                                    }}
                                >
                                    {label}
                                </div>
                                <div
                                    style={{
                                        fontFamily: 'Poppins,sans-serif',
                                        fontWeight: 900,
                                        fontSize: '1.45rem',
                                        color,
                                    }}
                                >
                                    {value}
                                </div>
                                <div style={{ fontSize: '.65rem', color, fontWeight: 600, marginTop: 3 }}>
                                    {change}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Weekly volume chart */}
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: 13,
                            padding: '14px 13px',
                            border: '1px solid rgba(11,43,106,.06)',
                            marginBottom: 12,
                        }}
                    >
                        <div
                            style={{
                                fontSize: '.65rem',
                                fontWeight: 700,
                                color: '#0B2B6A',
                                marginBottom: 12,
                                textTransform: 'uppercase',
                                letterSpacing: '.07em',
                            }}
                        >
                            Volumen semanal
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 74 }}>
                            {bars.map((h, i) => (
                                <div key={i} style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: `${h}%`,
                                            borderRadius: '4px 4px 0 0',
                                            background:
                                                i === 6
                                                    ? 'linear-gradient(180deg,#3FA9F5,#0B2B6A)'
                                                    : 'linear-gradient(180deg,#B3D9F7,#8EC9F5)',
                                            transition: 'height .5s',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Live feed */}
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: 13,
                            padding: 13,
                            border: '1px solid rgba(11,43,106,.06)',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '.65rem',
                                fontWeight: 700,
                                color: '#566880',
                                textTransform: 'uppercase',
                                letterSpacing: '.07em',
                                marginBottom: 10,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                            }}
                        >
                            <div
                                style={{
                                    width: 5,
                                    height: 5,
                                    borderRadius: '50%',
                                    background: '#10B981',
                                    boxShadow: '0 0 6px #10B981',
                                }}
                            />
                            Feed en vivo
                        </div>
                        {DASHBOARD_FEED.map(([av, name, msg, color], i) => (
                            <div
                                key={name}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 9,
                                    padding: '7px 0',
                                    borderBottom: i < 2 ? '1px solid rgba(11,43,106,.04)' : 'none',
                                }}
                            >
                                <div
                                    style={{
                                        width: 26,
                                        height: 26,
                                        borderRadius: '50%',
                                        background: `${color}22`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '.65rem',
                                        fontWeight: 800,
                                        color,
                                        flexShrink: 0,
                                    }}
                                >
                                    {av}
                                </div>
                                <div>
                                    <div style={{ fontSize: '.76rem', fontWeight: 700, color: '#0D1B2A' }}>{name}</div>
                                    <div style={{ fontSize: '.68rem', color: '#566880' }}>{msg}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
