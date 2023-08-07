import React from "react";
import logo from "../images/header-logo.svg";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Header({ userEmail }) {
  const navigate = useNavigate();
  const location = useLocation();

  function signOut() {
    localStorage.removeItem("jwt");
    navigate("/sign-in", { replace: true });
  }

  return (
    <header className="header">
      <a href="#" className="header__link">
        <img src={logo} alt="Логотип Mesto Russia." className="header__logo" />
      </a>
      {location.pathname == "/" && (
        <div className="header__container">
          <p className="header__email">{userEmail}</p>
          <button className="header__button" onClick={signOut}>
            Выйти
          </button>
        </div>
      )}
      {location.pathname == "/sign-in" && (
        <div className="header__container">
          <Link to="sign-up" className="header__button header__button-text">
            Регистрация
          </Link>
        </div>
      )}
      {location.pathname == "/sign-up" && (
        <div className="header__container">
          <Link to="sign-in" className="header__button header__button-text">
            Вход
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
