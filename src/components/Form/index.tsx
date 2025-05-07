import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import styles from "./styles.module.css";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function Form() {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;
    const taskName = taskNameInput.current.value.trim();
    if (!taskName) alert("Digite o nome da tarefa");
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 10,
      type: "workTime",
    };

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1,
        secondsRemaining: newTask.duration * 60,
        formattedSecondsRemaining: "00:00",
        task: [...prevState.tasks, newTask],
      };
    });
  }
  return (
    <form onSubmit={handleCreateNewTask} className={styles.form} action="">
      <div className={styles.formRow}>
        <Input
          type="text"
          label="task"
          id="input"
          placeholder="O que você quer focar agora?"
          ref={taskNameInput}
        />
      </div>
      <div className={styles.formRow}>
        <p>Próximo intervalo é de 25m</p>
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>
      <div className={styles.formRow}>
        <Button type="submit" icon={<PlayCircleIcon />} />
        {/* <Button icon={<StopCircleIcon />} color="red" /> */}
      </div>
    </form>
  );
}
