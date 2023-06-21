import React from "react";
import "./card.css";
const Card = (props) => {
  const {
    colors = [],
    paletteName = "",
    paletteCode = "",
    onClick,
    url,
  } = props;

  const generateUrl = () => {
    if (url) {
      return url.toLowerCase();
    } else {
      return paletteCode.toLowerCase();
    }
  };
  return (
    <div className="card" onClick={() => onClick(generateUrl())}>
      <div className="card-colors">
        {colors.map((item, index) => (
          <div
            className="card-color"
            style={{ backgroundColor: item.hex }}
            key={item.hex + index}></div>
        ))}
      </div>
      <div className="card-title-container">
        <span className="card-title">{paletteName}</span>
        <span className="card-code">{paletteCode}</span>
      </div>
    </div>
  );
};

export default Card;
