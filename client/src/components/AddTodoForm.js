import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todo";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title, description }));
    history.push("/profile");
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Title</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Title"
        value={title}
        required
        onChange={(event) => setTitle(event.target.value)}
      />

      <label className="sr-only">Description</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Description"
        value={description}
        required
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
