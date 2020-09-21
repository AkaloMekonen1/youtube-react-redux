import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/usersAction"
import LoginForm from "../components/LoginForm";
class Login extends Component {
  componentWillMount(){
    if(this.props.loginUser===true){
      this.props.history.push('./')
    }
  }

  handlerLogin = (email, password)=>{
    this.props.userLogin(email, password)
    this.props.history.push('./')
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
