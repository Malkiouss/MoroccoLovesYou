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
        <img src="/assets/kosherbanner.jpeg" alt="Kosher Morocco" className="kosher-image" />
      </Link>
    </div>
  );
};

export default KosherMiniBanner;
