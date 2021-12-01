import { useState } from "react";
import { useNavigate } from "react-router";
import Modal from "../Modal";
import DetailedCard from "./DetailedCard";
import HoverModal from "../HoverModal";
import HoverCard from "./HoverCard";

export default function Card({ item, id, reference }) {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(true);
  const [isMoreDetails, setIsMoreDetails] = useState(false);

  const [hoverClass, setHoverClass] = useState("");
  const [modal, setModal] = useState(false);

  function onEnter() {
    setIsHover(true);
    setModal(true);
    setHoverClass("expand");
  }
  function onLeave() {
    if (!isMoreDetails) {
      setHoverClass("reduce");
      setIsHover(false);
    }
  }

  function play() {
    navigate(`/play-${item.category}-${item.id}`);
  }
  function moreDetails() {
    setIsMoreDetails(true);
    setIsHover(false);
  }
  function onClose() {
    setIsHover(false);
    setModal(false);
    setIsMoreDetails(false);
    setHoverClass("reduce");
  }

  return (
    <section
      ref={reference}
      id={id}
      className={`card-wrapper ${hoverClass}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="media-card " id={item.id}>
        <img src={item.thumbnail} alt={item.name} />
      </div>
      <HoverModal hook={[modal, setModal, item.id, isMoreDetails, onClose]}>
        {isHover && !isMoreDetails && (
          <HoverCard hook={[item, isHover, play, moreDetails, isMoreDetails]} />
        )}
        <Modal hook={[isMoreDetails, setIsMoreDetails]}>
          <DetailedCard item={item} />
        </Modal>
      </HoverModal>
    </section>
  );
}
