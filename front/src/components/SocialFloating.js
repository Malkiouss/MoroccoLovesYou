import "./SocialFloating.css";

export default function SocialFloating() {
  return (
    <div className="social-floating">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="social-btn facebook"
      >
        f
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="social-btn instagram"
      >
        ◎
      </a>
    </div>
  );
}