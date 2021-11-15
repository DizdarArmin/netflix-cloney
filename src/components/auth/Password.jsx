import { useState } from "react";

export default function Password({ language, hook }) {
  const [password, setPassword] = hook;
  const [borderClass, setBorderClass] = useState("");
  const [validation, setValidation] = useState(null);

  function onChange(e) {
    const change = e.target.value;
    setPassword(change);

    if (change.length === 0) {
      setBorderClass("border-red");
      setValidation(language.passwordRequired);
    } else if (change.length < 6 || change.length > 60) {
      setValidation(language.passwordLength);
      setBorderClass("border-red");
    } else {
      setValidation("");
      setBorderClass("border-green");
    }
  }
  return (
    <div className="password-wrapper">
      <div className="password-input">
        <input
          name="password"
          className={borderClass}
          required
          type="password"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <span className="label">{language.password}</span>
      </div>
      <span className="sign-up-validation">{validation}</span>
    </div>
  );
}
