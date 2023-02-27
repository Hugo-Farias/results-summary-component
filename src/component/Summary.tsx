import React from "react";
import cls from "./Summary.module.css";
import SummaryList from "./SummaryList";
import { jsonProps } from "../helpers/TypeDefinitions";

const Summary = function (props: jsonProps) {
  const summaryContent = props.data.map((v) => {
    return (
      <SummaryList
        key={v.category}
        category={v.category}
        score={v.score}
        icon={v.icon}
        color={v.color}
      />
    );
  });

  return (
    <div className={cls.main}>
      <h1 className={cls.title}>Summary</h1>
      {summaryContent}
    </div>
  );
};

export default Summary;
