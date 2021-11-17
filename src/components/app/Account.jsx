import { logout } from "../../scripts/authentication";
import { useAuth } from "../../state/AuthContext";
import { useState } from "react";
import avatar from "../../images/Netflix-avatar.png";
export default function Account() {
  const { userData } = useAuth();
  const [accountHover, setAccountHover] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  function onEnter() {
    setAccountHover("onEnterHover");
    setShowDropDown(true);
  }
  function onLeave() {
    setAccountHover("onLeave");
    setShowDropDown(false);
  }

  return (
    <div className="wrapper" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="account">
        <div className="image-holder">
          <img src={avatar} />
          <i className={`fas fa-caret-down ${accountHover}`} />
        </div>
        {showDropDown && (
          <div className="account-dropdown">
            <div onClick={logout} className="logout">
              Logout
            </div>
            {userData.role === "manager" && <a href="/manage-movies">Manage</a>}
          </div>
        )}
      </div>
    </div>
  );
}
