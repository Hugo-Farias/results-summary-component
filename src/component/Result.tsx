import cls from "./Result.module.css";
import { jsonProps } from "../helpers/TypeDefinitions";

const Result = function (props: jsonProps) {
  const avgScore =
    props.data.reduce((prev, curr) => prev + curr.score, 0) / props.data.length;

  return (
    <div className={`${cls.main} flex-column`}>
      <h2>Your Result</h2>

      <div className={`${cls.score} flex-column`}>
        <div className={cls.userScore}>{avgScore.toFixed()}</div>
        <span className={cls.totalScore}>of 100</span>
      </div>

      <div className={cls.result}>
        <h1>Great</h1>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
