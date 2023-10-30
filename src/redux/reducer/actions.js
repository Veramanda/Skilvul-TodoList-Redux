export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHECKBOX_TODO = "CHECKBOX_TODO";
export const ALL = "ALL";
export const COMPLETED = "COMPLETED";
export const INCOMPLETE = "INCOMPLETE";

export const addTodo = (item) => ({
  type: ADD_TODO,
  payload: item,
});

export const editTodo = (item) => ({
  type: EDIT_TODO,
  payload: item,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const checkboxTodo = (id) => ({
  type: CHECKBOX_TODO,
  payload: id,
});

export const all = () => ({
  type: ALL,
});

export const completed = () => ({
  type: COMPLETED,
});

export const incomplete = () => ({
  type: INCOMPLETE,
});
