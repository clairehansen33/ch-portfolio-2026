const RegLink = ({ href, tag, className = "", ariaLabel, children }) => (
  <a
    href={href}
    tag={tag}
    className={`main-link ${className}`}
    aria-label={ariaLabel}
  >
    {children}
  </a>
);
export default RegLink;
