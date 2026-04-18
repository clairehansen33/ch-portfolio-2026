import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ResponsiveImage2 from "./ui/ResponsiveImage2";
import WrapLink from "./ui/WrapLink";
import TextWrap from "./ui/TextWrap";
import LinkData1 from "../data/data2.json";
import LinkData2 from "../data/data3.json";
import TextData1 from "../data/text-data-1.json";
import "./css/Hero2.css";

const Hero2 = ({ imageMobile, imageDesktop, imageAlt }) => {
  return (
    <Splide aria-label="Hero Banner Carousel">
      <SplideSlide>
        <WrapLink {...LinkData1} />
        <ResponsiveImage2
          mobile={imageMobile}
          desktop={imageDesktop}
          alt={imageAlt}
          width={900}
          height={280}
          priority
          className="w-full h-full object-cover"
        />
        <TextWrap {...TextData1} />
      </SplideSlide>
      <SplideSlide>
        <WrapLink {...LinkData2} />
        <ResponsiveImage2
          mobile={imageMobile}
          desktop={imageDesktop}
          alt={imageAlt}
          width={900}
          height={280}
          priority
          className="w-full h-full object-cover"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Hero2;
