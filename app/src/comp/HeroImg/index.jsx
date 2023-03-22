import React from "react";
import css from "./HeroImg.module.scss";

const HeroImg = () => {
  return <img className={`${css["img"]}`} src="/hero.png" alt="" />;
};

export default HeroImg;
