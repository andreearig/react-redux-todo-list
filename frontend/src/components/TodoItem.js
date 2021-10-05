import React from "react";
import Icon from "react-crud-icons";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, AddTodo, DeleteTodo, UpdateTodo } from "../actions/todos";
import { useState, useEffect } from "react";

const TodoItem = ({ name, _id, setDisplay, setId }) => {
  const dispatch = useDispatch();
  const deleteTodo = (e, id) => {
    dispatch(DeleteTodo(id));
    console.log(id);
  };
  return (
    <div>
      <div className="todo-text">{name}</div>
      <div className="todo-actions">
        <Icon
          name="edit"
          tooltip="Edit"
          theme="light"
          size="small"
          onClick={(e) => {
            setDisplay(true);
            setId(_id);
          }}
        />
        <Icon
          name="delete"
          tooltip="Delete"
          theme="light"
          size="small"
          onClick={(e) => deleteTodo(e, _id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
