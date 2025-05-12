import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import styles from "./styles.module.css";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function Form() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

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
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: newTask.duration * 60,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        task: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask() {
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: formatSecondsToMinutes(0),
        tasks: prevState.tasks.map((task) => {
          if (prevState.activeTask?.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
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
          disabled={!!state.activeTask}
        />
      </div>
      <div className={styles.formRow}>
        <p>Próximo intervalo é de 25m</p>
      </div>
      {state.currentCycle > 0 && (
        <div className={styles.formRow}>
          <Cycles />
        </div>
      )}

      <div className={styles.formRow}>
        {!state.activeTask ? (
          <Button
            key="btn_submit"
            type="submit"
            icon={<PlayCircleIcon />}
            aria-label="Iniciar uma nova tarefa"
            title="Iniciar uma nova tarefa"
          />
        ) : (
          <Button
            type="button"
            key="btn_button"
            icon={<StopCircleIcon />}
            color="red"
            aria-label="Interromper tarefa atual"
            title="Interromper tarefa atual"
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
