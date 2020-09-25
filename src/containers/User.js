import React, {Component} from "react";
import { connect } from "react-redux";
import Cards from "../components/Cards"
class User extends Component {
  render() {
    return(
      <div> 
        <Cards />
      </div>
    )
  }
}
const mapStateToProps = (globalState) => {
  return {
  };
};
const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
