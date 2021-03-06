import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../actions/todo";

const TodoItem = ({ id, title, completed, description }) => {
  const [activeTodo, setActiveTodo] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(updateTodo({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(id));
  };

  const showTodoDescription = () => {
    setActiveTodo(!activeTodo);
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCheckboxClick}
          ></input>
          <div onClick={showTodoDescription} className="ms-2">{title}</div>{" "}
          <div className="">{activeTodo ? ` - ${description}` : ""}</div>
        </span>
        <button onClick={handleDeleteClick} className="delete-btn">
          <span>
            <i className="fas fa-trash"></i>
          </span>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
