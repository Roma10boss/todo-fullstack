import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { logoutUser } from "../actions/user";

const Profile = ({ history }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
    history.push("/login");
  };

  return (
    <div className="container bg-white p-4 mt-5">
      <Link to="/"> Add Todo</Link> |
      <Link to="#" onClick={logout}>
        {" "}
        Logout
      </Link>{" "}
      <h1>My Profile</h1>
      <TodoList />
    </div>
  );
};

export default Profile;
