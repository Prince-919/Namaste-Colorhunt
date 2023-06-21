import React, { useRef, useState } from "react";
import "./palettecolor.css";

const PaletteColor = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { color, name, convertColor } = props;
  const colorTimeoutRef = useRef(null);

  const updateFullScreenColorVisiblity = () => {
    setIsVisible((prev) => !prev);
    navigator.clipboard.writeText(color);
    colorTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      clearTimeout(colorTimeoutRef.current);
    }, 1500);
  };
  return (
    <>
      <div
        className="palette-color-container"
        style={{ backgroundColor: color }}
        onClick={updateFullScreenColorVisiblity}>
        <span className="palette-copy-btn">Copy</span>
        <span className="palette-color-name"> {name}</span>
      </div>

      {isVisible && (
        <div
          className="palette-color-fullscreen"
          style={{ backgroundColor: color }}>
          <h2 className="fullscreen-title">Copied</h2>
          <p> {convertColor(color)}</p>
        </div>
      )}
    </>
  );
};

export default PaletteColor;
