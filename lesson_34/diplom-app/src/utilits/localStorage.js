export const saveState = (state) => {
  try {
    const serializesState = JSON.stringify(state.user.login);
    localStorage.setItem("user", serializesState);
  } catch (error) {
    console.error("Error saving state: ", error);
  }
};

export const loadState = () => {
  try {
    const serializesState = localStorage.getItem("user");
    return serializesState ? JSON.parse(serializesState) : undefined;
  } catch (error) {
    console.error("Error loading state", error);
    return undefined;
  }
};
