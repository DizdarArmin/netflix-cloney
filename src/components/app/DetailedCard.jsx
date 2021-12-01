import { useState } from "react";
import ReactPlayer from "react-player";
import CardAbout from "./CardAbout";
import DetailedCardButtons from "./DetailedCardButtons";
import Series from "./Series";

import { useNavigate } from "react-router";

export default function DetailedCard({ item }) {
  const navigate = useNavigate();
  const [sound, setSound] = useState();

  function play() {
    if (item.category === "series") {
      navigate(`/${item.id}-${item.name}-1-1`);
    } else {
      navigate(`/play-${item.category}-${item.id}`);
    }
  }
  return (
    <div className="details">
      <ReactPlayer
        loop
        style={{
          transform: "scale(1.8)",
        }}
        height="350px"
        width="100%"
        muted={sound}
        playing
        url={item.trailer}
      />
      <div className="card-content">
        <h1>{item.name}</h1>
        <DetailedCardButtons sound={sound} setSound={setSound} play={play} />
        {item.category === "series" && <Series id={item.id} name={item.name} />}
        <CardAbout item={item} />
      </div>
    </div>
  );
}
