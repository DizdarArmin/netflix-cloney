import { useState } from "react";
import { useRecoilState } from "recoil";
import { email as globalEmail } from "../Atom";
import { createAccount } from "../../scripts/authentication";
import { createDocumentWithId } from "../../scripts/fireStore";
import { useNavigate } from "react-router";

import Email from "./Email";
import Name from "./Name";
import Password from "./Password";

export default function SignUpForm({ language }) {
  const navigate = useNavigate();
  const [email, setEmail] = useRecoilState(globalEmail);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  async function onSuccess(uid) {
    await createDocumentWithId("users", uid, {
      name: name,
      role: "customer",
    });
    navigate("/browse");
  }
  function onFailure(message) {
    setError(message);
  }
  async function onSubmit(e) {
    e.preventDefault();
    const account = await createAccount(email, password);
    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  return (
    <form className="sign-up-form" onSubmit={onSubmit}>
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

      <button type="submit" className="red-button next">
        {language.signUpButton}
      </button>
      {error}
    </form>
  );
}
