import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Dreamy</h1>

      <p className="about-paragraph">
        <strong>Dreamy</strong> is an imaginative web application that
        transforms your thoughts, dreams, and creative descriptions into vibrant
        visuals using animated GIFs. Powered by cutting-edge APIs, Dreamy helps
        bring your imagination to life in seconds.
      </p>

      <h2 className="about-subheading">How It Works</h2>
      <p className="about-paragraph">
        Simply enter your imagination in the text box, and Dreamy fetches
        relevant GIFs using the <strong>GIPHY API</strong>. These animations
        visually reflect the mood, action, or concept you've described.
      </p>

      <h2 className="about-subheading">Credits & API Usage</h2>
      <p className="about-paragraph">
        This app uses the <strong>GIPHY API</strong> to fetch animated GIFs. All
        media is directly sourced from GIPHY servers, in compliance with their
        API terms of service.
      </p>
      <ul className="about-list">
        <li>All GIFs are displayed using official GIPHY media URLs.</li>
        <li>Dreamy does not cache or host any GIPHY content.</li>
        <li>Attribution to GIPHY is provided as required.</li>
      </ul>

      <div className="about-logo-section">
        <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://giphy.com/static/img/giphy_logo_square_social.png"
            alt="Powered by GIPHY"
            className="giphy-logo"
          />
        </a>
        <p className="powered-text">Powered by GIPHY</p>
      </div>

      <h2 className="about-subheading">Developer Note</h2>
      <p className="about-paragraph">
        Dreamy is a personal project created to showcase creativity, frontend
        skills, and API integration using React.js. For any feedback or
        contributions, feel free to reach out!
      </p>
    </div>
  );
}
