import { useEffect } from 'react';

/**
 * 3D tilt effect on mouse move.
 * Pass a React ref to the element that should tilt.
 */
export function useTilt(ref) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const mv = e => {
            const r = el.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
            const y = ((e.clientY - r.top) / r.height - 0.5) * -16;
            el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale(1.025)`;
        };

        const lv = () => {
            el.style.transform = '';
        };

        el.addEventListener('mousemove', mv);
        el.addEventListener('mouseleave', lv);
        return () => {
            el.removeEventListener('mousemove', mv);
            el.removeEventListener('mouseleave', lv);
        };
    }, [ref]);
}
