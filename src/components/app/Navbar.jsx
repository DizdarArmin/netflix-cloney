import { useNavigate } from "react-router";
import logo from "../../images/logo.png";

export default function Navbar({ children }) {
  const navigate = useNavigate();
  function onClick() {
    navigate("/");
  }
  return (
    <div className="our-story-header-wrapper app-nav">
      <div className="our-story-header">
        <div className="logo-wrapper">
          <img onClick={onClick} className="logo" src={logo} />
        </div>
        {children}
      </div>
    </div>
  );
}
