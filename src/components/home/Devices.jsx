import devices from "../../images/devices.png";
import video from "../../images/video-devices.m4v";
export default function Devices({ language }) {
  return (
    <div className="our-story-card ">
      <div className="watchOnTv">
        <div className="text-container">
          <div className="our-story-card-title">{language.devicesTitle}</div>
          <div className="our-story-card-subtitle">
            {language.devicesSubtitle}
          </div>
        </div>

        <div className="device-container">
          <div className="device">
            <img className="tv" src={devices} />
            <div className="stranger-things">
              <video width="100%" height="100%" autoPlay muted loop>
                <source src={video} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
