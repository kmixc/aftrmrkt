import { useEffect } from "react";
import "../styles/Spotlight.css";

import NSX from "../img/content/Jaiden-NSX.jpg";
import EVO from "../img/content/EVO_1.jpg";
import EVO2 from "../img/content/EVO_2.jpg";
import EVO3 from "../img/content/EVO_3.jpg";
import RWB from "../img/content/RWB_1.jpg";
import RWB2 from "../img/content/Porsche_RWB_Elrod.jpg";
import BMW from "../img/content/BMW_1.jpg";
import BMW4 from "../img/content/BMW_4.jpg";
import kranky from "../img/content/kranky_1.jpg";

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

const SPOTLIGHTS = [
    {
        img: EVO,
        tag: "Member Build",
        title: "2003 Mitsubishi Evo VIII",
        owner: "Jaiden R.",
        specs: [
            { k: "Engine", v: "4G63T" },
            { k: "Power", v: "480 WHP" },
            { k: "Boost", v: "28 PSI" },
            { k: "Weight", v: "1,310 KG" },
        ],
        desc: "Built over four winters. Every component touched. This Evo is Jaiden's everyday weapon and his weekend track toy — and it shows.",
    },
    {
        img: RWB,
        tag: "Build of the Month",
        title: "2001 Porsche 996 RWB",
        owner: "Marcus T.",
        specs: [
            { k: "Engine", v: "M96.01" },
            { k: "Power", v: "320 WHP" },
            { k: "Body", v: "RWB Wide" },
            { k: "Finish", v: "Matte Black" },
        ],
        desc: "Custom widebody RWB conversion done by hand. One of three Porsches in the GTA running this treatment. Unmistakable on track or street.",
    },
    {
        img: BMW,
        tag: "Feature",
        title: "1992 BMW E36 M3",
        owner: "Chris V.",
        specs: [
            { k: "Engine", v: "S50B32" },
            { k: "Power", v: "290 WHP" },
            { k: "Coilovers", v: "KW V3" },
            { k: "Trans", v: "Getrag 6-Spd" },
        ],
        desc: "A clean euro-spec E36 with minimal mods and maximum feel. Chris has been building this car since he was 16. The result speaks for itself.",
    },
];

const GRID_CARS = [
    { img: EVO2, label: "Evo IX — Rally Build" },
    { img: RWB2, label: "Porsche 964 RWB" },
    { img: BMW4, label: "E46 M3 — Track Only" },
    { img: kranky, label: "Civic EG — Drag Spec" },
    { img: EVO3, label: "Evo X — Time Attack" },
    { img: NSX, label: "NSX — NA2 Build" },
];

