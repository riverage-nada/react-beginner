import css from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={`${css["comp"]}`} type={props.type || "button"}>
      {/* / props.typeがなければ"button"が設定される */}
      {/* / <button>はformの中にある時、自動でtype="submit"になる。そうするとカスタマイズしにくいので、submitにしたい場合のみ呼び出しもとから設定できるようにしている */}
      <span className={`${css["text"]}`}>{props.text}</span>
    </button>
  );
};

export default Button;
