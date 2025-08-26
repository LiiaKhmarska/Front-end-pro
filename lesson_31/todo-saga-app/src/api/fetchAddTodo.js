export const fetchAddTodo = async ({ content: todo }) => {
  const newTodo = {
    id: Date.now(),
    content: todo,
  };

  const response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Something is wrong with adding new todo...");
  }

  console.log("ADD", newTodo);
};
