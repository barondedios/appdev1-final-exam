import { useState, useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(saved);
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    setTodos([...todos, { text, completed: false }]);
  }

  function toggleTodo(index) {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  }

  function deleteTodo(index) {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  }

  return { todos, addTodo, toggleTodo, deleteTodo };
}
