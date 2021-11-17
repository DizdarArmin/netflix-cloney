import { useState } from "react";
import Modal from "../Modal";
import DetailedCard from "./DetailedCard";
import { useNavigate } from "react-router";
import Player from "./Player";

export default function Card({ item, setDirection }) {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [sound, setSound] = useState(false);
  const [hoverClass, setHoverClass] = useState("");
  const [touchStart, setTouchStart] = useState();
  const [modal, setModal] = useState(false);

  function onEnter() {
    setHoverClass("expand");
    setIsHover(true);
  }
  function onLeave() {
    setHoverClass("reduce");
    setIsHover(false);
  }

  function onModalOpen() {
    setModal(true);
    setIsHover(false);
  }
  function touchEnd(e) {
    let end = e.changedTouches[0];
    if (end.screenX - touchStart.screenX < 0) {
      setDirection("right");
    } else if (end.screenX - touchStart.screenX > 0) {
      setDirection("left");
    }
  }

  function play() {
    navigate(`/play-${item.category}-${item.id}`);
  }
  return (
    <div
      className={`card-wrapper ${hoverClass}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={(e) => setTouchStart(e.changedTouches[0])}
      onTouchEnd={(e) => touchEnd(e)}
    >
      <div className="media-card">
        {isHover && <Player hook={[item.trailer, sound, setSound, isHover]} />}
        {!isHover && <img src={item.thumbnail} alt={item.name} />}
      </div>
      <Modal hook={[modal, setModal]}>
        <DetailedCard item={item} />
      </Modal>
      {isHover && (
        <div className="content">
          <div className="media-controls">
            <i onClick={play} className="fas fa-2x fa-play-circle" />
            <i onClick={onModalOpen} className="fas fa-2x fa-chevron-down"></i>
          </div>
          <div className="line">
            <span className="match">98% Match</span>
            <span className="age">{item.ageLimit}+</span>
          </div>
          <div className="line">{item.about}</div>
        </div>
      )}
    </div>
  );
}
