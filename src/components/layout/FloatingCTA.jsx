import { useState, useEffect } from 'react';

/**
 * Floating call-to-action button that appears after scrolling.
 */
export default function FloatingCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handler = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    if (!visible) return null;

    return (
        <button
            className="fcta"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
        >
            <div style={{ position: 'relative', width: 10, height: 10 }}>
                <div
                    className="a-ping"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        background: '#10B981',
                    }}
                />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }} />
            </div>
            Hablar con un experto
        </button>
    );
}
