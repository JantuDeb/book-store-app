import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>Jantu Deb</p>
      <ul className="footer-list">
        <li>
          <a
            className="links"
            rel="noreferrer"
            href="https://github.com/JantuDeb"
            target="_blank"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            className="links"
            rel="noreferrer"
            href="https://twitter.com/Jantu__Deb"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className="links"
            rel="noreferrer"
            href="https://in.linkedin.com/in/jantu-deb-406760200"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
