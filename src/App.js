import React from 'react';
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
        <p>{props.siteName}</p>
    </div>
  );
}
const mapStateToProps = (globalState)=>{
  return{
    siteName: globalState.siteName
  }
}
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(App);
