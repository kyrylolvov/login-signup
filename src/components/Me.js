import React from "react";
import { connect } from "react-redux";
import { handleFetchData } from "../actions";

class Me extends React.Component {
  componentDidMount() {
    this.props.handleFetchData(
      localStorage.getItem("accessToken"),
      localStorage.getItem("refreshToken")
    );
  }

  render() {
    return (
      <div className="login">
        <strong className="page__message">🔥 {this.props.message}</strong>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.MeInfo;
};

export default connect(mapStateToProps, { handleFetchData })(Me);
