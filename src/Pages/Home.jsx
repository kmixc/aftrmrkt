import { useEffect } from "react";

import Video from "../img/WebsiteCover.mov";

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

/* ─── Animated counter hook ─── */
function useCounters() {
    useEffect(() => {
        const co = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (!e.isIntersecting) return;
                    const el = e.target;
                    const n = +el.dataset.n;
                    const t0 = performance.now();
                    const dur = 1600;
                    (function step(now) {
                        const p = Math.min((now - t0) / dur, 1);
                        const ease = 1 - Math.pow(1 - p, 3);
                        el.textContent = Math.round(ease * n).toLocaleString();
                        if (p < 1) requestAnimationFrame(step);
                    })(t0);
                    co.unobserve(el);
                }),
            { threshold: 0.5 }
        );
        document.querySelectorAll(".sn").forEach((el) => co.observe(el));
        return () => co.disconnect();
    }, []);
}

export default function Home() {
    useReveal();
    useCounters();

    return (
        <main>
            {/* ── HERO ── */}
            <section className="hero">
                <div
                    className="hero-vw"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <video autoPlay muted loop playsInline
                        poster="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=80">
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
                        <a href="/" className="btn-red">Watch Films</a>
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
                    <a href="/" className="lnk rv d2">All Films</a>
                </div>

                {/* Hero Film */}
                <div className="film-hero rv">
                    <img
                        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80"
                        alt="Afterburn — Season 3"
                    />
                    <div className="fh-ov">
                        <div>
                            <span className="f-tag">// Featured Film — 2024</span>
                            <div className="f-title">Afterburn — Season 3</div>
                            <div className="f-meta">
                                Documentary
                                <span className="f-dur">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="10">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                    24 MIN
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
                        { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=700&q=80", tag: "Short Film", title: "Cold Start", meta: "2024 · 8 Min", delay: "" },
                        { src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=700&q=80", tag: "Documentary", title: "Night Frequency", meta: "2023 · 18 Min", delay: " d1" },
                        { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=700&q=80", tag: "Short Film", title: "Open Headers", meta: "2023 · 11 Min", delay: " d2" },
                    ].map(({ src, tag, title, meta, delay }) => (
                        <div key={title} className={`fc rv${delay}`}>
                            <img src={src} alt={title} />
                            <div className="fc-ov">
                                <div className="fc-tag">// {tag}</div>
                                <div className="fc-title">{title}</div>
                                <div className="fc-meta">{meta}</div>
                            </div>
                            <div className="fc-play"><PlayIcon size={15} /></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── STATS ── */}
            <div className="stats">
                {[
                    { n: 2400, label: "Members", delay: "" },
                    { n: 18, label: "Films Produced", delay: " d1" },
                    { n: 5, label: "Seasons", delay: " d2" },
                    { n: 12, label: "Cities Featured", delay: " d3" },
                ].map(({ n, label, delay }) => (
                    <div key={label} className={`sc rv${delay}`}>
                        <span className="sn" data-n={n}>0</span>
                        <span className="sl">{label}</span>
                    </div>
                ))}
            </div>

            <section className="sec" id="spotlight">
                <div style={{ marginBottom: 52 }} className="rv">
                    <div className="lbl">002 — Spotlight</div>
                    <h2 className="disp">Community<br />Builds</h2>
                </div>
                <div className="sp-wrap">
                    <div className="sp-img rv">
                        <img
                            src="https://images.unsplash.com/photo-1596638787647-904d822d751e?w=900&q=80"
                            alt="Build of the Month"
                        />
                        <div className="sp-badge">Build of the Month</div>
                    </div>
                    <div className="rv d2">
                        <div className="lbl">Member Spotlight</div>
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

            {/* ── GALLERY ── */}
            <section className="sec gal-bg" id="gallery">
                <div className="rv" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
                    <div>
                        <div className="lbl">003 — Media</div>
                        <h2 className="disp">Gallery</h2>
                    </div>
                    <a href="/" className="lnk">View All</a>
                </div>
                <div className="gal-grid">
                    {[
                        { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=80", delay: "" },
                        { src: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80", delay: " d1" },
                        { src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80", delay: " d2" },
                        { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80", delay: " d1" },
                        { src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80", delay: " d2" },
                        { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80", delay: " d3" },
                    ].map(({ src, delay }, i) => (
                        <div key={i} className={`gi rv${delay}`}>
                            <img src={src} alt="" />
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