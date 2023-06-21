import React from "react";
import "./footer.css";
import { BsFillBalloonHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <p>
        Prince Sharma | Made with
        <BsFillBalloonHeartFill className="footer-heart" />
      </p>
    </footer>
  );
};

export default Footer;
