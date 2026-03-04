/**
 * Reusable Card component with hover-lift effect.
 */
export default function Card({ children, className = '', style = {} }) {
    return (
        <div className={`card ${className}`} style={style}>
            {children}
        </div>
    );
}
