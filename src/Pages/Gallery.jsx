import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "../styles/Gallery.css";

import EVO from "../img/content/EVO_1.jpg";
import EVO2 from "../img/content/EVO_2.jpg";
import EVO3 from "../img/content/EVO_3.jpg";
import RWB from "../img/content/RWB_1.jpg";
import RWB2 from "../img/content/Porsche_RWB_Elrod.jpg";
import NSX from "../img/content/Jaiden-NSX.jpg";
import LFA from "../img/content/LFA_1.jpg";
import BMW from "../img/content/BMW_1.jpg";
import BMW2 from "../img/content/BMW_2.jpg";
import BMW3 from "../img/content/BMW_3.jpg";
import BMW4 from "../img/content/BMW_4.jpg";
import kranky from "../img/content/kranky_1.jpg";

const ALL_PHOTOS = [
    { src: EVO, category: "Events", caption: "Import Fest 2025" },
    { src: RWB, category: "Builds", caption: "RWB Porsche 996" },
    { src: NSX, category: "Builds", caption: "Jaiden's NSX" },
    { src: LFA, category: "Events", caption: "Track Day" },
    { src: BMW, category: "Builds", caption: "E36 — Midnight Run" },
    { src: RWB2, category: "Builds", caption: "Porsche 964 RWB Elrod" },
    { src: EVO2, category: "Events", caption: "Evo Rally Spec" },
    { src: BMW2, category: "Film", caption: "Late Shift — BTS" },
    { src: EVO3, category: "Events", caption: "Time Attack Grid" },
    { src: BMW3, category: "Film", caption: "Signal Lost — BTS" },
    { src: kranky, category: "Builds", caption: "Civic Drag Build" },
    { src: BMW4, category: "Film", caption: "Night Frequency — BTS" },
];

const FILTERS = ["All", "Builds", "Events", "Film"];

function useReveal() {
    useEffect(() => {
        const ro = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("on")),
            { threshold: 0.06 }
        );
        document.querySelectorAll(".rv").forEach((el) => ro.observe(el));
        return () => ro.disconnect();
    });
}

export default function Gallery() {
    const [active, setActive] = useState("All");
    const [lightbox, setLightbox] = useState(null);
    useReveal();

    const photos = active === "All" ? ALL_PHOTOS : ALL_PHOTOS.filter((p) => p.category === active);

    return (
        <main className="gallery-page">
            {/* ── PAGE HERO ── */}
            <section className="gal-pg-hero">
                <div className="gal-pg-hero-bg" style={{ backgroundImage: `url(${LFA})` }} />
                <div className="gal-pg-hero-ov" />
                <div className="gal-pg-hero-c">
                    <div className="lbl">003 — Media</div>
                    <h1 className="pg-hero-title">
                        The<br />
                        <span className="pg-red">Gallery</span>
                    </h1>
                    <p className="pg-hero-sub">
                        Raw shots from events, film shoots, and builds across the GTA.
                        Every photo, a moment worth saving.
                    </p>
                </div>
            </section>

            {/* ── FILTERS ── */}
            <div className="gal-filters rv">
                {FILTERS.map((f) => (
                    <button
                        key={f}
                        className={`flt-btn${active === f ? " flt-active" : ""}`}
                        onClick={() => setActive(f)}
                    >
                        {f}
                    </button>
                ))}
                <span className="flt-count">{photos.length} Photos</span>
            </div>

            {/* ── GRID ── */}
            <section className="gal-pg-sec">
                <div className="gal-pg-grid">
                    {photos.map(({ src, caption, category }, i) => (
                        <div
                            key={i}
                            className={`gal-pg-item rv${i % 4 === 1 ? " d1" : i % 4 === 2 ? " d2" : i % 4 === 3 ? " d3" : ""}`}
                            onClick={() => setLightbox({ src, caption, category })}
                        >
                            <img src={src} alt={caption} />
                            <div className="gal-pg-ov">
                                <div className="gal-pg-info">
                                    <span className="gal-pg-cat">{category}</span>
                                    <span className="gal-pg-cap">{caption}</span>
                                </div>
                                <div className="gal-pg-icon">
                                    <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── LIGHTBOX ── */}
            {lightbox && createPortal(
                <div className="gal-lightbox" onClick={() => setLightbox(null)}>
                    <button className="gal-lb-close" onClick={() => setLightbox(null)} aria-label="Close">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                            <line x1="4" y1="4" x2="20" y2="20" />
                            <line x1="20" y1="4" x2="4" y2="20" />
                        </svg>
                    </button>
                    <div className="gal-lb-img-wrap" onClick={(e) => e.stopPropagation()}>
                        <img src={lightbox.src} alt={lightbox.caption} />
                        <div className="gal-lb-caption">
                            <span className="gal-pg-cat">{lightbox.category}</span>
                            <span className="gal-lb-name">{lightbox.caption}</span>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </main>
    );
}
