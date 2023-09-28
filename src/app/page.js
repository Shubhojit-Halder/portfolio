import Image from "next/image";
import styles from "./page.module.css";
import Left from "./Left";
import Right from "./Right";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Left />
        <Right />
      </div>
      <div className={styles.center}></div>
    </main>
  );
}
