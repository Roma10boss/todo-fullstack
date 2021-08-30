import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
        window.location.href = "/";
      }
    } catch (err) {
      console.log("an error occurred==>>>", err);
    }
  };

  return (
    <div className="formWrapper">
      <div className="box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} method="post">
          <input
            type="text"
            value={username}
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" name="" value="Login" />
        </form>
        New here? <Link to="/register">Signup</Link>
      </div>
    </div>
  );
};

export default connect(null, { loginUser })(Login);
