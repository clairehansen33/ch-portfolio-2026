import { Link } from "react-router-dom";
// import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import PromoModule from "./components/Promo-module";
// import heroData from "./data.json";
import heroData from "./data/data2.json";
import RegLinkData1 from "./data/reg-link-data-1.json";
import RegLinkData2 from "./data/reg-link-data-2.json";
import RespImgPMData1 from "./data/resp-img-pm-data-1.json";
import RespImgPMData2 from "./data/resp-img-pm-data-2.json";
import PMTextData1 from "./data/TextWrapPM1.json";
import "./About.css";

export default function About() {
  return (
    <div>
      <main aria-labelledby="hero">
        <div className="hp-hero">
          <div className="container">
            <Hero2 {...heroData[0]} />
            <div className="right-side">
              <PromoModule
                linkData={RegLinkData1}
                imageData={RespImgPMData1}
                textData={PMTextData1}
              />
              <PromoModule linkData={RegLinkData2} imageData={RespImgPMData2} />
            </div>
          </div>
        </div>
      </main>
      {/* <Hero {...heroData} /> */}
      <div style={{ padding: 20 }}>
        <p>
          <Link to="/">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
