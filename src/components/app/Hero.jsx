import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import red from "../../images/rednotice.mp4";
import HeroButtons from "./HeroButtons";
import useDocument from "../../hooks/useDocument";

export default function Hero() {
  const { document } = useDocument("/movies", "bOs1SredWLfUfdUYEXGv", null);
  const [hero, setHero] = useState();
  const navigate = useNavigate();
  const [sound, setSound] = useState(true);

  useEffect(() => {
    if (document) {
      setHero(document);
    }
  }, [document]);
  function Play() {
    navigate(`/play-${hero.category}-${hero.id}`);
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
          url={red}
        />
        {hero && (
          <HeroButtons
            hero={hero}
            play={Play}
            sound={sound}
            setSound={setSound}
          />
        )}
      </div>
    </div>
  );
}
