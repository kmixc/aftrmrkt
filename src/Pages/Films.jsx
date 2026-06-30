import { useEffect, useState } from "react";
import "../styles/Films.css";

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

/* ─── Reusable play-button SVG ─── */
const PlayIcon = ({ size = 22 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} style={{ fill: "var(--lotion)", marginLeft: size > 18 ? 4 : 3 }}>
        <path d="M5 3l14 9-14 9V3z" />
    </svg>
);

const ALL_FILMS = [
    {
        id: 0,
        src: "0Rn0R20hn1o",
        thumb: "https://img.youtube.com/vi/0Rn0R20hn1o/maxresdefault.jpg",
        tag: "Feature Film",
        title: "Shayne's R32 GTR",
        meta: "2026 · Feature Film",
        category: "Feature Film",
        featured: true,
    },
    {
        id: 1,
        src: "IG-4rTJkrhs",
        thumb: "https://img.youtube.com/vi/IG-4rTJkrhs/maxresdefault.jpg",
        tag: "Documentary",
        title: "Import Fest — 2025",
        meta: "2025 · 9 Min",
        category: "Documentary",
        featured: true,
    },
    { id: 2, src: null, thumb: EVO, tag: "Short Film", title: "Cold Start", meta: "2024 · 8 Min", category: "Short Film" },
    { id: 3, src: null, thumb: RWB, tag: "Documentary", title: "Night Frequency", meta: "2023 · 18 Min", category: "Documentary" },
    { id: 4, src: null, thumb: NSX, tag: "Short Film", title: "Open Headers", meta: "2023 · 11 Min", category: "Short Film" },
    { id: 5, src: null, thumb: LFA, tag: "Series", title: "Machines Vol. 1", meta: "2023 · 24 Min", category: "Series" },
    { id: 6, src: null, thumb: BMW, tag: "Short Film", title: "Late Shift", meta: "2022 · 7 Min", category: "Short Film" },
    { id: 7, src: null, thumb: EVO2, tag: "Documentary", title: "Track Day", meta: "2022 · 14 Min", category: "Documentary" },
    { id: 8, src: null, thumb: RWB2, tag: "Series", title: "Machines Vol. 2", meta: "2022 · 27 Min", category: "Series" },
    { id: 9, src: null, thumb: BMW2, tag: "Short Film", title: "Signal Lost", meta: "2021 · 6 Min", category: "Short Film" },
    { id: 10, src: null, thumb: EVO3, tag: "Documentary", title: "GTA Underground", meta: "2021 · 21 Min", category: "Documentary" },
    { id: 11, src: null, thumb: BMW3, tag: "Series", title: "Machines Vol. 3", meta: "2021 · 30 Min", category: "Series" },
];

const FILTERS = ["All", "Feature Film", "Short Film", "Documentary", "Series"];

function useReveal() {
    useEffect(() => {
        const ro = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("on")),
            { threshold: 0.08 }
        );
        document.querySelectorAll(".rv").forEach((el) => ro.observe(el));
        return () => ro.disconnect();
    });
}

export default function Films() {
    const [active, setActive] = useState("All");
    useReveal();

    const filtered = active === "All" ? ALL_FILMS : ALL_FILMS.filter((f) => f.category === active);
    const [hero, ...grid] = filtered;

    return (
        <main className="films-page">
            {/* ── PAGE HERO ── */}
            <section className="pg-hero">
                <div className="pg-hero-bg" style={{ backgroundImage: `url(${EVO})` }} />
                <div className="pg-hero-ov" />
                <div className="pg-hero-c">
                    <div className="lbl">001 — Films</div>
                    <h1 className="pg-hero-title">
                        Original<br />
                        <span className="pg-red">Films</span>
                    </h1>
                    <p className="pg-hero-sub">
                        Cinematic automotive storytelling from inside the scene.
                        Short films, documentaries, and original series.
                    </p>
                </div>
            </section>

            {/* ── FILTER TABS ── */}
            <div className="films-filters rv">
                {FILTERS.map((f) => (
                    <button
                        key={f}
                        className={`flt-btn${active === f ? " flt-active" : ""}`}
                        onClick={() => setActive(f)}
                    >
                        {f}
                    </button>
                ))}
                <span className="flt-count">{filtered.length} Films</span>
            </div>

            {/* ── FEATURED / HERO FILM ── */}
            {hero && (
                <section className="films-pg-sec">
                    <div
                        className="film-hero rv"
                        onClick={() =>
                            hero.src
                                ? window.open(`https://www.youtube.com/watch?v=${hero.src}`, "_blank")
                                : undefined
                        }
                        style={{ cursor: hero.src ? "pointer" : "default" }}
                    >
                        <img src={hero.thumb} alt={hero.title} />
                        <div className="fh-ov">
                            <div>
                                <span className="f-tag">{"// " + hero.tag}</span>
                                <div className="f-title">{hero.title}</div>
                                <div className="f-meta">
                                    {hero.meta}
                                    {hero.src && (
                                        <span className="f-dur">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="10">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M12 6v6l4 2" />
                                            </svg>
                                            Watch Now
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        {hero.src && (
                            <div className="fh-play">
                                <PlayIcon size={22} />
                            </div>
                        )}
                    </div>

                    {/* ── FILM GRID ── */}
                    {grid.length > 0 && (
                        <div className="film-grid" style={{ marginTop: 3 }}>
                            {grid.map(({ id, thumb, tag, title, meta }, i) => (
                                <div
                                    key={id}
                                    className={`fc rv${i % 3 === 1 ? " d1" : i % 3 === 2 ? " d2" : ""}`}
                                >
                                    <img src={thumb} alt={title} />
                                    <div className="fc-ov">
                                        <div className="fc-tag">{"// " + tag}</div>
                                        <div className="fc-title">{title}</div>
                                        <div className="fc-meta">{meta}</div>
                                    </div>
                                    <div className="fc-play"><PlayIcon size={15} /></div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {/* ── SUBMIT / CTA ── */}
            <section className="films-cta rv">
                <div className="films-cta-in">
                    <div className="lbl" style={{ justifyContent: "center", marginBottom: 18 }}>Submit Your Story</div>
                    <h2 className="disp">Have a Build<br />Worth Filming?</h2>
                    <p className="bod" style={{ margin: "16px auto 40px", textAlign: "center", maxWidth: 400 }}>
                        We're always looking for our next subject. If your car has a story,
                        reach out and let's talk.
                    </p>
                    <a href="mailto:films@aftrmrkt.club" className="btn-red">Get in Touch</a>
                </div>
            </section>
        </main>
    );
}
