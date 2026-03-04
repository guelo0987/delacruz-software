import { useEffect, useRef } from 'react';

/**
 * Canvas-based animated particle network background.
 */
export default function Particles() {
    const cvs = useRef(null);

    useEffect(() => {
        const c = cvs.current;
        const ctx = c.getContext('2d');
        let W = (c.width = c.offsetWidth);
        let H = (c.height = c.offsetHeight);

        const dots = Array.from({ length: 55 }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.8 + 0.8,
            o: Math.random() * 0.5 + 0.1,
        }));

        let raf;
        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            dots.forEach((d) => {
                d.x += d.vx;
                d.y += d.vy;
                if (d.x < 0 || d.x > W) d.vx *= -1;
                if (d.y < 0 || d.y > H) d.vy *= -1;
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(63,169,245,${d.o})`;
                ctx.fill();
            });
            dots.forEach((a, i) =>
                dots.slice(i + 1).forEach((b) => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(11,43,106,${(1 - dist / 110) * 0.07})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                })
            );
            raf = requestAnimationFrame(draw);
        };
        draw();

        const ro = new ResizeObserver(() => {
            W = c.width = c.offsetWidth;
            H = c.height = c.offsetHeight;
        });
        ro.observe(c);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={cvs}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
            }}
        />
    );
}
