const ResponsiveImage2 = ({
  alt,
  desktop,
  mobile,
  priority = false,
  className = "",
  width,
  height,
}) => {
  return (
    <picture>
      {desktop && <source media="(min-width: 901px)" srcSet={desktop} />}
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

export default ResponsiveImage2;
