import axios from "axios";

// Base URL can be an env variable if needed
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getTodos = async (limit = 10) => {
  const res = await axios.get(`${BASE_URL}/todos?_limit=${limit}`);
  // Map to your app format
  return res.data.map(todo => ({
    id: todo.id,
    text: todo.title,
    completed: todo.completed,
  }));
};
