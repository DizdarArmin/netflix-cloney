import hero from "../../images/hero.jpg";
import GetStarted from "./GetStarted";

export default function Hero({ language }) {
  return (
    <div className="our-story-card hero-card">
      <div className="our-story-card-background">
        <div className="img-wrapper">
          <img srcSet={`${hero} 1000w, ${hero} 1500w,${hero} 1800w`} />
        </div>
        <div className="img-gradient" />
      </div>
      <div className="hero-wrapper">
        <div className="hero">
          <h1 className="our-story-card-title hero-title">
            {language.heroTitle}
          </h1>
          <h2 className="our-story-card-subtitle hero-subtitle">
            {language.heroSubtitle}
          </h2>

          <GetStarted language={language} />
        </div>
      </div>
    </div>
  );
}
