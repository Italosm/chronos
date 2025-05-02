import styles from "./styles.module.css";

export default function ChronosLogo() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoWrapper}>
        <div className={styles.letterContainer}>
          <div className={styles.letterC}>C</div>
          <div className={styles.letterH}>H</div>
        </div>
        <div className={styles.brandName}>chronos</div>
      </div>
    </div>
  );
}
