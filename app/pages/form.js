const Form = () => {
  return (
    <form method="POST" action="/api/formApi">
      <input type="text" name="name" />
      <input type="submit" value="送信" />
    </form>
  );
};

export default Form;
