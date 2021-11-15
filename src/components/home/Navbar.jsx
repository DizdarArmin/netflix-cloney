import logo from "../../images/logo.png";

export default function Navbar({ children }) {
  return (
    <div className="our-story-header-wrapper">
      <div className="our-story-header">
        <div className="logo-wrapper">
          <img className="logo" src={logo} />
        </div>
        {children}
      </div>
    </div>
  );
}
