import React from "react";
import cls from "./SummaryList.module.css";
import { jsonShape } from "../helpers/typeDefinitions";
import reaction from "../assets/images/icon-reaction.svg";
import verbal from "../assets/images/icon-verbal.svg";
import memory from "../assets/images/icon-memory.svg";
import visual from "../assets/images/icon-visual.svg";

interface genericType {
  [key: string]: string;
}

const colors: genericType = {
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
const icons: genericType = { reaction, verbal, memory, visual };

// Figure out how to use this with vite later
// const icons = require.context("./assets/images", false, /\.(svg)$/);

const SummaryList: React.FC<jsonShape> = function (props) {
  const color = colors[props.color];
  const icon = icons[props.icon.slice(5, -4)];

  return (
    <ul>
      <li
        className={cls.list}
        style={{ backgroundColor: `rgba(${color}, 0.05)` }}
      >
        <img src={icon} alt="icon" />{" "}
        <h1 style={{ color: `rgba(${color}, 0.8)` }}>{props.category}</h1>{" "}
        <span className={cls.rating}>{props.score}</span>
        <span>/ 100</span>
      </li>
    </ul>
  );
};

export default SummaryList;
