import React from "react";

const Footer = (props) => {
  return (
    <footer class="page-footer">
      <ul class="social">
        <li>
          <i class="fab fa-facebook-square"></i>
        </li>
        <li style={{ marginLeft: "15px" }}>
          <i class="fab fa-instagram"></i>
        </li>
        <li style={{ marginLeft: "15px" }}>
          <i class="fab fa-twitter-square"></i>
        </li>
      </ul>
      <nav aria-label="Legal">
        <ul class="legal">
          <li>Terms of Use</li>
          <li style={{ marginLeft: "15px" }}>Privacy Policy</li>
          <li style={{ marginLeft: "15px" }}>Accessibility Policy</li>
        </ul>
      </nav>
      <p class="copyright">&copy; Copyright, 2021 for Kenutz.</p>
    </footer>
  );
};

export default Footer;
