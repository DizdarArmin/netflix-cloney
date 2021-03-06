import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useDocument from "../../hooks/useDocument";

export default function PlaySerie() {
  const { id, season, episode } = useParams();
  const [media, setMedia] = useState([]);
  const { document } = useDocument(
    `/series/${id}/seasons/${season}/episodes`,
    episode
  );

  useEffect(() => {
    setMedia(document);
  }, [document]);

  return (
    <div className="full">
      sdfsd
      <ReactPlayer
        playing={true}
        width="100%"
        url={media.video}
        height="100vh"
        style={{ height: "100vh" }}
        controls={true}
      />
    </div>
  );
}
