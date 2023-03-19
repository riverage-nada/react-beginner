import Button from "@/comp/Buttton";
import Head from "@/comp/Head";
import HeroImg from "@/comp/HeroImg";
import Member from "@/comp/Member";
import css from "./Index.module.scss";
import Link from "next/link";

const Index = () => {
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

      <section className={`${css["section--button"]}`}>
        <Link href={"/reserve"}>
          <Button text={"参加する"} />
        </Link>
      </section>

      <section className={`${css["section--list"]}`}>
        <div className={`${css["listHead"]}`}>
          <Head head={"参加者"} />
        </div>
        <div className={`${css["list"]}`}>
          {members.map((item, index) => {
            return <Member key={item.name} img={item.img} name={item.name} />;
          })}
        </div>
      </section>
    </div>
  );
};

const members = [
  {
    name: "田中太郎",
    img: "https://picsum.photos/id/40/100/100",
  },
  {
    name: "田中太郎1",
    img: "https://picsum.photos/id/40/100/100",
  },
  {
    name: "田中太郎2",
    img: "https://picsum.photos/id/40/100/100",
  },
];

export default Index;
