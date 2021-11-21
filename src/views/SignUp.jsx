import SignUpForm from "../components/auth/SignUpForm";
import Footer from "../components/auth/Footer";
import Navbar from "../components/home/Navbar";
import Finish from "../components/auth/Finish";
import { useState } from "react";

export default function SignUp({ language }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="registration">
      <Navbar>
        <a href="/login" className="sign-in-link">
          {language.signIn}
        </a>
      </Navbar>
      {!toggle && <Finish language={language} hook={[toggle, setToggle]} />}
      {toggle && <SignUpForm language={language} />}
      <Footer bgColor="footer-gray" page="signup" />
    </div>
  );
}
