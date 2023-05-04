import { useRouter } from "next/router";
import { useState } from "react";

const Form = () => {
  const router = useRouter();
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (event) => {
    // イベントの対象のデフォルトの挙動を取り消す
    event.preventDefault();
    console.log({ name, message });

    if (name === "") {
      alert("名前を入力してください");
      return;
    }

    console.log("ok");

    // フォームの送信先を指定
    fetch("/api/formApi", {
      method: "POST", // POSTメソッドで送信
      headers: {
        "Content-Type": "application/json", // データ形式をJSONに指定
      },
      body: JSON.stringify({ name: name, message: message }), // JSON形式のデータに変換
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("applyed", true);
        router;
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <textarea
        value={message}
        onChange={(e) => {
          setmessage(e.target.value);
        }}
      />
      <input type="submit" value="送信" />
    </form>
  );
};

export default Form;
