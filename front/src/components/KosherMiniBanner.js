import React from "react";
import { Link } from "react-router-dom";
import "./KosherMiniBanner.css";

const KosherMiniBanner = () => {
  return (
    <div className="kosher-mini-float">
      {/* ── Simplified Kosher Link ── */}
      <Link
        to="/jewish-heritage"
        className="kosher-simple-banner"
        aria-label="Kosher Travel Morocco"
      >
        <div className="kosher-content">
          <span className="david-star">✡</span>
          <span className="kosher-text">KOSHER</span>
        </div>
      </Link>
    </div>
  );
};

export default KosherMiniBanner;
