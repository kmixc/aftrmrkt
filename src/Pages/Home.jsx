import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";

import Video from "../img/WebsiteCover.mov";

//IMAGES
import NSX from "../img/content/Jaiden-NSX.jpg"
import EVO from "../img/content/EVO_1.jpg"
import RWB from "../img/content/RWB_1.jpg"
import RWB2 from "../img/content/Porsche_RWB_Elrod.jpg"
import LFA from "../img/content/LFA_1.jpg"
import BMW from "../img/content/BMW_2.jpg"

const GALLERY_IMAGES = [
    { src: EVO },
    { src: RWB },
    { src: NSX },
    { src: LFA },
    { src: BMW },
    { src: RWB2 },
];

/* ─── Reusable play-button SVG ─── */
const PlayIcon = ({ size = 22 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} style={{ fill: "var(--lotion)", marginLeft: size > 18 ? 4 : 3 }}>
        <path d="M5 3l14 9-14 9V3z" />
    </svg>
);

/* ─── Intersection-observer reveal hook ─── */
function useReveal() {
    useEffect(() => {
        const ro = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => e.isIntersecting && e.target.classList.add("on")),
            { threshold: 0.08 }
        );
        document.querySelectorAll(".rv").forEach((el) => ro.observe(el));
        return () => ro.disconnect();
    }, []);
}

