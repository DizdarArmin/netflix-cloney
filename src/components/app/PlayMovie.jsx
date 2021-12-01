import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useDocument from "../../hooks/useDocument";

export default function PlayMovie() {
  const { from, file } = useParams();
  const [media, setMedia] = useState([]);
  const { document } = useDocument(from, file);

  useEffect(() => {
    setMedia(document);
  }, [document]);

  return (
    <div className="full">
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
