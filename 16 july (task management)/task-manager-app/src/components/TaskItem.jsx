import React, { useState } from 'react';

const statusOptions = ['Pending', 'In Progress', 'Completed'];

function TaskItem({ task, onDelete, onEdit, onStatusChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState({ ...task });

  const handleSave = () => {
    onEdit(editTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input value={editTask.title} onChange={e => setEditTask({ ...editTask, title: e.target.value })} />
          <textarea value={editTask.description} onChange={e => setEditTask({ ...editTask, description: e.target.value })} />
          <select value={editTask.priority} onChange={e => setEditTask({ ...editTask, priority: e.target.value })}>
            <option>Low</option><option>Medium</option><option>High</option>
          </select>
          <button onClick={handleSave}>💾 Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p><strong>Priority:</strong> {task.priority}</p>
          <p><strong>Status:</strong> {task.status}</p>
          <select value={task.status} onChange={e => onStatusChange(task.id, e.target.value)}>
            {statusOptions.map(status => <option key={status}>{status}</option>)}
          </select>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
            <button onClick={() => onDelete(task.id)}>🗑️ Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
