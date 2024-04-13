import Image from "next/image";
import styles from "./ui/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Read a New Patent</h1>
      </div>
    </main>
  );
}
