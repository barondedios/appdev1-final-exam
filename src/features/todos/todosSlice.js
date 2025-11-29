import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodos } from "./todosApi";

// Async thunk to fetch todos from API
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const todos = await getTodos(5); // limit to 5 or more
  return todos;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
