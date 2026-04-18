import ResponsiveImage from "./ui/ResponsiveImage";

const Hero = ({
  eyebrow,
  title,
  subtitle,
  ctaText,
  imageDesktop,
  imageTablet,
  imageMobile,
  imageAlt,
}) => {
  return (
    <section
      className="
        relative
        flex
        justify-center
        align-center
        w-full
        h-48
        max-w-360
        m-auto
        text-[#fafafc]
        bg-cover bg-center
      "
    >
      <ResponsiveImage
        desktop={imageDesktop}
        tablet={imageTablet}
        mobile={imageMobile}
        alt={imageAlt}
        width={1440}
        height={192}
        priority
        className="w-full h-full object-cover"
      />
      <div className="absolute mx-auto flex h-full max-h-48 items-center w-xs md:w-3xl">
        <div className="absolute left-37 md:left-105 lg:left-115 flex flex-col items-start max-w-40 md:max-w-85">
          <h2 className="mb-2 text-base text-left md:hidden">{eyebrow}</h2>
          <h1 className="leading-none text-left text-xl md:text-3xl mb-4 md:mb-2">
            {title}
          </h1>
          <h2 className="mb-4 leading-5 text-base text-left hidden md:flex">
            {subtitle}
          </h2>

          {ctaText && (
            <span
              className="
              inline-block
              rounded-3xl
              bg-transparent
              border-white
              border-solid
              border-2
              px-8
              py-1
              font-semibold
              text-white
            "
            >
              {ctaText}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
