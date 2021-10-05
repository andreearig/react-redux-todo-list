import { GET_ALL, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/types";

const initialState = [];

function todoReducer(todos = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return [...todos, payload];
    case DELETE_TODO:
      return todos;
    case UPDATE_TODO:
      return todos;
    case GET_ALL:
      return payload;
    default:
      return todos;
  }
}

export default todoReducer;
