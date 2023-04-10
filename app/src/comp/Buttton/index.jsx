import css from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={`${css["comp"]}`} {...props}>
      {/*  {...props} はスプレッド構文という書き方*/}
      {/* この書き方で、propsの中身を展開している。この書き方をすることで、このコンポーネントを呼び出す際に、このコンポーネントに渡したいpropsを、このコンポーネントの引数としてそのまま渡すことができる */}
      <span className={`${css["text"]}`}>{props.text}</span>
    </button>
  );
};

export default Button;
