import cls from "./Card.module.css";
import jsonData from "../data/data.json";
import Result from "./Result";
import Summary from "./Summary";

const Card = function () {
  return (
    <div className={cls.card}>
      <Result data={jsonData} />
      <Summary data={jsonData} />
    </div>
  );
};

export default Card;
