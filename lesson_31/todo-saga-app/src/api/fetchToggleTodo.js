export const fetchToggleTodo = async (todo) => {
  const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
    method: "PUT",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Something is wrong with toggle status of todo...");
  }
};
