import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, AddTodo, DeleteTodo, UpdateTodo } from "../actions/todos";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [update, setUpdate] = useState("");
  const [display, setDisplay] = useState(false);
  const [id, setId] = useState(0);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const createTodo = () => {
    dispatch(AddTodo(todo));
  };

  const updateTodo = (e, id) => {
    dispatch(UpdateTodo(id, { update }));
    console.log(id);
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch, todos]);

  return (
    <div id="todo-list">
      <div className="wrapper">
        <input
          id="todo-input"
          type="text"
          value={todo}
          placeholder="add"
          onChange={(e) => setTodo(e.target.value)}
        />
        <br />
        <button type="button" onClick={createTodo}>
          Add
        </button>
      </div>
      {display ? (
        <div className="wrapper">
          <input
            id="update-input"
            type="text"
            value={update}
            placeholder="update"
            onChange={(e) => setUpdate(e.target.value)}
          />
          <br />
          <button
            type="button"
            onClick={(e) => {
              setDisplay(false);
              updateTodo(e, id);
            }}
          >
            Update
          </button>
          <br />
          <button
            type="button"
            onClick={(e) => {
              setDisplay(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div></div>
      )}
      {todos === undefined ? (
        <div className="wrapper">
          <h1>You don't have acces</h1>
          <Link to="/login">Login</Link>
        </div>
      ) : (
        <ul>
          {todos.map(({ _id, name }, i) => (
            <li key={i} className="todo">
              <TodoItem
                name={name}
                _id={_id}
                setDisplay={setDisplay}
                setId={setId}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
