import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from "./features/todos/todosSlice";
import "./styles/main.css";
import "./styles/corner.css";
import useTheme from "./hooks/useTheme";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ThemeSelector from "./components/ThemeSelector";
import Clock from "./components/Clock";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <div id="header">
        <ThemeSelector setTheme={setTheme} />
        <h1 id="title">Just do it.<div id="border"></div></h1>
      </div>

      <div id="form">
        <TodoInput addTodo={(text) => dispatch(addTodo({ id: Date.now(), text, completed: false }))} theme={theme} />
      </div>

      <Clock />

      <TodoList
        todos={todos}
        toggleTodo={(id) => dispatch(toggleTodo(id))}
        deleteTodo={(id) => dispatch(deleteTodo(id))}
        theme={theme}
      />
    </>
  );
}
