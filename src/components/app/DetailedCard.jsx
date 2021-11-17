import { useState } from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react/cjs/react.development";
import CardAbout from "./CardAbout";
import DetailedCardButtons from "./DetailedCardButtons";
import Series from "./Series";
import useCollection from "../../hooks/useCollection";
import { useNavigate } from "react-router";

export default function DetailedCard({ item }) {
  const navigate = useNavigate();
  const [sound, setSound] = useState();
  const [media, setMedia] = useState();
  const { collection } = useCollection(`/series/${item.id}/seasons`);

  useEffect(() => {
    if (collection) {
      setMedia(collection);
    }
  }, [collection]);

  function play() {
    alert(item.category);
    navigate(`/play-${item.category}-${item.id}`);
  }
  return (
    <div className="details">
      <ReactPlayer
        loop
        borderRadius
        style={{
          transform: "scale(1.8)",
        }}
        muted={sound}
        playing
        url={item.trailer}
      />
      <div className="card-content">
        <h1>{item.name}</h1>
        <DetailedCardButtons sound={sound} setSound={setSound} play={play} />
        {media && <Series item={item} />}
        <CardAbout item={item} />
      </div>

      {/*  <select>
        {media && media.map((item) => <option>{item.season}</option>)}
      </select>
      <button onClick={test}></button>

      {media && media.map((item) => <h3>{item.episode}</h3>)} */}
    </div>
  );
}
