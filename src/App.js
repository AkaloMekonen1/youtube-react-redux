import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeSiteName } from './actions/changeSiteName'
import { BrowserRouter as Router, Route } from react-router-dom

class App extends Component{
  render(){
    setTimeout(()=>{
      this.props.siteChange()
    }, 3000)
    return (
      <div className="App">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand" href="#">{this.props.siteName}</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">Users</a>
            </div>
          </div>
        </nav>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/users/:pageNumber" component={Users} />
          <Route path="/user/:userID" component={User} />
        </Router>
      </div>
    );
  }
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
