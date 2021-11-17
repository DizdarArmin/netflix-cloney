import Mute from "./Mute";
export default function HeroButtons({ play, sound, setSound }) {
  return (
    <div className="hero-buttons">
      <div className="left-side">
        <div className="play" onClick={play}>
          <i class="fas fa-play" />
          Play
        </div>
        <div className="info">
          <i className="fas fa-info-circle" />
          More Info
        </div>
      </div>
      <div className="right-side">
        <Mute sound={sound} setSound={setSound} />
        <div className="ageLimit"></div>
      </div>
    </div>
  );
}
