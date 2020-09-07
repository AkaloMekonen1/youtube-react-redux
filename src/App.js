import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSiteName } from "./actions/changeSiteName";
import { BrowserRouter as Router, Route, Link ,NavLink } from "react-router-dom";
import Home from "./containers/Home";
import Users from "./containers/Users";
import User from "./containers/User";
import Login from "./containers/Login";
class App extends Component {

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <Link to = '/'>{this.props.siteName}</Link>
          <button onClick = { this.props.siteChange }>Change Site Name</button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/User/1">
                  User Number 1
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/users/:pageNumber?" component={Users} />
          <Route path="/user/:userID" component={User} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (globalState) => {
  return {
    siteName: globalState.siteReducer.siteName,
  };
};
const mapDispatchToProps = {
  siteChange: changeSiteName,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
