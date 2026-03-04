import Tag from './Tag';

/**
 * Reusable section header block with tag, title, and subtitle.
 * Used by ~10 sections to maintain consistent heading style.
 *
 * @param {React.ReactNode} tagIcon - Icon for the tag
 * @param {string} tagText - Text inside the tag
 * @param {string} tagBg - Tag background color
 * @param {string} tagColor - Tag text color
 * @param {string} tagBorder - Tag border
 * @param {React.ReactNode} title - Section title (can include JSX)
 * @param {string} subtitle - Section subtitle
 * @param {number} maxSubtitleWidth - Max width of subtitle
 * @param {number} marginBottom - Bottom margin
 */
export default function SectionHeader({
    tagIcon,
    tagText,
    tagBg,
    tagColor,
    tagBorder,
    title,
    subtitle,
    maxSubtitleWidth = 460,
    marginBottom = 72,
}) {
    return (
        <div style={{ textAlign: 'center', marginBottom }}>
            <Tag
                icon={tagIcon}
                bg={tagBg}
                color={tagColor}
                border={tagBorder}
                className="rv"
                style={{ marginBottom: 20 }}
            >
                {tagText}
            </Tag>
            <h2
                className="rv d1"
                style={{
                    fontFamily: 'Poppins,sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(2rem,3.5vw,3.25rem)',
                    letterSpacing: '-.05em',
                    marginBottom: subtitle ? 14 : 0,
                }}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className="rv d2"
                    style={{
                        fontSize: '1.0625rem',
                        color: '#566880',
                        maxWidth: maxSubtitleWidth,
                        margin: '0 auto',
                    }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
