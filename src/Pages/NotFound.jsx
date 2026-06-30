import { Link } from "react-router-dom";
import Video from "../img/WebsiteCover.mov";
import EVO from "../img/content/EVO_1.jpg";

export default function NotFound() {
    return (
        <main>
            <section className="hero" style={{ justifyContent: "center" }}>
                <div className="hero-vw">
                    <video autoPlay muted loop playsInline poster={EVO}>
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
                <div className="hero-ov"></div>

                <div
                    className="hero-c"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        margin: "0 auto",
                        padding: "0 24px",
                    }}
                >
                    <div className="h-eye" style={{ marginBottom: 14 }}>
                        <div className="h-eye-line"></div>
                        <span>404 — Page Not Found</span>
                    </div>
                    <h1 className="h-title" style={{ fontSize: "clamp(48px,7vw,104px)", lineHeight: 0.92, marginBottom: 18 }}>
                        Wrong <span className="ol">Turn.</span><br />
                        <span className="rd">Dead End.</span>
                    </h1>
                    <p className="h-body" style={{ marginBottom: 28, marginLeft: "auto", marginRight: "auto" }}>
                        This page doesn't exist — but the scene does. Head back and find what you're looking for.
                    </p>
                    <div className="h-btns" style={{ justifyContent: "center" }}>
                        <Link to="/" className="btn-red">Back to Home</Link>
                        <Link to="/films" className="btn-ol">Watch Films</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
