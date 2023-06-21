import React, { useState } from "react";
import "./colorformatpicker.css";
import { IoMdArrowDropdown } from "react-icons/io";
const ColorFormatPicker = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { updateFormat, text } = props;

  const showPicker = () => {
    setIsVisible((prev) => !prev);
  };
  const hidePicker = () => {
    setIsVisible(false);
  };
  const selectColor = (e, color) => {
    e.stopPropagation();
    updateFormat(color);
    hidePicker();
  };
  return (
    <div className="color-format-picker-cant">
      <span className="color-format-text" onClick={showPicker}>
        Color Format : {text}
        <IoMdArrowDropdown className="padding-left-4" />
      </span>
      {isVisible && (
        <div className="color-format-container" onClick={hidePicker}>
          <div className="color-format-picker-box">
            <button onClick={(e) => selectColor(e, "hex")}>
              HEX (#FFFFFF)
            </button>
            <button onClick={(e) => selectColor(e, "rgb")}>
              RGB (255,255,25)
            </button>
            <button onClick={(e) => selectColor(e, "rgba")}>
              RGBA (255,255,255,1.0)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorFormatPicker;
