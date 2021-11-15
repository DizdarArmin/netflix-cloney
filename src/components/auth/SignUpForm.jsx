import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { email as globalEmail } from "../Atom";

import Email from "./Email";
import Name from "./Name";
import Password from "./Password";

export default function SignUpForm({ language }) {
  const [email, setEmail] = useRecoilState(globalEmail);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    document.getElementById("form").click();
  }, []);

  return (
    <form className="sign-up-form">
      <div className="title">{language.signUpTitle}</div>
      {language.signUpSubtitle.map((item) => (
        <div className="subtitle">
          {item}
          <br></br>
        </div>
      ))}
      <Name language={language} hook={[name, setName]} />
      <Email language={language} hook={[email, setEmail]} />
      <Password language={language} hook={[password, setPassword]} />
      <div className="opt-out">
        <div className="check">
          <input type="checkbox" />
        </div>
        <div className="text">{language.optOut}</div>
      </div>

      <button className="red-button next">{language.signUpButton}</button>
    </form>
  );
}
