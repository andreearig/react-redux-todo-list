import { GET_ALL, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./types";
import Services from "../services/Services";

export const getTodos = () => async (dispatch) => {
  try {
    const res = await Services.getItems();
    const todos = await res.json();
    dispatch({
      type: GET_ALL,
      payload: todos.todoTasks,
    });
  } catch (err) {
    console.log(err);
  }
};

export const AddTodo = (todo) => async (dispatch) => {
  try {
    const res = await Services.create({ todo });

    dispatch({
      type: ADD_TODO,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const DeleteTodo = (id) => async (dispatch) => {
  try {
    const res = await Services.deleted(id);

    dispatch({
      type: DELETE_TODO,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const UpdateTodo = (id, updated) => async (dispatch) => {
  try {
    const res = await Services.updateItem(id, updated);

    dispatch({
      type: UPDATE_TODO,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};
