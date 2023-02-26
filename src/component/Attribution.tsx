import cls from "./Attribution.module.css";
import { GITHUB_URL } from "../helpers/variables";

const Attribution = function () {
  return (
    <div className={cls.main}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href={GITHUB_URL} target="_blank">
        Hugo Farias
      </a>
      .
    </div>
  );
};

export default Attribution;
