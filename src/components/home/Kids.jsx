import kids from "../../images/kids.png";
export default function Kids({ language }) {
  return (
    <div className="our-story-card">
      <div className="kids">
        <div className="image-container">
          <img src={kids} />
        </div>
        <div className="text-container">
          <div className="our-story-card-title">{language.kidsTitle}</div>
          <div className="our-story-card-subtitle">{language.kidsSubtitle}</div>
        </div>
      </div>
    </div>
  );
}
