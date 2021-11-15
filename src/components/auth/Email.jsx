import { useState } from "react";

export default function Email({ language, hook }) {
  const regex = /.+@.+\.[A-Za-z]+$/;
  const [email, setEmail] = hook;
  const [borderClass, setBorderClass] = useState("");
  const [validation, setValidation] = useState(null);

  function onChange(e) {
    const change = e.target.value;
    setEmail(change);

    if (change.length === 0) {
      setBorderClass("border-red");
      setValidation(language.emailRequired);
    } else if (change.length < 6 || change.length > 60) {
      setValidation(language.emailLength);
      setBorderClass("border-red");
    } else if (!regex.test(email)) {
      setValidation(language.emailInvalid);
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
          name="email"
          className={borderClass}
          required
          type="name"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <span className="label">{language.email}</span>
      </div>
      <span className="sign-up-validation">{validation}</span>
    </div>
  );
}
