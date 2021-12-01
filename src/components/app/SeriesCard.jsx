import ReactPlayer from "react-player";
import { useNavigate } from "react-router";

export default function SeriesCard({ item, i, id, season, name }) {
  const navigate = useNavigate();
  function play() {
    // path: `/play-series-:id-:season-:episode`,
    navigate(`/${id}-${name}-${season}-${item.id}`);
  }
  return (
    <div className="series-card" onClick={play}>
      <div className="episode">
        <h3>{i}</h3>
        <ReactPlayer
          className="series-player"
          url={item.video}
          controls="false"
          height="100%"
          modestBranding
        />
      </div>
      <div className="name-time">
        <h3>{item.name}</h3>
        <h3>43 min</h3>
      </div>
    </div>
  );
}
