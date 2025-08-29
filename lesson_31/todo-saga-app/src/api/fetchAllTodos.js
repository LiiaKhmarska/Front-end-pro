export const fetchAllTodos = async () => {
  const response = await fetch("http://localhost:3000/todos");
  if (!response.ok) {
    throw new Error("Something is wrong with loading todos...");
  }
  const data = await response.json();
  return data;
};
