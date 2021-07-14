import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Enter your credentials to sign up");

  const submitSignUp = (event) => {
    event.preventDefault();
    axios
      .post("http://142.93.134.108:1111/sign_up", {
        email: `${email}`,
        password: `${password}`,
      })
      .then((res) => {
        console.log(res);
        setMessage(res.data.message);
      });
  };

  return (
    <div className="login">
      <form className="login__form">
        <h1>Create an account 👋</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={submitSignUp} type="submit" className="submit__btn">
          Sign Up
        </button>
        <p className="form__message">
          {message}, <Link to="/login">proceed to login page</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
