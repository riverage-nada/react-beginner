import css from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={`${css.comp}`} {...props}>
      <span className={`${css.text}`}>{props.text}</span>
    </button>
  );
};

export default Button;
