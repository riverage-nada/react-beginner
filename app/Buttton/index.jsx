import css from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${css.comp}`}>
      <span className={`${css.text}`}>{props.text}</span>
    </button>
  );
};

export default Button;
