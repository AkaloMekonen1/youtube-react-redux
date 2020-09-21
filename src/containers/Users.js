import React from "react";
import { connect } from "react-redux";
import { changeSiteName } from "../actions/changeSiteName.js";
const Users = () => {
  return (<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
  </tbody>
</table>);
};
const mapStateToProps = (globalState) => {
  return {
    users: globalState.userReducer.user,
  };
};
const mapDispatchToState = {
  siteChange: changeSiteName,
};
export default connect(mapStateToProps, mapDispatchToState)(Users);
