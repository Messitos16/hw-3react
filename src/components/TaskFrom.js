import React, { useState } from 'react';
const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Enter task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
