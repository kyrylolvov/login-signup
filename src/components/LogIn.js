import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { Link, Redirect } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Enter your credentials to log in");
  const [loggedIn, setLoggedIn] = useState(false);

  const submitSignUp = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://142.93.134.108:1111/login?email=${email}&password=${password}`,
        {
          params: { email: `${email}`, password: `${password}` },
        }
      )
      .then((res) => {
        if (res.data.code === 1012) {
          setMessage("Password is wrong");
        } else {
          setLoggedIn(true);
          localStorage.setItem("accessToken", res.data.body.access_token);
          localStorage.setItem("refreshToken", res.data.body.refresh_token);
          //   localStorage.setItem("accessToken" res.body);
        }
      });
  };

  if (loggedIn === true) {
    return <Redirect to="/me" />;
  }

  return (
    <div className="login">
      <form className="login__form">
        <h1>Log in to your account ✌</h1>
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
          Log In
        </button>
        <p className="form__message">
          {message}, <Link to="/signup">proceed to signup page</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
