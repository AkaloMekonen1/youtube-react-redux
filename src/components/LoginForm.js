import React, { Component } from "react";
class LoginForm extends Component{
  constructor(){
    super()
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }
  render(){
      return (
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value = {this.state.user.email}
              onChange = {this.handlerChangeUserEmail}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    ;
  }
}

export default LoginForm;
