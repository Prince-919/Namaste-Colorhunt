import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./layout.css";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="siteWrapper">
      <Header />

      <div className="page-container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
