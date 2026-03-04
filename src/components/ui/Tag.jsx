/**
 * Reusable Tag/Badge component for section labels.
 *
 * @param {React.ReactNode} icon - Leading icon
 * @param {string} bg - Background color
 * @param {string} color - Text color
 * @param {string} border - Border style
 * @param {string} className - Additional classes
 */
export default function Tag({ icon, bg, color, border, className = '', style = {}, children }) {
    return (
        <div
            className={`tag ${className}`}
            style={{
                background: bg,
                color: color,
                border: border || 'none',
                ...style,
            }}
        >
            {icon}
            {children}
        </div>
    );
}
