import image from "../../images/signup-devices.png";
export default function Finish({ language, hook }) {
  const [toggle, setToggle] = hook;
  return (
    <div className="finish">
      <img src={image} />
      <div className="title">{language.finishTitle}</div>
      <div className="subtitle">{language.finishSubtitle}</div>
      <button onClick={() => setToggle(true)} className="red-button next">
        {language.signUpButton}
      </button>
    </div>
  );
}
