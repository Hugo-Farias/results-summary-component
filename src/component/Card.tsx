import cls from "./Card.module.css";
import Result from "./Result";
import Summary from "./Summary";
import jsonData from "../data/data.json";

const Card = function () {
  return (
    <div className={cls.card}>
      <Result data={jsonData} />
      <Summary data={jsonData} />
    </div>
  );
};

export default Card;
