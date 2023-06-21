import React from "react";
import "./home.css";
import Card from "../../common/Card";
import data from "../../data/data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const clickHandler = (param) => {
    if (!param) {
      return;
    }
    navigate("/palette/" + param);
  };
  return (
    <>
      <div className="container">
        {data?.map((item) => (
          <Card
            key={item.paletteCode}
            colors={item.palette}
            paletteName={item.paletteName}
            paletteCode={item.paletteCode}
            onClick={clickHandler}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
