import { useEffect } from 'react';

/**
 * Scroll-reveal hook using IntersectionObserver.
 * Adds the 'on' class to elements with .rv, .rvl, .rvr, .rvs
 * when they enter the viewport.
 */
export function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.rv,.rvl,.rvr,.rvs');
        const io = new IntersectionObserver(
            entries =>
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add('on');
                        io.unobserve(e.target);
                    }
                }),
            { threshold: 0.1 }
        );
        els.forEach(el => io.observe(el));
        return () => io.disconnect();
    });
}
