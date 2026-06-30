import { useEffect } from "react";
import "../styles/About.css";

import EVO from "../img/content/EVO_1.jpg";
import BMW from "../img/content/BMW_2.jpg";
import RWB from "../img/content/RWB_1.jpg";

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

export default function About() {
    useReveal();

    return (
        <main className="about-page">
            {/* ── PAGE HERO ── */}
            <section className="abt-hero">
                <div className="abt-hero-bg" style={{ backgroundImage: `url(${RWB})` }} />
                <div className="abt-hero-ov" />
                <div className="abt-hero-c">
                    <div className="lbl">004 — About</div>
                    <h1 className="abt-hero-title">
                        We Don't<br />
                        <span className="abt-red">Wait for</span><br />
                        Permission<br />
                        to Build<br />
                        Something<br />
                        <span className="abt-blue">Real.</span>
                    </h1>
                </div>
            </section>

            {/* ── ORIGIN STORY ── */}
            <section className="sec abt-origin">
                <div className="abt-origin-grid">
                    <div className="rv">
                        <div className="lbl">Our Story</div>
                        <h2 className="disp">Born in<br />Parking Lots.</h2>
                    </div>
                    <div className="rv d2 abt-origin-body">
                        <p className="bod" style={{ marginBottom: 18 }}>
                            AFTRMRKT started in parking lots — sodium lights, burnt rubber, people
                            who couldn't stop talking about cars at 2AM. We turned that energy into
                            something you could watch.
                        </p>
                        <p className="bod" style={{ marginBottom: 18 }}>
                            No brands. No gatekeepers. No permission. Just honest automotive storytelling
                            for the people who actually live it — every weekend, after hours, in the
                            places most people drive past.
                        </p>
                        <p className="bod">
                            We're based in the Greater Toronto Area but the culture we document
                            isn't local. It's a feeling. And it doesn't stop.
                        </p>
                        <div className="ab-bar"></div>
                        <p className="abt-founded">Founded 2020 · Greater Toronto Area</p>
                    </div>
                </div>

                {/* Images */}
                <div className="abt-img-row rv">
                    <div className="abt-img-l">
                        <img src={EVO} alt="AFTRMRKT Scene" />
                    </div>
                    <div className="abt-img-r">
                        <img src={BMW} alt="AFTRMRKT Film Shoot" />
                        <div className="abt-img-badge">Est. 2020 — GTA</div>
                    </div>
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="sec abt-values-sec">
                <div className="rv" style={{ marginBottom: 64 }}>
                    <div className="lbl">What We Stand For</div>
                    <h2 className="disp">The Code</h2>
                </div>
                <div className="abt-values">
                    {[
                        { num: "01", title: "Community First", body: "The people who show up matter more than any sponsor. We build for the community, not the algorithm." },
                        { num: "02", title: "No Gatekeeping", body: "Stock or modded, daily or racecar — if you love cars, you belong. The scene has room for everyone." },
                        { num: "03", title: "Authentic Storytelling", body: "We don't manufacture moments. We find them, film them honestly, and share them without filter." },
                        { num: "04", title: "Culture Over Clout", body: "Chasing views is easy. Building something real takes longer. We'll take the slow path every time." },
                    ].map(({ num, title, body }, i) => (
                        <div key={num} className={`abt-val rv${i % 2 === 1 ? " d1" : i % 2 === 2 ? " d2" : ""}`}>
                            <div className="abt-val-num">{num}</div>
                            <h3 className="abt-val-title">{title}</h3>
                            <p className="abt-val-body">{body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── JOIN CTA ── */}
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
