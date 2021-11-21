import { useState } from "react";
import Question from "./Question";

// This compoment and many similar look nice, but took time that could be expend on more important features.
// This is why writting a product backlog (and actually following) is crucial, too separate "nice to have" from "needs to have" features.
export default function FAQ({ language }) {
  const initialState = [
    { isOn: false },
    { isOn: false },
    { isOn: false },
    { isOn: false },
    { isOn: false },
    { isOn: false },
  ];
  const [questions, setQuestions] = useState(initialState);

  function toggle(i) {
    setQuestions(initialState);
    const toggled = [...questions];

    toggled.forEach((e, index) => {
      if (i === index) {
        toggled[i].isOn = !toggled[i].isOn;
      } else {
        e.isOn = false;
      }
    });

    setTimeout(setQuestions(toggled), 1000);
  }
  return (
    <div className="our-story-card faq">
      <div className="our-story-card-title">{language.faq.name}</div>
      <div className="questions">
        {language.faq.items.map((item, i) => (
          <Question
            key={i}
            item={item}
            toggle={() => toggle(i)}
            isOn={questions[i].isOn}
          />
        ))}
      </div>
    </div>
  );
}
