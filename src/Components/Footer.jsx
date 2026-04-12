import React from 'react'

import logo from "../img/AFTRMRKT-white.png";

export default function Footer() {
  return (
    <footer>
      <div className="ft-grid">
        <div className="ft-brand">
          <img src={logo} alt="AFTRMRKT" />
          <p>
            Automotive culture, original films, and community for those who live it
            after hours. GTA-based. Culture-first.
          </p>
          <div className="ft-soc">
            <a href="/" className="fs">IG</a>
            <a href="/" className="fs">TT</a>
            <a href="/" className="fs">YT</a>
            <a href="/" className="fs">Discord</a>
          </div>
        </div>

        <div className="ft-col">
          <h5>Content</h5>
          <ul>
            <li><a href="/">Films</a></li>
            <li><a href="/">Short Films</a></li>
            <li><a href="/">Documentaries</a></li>
            <li><a href="/">Gallery</a></li>
          </ul>
        </div>

        <div className="ft-col">
          <h5>Community</h5>
          <ul>
            <li><a href="/">Car Spotlights</a></li>
            <li><a href="/">Member Builds</a></li>
            <li><a href="/">Submit Your Build</a></li>
            <li><a href="/">Forum</a></li>
          </ul>
        </div>

        <div className="ft-col">
          <h5>Club</h5>
          <ul>
            <li><a href="/">Join AFTRMRKT</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Partnerships</a></li>
          </ul>
        </div>
      </div>

      <div className="ft-bot">
        <p>© 2025 <a href="/">AFTRMRKT</a> — aftrmrkt.club</p>
        <p>The Scene Never Stops.</p>
        <p>
          <a href="/" style={{ color: "rgba(253,252,250,.16)" }}>Privacy</a>
          &nbsp;·&nbsp;
          <a href="/" style={{ color: "rgba(253,252,250,.16)" }}>Terms</a>
        </p>
      </div>
    </footer>
  )
}
