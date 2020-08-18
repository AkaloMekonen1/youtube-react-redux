import React from 'react';
import {connect} from 'react-redux'
import {changeSiteName} from './actions/changeSiteName'

function App(props) {
  return (
    <div className="App">
        <p onClick = {props.siteChange}>{props.siteName}</p>
    </div>
  );
}
const mapStateToProps = (globalState)=>{
  return{
    siteName: globalState.siteName
  }
}
const mapDispatchToProps = {
  siteChange: changeSiteName
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
