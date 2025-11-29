export default function TodoItem({ todo, index, toggleTodo, deleteTodo, theme }) {
  return (
    <div className={`todo ${theme}-todo ${todo.completed ? "completed" : ""}`}>
      <li className="todo-item">{todo.text}</li>

      <button
        className={`check-btn ${theme}-button`}
        onClick={() => toggleTodo(index)}
      >
        ✔
      </button>

      <button
        className={`delete-btn ${theme}-button`}
        onClick={() => deleteTodo(index)}
      >
        🗑
      </button>
    </div>
  );
}
