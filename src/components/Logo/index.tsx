import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function ChronosLogo() {
  return (
    <div className={styles.logoContainer}>
      <RouterLink className={styles.logoLink} href='/'>
        <TimerIcon />
        <div className={styles.letterContainer}>
          <div className={styles.letterC}>C</div>
          <div className={styles.letterH}>H</div>
          <span className={styles.brandName}>ronos</span>
        </div>
      </RouterLink>
    </div>
  );
}
