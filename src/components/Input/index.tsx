import styles from "./styles.module.css";

type InputProps = {
  id: string;
  label?: string;
} & React.ComponentProps<"input">;

export function Input({ type, label, id, ...props }: InputProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
}
