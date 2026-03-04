/**
 * Reusable Input component for forms.
 * Supports both <input> and <textarea> modes.
 *
 * @param {string} label - Label text above the input
 * @param {'text'|'email'|'textarea'} type
 * @param {string} placeholder
 * @param {string} value
 * @param {Function} onChange
 * @param {number} rows - Only used when type='textarea'
 */
export default function Input({ label, type = 'text', placeholder, value, onChange, rows = 4 }) {
    return (
        <div>
            {label && (
                <label
                    style={{
                        display: 'block',
                        fontSize: '.78rem',
                        fontWeight: 700,
                        color: '#0B2B6A',
                        marginBottom: 7,
                        letterSpacing: '.04em',
                    }}
                >
                    {label}
                </label>
            )}
            {type === 'textarea' ? (
                <textarea
                    className="inp"
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={{ resize: 'vertical' }}
                />
            ) : (
                <input
                    className="inp"
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
}
