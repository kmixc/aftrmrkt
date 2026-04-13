import { forwardRef } from "react";
import "../styles/navbar.css";

const NAV_LINKS = [
    { label: "FILMS", href: "#films" },
    { label: "SPOTLIGHT", href: "#spotlight" },
    { label: "GALLERY", href: "#gallery" },
    { label: "ABOUT", href: "#about" },
];

const MenuPanel = forwardRef(function MenuPanel(
    { navItemsRef, closeBtnRef, onLinkClick, onClose },
    ref
) {
    return (
        <aside ref={ref} className="menu-panel" aria-hidden="true">
            <div className="menu-panel__bg" aria-hidden="true" />

            <div className="menu-panel__inner">

                {/* Close button — top right of panel, fades IN via GSAP */}
                <button
                    ref={closeBtnRef}
                    className="menu-panel__close"
                    onClick={onClose}
                    aria-label="Close menu"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
                        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                        <line x1="4" y1="4" x2="20" y2="20" />
                        <line x1="20" y1="4" x2="4" y2="20" />
                    </svg>
                    <span className="menu-panel__close-label">Close</span>
                </button>

                <p className="menu-panel__eyebrow">Navigation</p>

                <nav className="menu-panel__nav" aria-label="Site navigation">
                    <ul className="menu-panel__list">
                        {NAV_LINKS.map(({ label, href }, i) => (
                            <li
                                key={label}
                                className="menu-panel__item"
                                ref={(el) => (navItemsRef.current[i] = el)}
                            >
                                <a href={href} className="menu-panel__link" onClick={onLinkClick}>
                                    <span className="menu-link__index">0{i + 1}</span>
                                    <span className="menu-link__label">{label}</span>
                                    <span className="menu-link__line" aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
});

export default MenuPanel;