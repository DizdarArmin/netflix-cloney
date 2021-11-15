import { useState } from "react";
import { useNavigate } from "react-router";
import { email as globalEmail } from "../Atom";
import { useRecoilState } from "recoil";
export default function GetStarted({ language }) {
  const regex = /.+@.+\.[A-Za-z]+$/;
  const navigate = useNavigate();
  const [lineClass, setLineClass] = useState("");
  const [error, setError] = useState(null);
  const [email, setEmail] = useRecoilState(globalEmail);

  function onChange(e) {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setLineClass("");
      setError(language.emailRequired);
    } else {
      setLineClass("orangeLine");
      if (!regex.test(email)) {
        setError(language.emailInvalid);
      } else {
        setError("");
        setLineClass("");
      }
    }
  }
  function submit(e) {
    e.preventDefault();
    if (regex.test(email)) {
      navigate("/signup");
    }
  }
  return (
    <form className="get-started" onSubmit={submit}>
      <h3 className="our-story-card-text hero-text">{language.formText}</h3>
      <div className="email-form">
        <div className="email-wrap">
          <input
            required
            id="email"
            className={lineClass}
            type="text"
            onChange={(e) => onChange(e)}
          />
          <span className="floating-label">Email address</span>
          <span className="validation">{error && error}</span>
        </div>
        <br />
        <button type="submit" className="red-button">
          {language.startButton}
        </button>
      </div>
    </form>
  );
}
