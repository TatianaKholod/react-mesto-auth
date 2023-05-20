import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header({ logo }) {
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
      <Link className="header__link link" to={headerLink.link}>
        {headerLink.name}
      </Link>
    </header>
  );
}

export default Header;
