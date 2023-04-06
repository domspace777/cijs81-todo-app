import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

function TodoList({ todos, handleCompleteTodo, handleDeleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
