function Header({ logo }) {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип проекта - Место" src={logo} />
    </header>
  );
}

export default Header;
