import React, { useState } from 'react';

const priorities = ['Low', 'Medium', 'High'];

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert('Task title is required.');
    addTask({ title, description, priority });
    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task Title" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        {priorities.map(p => <option key={p}>{p}</option>)}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
