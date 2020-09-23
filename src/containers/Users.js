import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSiteName } from "../actions/changeSiteName.js";
import { handleUsers } from "../actions/usersAction";
class Users extends Component {
  componentWillMount() {
    this.props.handleUsers(this.pageNumber);
  }

  get pageNumber() {
    const isPageNumberExist =
      typeof this.props.match.params.pageNumber !== "undefined";
    return isPageNumberExist ? this.props.match.params.pageNumber : 1;
  }

  handleChangePageNumberRender() {
    let pageNumberRender = [];
    for (let i = 1; i < this.props.users.total_pages.length; i++) {
      pageNumberRender.push(
        <li key={i} className="page-item">
          <button className="page-link">
            {i}
          </button>
        </li>
      );
      return pageNumberRender
    }
  }
  render() {
    const changePageNumberRender = this.handleChangePageNumberRender
    return (
      <div>
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
        <nav aria-label="Page navigation example">
          {changePageNumberRender}
        </nav>
      </div>
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
  handleUsers: handleUsers,
};
export default connect(mapStateToProps, mapDispatchToState)(Users);
