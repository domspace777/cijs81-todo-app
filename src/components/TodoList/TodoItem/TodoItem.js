import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, handleCompleteTodo, handleDeleteTodo }) {
  const handleComplete = () => {
    handleCompleteTodo && handleCompleteTodo(todo.id);
  };

  const handleDelete = () => {
    handleDeleteTodo && handleDeleteTodo(todo.id);
  };

  return (
    <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
      <label className="todo-item__label">
      <input
    className="todo-item__input"
    type="checkbox"
    checked={todo.isCompleted}
    onChange={handleComplete}
      />
     {todo.text}
</label>

      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
