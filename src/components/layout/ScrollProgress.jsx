import { useState, useEffect } from 'react';

/**
 * Fixed scroll progress bar at top of page.
 */
export default function ScrollProgress() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handler = () =>
            setWidth((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return <div className="sp-bar" style={{ width: `${width}%` }} />;
}
