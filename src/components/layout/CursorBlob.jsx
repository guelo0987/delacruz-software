import { useEffect, useRef } from 'react';

/**
 * Subtle cursor-following glow blob (desktop only).
 */
export default function CursorBlob() {
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current) {
                ref.current.style.left = e.clientX + 'px';
                ref.current.style.top = e.clientY + 'px';
            }
        };
        window.addEventListener('mousemove', handler);
        return () => window.removeEventListener('mousemove', handler);
    }, []);

    return <div ref={ref} className="cur hm" />;
}
