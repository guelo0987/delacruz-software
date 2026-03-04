import { Zap } from 'lucide-react';
import { MARQUEE_ITEMS } from '../../data/constants';

/**
 * Infinite-scrolling technology marquee band.
 */
export default function Marquee() {
    const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

    return (
        <div
            style={{
                width: '100%',
                overflow: 'hidden',
                background: '#fff',
                borderTop: '1px solid rgba(11,43,106,.06)',
                borderBottom: '1px solid rgba(11,43,106,.06)',
                padding: '14px 0',
            }}
        >
            <div className="a-mq" style={{ display: 'flex', whiteSpace: 'nowrap', alignItems: 'center' }}>
                {doubled.map((text, i) => (
                    <div
                        key={i}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            margin: '0 30px',
                            color: '#566880',
                            fontWeight: 600,
                            fontSize: '.8rem',
                            letterSpacing: '.07em',
                            textTransform: 'uppercase',
                        }}
                    >
                        <Zap size={11} color="#3FA9F5" /> {text}
                    </div>
                ))}
            </div>
        </div>
    );
}
