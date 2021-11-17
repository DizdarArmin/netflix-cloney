import Footer from "../components/auth/Footer";
import LoginForm from "../components/auth/LoginForm";
import Navbar from "../components/home/Navbar";
import hero from "../images/hero.jpg";
export default function Login({ language }) {
  return (
    <div className="login  ">
      <div className="img-gradient" />
      <Navbar />

      <LoginForm language={language} />
      <Footer bgColor="footer-transparent-black" page="login" />
    </div>
  );
}
