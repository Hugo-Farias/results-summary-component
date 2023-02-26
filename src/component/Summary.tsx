import React from "react";
import json from "../data/data.json";
import cls from "./Summary.module.css";
import SummaryList from "./SummaryList";

const Summary = function () {
  const summaryContent = json.map((v) => {
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
