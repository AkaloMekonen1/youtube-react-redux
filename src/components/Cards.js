import React, {Component} from "react";
import { connect } from "react-redux";
import { handleUser} from "../actions/usersAction"
class Cards extends Component {
  render() {
      console.log(this.props.userActive)
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.userActive.data.avatar} alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.userActive.data.first_name}</h5>
          <p className="card-text">{this.props.userActive.ad.text}</p>
          <a href={this.props.userActive.ad.url} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (globalState) => {
  return {
    userActive: globalState.userReducer.userActive
  };
};
const mapDispatchToProps = {
    handleUser: handleUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
