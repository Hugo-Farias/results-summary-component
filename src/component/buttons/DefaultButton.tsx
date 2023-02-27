import React from "react";
import cls from "./DefaultButton.module.css";

const DefaultButton = function (props: { children: React.ReactNode }) {
  return <button className={cls.btn}>{props.children}</button>;
};

export default DefaultButton;
