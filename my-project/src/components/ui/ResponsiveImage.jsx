const ResponsiveImage = ({
  alt,
  desktop,
  tablet,
  mobile,
  priority = false,
  className = "",
  width,
  height,
}) => {
  return (
    <picture>
      {mobile && <source media="(max-width: 768px)" srcSet={mobile} />}
      {tablet && <source media="(max-width: 1024px)" srcSet={tablet} />}
      <img
        src={desktop}
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

export default ResponsiveImage;
