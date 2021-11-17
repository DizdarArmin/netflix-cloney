import Mute from "./Mute";
export default function DetailedCardButtons({ play, sound, setSound }) {
  return (
    <div className="card-buttons">
      <div className="left-side">
        <div className="play" onClick={play}>
          <i class="fas fa-play" />
          Play
        </div>
      </div>

      <div className="right-side">
        <Mute sound={sound} setSound={setSound} />
      </div>
    </div>
  );
}
