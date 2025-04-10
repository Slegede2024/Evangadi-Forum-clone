import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import { AppState } from "../../App";

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppState);

  const handleAuthClick = () => {
    localStorage.clear();
    setUser({});
    navigate("/landing");
  };

  return (
    <header className={style.header_container}>
      <div className={style.logo_div}>
        <div className={style.logo}>
          <img src="/Logo.png" alt="Home" />
        </div>
      </div>
      <div className={style.login_logout_div}>
        <Link to={user?.username ? "/home" : "/landing"}>Home</Link>
        <Link to="#">How it Works</Link>
        <button onClick={handleAuthClick}>
          {user?.username ? "LOG OUT" : "SIGN IN"}
        </button>
      </div>
    </header>
  );
}

export default Header;







