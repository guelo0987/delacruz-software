import { useState, useEffect } from 'react';
import { TYPING_PHRASES } from '../../../data/constants';

/**
 * Animated typing effect that cycles through phrases.
 */
export default function Typer() {
    const [txt, setTxt] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const phrase = TYPING_PHRASES[phraseIndex];
        const timeout = setTimeout(
            () => {
                if (!deleting) {
                    setTxt(phrase.slice(0, txt.length + 1));
                    if (txt.length + 1 === phrase.length) {
                        setTimeout(() => setDeleting(true), 1600);
                    }
                } else {
                    setTxt(phrase.slice(0, txt.length - 1));
                    if (txt.length - 1 === 0) {
                        setDeleting(false);
                        setPhraseIndex((phraseIndex + 1) % TYPING_PHRASES.length);
                    }
                }
            },
            deleting ? 55 : 95
        );
        return () => clearTimeout(timeout);
    }, [txt, deleting, phraseIndex]);

    return (
        <span className="gta">
            {txt}
            <span className="a-bl" style={{ color: '#3FA9F5', fontWeight: 300, WebkitTextFillColor: '#3FA9F5' }}>
                |
            </span>
        </span>
    );
}