export default function Spotlight() {
    useReveal();

    return (
        <main className="spotlight-page">
            {/* ── PAGE HERO ── */}
            <section className="pg-hero sp-pg-hero">
                <div className="pg-hero-bg" style={{ backgroundImage: `url(${NSX})` }} />
                <div className="pg-hero-ov" />
                <div className="pg-hero-c">
                    <div className="lbl">002 — Spotlight</div>
                    <h1 className="pg-hero-title">
                        Community<br />
                        <span className="pg-red">Builds</span>
                    </h1>
                    <p className="pg-hero-sub">
                        The cars that define the scene. Member builds featured by
                        the community, for the community.
                    </p>
                </div>
            </section>

            {/* ── FEATURED FILM ── */}
            <section className="sec sp-film-sec">
                <div className="sp-film-hd rv">
                    <div>
                        <div className="lbl">Feature Film</div>
                        <h2 className="disp">First Feature<br />Film</h2>
                    </div>
                    <a
                        href="https://www.youtube.com/watch?v=0Rn0R20hn1o"
                        target="_blank"
                        rel="noreferrer"
                        className="lnk rv d2"
                    >
                        Watch on YouTube
                    </a>
                </div>

                <div
                    className="sp-film-hero rv"
                    onClick={() => window.open("https://www.youtube.com/watch?v=0Rn0R20hn1o", "_blank")}
                >
                    <img
                        src="https://img.youtube.com/vi/0Rn0R20hn1o/maxresdefault.jpg"
                        alt="Shayne's 1992 Nissan Skyline R32 GTR — Feature Film"
                    />
                    <div className="sp-film-ov">
                        <div>
                            <span className="f-tag">{"// Feature Film — AFTRMRKT"}</span>
                            <div className="sp-film-title">Shayne's R32 GTR</div>
                            <div className="sp-film-meta">
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
                    <div className="sp-film-play">
                        <svg viewBox="0 0 24 24" width="22" height="22" style={{ fill: "var(--lotion)", marginLeft: 4 }}>
                            <path d="M5 3l14 9-14 9V3z" />
                        </svg>
                    </div>
                </div>

                <p className="sp-film-caption rv d2">
                    We hope you enjoy our first feature film — a full look at Shayne's 1992 Nissan Skyline R32 GTR.
                    Filmed and produced by AFTRMRKT.
                </p>
            </section>

            {/* ── FEATURED BUILD ── */}
            <section className="sec sp-featured">
                <div className="lbl rv">Featured Build — April 2026</div>
                <div className="sp-wrap rv">
                    <div className="sp-img">
                        <img src={NSX} alt="Build of the Month" />
                        <div className="sp-badge">Build of the Month</div>
                    </div>
                    <div className="sp-feat-body rv d2">
                        <h3 className="disp" style={{ fontSize: "clamp(32px,3.8vw,56px)" }}>
                            2003 Nissan<br />Skyline R34
                        </h3>
                        <p className="bod" style={{ marginTop: 14, marginBottom: 24 }}>
                            Marcus K's R34 has been a decade in the making. Running a built RB26 on
                            E85 making north of 600 wheel horsepower — this isn't a show car. It was
                            built to move. Spotted at our last film shoot and impossible to ignore.
                        </p>
                        <a href="/" className="lnk">Read the Full Feature</a>
                        <div className="spec-grid">
                            <div className="spx"><span className="spk">Engine</span><span className="spv">RB26DETT</span></div>
                            <div className="spx"><span className="spk">Power</span><span className="spv">630 WHP</span></div>
                            <div className="spx"><span className="spk">Fuel</span><span className="spv">E85</span></div>
                            <div className="spx"><span className="spk">Weight</span><span className="spv">1,280 KG</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SPOTLIGHT CARDS ── */}
            <section className="sec sp-cards-sec" style={{ background: "var(--dark)" }}>
                <div className="rv" style={{ marginBottom: 52 }}>
                    <div className="lbl">Member Spotlights</div>
                    <h2 className="disp">Recent<br />Features</h2>
                </div>
                <div className="sp-cards">
                    {SPOTLIGHTS.map(({ img, tag, title, owner, specs, desc }, i) => (
                        <div key={title} className={`sp-card rv${i === 1 ? " d1" : i === 2 ? " d2" : ""}`}>
                            <div className="sp-card-img">
                                <img src={img} alt={title} />
                                <div className="sp-card-tag">{tag}</div>
                            </div>
                            <div className="sp-card-body">
                                <div className="sp-card-owner">{owner}</div>
                                <h3 className="sp-card-title">{title}</h3>
                                <p className="sp-card-desc">{desc}</p>
                                <div className="sp-card-specs">
                                    {specs.map(({ k, v }) => (
                                        <div key={k} className="sp-card-spec">
                                            <span className="spk">{k}</span>
                                            <span className="sp-card-spv">{v}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href="/" className="lnk" style={{ marginTop: 22, display: "inline-flex" }}>Full Feature</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── GRID ── */}
            <section className="sec">
                <div className="rv" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
                    <div>
                        <div className="lbl">Archive</div>
                        <h2 className="disp">All Builds</h2>
                    </div>
                    <a href="/" className="lnk">Submit Your Build</a>
                </div>
                <div className="sp-grid">
                    {GRID_CARS.map(({ img, label }, i) => (
                        <div key={label} className={`sp-gi rv${i % 3 === 1 ? " d1" : i % 3 === 2 ? " d2" : ""}`}>
                            <img src={img} alt={label} />
                            <div className="sp-gi-ov">
                                <span className="sp-gi-label">{label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SUBMIT CTA ── */}
            <section className="sp-submit-cta rv">
                <div className="sp-submit-in">
                    <div className="lbl" style={{ justifyContent: "center", marginBottom: 18 }}>003 — Submit</div>
                    <h2 className="disp">Your Build<br />Deserves to be Seen.</h2>
                    <p className="bod" style={{ margin: "16px auto 40px", textAlign: "center", maxWidth: 400 }}>
                        Send us your build info and photos. If it fits the culture,
                        we'll reach out for a full feature.
                    </p>
                    <a href="mailto:spotlight@aftrmrkt.club" className="btn-red">Submit Your Build</a>
                </div>
            </section>
        </main>
    );
}
