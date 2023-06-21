import React from "react";
import "./paletteheader.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import ColorFormatPicker from "../ColorFormatPicker/ColorFormatPicker";

const PaletteHeader = (props) => {
  const { updateFormat, text } = props;
  return (
    <div className="header-container">
      <div className="header-left">
        <Link to="/" className="header-back-btn">
          <BiArrowBack className="padding-right-2" />
          Back
        </Link>
      </div>
      <div className="header-center">
        <ColorFormatPicker updateFormat={updateFormat} text={text} />
      </div>
      <div className="header-right"></div>
    </div>
  );
};

export default PaletteHeader;
