import React, {Component} from "react";
import { connect } from "react-redux";
class Cards extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (globalState) => {
  return {
    siteName: globalState.siteName,
  };
};
const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
