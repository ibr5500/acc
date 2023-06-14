const Navbar = () => (
  <nav className="nav">
    <img
      className="nav-logo"
      src="./logo.WebP"
      alt="logo"
      width="80"
      height="100%"
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
          href="#services"
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
  </nav>
);

export default Navbar;
