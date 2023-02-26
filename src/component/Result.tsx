import cls from "./Result.module.css";

const Result = function () {
  return (
    <div className={cls.main}>
      <h2 className={cls.title}>Your Result</h2>
      <div className={cls.score}>
        <div className={cls.userScore}>76</div>
        <span className={cls.totalScore}>of 100</span>
      </div>
      <div>
        <h1>Great</h1>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
