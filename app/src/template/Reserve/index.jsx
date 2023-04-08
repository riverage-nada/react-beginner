import Button from "@/comp/Buttton";
import Head from "@/comp/Head";
import HeroImg from "@/comp/HeroImg";
import { useRef, useState } from "react";
import css from "./Reserve.module.scss";
import { useRouter } from "next/router";

const Reserve = () => {
  const [name, setname] = useState("");
  const [body, setbody] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(body);

    fetch("/api/formApi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        body: body,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        router.push("/");
      });
  };

  return (
    <div className={`${css["comp"]}`}>
      <section className={`${css["section--hero"]}`}>
        <HeroImg />
      </section>

      <section className={`${css["section"]} ${css["section--info"]}`}>
        <div className={`${css["infoStack"]}`}>
          <Head head={"若人の集い1"} />
          <p className="p-text">記念すべき第１回目の会です！</p>
        </div>
        <div className={`${css["infoStack"]}`}>
          <Head head={"会場"} />
          <p className="p-text">焼肉屋：五円</p>
        </div>
      </section>

      <section className={`${css["section"]}`}>
        <form className={`${css["form"]}`} onSubmit={handleSubmit} name="form">
          <div className={`${css["inputContainer"]}`}>
            <input
              className={`${css["formInput"]}`}
              type="text"
              placeholder="氏名"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <textarea
              className={`${css["formInput"]} ${css["textarea"]}`}
              placeholder="こんな会だったらいいなという意見があれば、教えてください"
              value={body}
              onChange={(e) => {
                setbody(e.target.value);
              }}
            />
          </div>

          <Button text={"参加する"} type="submit" />
        </form>
      </section>
    </div>
  );
};

const XXX = () => {
  const [name, setname] = useState("");
  const [body, setbody] = useState("");

  return (
    <form action="">
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <textarea
        value={body}
        onChange={(e) => {
          setbody(e.target.value);
        }}
      />
      <input type="submit" value="送信" />
    </form>
  );
};

export default Reserve;
