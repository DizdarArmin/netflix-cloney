import tv from "../../images/tv.png";
import video from "../../images/video.m4v";
export default function WatchOnTv({ language }) {
  return (
    <div className="our-story-card ">
      <div className="watchOnTv">
        <div className="text-container">
          <div className="our-story-card-title">{language.tvTitle}</div>
          <div className="our-story-card-subtitle">{language.tvSubtitle}</div>
        </div>

        <div className="media">
          <img className="tv" src={tv} />
          <div className="video">
            <video width="100%" height="100%" autoPlay muted loop>
              <source src={video} />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
