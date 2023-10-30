import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CHECKBOX_TODO,
  ALL,
  COMPLETED,
  INCOMPLETE,
} from "../reducer/actions";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title }
            : item
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case CHECKBOX_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      };
    case ALL:
      return {
        ...state,
        filter: "ALL",
      };
    case COMPLETED:
      return {
        ...state,
        filter: "COMPLETED",
      };
    case INCOMPLETE:
      return {
        ...state,
        filter: "INCOMPLETE",
      };

    default:
      return state;
  }
};

export default todoReducer;
