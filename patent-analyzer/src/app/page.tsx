import Image from "next/image";
import styles from "./ui/global.module.css";

export default function Home() {

  const recents = [ // Placeholder data for testing
    {name: "Patent 1", description: "A groundbreaking patent on the latest technology"},
    {name: "Patent 2", description: "A groundbreaking patent on the latest technology"},
    {name: "Patent 3", description: "A groundbreaking patent on the latest technology"},
  ];

  function getRecentHistory(history: any[]) {
    return (
        <>
        {history.map((patent) => {
            return (
            <div className={styles.card}>
              <h2>{patent.name}</h2>
              <p>{patent.description}</p>
              <button className={styles.readButton}>Read</button>
            </div>
            );
        })}
        </>);
  }


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Read a New Patent</h1>
        <div className={styles.homeContainer}>
           {/* Potentially replace whole box with separate component  */}
           <div className={styles.dropbox}>
            <button>Upload or drop a file</button>
            <button>From URL</button>
           </div>
        </div>
        <h1>Recent History</h1>
        <div className={styles.homeContainer}>
           {/* Potentially replace cards with separate component  */}
           <div className={styles.cardStack}>
            {getRecentHistory(recents)}
           </div>
        </div>
      </div>
    </main>
  );
}
