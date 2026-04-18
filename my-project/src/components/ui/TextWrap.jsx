import "../css/TextWrap.css";

const TextWrap = ({
  textWrapClass = "",
  logo,
  logoAlt,
  logoWidth,
  logoHeight,
  priority,
  headline,
  subhead,
  body,
  bodyClassNameM = "",
  bodyClassNameD = "",
  bodyM,
  bodyD,
  cta,
}) => (
  <div className={`text__wrap ${textWrapClass}`}>
    <img
      src={logo}
      alt={logoAlt}
      width={logoWidth}
      height={logoHeight}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
    />
    <span className="headline">{headline}</span>
    <span className="subhead">{subhead}</span>
    <span className="body">{body}</span>
    <span className={`body-m ${bodyClassNameM}`}>{bodyM}</span>
    <span className={`body-d ${bodyClassNameD}`}>{bodyD}</span>
    <span className="cta">{cta}</span>
  </div>
);

export default TextWrap;
