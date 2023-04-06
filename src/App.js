import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Tabs from "./components/Tabs/Tabs";

const TABS = [
  { id: "all", name: "All" },
  { id: "active", name: "Active" },
  { id: "completed", name: "Completed" },
];

function App() {
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleCompleteTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const handleDeleteAllCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(filteredTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeTab === "active") {
      return !todo.isCompleted;
    } else if (activeTab === "completed") {
      return todo.isCompleted;
    } else {
      return true;
    }
  });

  return (
    <div className="app">
      <h1>#todo</h1>
      <Tabs tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab}>
        {activeTab !== "completed" && (
          <AddTodoForm handleAddTodo={handleAddTodo} />
        )}
        <TodoList
          todos={filteredTodos}
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
        {activeTab === "completed" && (
          <button className="delete-btn" onClick={handleDeleteAllCompleted}>
            Delete All Completed
          </button>
        )}
      </Tabs>
    </div>
  );
}

export default App;
