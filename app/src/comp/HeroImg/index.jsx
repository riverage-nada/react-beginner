import React from "react";
import css from "./HeroImg.module.scss";

const HeroImg = (props) => {
  return (
    <div className={`${css["comp"]}`}>
      <img className={`${css.img}`} src="/hero.png" alt="" />
    </div>
  );
};

export default HeroImg;
