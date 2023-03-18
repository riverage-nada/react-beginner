import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div className={styles.container}>
      <p>hello world!</p>
    </div>
  );
}
