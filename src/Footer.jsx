import React from "react";
import ReactDOM from "react-dom";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="footer">
      <p>copyright {year}</p>
    </footer>
  );
}

export default Footer;
