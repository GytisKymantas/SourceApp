import React from "react";

import "./footer.scss";

export const Footer = () => (
  <footer className="footer">
    <span className="footer__text">
      Copyright © {new Date().getFullYear()} Devbridge
    </span>
  </footer>
);
