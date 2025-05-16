import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/Main';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;
  const sortedTasks = [...state.tasks].sort((a, b) => {
    return b.startDate - a.startDate;
  });
  const taskTypeDictionary = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curto',
    longBreakTime: 'Descanso longo',
  };
  function handleResetHistory() {
    if (!confirm('Certeza?')) return;
    dispatch({ type: TaskActionTypes.RESET_STATE });
  }
  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span className={styles.container}>History</span>
          {hasTasks && (
            <div className={styles.buttonContainer}>
              <div className={styles.container}>
                <Button
                  icon={<TrashIcon />}
                  color='red'
                  aria-label='Apagar todo o histórico'
                  onClick={handleResetHistory}
                />
                <span className={styles.buttonLabel}>apagar histórico</span>
              </div>
            </div>
          )}
        </Heading>
      </Container>

      <Container>
        {!hasTasks && (
          <p style={{ textAlign: 'center' }}>
            Experimente iniciar uma nova tarefa.
          </p>
        )}
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortedTasks.map(task => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </MainTemplate>
  );
}
