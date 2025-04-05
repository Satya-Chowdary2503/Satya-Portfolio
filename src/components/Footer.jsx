import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="footer text-center">
        <div className="footer-overlay">
          <p className="footer-text">
            &lt;/&gt; with love by{" "}
            <a
              href="https://github.com/Satya-Chowdary2503/Satya-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Satya Sunkara
            </a>
          </p>

          <div className="visitor-counter">
            <div
              className="elfsight-app-41b0f327-2f55-4561-b7b7-62d9317e61af"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx="true">{`
        .footer {
          position: relative;
          background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1500&q=80');
          background-size: cover;
          background-position: center;
          padding: 3rem 0;
          color: white;
        }

        .footer-overlay {
          background-color: rgba(0, 0, 0, 0.6);
          padding: 2rem;
        }

        .footer-text {
          font-size: 1.3rem;
          font-weight: 600;
          color: #fff;
          text-shadow: 1px 1px 2px #000;
        }

        .footer-text a {
          color: #66ccff;
          text-decoration: none;
        }

        .footer-text a:hover {
          text-decoration: underline;
        }

        .visitor-counter {
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .footer-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
