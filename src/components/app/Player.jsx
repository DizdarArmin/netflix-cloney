import ReactPlayer from "react-player";
import Mute from "./Mute";
export default function Player({ hook }) {
  const [video, sound, setSound, isPlaying] = hook;
  return (
    <div className="player">
      <div className="sound">
        <Mute sound={sound} setSound={setSound} />
      </div>

      <ReactPlayer
        height="100%"
        style={{
          minWidth: "280px",
          maxWidth: "280px",
        }}
        muted={!sound}
        playing={isPlaying}
        url={video}
      />
    </div>
  );
}
