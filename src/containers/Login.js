import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/loginUser"
import LoginForm from "../components/LoginForm";
class Login extends Component {
  componentWillMount(){
    if(this.props.loginUser===true){
      this.props.history.push('./Home.js')
    }
  }

  handlerLogin = (email, password)=>{
    this.props.userLogin(email, password)
  }
  render() {
    return (
      <div className = "login-page">
        <LoginForm handlerLogin = {this.handlerLogin}/>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => {
  return {
    loginUser: globalState.userReducer.loginUser
  };
};
const mapDispatchToProps = {
  userLogin: loginUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
