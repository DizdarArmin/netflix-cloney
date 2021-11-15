import { useEffect, useState } from "react";

export default function Question({ item, toggle, isOn }) {
  const [spin, setSpin] = useState("");
  console.log(isOn);
  useEffect(() => {
    if (isOn) {
      setSpin("spin");
    } else {
      setSpin("");
    }
  }, [isOn]);

  return (
    <div className="question-card">
      <div className="top" onClick={() => toggle()}>
        <div className="card-question our-story-card-text">{item.question}</div>
        <span className={spin}>+</span>
      </div>
      {isOn && (
        <div className="bottom">
          <div className="our-story-card-text card-answer">
            {item.answer.map((item) => (
              <p>
                {item}
                <br />
                <br />
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
