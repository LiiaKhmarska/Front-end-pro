export const fetchDeleteTodo = async (id) => {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Something is wrong with deleting todo...");
  }
};
