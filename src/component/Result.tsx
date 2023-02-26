import cls from "./Result.module.css";

const Result = function () {
  return (
    <div className={`${cls.main} flex-column`}>
      <h2>Your Result</h2>

      <div className={`${cls.score} flex-column`}>
        <div className={cls.userScore}>76</div>
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
