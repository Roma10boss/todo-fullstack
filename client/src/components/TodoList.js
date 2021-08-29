import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../actions/todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  useEffect(() => {
	setFilteredTodos(todos);
  }, [todos]);

  const filterTodos = (event) => {
    const { value } = event.target;
    let newTodos = todos;
    switch (value) {
      case "all":
        newTodos = todos;
        break;
      case "completed":
        newTodos = todos.filter((todo) => todo.completed);
        break;
      case "uncompleted":
        newTodos = todos.filter((todo) => !todo.completed);
        break;
      default:
        newTodos = todos;
    }
    setFilteredTodos(newTodos);
  };

  return (
    <div className="row col-sm-12">
      <select onChange={filterTodos}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>

      <ul className="list-group">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>

      {/*<ul className="col-sm-4">
        <h1>Uncompleted Todos</h1>
        {uncompletedTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>

      <ul className="col-sm-4">
        <h1>Completed Todos</h1>
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>*/}
    </div>
  );
};

export default TodoList;
