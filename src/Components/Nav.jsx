import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import MenuPanel from "./Menupanel";
import "../styles/navbar.css";

import logo from "../img/AFTRMRKT-white.png"

export default function Nav({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const tlRef = useRef(null);
  const pageRef = useRef(null);
  const navbarRef = useRef(null);
  const panelRef = useRef(null);
  const burgerRef = useRef(null);   // navbar burger — fades OUT
  const closeBtnRef = useRef(null);   // panel close btn — fades IN
  const navItemsRef = useRef([]);

  /* ── scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── build GSAP timeline ── */
  useEffect(() => {
    const page = pageRef.current;
    const navbar = navbarRef.current;
    const panel = panelRef.current;
    const burger = burgerRef.current;
    const closeBtn = closeBtnRef.current;
    const items = navItemsRef.current.filter(Boolean);

    if (!page || !navbar || !panel || !burger || !closeBtn || !items.length) return;

    /* initial states */
    gsap.set(panel, { x: "6%", autoAlpha: 0 });
    gsap.set(items, { y: 16, autoAlpha: 0 });
    gsap.set(closeBtn, { autoAlpha: 0, scale: 0.95 });

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.inOut", duration: 1.0 },
    });

    tl
      /* shift exactly as wide as the panel so nothing clips on any screen */
      .to([page, navbar], { x: () => -panelRef.current.offsetWidth, scale: 0.97, duration: 1.1, ease: "power2.inOut" })
      .to(page, { boxShadow: "24px 0 60px rgba(0,0,0,0.35)", borderRadius: "12px", duration: 1.1, ease: "power2.inOut" }, "<")
      /* navbar burger fades softly */
      .to(burger, { autoAlpha: 0, scale: 0.9, duration: 0.4, ease: "power1.inOut" }, "<")
      /* panel eases in */
      .to(panel, { x: "0%", autoAlpha: 1, duration: 0.9, ease: "power2.out" }, "<0.1")
      /* nav items drift up gently */
      .to(items, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.09, ease: "power2.out" }, "-=0.5")
      /* close button fades in quietly */
      .to(closeBtn, { autoAlpha: 1, scale: 1, duration: 0.4, ease: "power2.out" }, "-=0.3");

    tlRef.current = tl;
    return () => tl.kill();
  }, []);

  /* ── toggle ── */
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        tlRef.current?.play();
        document.body.style.overflow = "hidden";
      } else {
        tlRef.current?.reverse();
        document.body.style.overflow = "";
      }
      return next;
    });
  }, []);

  const closeMenu = useCallback(() => {
    if (!menuOpen) return;
    tlRef.current?.reverse();
    document.body.style.overflow = "";
    setMenuOpen(false);
  }, [menuOpen]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) closeMenu();
  }, [closeMenu]);


  return (
    <>
      {/* ── Menu panel ── */}
      <MenuPanel
        ref={panelRef}
        navItemsRef={navItemsRef}
        closeBtnRef={closeBtnRef}
        onLinkClick={closeMenu}
        onClose={closeMenu}
      />

      {/* ── Navbar — slides with page via GSAP ── */}
      <nav
        ref={navbarRef}
        className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
      >
        <a className="navbar__logo" href="/">
          <span className="logo-dot" aria-hidden="true" />
          <img src={logo} alt="AFTRMRKT" />
        </a>

        <ul className="navbar__links">
          <li>
            <a href="https://www.youtube.com/@AFTRMRKTCLUB" className="navbar__social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              {/* YouTube */}
              <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aftrmrkt.co/" className="navbar__social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              {/* Instagram */}
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@aftrmrkt.co" className="navbar__social-link" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              {/* TikTok */}
              <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
            </a>
          </li>
        </ul>

        {/* This burger fades OUT when menu opens */}
        <button
          ref={burgerRef}
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
            stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav >

      {/* ── Page content ── */}
      < div
        ref={pageRef}
        className={`page-content${menuOpen ? " menu-is-open" : ""}`
        }
        onClick={menuOpen ? handleOverlayClick : undefined}
      >
        {children}
      </div >
    </>
  );
}