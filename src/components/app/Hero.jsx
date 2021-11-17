import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import robot from "../../images/robot.mp4";

import Mute from "./Mute";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  const navigate = useNavigate();
  const [sound, setSound] = useState(true);

  function Play() {
    navigate(`/play-XpDUH8tlAsqmUSLBn69X-1-1`);
  }
  return (
    <div className="app-hero">
      <div className="hero-video">
        <ReactPlayer
          controls={false}
          width="100%"
          height="auto"
          config={{
            youtube: {
              playerVars: { modestbranding: 1, loop: 1 },
            },
          }}
          style={{
            maxHeight: "100%",
          }}
          loop={true}
          muted={sound}
          playing={true}
          url={robot}
        />

        <HeroButtons play={Play} sound={sound} setSound={setSound} />
      </div>
    </div>
  );
}
