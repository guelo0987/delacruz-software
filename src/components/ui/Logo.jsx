/**
 * SVG Logo for De La Cruz Software.
 * Supports light mode for dark backgrounds.
 *
 * @param {boolean} light - Use white variant
 */
export default function Logo({ light = false }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer' }}>
            <svg width="34" height="34" viewBox="0 0 100 100">
                <polygon points="14,14 40,14 40,86 14,86" fill={light ? '#fff' : '#0B2B6A'} />
                <polygon points="40,14 72,14 88,32 58,32" fill="#3FA9F5" />
                <polygon points="40,86 78,86 92,64 62,64 52,74" fill="#3FA9F5" />
                <polygon points="52,74 70,50 82,62" fill={light ? 'rgba(255,255,255,.55)' : '#0B2B6A'} />
            </svg>
            <div style={{ lineHeight: 1 }}>
                <div
                    style={{
                        fontFamily: 'Poppins,sans-serif',
                        fontWeight: 900,
                        fontSize: '1.1rem',
                        color: light ? '#fff' : '#0B2B6A',
                        letterSpacing: '-.03em',
                    }}
                >
                    De La Cruz
                </div>
                <div
                    style={{
                        fontFamily: 'Poppins,sans-serif',
                        fontWeight: 600,
                        fontSize: '.62rem',
                        letterSpacing: '.2em',
                        textTransform: 'uppercase',
                        color: '#3FA9F5',
                    }}
                >
                    Software
                </div>
            </div>
        </div>
    );
}
