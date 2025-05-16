import { TrashIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/Main';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useState } from 'react';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

import styles from './styles.module.css';

export function History() {
  const { state, dispatch } = useTaskContext();
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 8;

  const sortedTasks = [...state.tasks].sort(
    (a, b) => b.startDate - a.startDate,
  );
  const totalPages = Math.ceil(sortedTasks.length / tasksPerPage);
  const hasTasks = sortedTasks.length > 0;

  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;
  const currentTasks = sortedTasks.slice(startIndex, endIndex);

  const taskTypeDictionary = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curto',
    longBreakTime: 'Descanso longo',
  };

  function handleResetHistory() {
    if (!confirm('Certeza?')) return;
    dispatch({ type: TaskActionTypes.RESET_STATE });
    setCurrentPage(1);
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
          <p className={styles.emptyMessage}>
            Experimente iniciar uma nova tarefa.
          </p>
        )}

        {hasTasks && (
          <>
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
                  {currentTasks.map(task => (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.pagination}>
              <Button
                icon={<ChevronLeft size={16} />}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                aria-label='Página anterior'
              />

              <Button
                icon={<ChevronRight size={16} />}
                onClick={() =>
                  setCurrentPage(prev => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                aria-label='Próxima página'
              />
            </div>
          </>
        )}
      </Container>
    </MainTemplate>
  );
}
