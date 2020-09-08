import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/loginUser"
import LoginForm from "../components/LoginForm";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      msg: "This is the message",
      enableLoginForm: true
    }
  }
  toggleLoginForm = (e) => {
    this.setState({
      enableLoginForm: !this.state.enableLoginForm
    })
  }
  handlerLogin = (email, password)=>{
    this.props.userLogin(email, password)
  }
  render() {
    let loginForm = ""
    if(this.state.enableLoginForm){
      loginForm = <LoginForm handlerLogin = {this.handlerLogin}/>
    }
    return (
      <div>
        {loginForm}
        <button onClick = {this.toggleLoginForm}>Toggle Login Form</button>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
    
  };
};
const mapDispatchToProps = {
  userLogin: loginUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
