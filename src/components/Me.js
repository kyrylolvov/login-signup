import axios from "axios";
import React from "react";

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageMessage: "Loading data, please wait...",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      axios
        .get("http://142.93.134.108:1111/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          this.setState({
            pageMessage: res.data.body.message,
          });
        });
    }, 1000);
  }

  render() {
    return (
      <div className="login">
        <strong className="page__message">🔥 {this.state.pageMessage}</strong>
      </div>
    );
  }
}

export default Me;
