import { Minus, Plus } from 'lucide-react';

/**
 * Single FAQ accordion item.
 *
 * @param {string} question
 * @param {string} answer
 * @param {boolean} isOpen
 * @param {Function} onToggle
 */
export default function FAQItem({ question, answer, isOpen, onToggle }) {
    return (
        <div className="faq-item">
            <button className="faq-btn" onClick={onToggle}>
                {question}
                <div
                    style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: isOpen ? '#0B2B6A' : 'rgba(11,43,106,.07)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all .25s',
                        color: isOpen ? '#fff' : '#0B2B6A',
                    }}
                >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </div>
            </button>
            <div
                className="faq-body"
                style={{ maxHeight: isOpen ? 300 : 0, opacity: isOpen ? 1 : 0 }}
            >
                <p style={{ padding: '0 0 20px', color: '#566880', lineHeight: 1.8, fontSize: '.9375rem' }}>
                    {answer}
                </p>
            </div>
        </div>
    );
}
