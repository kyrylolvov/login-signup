import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { handleLogIn } from "../actions";
import "./Form.css";

class LogIn extends React.Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLogIn(this.state.email, this.state.password);
  };

  render() {
    if (this.props.message === "You have logged in successfuly") {
      localStorage.setItem("accessToken", this.props.accessToken);
      localStorage.setItem("refreshToken", this.props.refreshToken);
      return <Redirect to="/me" />;
    }

    return (
      <div className="login">
        <form className="login__form">
          <h1>Log in to your account ✌</h1>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button onClick={this.handleSubmit} className="submit__btn">
            Log In
          </button>
          <p className="form__message">
            {this.props.message}
            <Link to="/signup">, proceed to signup page</Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.LogInInfo.message,
    accessToken: state.LogInInfo.accessToken,
    refreshToken: state.LogInInfo.refreshToken,
  };
};

export default connect(mapStateToProps, { handleLogIn })(LogIn);
