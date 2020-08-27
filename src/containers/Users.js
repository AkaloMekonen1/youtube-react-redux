import React from "react";
import { connect } from "react-redux";
import { changeSiteName } from "../actions/changeSiteName.js";
const Users = () => {
  return <div>Users</div>;
};
const mapStateToProps = (globalState) => {
  return {
    siteName: globalState.siteName,
  };
};
const mapDispatchToState = {
  siteChange: changeSiteName,
};
export default connect(mapStateToProps, mapDispatchToState)(Users);
