import { useState } from "react";
import Player from "./Player";
export default function HoverCard({ hook }) {
  const [sound, setSound] = useState(false);

  const [item, isHover, play, moreDetails, isMoreDetails] = hook;

  return (
    <div className="media-card hover-card">
      <Player hook={[item.trailer, sound, setSound, isHover]} />
      <div className="media-controls">
        <i onClick={play} className="fas fa-2x fa-play-circle" />
        <i
          onClick={() => moreDetails()}
          className="fas fa-2x fa-chevron-down"
        ></i>
      </div>
      <div className="line">
        <span className="match">98% Match</span>
        <span className="age">{item.ageLimit}+</span>
      </div>
      <div className="line">{item.about}</div>
    </div>
  );
}
