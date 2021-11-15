import mobile from "../../images/mobile.jpg";
import boxshot from "../../images/boxshot.png";
export default function DownloadAndWatch({ language }) {
  return (
    <div className="our-story-card">
      <div className="downloadAndWatch">
        <div className="animation-container">
          <div className="image-container">
            <img src={mobile} />
            <div className="animation">
              <div className="image">
                <img src={boxshot} />
              </div>
              <div className="text">
                <div className="text-1">Stranger Things</div>
                <div className="text-2">{language.downloading}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-container">
          <div className="our-story-card-title">{language.downloadTitle}</div>
          <div className="our-story-card-subtitle">
            {language.downloadSubtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
