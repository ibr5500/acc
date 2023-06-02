const Navbar = () => (
  <nav className="nav">
    <img
      className="nav-logo"
      src="./logo.png"
      alt="logo"
    />
    <ul className="nav-items">
      <li>
        <a
          href="#about"
          className="nav-link"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#service"
          className="nav-link"
        >
          Service
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="nav-link"
        >
          Contact
        </a>
      </li>
    </ul>
    {/* <NavLink to="/">
        <img
          className="rounded-circle recomend-img logo-img"
          src="./assets/logo.png"
          alt="Ibrahim Ahmat"
        />
      </NavLink>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            className="navbar-link"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="navbar-link"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="navbar-link"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul> */}
  </nav>
);

export default Navbar;
