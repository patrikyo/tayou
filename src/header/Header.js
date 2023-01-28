import "./Header.css";
function Header() {
  return (
    <div class="header__container container pt-3">
      <div class="row">
        <div class="col-10">
          <h1>TAYOU</h1>
        </div>
        <nav class="col-2">
          <ul class="header__navigation-links">
            <li>
              <a href="www.google.se">Hem</a>
            </li>
            <li>
              <a href="www.google.se">Kontakta</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
