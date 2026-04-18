import RegLink from "./ui/RegLink";
import RespImgPM from "./ui/RespImgPM";
import TextWrap from "./ui/TextWrap";
import "./css/Promo-module.css";

const PromoModule = ({ linkData, imageData, textData }) => {
  return (
    <>
      <RegLink {...linkData}>
        <RespImgPM {...imageData} />
        <TextWrap {...textData} />
      </RegLink>
    </>
  );
};

export default PromoModule;
