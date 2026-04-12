import { useEffect, useState } from "react";

import logo from "../img/AFTRMRKT-white.png";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <nav id="nav" className={solid ? "solid" : ""}>
        <a href="#" className="nav-logo">
          <img src={logo} alt="AFTRMRKT" />
        </a>
        <ul className="nav-links">
          <li><a href="#films">Films</a></li>
          <li><a href="#spotlight">Spotlight</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div className="nav-r">
          <a href="#join" className="nav-btn">Join the Club</a>
          <button
            className={`ham${menuOpen ? " open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mob${menuOpen ? " open" : ""}`}>
        <a href="#films" className="ml" onClick={closeMenu}>Films</a>
        <a href="#spotlight" className="ml" onClick={closeMenu}>Spotlight</a>
        <a href="#gallery" className="ml" onClick={closeMenu}>Gallery</a>
        <a href="#about" className="ml" onClick={closeMenu}>About</a>
        <a href="#join" className="ml" onClick={closeMenu} style={{ color: "var(--red)" }}>
          Join
        </a>
      </div>
    </>
  );
}