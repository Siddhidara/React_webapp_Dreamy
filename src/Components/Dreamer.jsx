import React, { useEffect, useState } from "react";
import "./Dreamer.css";

function Dreamer({ description }) {
  const [gifs, setGifs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const API_KEY = "JZf4yA7HbLW9NGpZbwxWhjdvabIEWLl8";

  const extractKeyword = (description) => {
    const lower = description.toLowerCase();
    if (lower.includes("love")) return "love";
    if (lower.includes("rain")) return "rain";
    if (lower.includes("space")) return "space";
    return description.split(" ")[0];
  };

  const fetchGifs = async (keyword) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=8&rating=pg`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setGifs(data.data);
      setCurrentIndex(0);
    } catch (err) {
      console.error("Error fetching gifs:", err);
    }
  };

  useEffect(() => {
    const keyword = extractKeyword(description);
    fetchGifs(keyword);
  }, [description]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gifs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + gifs.length) % gifs.length);
  };

  return (
    <div className="dreamer-container">
      <h2 className="dreamer-title">Your Dream: {description}</h2>

      {gifs.length > 0 ? (
        <div className="gif-section">
          <img
            src={gifs[currentIndex].images.fixed_height.url}
            alt="GIF"
            className="gif-image"
          />

          <div className="gif-controls">
            <button onClick={handlePrev} className="gif-button">
              ⬅️ Prev
            </button>
            <button onClick={handleNext} className="gif-button">
              Next ➡️
            </button>
          </div>
          <p className="gif-count">
            {currentIndex + 1} / {gifs.length}
          </p>

          {}
          <div className="giphy-credit">
            <a
              href="https://giphy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://giphy.com/static/img/giphy_logo_square_social.png"
                alt="Powered by GIPHY"
                className="giphy-logo"
              />
            </a>
            <p>Powered by GIPHY</p>
          </div>
        </div>
      ) : (
        <p className="loading-text">Loading GIFs...</p>
      )}
    </div>
  );
}

export default Dreamer;
