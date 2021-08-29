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
    <div>
      <h1> Register </h1>{" "}
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
        Confirm Password:{" "}
        <input
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />{" "}
        <br />
        <input type="submit" name="" value="Signup" />
      </form>{" "}
      Already registered? <Link to="/login">Login</Link>
    </div>
  );
};

export default connect(null, { createUser })(Register);
