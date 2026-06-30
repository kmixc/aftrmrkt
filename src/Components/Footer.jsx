import React from 'react'
import { Link } from 'react-router-dom';

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
            <a href="https://www.instagram.com/aftrmrkt.co/" className="fs" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://www.tiktok.com/@aftrmrkt.co" className="fs" target="_blank" rel="noopener noreferrer">TT</a>
            <a href="https://www.youtube.com/@AFTRMRKTCLUB" className="fs" target="_blank" rel="noopener noreferrer">YT</a>
            <a href="/" className="fs">Discord</a>
          </div>
        </div>

        <div className="ft-col">
          <h5>Content</h5>
          <ul>
            <li><Link to="/films">Films</Link></li>
            <li><Link to="/films">Short Films</Link></li>
            <li><Link to="/films">Documentaries</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div className="ft-col">
          <h5>Community</h5>
          <ul>
            <li><Link to="/spotlight">Car Spotlights</Link></li>
            <li><Link to="/spotlight">Member Builds</Link></li>
            <li><Link to="/spotlight">Submit Your Build</Link></li>
            <li><a href="/">Forum</a></li>
          </ul>
        </div>

        <div className="ft-col">
          <h5>Club</h5>
          <ul>
            <li><a href="/">Join AFTRMRKT</a></li>
            <li><Link to="/about">About</Link></li>
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
