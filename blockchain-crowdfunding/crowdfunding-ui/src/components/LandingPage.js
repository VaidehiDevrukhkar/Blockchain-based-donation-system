import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Transparent Fundraising on the Blockchain</h1>
        <p>Support causes you care about with the security and transparency of blockchain technology</p>
        <div className="hero-buttons">
          <Link to="/donate" className="primary-button">Browse Campaigns</Link>
          <Link to="/ngo-dashboard" className="secondary-button">NGO Portal</Link>
        </div>
      </div>

      <div className="features-section">
        <div className="feature">
          <h3>100% Transparent</h3>
          <p>Track every donation on the blockchain</p>
        </div>
        <div className="feature">
          <h3>Secure</h3>
          <p>Cryptographically secured transactions</p>
        </div>
        <div className="feature">
          <h3>Direct Impact</h3>
          <p>Funds go directly to verified NGOs</p>
        </div>
      </div>

      <div className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>NGOs create campaigns with fundraising goals</li>
          <li>Donors contribute using cryptocurrency</li>
          <li>Smart contracts ensure transparent fund distribution</li>
          <li>Track progress and impact in real-time</li>
        </ol>
      </div>

    </div>
  );
}

export default LandingPage;
