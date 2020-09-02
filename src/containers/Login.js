import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSiteName } from "../actions/changeSiteName";
import LoginForm from "../components/LoginForm";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      msg: "This is the message"
    }
    setTimeout(() => {
      this.setState({
        msg: "This is the new message"
      })
    }, 2000)
  }
  render() {
    return (
      <div>
        <LoginForm msg = {this.state.msg}/>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => {
  return {
    siteName: globalState.siteName,
  };
};
const mapDispatchToProps = {
  siteChange: changeSiteName,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
