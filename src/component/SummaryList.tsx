import React from "react";
import cls from "./SummaryList.module.css";
import { jsonShape } from "../helpers/typeDefinitions";

interface colors {
  [key: string]: string;
}

const colors: colors = {
  white: "255,255,255",
  black: "0,0,0",
  red: "255,0,0",
  green: "0,128,0",
  blue: "0,0,255",
  yellow: "238,173,53",
  magenta: "255,0,255",
  cyan: "0,255,255",
  gray: "128,128,128",
};

const SummaryList: React.FC<jsonShape> = function (props) {
  const color = colors[props.color];

  return (
    <ul>
      <li
        className={cls.list}
        style={{ backgroundColor: `rgba(${color}, 0.05)` }}
      >
        <img src={`/src/assets/images/${props.icon}`} alt="icon" />{" "}
        <h1 style={{ color: `rgba(${color}, 0.8)` }}>{props.category}</h1>{" "}
        <span className={cls.rating}>{props.score}</span>
        <span>/ 100</span>
      </li>
    </ul>
  );
};

export default SummaryList;
