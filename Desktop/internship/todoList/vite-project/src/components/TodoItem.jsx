import React from "react";

function TodoItem({ task, deleteTask, toggleCompleted }) {
    return (
        <div className="todo-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span>{task.text}</span>
            <button onClick={() => toggleCompleted(task.id)}>
                {task.completed ? "Undo" : "Complete"}
            </button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;
