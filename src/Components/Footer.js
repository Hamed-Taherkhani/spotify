import React from "react";
import "./css/Footer.css";
import { INSTAGRAM, GITHUB, LINKEDIN } from "../Media/media";

function Footer() {
  const links = [
    {
      title: "Company",
      links: [
        {
          link: "#",
          linkText: "Impression",
        },
        {
          link: "#",
          linkText: "About",
        },
        {
          link: "#",
          linkText: "Jobs",
        },
        {
          link: "#",
          linkText: "For the Record",
        },
      ],
    },
    {
      title: "Communities",
      links: [
        {
          link: "#",
          linkText: "For Artists",
        },
        {
          link: "#",
          linkText: "Developers",
        },
        {
          link: "#",
          linkText: "Advertising",
        },
        {
          link: "#",
          linkText: "Investors",
        },
        {
          link: "#",
          linkText: "Vendors",
        },
      ],
    },
    {
      title: "Useful links",
      links: [
        {
          link: "#",
          linkText: "Support",
        },
        {
          link: "#",
          linkText: "Free Mobile App",
        },
        {
          link: "#",
          linkText: "Verträge hier kündigen",
        },
      ],
    },
  ];

  return (
    <footer className="root-footer">
      <ul className="footer-links-category-list">
        {footerLinksCategory(links)}
      </ul>

      <div className="social-media">{socialMedia()}</div>

      <div className="fast-access-links">{fastAccessLinks()}</div>

      <p className="copy-right">© 2022 Spotify AB</p>
    </footer>
  );
}

function footerLinksCategory(links) {
  return (
    <>
      {links.map((item, index) => (
        <li className="links-category" key={index}>
          <p className="category-title">{item.title}</p>

          <ul className="links-list">
            {item.links.map((item, index) => (
              <li className="link" key={index}>
                <a href={item.link}>{item.linkText}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
}

function socialMedia() {
  return (
    <ul className="social-media-list">
      <li className="social-media">
        <a>{INSTAGRAM}</a>
      </li>

      <li className="social-media">
        <a>{LINKEDIN}</a>
      </li>

      <li className="social-media">
        <a>{GITHUB}</a>
      </li>
    </ul>
  );
}

function fastAccessLinks() {
  return (
    <ul className="links">
      {[
        "Legal",
        "Privacy Center",
        "Privacy Policy",
        "Cookie Settings",
        "About Ads",
      ].map((item, index) => (
        <li className="link" key={index}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default Footer;
