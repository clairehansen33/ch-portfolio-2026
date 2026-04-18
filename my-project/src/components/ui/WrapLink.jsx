import "../css/WrapLink.css";

const WrapLink = ({
  href,
  tag,
  className = "main-link banner-wrap",
  ariaLabel,
}) => (
  <a
    href={href}
    manual_cm_sp={tag}
    className={className}
    aria-label={ariaLabel}
  ></a>
);
export default WrapLink;
