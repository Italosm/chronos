import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import styles from "./styles.module.css";

export function Form() {
  return (
    <form className={styles.form} action="">
      <div className={styles.formRow}>
        <Input
          type="text"
          label="task"
          id="input"
          placeholder="O que você quer focar agora?"
        />
      </div>
      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>
      <div className={styles.formRow}>
        <Button icon={<PlayCircleIcon />} />
        {/* <Button icon={<StopCircleIcon />} color="red" /> */}
      </div>
    </form>
  );
}
