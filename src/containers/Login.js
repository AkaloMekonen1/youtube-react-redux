import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSiteName } from "../actions/changeSiteName";
import { loginUser } from "../actions/loginUser"
import LoginForm from "../components/LoginForm";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      msg: "This is the message",
      enableLoginForm: true
    }
    setTimeout(() => {
      this.setState({
        msg: "This is the new message"
      })
    }, 2000)
  }
  toggleLoginForm = (e) => {
    this.setState({
      enableLoginForm: !this.state.enableLoginForm
    })
  }
  render() {
    let loginForm = ""
    if(this.state.enableLoginForm){
      loginForm = <LoginForm msg = {this.state.msg}/>
    }
    return (
      <div>
        {loginForm}
        <button onClick = {this.toggleLoginForm}>Toggle Login Form</button>
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
  userLogin: loginUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
