import cls from "./Attribution.module.css";

const Attribution = function () {
  return (
    <div className={cls.main}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Hugo Farias</a>.
    </div>
  );
};

export default Attribution;
