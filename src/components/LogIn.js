import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { Link, Redirect } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Enter your credentials to log in");
  const [loggedIn, setLoggedIn] = useState(false);
  const [tokenMessage, setTokenMessage] = useState("");

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
        console.log(res);
        if (res.status === 200) {
          setMessage("Logged in successfully");
          setLoggedIn(true);
          axios
            .get("http://142.93.134.108:1111/me", {
              headers: {
                Authorization: `Bearer ${res.data.body.access_token}`,
              },
            })
            .then((res) => {
              setTokenMessage(res.data.body.message);
            });
        } else {
          setLoggedIn(false);
        }
      });
  };

  if (loggedIn === true) {
    setTimeout(function () {}, 1000);
    return (
      <Redirect
        to={{
          pathname: "/me",
          tokenMessage,
        }}
      />
    );
  }

  return (
    <div className="login">
      <form className="login__form">
        <h1>Log In ✌</h1>
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
          {message}, <Link to="/">proceed to signup page</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
