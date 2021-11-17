import { useState } from "react";
import { useNavigate } from "react-router";
import Email from "./Email";
import Password from "./Password";
import { signIn } from "../../scripts/authentication";

export default function LoginForm({ language }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onSuccess(uid) {
    navigate("/browse");
  }

  function onFailure(message) {
    setError(message);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const account = await signIn(email, password);
    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  }
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div className="title">{language.signIn}</div>
      <Email language={language} hook={[email, setEmail]} />
      <Password language={language} hook={[password, setPassword]} />
      <div className="error">{error}</div>
      <button className="red-button next" type="submit">
        {language.signIn}
      </button>
    </form>
  );
}
