import SignUpForm from "../components/auth/SignUpForm";
import Footer from "../components/auth/Footer";
import Navbar from "../components/home/Navbar";

export default function SignUp({ language }) {
  return (
    <div className="registration">
      <Navbar>
        <button className="sign-in-link">{language.signIn}</button>
      </Navbar>
      <SignUpForm language={language} />

      <Footer />
    </div>
  );
}
