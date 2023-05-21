import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header({ logo, nameUsser, onClickOut }) {
  const location = useLocation();
  const [headerLink, setHeaderLink] = useState({ link: "", name: "" });

  useEffect(() => {
    switch (location.pathname) {
      case "/sign-up":
        setHeaderLink({ link: "/sign-in", name: "Войти" });
        break;
      case "/sign-in":
        setHeaderLink({ link: "/sign-up", name: "Регистрация" });
        break;
      case "/":
        setHeaderLink({ link: "/sign-in", name: "Выйти" });
        break;
      default:
        setHeaderLink({ link: "", name: "" });
        break;
    }
  }, [location]);

  return (
    <header className="header">
      <Link className="link" to="/">
        <img
          className="header__logo"
          alt="Логотип проекта - Место"
          src={logo}
        />
      </Link>
      <div className="header__container">
        <p className="header__name">{nameUsser}</p>
        <Link
          className="header__link link"
          to={headerLink.link}
          onClick={onClickOut}
        >
          {headerLink.name}
        </Link>
      </div>
    </header>
  );
}

export default Header;
