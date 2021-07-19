import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleSignUp } from "../actions";
import "./Form.css";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSignUp(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="login">
        <form className="login__form">
          <h1>Create an account 👋</h1>
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
            Sign Up
          </button>
          <p className="form__message">
            {this.props.message}
            <Link to="/login">, proceed to login page</Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.SignUpInfo.message);
  return { message: state.SignUpInfo.message };
};

export default connect(mapStateToProps, { handleSignUp })(SignUp);
