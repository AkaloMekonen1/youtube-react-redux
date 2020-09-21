import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSiteName } from "../actions/changeSiteName.js";
class Users extends Component {
  render() {
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.data.map((user, userIndex) => (
            <tr key={userIndex}>
              <th scope="row">{user.id}</th>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (globalState) => {
  return {
    users: globalState.userReducer.users,
  };
};
const mapDispatchToState = {
  siteChange: changeSiteName,
};
export default connect(mapStateToProps, mapDispatchToState)(Users);
