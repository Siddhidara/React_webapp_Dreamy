import React from "react";
import "./Features.css";

export default function Features() {
  return (
    <div className="features-container">
      <h1 className="features-heading">Dreamy's Features</h1>

      <p className="features-description">
        Dreamy turns your imagination into visual stories using animated GIFs
        powered by GIPHY. Here's what makes Dreamy magical:
      </p>

      <div className="feature-cards">
        <div className="feature-card">
          <h2>Imagination to Visuals</h2>
          <p>
            Just type your dream or story, and Dreamy will bring it to life with
            expressive GIFs.
          </p>
        </div>

        <div className="feature-card">
          <h2>Fast & Real-Time</h2>
          <p>
            Instant GIF results based on your description, fetched live via the
            GIPHY API.
          </p>
        </div>

        <div className="feature-card">
          <h2>Creative Interface</h2>
          <p>A minimal and fun UI that inspires creativity with every click.</p>
        </div>


        <div className="feature-card">
          <h2>Responsive Design</h2>
          <p>Works beautifully on mobile, tablet, and desktop screens.</p>
        </div>
      </div>
    </div>
  );
}
