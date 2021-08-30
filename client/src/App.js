import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "./actions/user";
import AddTodoForm from "./components/AddTodoForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


const App = ({ history, logoutUser }) => {
  const logout = () => {
    logoutUser();
    history.push("/login");
  };

  return (
    <div className="container bg-white p-4 mt-5">
      <Link to="#" onClick={logout}> Logout</Link> |
      <Link to="/profile"> Profile</Link>
      <h1>My Todo List</h1>
			<AddTodoForm />
			{/*<TotalCompleteItems /> */}
    </div>
  );
};

export default connect(null, {logoutUser})(App);
