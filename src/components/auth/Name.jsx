import { useState } from "react";

export default function Name({ language, hook }) {
  const [name, setName] = hook;
  const [borderClass, setBorderClass] = useState("");
  const [validation, setValidation] = useState(null);

  function onChange(e) {
    const change = e.target.value;
    setName(change);
    console.log(name.length);
    if (change.length === 0) {
      setBorderClass("border-red");
      setValidation(language.nameRequired);
    } else if (change.length < 3 || change.length > 30) {
      setValidation(language.nameLength);
      setBorderClass("border-red");
    } else {
      setValidation("");
      setBorderClass("border-green");
    }
  }
  return (
    <div className="name-wrapper">
      <div className="name-input">
        <input
          autoFocus
          className={borderClass}
          required
          type="name"
          value={name}
          onChange={(e) => onChange(e)}
        />
        <span className="label">{language.name}</span>
      </div>
      <span className="sign-up-validation">{validation}</span>
    </div>
  );
}
