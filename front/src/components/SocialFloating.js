import "./SocialFloating.css";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Outer rounded square */}
    <rect
      x="2.5"
      y="2.5"
      width="19"
      height="19"
      rx="5.5"
      stroke="white"
      strokeWidth="1.8"
      fill="none"
    />
    {/* Inner circle */}
    <circle
      cx="12"
      cy="12"
      r="4.2"
      stroke="white"
      strokeWidth="1.8"
      fill="none"
    />
    {/* Dot */}
    <circle cx="17.3" cy="6.7" r="1.1" fill="white" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="white"
  >
    {/* Accurate Facebook "f" path */}
    <path d="M13.5 8.5H16L15.5 11H13.5V20H10.5V11H9V8.5H10.5V7C10.5 5.07 11.57 4 13.5 4H16V6.5H14.25C13.83 6.5 13.5 6.67 13.5 7.25V8.5Z" />
  </svg>
);

export default function SocialFloating() {
  return (
    <div className="social-floating">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="social-btn instagram"
        aria-label="Follow us on Instagram"
      >
        <span className="social-label">Instagram</span>
        <span className="social-icon">
          <InstagramIcon />
        </span>
      </a>

      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="social-btn facebook"
        aria-label="Follow us on Facebook"
      >
        <span className="social-label">Facebook</span>
        <span className="social-icon">
          <FacebookIcon />
        </span>
      </a>
    </div>
  );
}