import "./styles/theme.css";
import "./styles/global.css";

import { Home } from "./Pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext";

// import { TaskStateModel } from "./models/TaskStateModel";
// import { TaskContext } from "./contexts/TaskContext";

// const initialState: TaskStateModel = {
//   tasks: [],
//   secondsRemaining: 0,
//   formattedSecondsRemaining: "00:00",
//   activeTask: null,
//   currentCycle: 0,
//   config: {
//     workTime: 25,
//     shortBreakTime: 5,
//     longBreakTime: 15,
//   },
// };

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
