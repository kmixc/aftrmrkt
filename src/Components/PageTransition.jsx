import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../img/AFTRMRKT-white.png";

export default function PageTransition({ children }) {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const overlayRef = useRef(null);
    const logoRef = useRef(null);
    const inProgress = useRef(false);

    /* ── Initial site-load: overlay slides up out of view ── */
    useEffect(() => {
        const overlay = overlayRef.current;
        const logoEl = logoRef.current;

        gsap.set(overlay, { y: 0 });
        gsap.set(logoEl, { autoAlpha: 1 });

        const tl = gsap.timeline({ delay: 0.3 });
        tl
            .to(logoEl, { autoAlpha: 0, duration: 0.5, ease: "power2.inOut" })
            .to(overlay, { y: () => -(window.innerHeight + 200), duration: 1.1, ease: "expo.inOut" }, "-=0.15");
    }, []);

    /* ── Route change: slide in → swap page → slide out ── */
    useEffect(() => {
        if (location.key === displayLocation.key || inProgress.current) return;

        inProgress.current = true;
        const overlay = overlayRef.current;
        const logoEl = logoRef.current;

        const tl = gsap.timeline();

        tl
            .set(overlay, { y: () => window.innerHeight })
            .set(logoEl, { autoAlpha: 1 })
            .to(overlay, { y: 0, duration: 0.85, ease: "expo.inOut" })
            .call(() => { window.scrollTo(0, 0); setDisplayLocation(location); })
            .to({}, { duration: 0.65 })
            .to(overlay, {
                y: () => -(window.innerHeight + 200),
                duration: 0.85,
                ease: "expo.inOut",
                onComplete: () => { inProgress.current = false; },
            });
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {createPortal(
                <div ref={overlayRef} className="page-transition-overlay">
                    <img ref={logoRef} src={logo} alt="AFTRMRKT" className="page-transition-logo" />
                    <p className="page-transition-tagline">The Scene Never Stops.</p>
                </div>,
                document.body
            )}

            {children(displayLocation)}
        </>
    );
}
