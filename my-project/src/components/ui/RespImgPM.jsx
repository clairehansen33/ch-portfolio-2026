import "../css/RespImgPM.css";

const RespImgPM = ({
  desktop,
  mobile,
  alt,
  priority = true,
  width,
  height,
  className = "",
}) => {
  return (
    <picture>
      {desktop && <source media="(min-width: 481px)" srcSet={desktop} />}
      <img
        src={mobile}
        alt={alt}
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        width={width}
        height={height}
        className={className}
      />
    </picture>
  );
};

export default RespImgPM;
