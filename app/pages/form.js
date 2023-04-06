import Button from "../src/Buttton";

const Form = () => {
  return (
    <form method="POST" action="/api/formApi">
      <input type="text" name="name" />
      <input type="submit" value="送信" />
      <Button text={"テスト"} />
    </form>
  );
};

export default Form;
