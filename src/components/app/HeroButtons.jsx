import { useState } from "react";
import Modal from "../Modal";
import DetailedCard from "./DetailedCard";
import Mute from "./Mute";
export default function HeroButtons({ play, sound, setSound, hero }) {
  const [modal, setModal] = useState(false);
  return (
    <div className="hero-content">
      <div className="top">
        <h1>{hero.name}</h1>
        {hero.description}
      </div>
      <div className="hero-buttons">
        <div className="left-side">
          <div className="play" onClick={play}>
            <i className="fas fa-play" />
            Play
          </div>
          <div className="info" onClick={() => setModal(true)}>
            <i className="fas fa-info-circle" />
            More Info
            <Modal hook={[modal, setModal]}>
              <DetailedCard item={hero} />
            </Modal>
          </div>
        </div>
        <div className="right-side">
          <Mute sound={sound} setSound={setSound} />
          <div className="ageLimit"></div>
        </div>
      </div>
    </div>
  );
}
