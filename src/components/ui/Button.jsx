/**
 * Reusable Button component with primary/ghost/white variants.
 *
 * @param {'p'|'g'|'w'} variant - Button style variant
 * @param {Function} onClick
 * @param {Object} style - Additional inline styles
 * @param {React.ReactNode} children
 */
export default function Button({ variant = 'p', onClick, style = {}, children, className = '' }) {
    return (
        <button
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    );
}
