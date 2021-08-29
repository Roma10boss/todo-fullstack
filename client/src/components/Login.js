import React, { useState } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { loginUser } from "../actions/user";

const Login = ({ history, loginUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await loginUser({ user: { username, password } });
      if (res.message) {
        alert(res.message);
      } else {
        localStorage.setItem("user", res.user);
        localStorage.setItem("jwt", res.jwt);
        window.location.href = '/';
      }
    } catch (err) {
      console.log("an error occurred==>>>", err);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} method="post">
        Username:{" "}
        <input
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        Password:{" "}
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <input type="submit" name="" value="Login" />
      </form>
      New here? <Link to='/register'>Signup</Link>
    </div>
  );
};

export default connect(null, { loginUser })(Login);