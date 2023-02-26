import React from "react";
import cls from "./SummaryList.module.css";

const colors = {
  white: "255,255,255",
  black: "0,0,0",
  red: "255,0,0",
  green: "0,128,0",
  blue: "0,0,255",
  yellow: "255,255,0",
  magenta: "255,0,255",
  cyan: "0,255,255",
  gray: "128,128,128",
};

interface props {
  category: string;
  score: number;
  icon: string;
  color: string;
}

const SummaryList: React.FC<props> = function (props) {
  const color = colors[props.color];

  return (
    <ul>
      <li className={cls.list}>
        <img src={`/src/assets/images/${props.icon}`} alt="icon" />{" "}
        <h1 style={{ color: "" }}>{props.category}</h1>{" "}
        <span className={cls.rating}>{props.score}</span>
        <span>/ 100</span>
      </li>
    </ul>
  );
};

export default SummaryList;
