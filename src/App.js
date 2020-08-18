import React from 'react';
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
        <p>{props.name.siteName}</p>
    </div>
  );
}
const mapStateToProps = (globalState)=>{
  return{
    name: globalState
  }
}
export default connect(mapStateToProps)(App);