export default function Home() {
    useReveal();

    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.hash]);

    const [lightbox, setLightbox] = useState({ open: false, index: 0 });

    const openLightbox = useCallback((i) => {
        setLightbox({ open: true, index: i });
        document.body.style.overflow = "hidden";
    }, []);

    const closeLightbox = useCallback(() => {
        setLightbox((s) => ({ ...s, open: false }));
        document.body.style.overflow = "";
    }, []);

    const prevImage = useCallback(() =>
        setLightbox((s) => ({ ...s, index: (s.index - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length }))
    , []);

    const nextImage = useCallback(() =>
        setLightbox((s) => ({ ...s, index: (s.index + 1) % GALLERY_IMAGES.length }))
    , []);

    useEffect(() => {
        if (!lightbox.open) return;
        const onKey = (e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightbox.open, closeLightbox, prevImage, nextImage]);

    return (
        <main>
            {/* ── HERO ── */}
            <section className="hero">
                <div
                    className="hero-vw"
                    style={{
                        backgroundImage: EVO,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <video autoPlay muted loop playsInline
                        poster={EVO}>
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
                <div className="hero-ov"></div>
                <div className="hero-edge"></div>

                <div className="hero-c">
                    <div className="h-eye">
                        <div className="h-eye-line"></div>
                        <span>aftrmrkt.club — Est. 2020</span>
                    </div>
                    <h1 className="h-title">
                        The Scene<br />
                        <span className="ol">Never</span><br />
                        <span className="rd">Stops.</span>
                    </h1>
                    <p className="h-body">
                        Automotive culture, cinematic storytelling, and a community built by
                        the people who actually show up.
                    </p>
                    <div className="h-btns">
                        <a href="#films" className="btn-red">Watch Films</a>
                        <a href="/" className="btn-ol">Join the Club</a>
                    </div>
                </div>

                <div className="h-scroll">
                    <div className="h-dot"></div>
                    <span>Scroll to Explore</span>
                </div>
            </section>

            {/* ── TICKER ── */}
            <div className="ticker">
                <div className="ticker-t" id="tick">
                    {/* Duplicated for seamless loop */}
                    {[...Array(2)].map((_, i) => (
                        <span key={i} style={{ display: "contents" }}>
                            <span className="ti">Automotive Culture <span className="td">✦</span></span>
                            <span className="ti">Car Spotlights <span className="td">✦</span></span>
                            <span className="ti">Original Films <span className="td">✦</span></span>
                            <span className="ti">Underground Scene <span className="td">✦</span></span>
                            <span className="ti">GTA-Based <span className="td">✦</span></span>
                            <span className="ti">Community First <span className="td">✦</span></span>
                            <span className="ti">AFTRMRKT.CLUB <span className="td">✦</span></span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ── FEATURED FILMS ── */}
            <section className="sec" id="films">
                <div className="films-hd rv">
                    <div>
                        <div className="lbl">001 — Films</div>
                        <h2 className="disp">Featured<br />Films</h2>
                    </div>
                    <a href="#films" className="lnk rv d2">All Films</a>
                </div>

                {/* Hero Film */}
                <div className="film-hero rv" onClick={() => window.open("https://www.youtube.com/watch?v=0Rn0R20hn1o", "_blank")}>
                    <img
                        src="https://img.youtube.com/vi/0Rn0R20hn1o/maxresdefault.jpg"
                        alt="Shayne's R32 GTR — Feature Film"
                    />
                    <div className="fh-ov">
                        <div>
                            <span className="f-tag">{"// First Feature Film — AFTRMRKT"}</span>
                            <div className="f-title">Shayne's R32 GTR</div>
                            <div className="f-meta">
                                1992 Nissan Skyline R32 GTR
                                <span className="f-dur">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="10">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                    Watch Now
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="fh-play">
                        <PlayIcon size={22} />
                    </div>
                </div>

                {/* Film Grid */}
                <div className="film-grid" style={{ marginTop: 3 }}>
                    {[
                        { src: EVO, tag: "Short Film", title: "Cold Start", meta: "2024 · 8 Min", delay: "", yt: null },
                        { src: "https://img.youtube.com/vi/IG-4rTJkrhs/hqdefault.jpg", tag: "Documentary", title: "Import Fest — 2025", meta: "2025 · 9 Min", delay: " d1", yt: "https://www.youtube.com/watch?v=IG-4rTJkrhs&t=17s" },
                        { src: NSX, tag: "Short Film", title: "Open Headers", meta: "2023 · 11 Min", delay: " d2", yt: null },
                    ].map(({ src, tag, title, meta, delay, yt }) => (
                        <div key={title} className={`fc rv${delay}`} onClick={() => yt && window.open(yt, "_blank")} style={{ cursor: yt ? "pointer" : "default" }}>
                            <img src={src} alt={title} />
                            <div className="fc-ov">
                                <div className="fc-tag">{"// " + tag}</div>
                                <div className="fc-title">{title}</div>
                                <div className="fc-meta">{meta}</div>
                            </div>
                            <div className="fc-play"><PlayIcon size={15} /></div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="sec" id="spotlight">
                <div style={{ marginBottom: 52 }} className="rv">
                    <div className="lbl">002 — Spotlight</div>
                    <h2 className="disp">Community<br />Builds</h2>
                </div>
                <div className="sp-wrap">
                    <div className="sp-img rv">
                        <img
                            src={NSX}
                            alt="Build of the Month"
                        />
                        <div className="sp-badge">Build of the Month</div>
                    </div>
                    <div className="rv d2">
                        <div className="lbl">Member Spotlight</div>
                        <h3 className="disp" style={{ fontSize: "clamp(32px,3.8vw,56px)" }}>
                            1991 Honda<br />NSX
                        </h3>
                        <p className="bod" style={{ marginTop: 14, marginBottom: 24 }}>
                            Jaiden Z's NSX is one of the most unique builds in the scene — running a
                            twincharged setup that combines a supercharger and turbo on the C30A. A
                            mid-engine monster that sounds as wild as it looks.
                        </p>
                        <a href="#spotlight" className="lnk">Read the Full Feature</a>
                        <div className="spec-grid">
                            <div className="spx"><span className="spk">Engine</span><span className="spv">C30A Twincharged</span></div>
                            <div className="spx"><span className="spk">Setup</span><span className="spv">Turbo + Supercharged</span></div>
                            <div className="spx"><span className="spk">Layout</span><span className="spv">Mid-Engine RWD</span></div>
                            <div className="spx"><span className="spk">Owner</span><span className="spv">Jaiden Z</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GALLERY ── */}
            <section className="sec gal-bg" id="gallery">
                <div className="rv" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
                    <div>
                        <div className="lbl">003 — Media</div>
                        <h2 className="disp">Gallery</h2>
                    </div>
                    <a href="#gallery" className="lnk">View All</a>
                </div>
                <div className="gal-grid">
                    {[" ", " d1", " d2", " d1", " d2", " d3"].map((delay, i) => (
                        <div key={i} className={`gi rv${delay}`} onClick={() => openLightbox(i)} style={{ cursor: "pointer" }}>
                            <img src={GALLERY_IMAGES[i].src} alt="" />
                            <div className="gi-ov">
                                <div className="gi-x">
                                    <svg viewBox="0 0 24 24" strokeWidth="1.5">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section className="sec" id="about">
                <div className="ab-wrap">
                    <div className="rv">
                        <div className="lbl">004 — About</div>
                        <p className="ab-mani">
                            We Don't<br />
                            <span className="ar">Wait for</span><br />
                            Permission<br />
                            <span className="am">to Build</span><br />
                            Something<br />
                            <span className="ab">Real.</span>
                        </p>
                    </div>
                    <div className="rv d2">
                        <p className="bod" style={{ marginBottom: 18 }}>
                            AFTRMRKT started in parking lots — sodium lights, burnt rubber, people
                            who couldn't stop talking about cars at 2AM. We turned that energy into
                            something you could watch.
                        </p>
                        <p className="bod">
                            No brands. No gatekeepers. Just honest automotive storytelling for the
                            people who actually live it.
                        </p>
                        <div className="ab-bar"></div>
                        <p style={{ fontSize: 11, color: "rgba(253,252,250,.22)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                            Founded 2020 · Greater Toronto Area
                        </p>
                        <a href="/" className="btn-red" style={{ marginTop: 30, display: "inline-block" }}>
                            Get Involved
                        </a>
                    </div>
                </div>
            </section>

            {/* ── LIGHTBOX ── */}
            {lightbox.open && createPortal(
                <div className="lb-backdrop" onClick={closeLightbox}>
                    <button className="lb-close" onClick={closeLightbox} aria-label="Close">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                            <line x1="4" y1="4" x2="20" y2="20" />
                            <line x1="20" y1="4" x2="4" y2="20" />
                        </svg>
                    </button>
                    <button className="lb-arrow lb-arrow--prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <div className="lb-img-wrap" onClick={(e) => e.stopPropagation()}>
                        <img src={GALLERY_IMAGES[lightbox.index].src} alt="" className="lb-img" />
                    </div>
                    <button className="lb-arrow lb-arrow--next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                    <div className="lb-counter">{lightbox.index + 1} / {GALLERY_IMAGES.length}</div>
                </div>,
                document.body
            )}

            {/* ── JOIN / CTA ── */}
            <section className="cta-sec" id="join">
                <div className="cta-in">
                    <div className="lbl rv" style={{ justifyContent: "center", marginBottom: 18 }}>
                        005 — The Club
                    </div>
                    <h2 className="disp rv">You're Either<br />In or You're Not.</h2>
                    <p className="bod rv" style={{ margin: "16px auto 46px", textAlign: "center", maxWidth: 420 }}>
                        First access to new films, member drops, and everything AFTRMRKT before
                        it goes public.
                    </p>
                    <div className="email-r rv d2">
                        <input type="email" placeholder="your@email.com" />
                        <button type="button">Get Access</button>
                    </div>
                    <p className="cta-note rv d3">No spam. Members only. Unsubscribe anytime.</p>
                </div>
            </section>
        </main>
    );
}