import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../actions/user";

const Register = ({ history, createUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (password === confirmPassword) {
        const res = await createUser({ user: { username, password } });
        if (res.message) {
          alert(res.message);
        } else {
          localStorage.setItem("user", res.user);
          localStorage.setItem("jwt", res.jwt);
          window.location.href = "/";
        }
      } else {
        alert("Passwords does not match");
      }
    } catch (err) {
      console.log("an error occurred==>>>", err);
    }
  };

  return (
    <div className="formWrapper">
      <div className="box">
        <h1> Register </h1>
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
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input type="submit" name="" value="Signup" />
        </form>
        Already registered? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default connect(null, { createUser })(Register);
