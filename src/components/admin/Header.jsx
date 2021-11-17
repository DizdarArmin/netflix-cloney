import ReactPlayer from "react-player";
export default function Header({ image, trailer, video }) {
  return (
    <div className="header">
      <div>
        Thumbnail image
        <img src={image} />
      </div>
      <div>
        Trailer
        <ReactPlayer controls width="auto" url={trailer} />
      </div>
      <div>
        Video
        <ReactPlayer controls width="auto" url={video} />
      </div>
    </div>
  );
}
