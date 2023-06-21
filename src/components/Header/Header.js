import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const nav = [
  {
    title: "Contact Us",
    href: "/contact",
    isExternal: false,
  },
  {
    title: "Subscribe",
    href: "https://princesharma01.netlify.app/",
    isExternal: true,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/prin_.01/",
    isExternal: true,
  },
];

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <h1 className="">
          <Link to="/" className="title">
            Color Palette
          </Link>
        </h1>
      </div>
      <div className="right-side">
        <nav>
          <ul>
            {nav.map((item) => (
              <li key={item.title}>
                {item.isExternal ? (
                  <a href={item.href}>{item.title}</a>
                ) : (
                  <Link to={item.href}>{item.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
