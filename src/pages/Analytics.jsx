import { useContext, useState, useMemo } from "react";
import { AppContext } from "../context/AppContext";

const Analytics = () => {

  const { state, dispatch } = useContext(AppContext);
  const [task, setTask] = useState("");

  const addTask = () => {
    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), text: task, completed: false }
    });
    setTask("");
  };

  const completedTasks = useMemo(() => {
    return state.tasks.filter(task => task.completed).length;
  }, [state.tasks]);

  return (
    <div>
      <h2>Task Analytics Page</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <h3>Total Tasks: {state.tasks.length}</h3>
      <h3>Completed Tasks: {completedTasks}</h3>

      {state.tasks.map(t => (
        <div key={t.id}>
          {t.text}

          <button onClick={() =>
            dispatch({ type: "TOGGLE_TASK", payload: t.id })
          }>Toggle</button>

          <button onClick={() =>
            dispatch({ type: "DELETE_TASK", payload: t.id })
          }>Delete</button>
        </div>
      ))}

      <button onClick={() =>
        dispatch({ type: "CLEAR_TASKS" })
      }>Clear All</button>

    </div>
  );
};

export default Analytics;