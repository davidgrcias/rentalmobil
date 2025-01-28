import React, { useEffect } from "react";

// Simple component to load the embed code
function EmbedGoogleReviews() {
  useEffect(() => {
    // Avoid loading the script more than once
    if (!document.getElementById("EmbedSocialHashtagScript")) {
      const script = document.createElement("script");
      script.id = "EmbedSocialHashtagScript";
      script.src = "https://embedsocial.com/cdn/ht.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="embedsocial-wrapper"
      style={{ marginTop: "0rem", paddingTop: "0rem", marginBottom: "2rem" }}
    >
      <div
        className="embedsocial-hashtag"
        data-ref="6ca84cc357985caf8d511ff99c55cd58672f8af1"
      >
        <a
          className="feed-powered-by-es feed-powered-by-es-slider-img es-widget-branding"
          href="https://embedsocial.com/blog/embed-google-reviews/"
          target="_blank"
          rel="noopener noreferrer"
          title="Embed Google reviews"
        >
          <img
            src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
            alt="EmbedSocial"
          />
          <div className="es-widget-branding-text">Embed Google reviews</div>
        </a>
      </div>
    </div>
  );
}

export default EmbedGoogleReviews;
