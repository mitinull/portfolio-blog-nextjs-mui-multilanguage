import styles from "../page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/">English</Link>
      <div className={styles.grid}>
        <Link href="./basketnull" className={styles.card}>
          <div>
            <h2>
              بسکتنال <span>-&gt;</span>
            </h2>
            <p>Simple 2d game made using Love2d.</p>
          </div>
        </Link>

        <Link href="ema english" className={styles.card}>
          <div>
            <h2>
              EMA English <span>-&gt;</span>
            </h2>
            <p>A Persian podcast to learn English with musics and songs.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
