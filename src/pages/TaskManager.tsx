import { useState } from 'react';
import { Link } from 'react-router-dom';

const TaskManager = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="project-page">
      <h2>Task Manager</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Back to Home Link */}
      <Link to="/yaw-page" className="back-to-home">
        ← Back to Home
      </Link>
    </div>
  );
};

export default TaskManager;