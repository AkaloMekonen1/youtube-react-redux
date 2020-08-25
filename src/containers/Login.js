import React from 'react'
import { connect } from 'react-redux';
import{ changeSiteName } from '../actions/changeSiteName'
import LoginForm from '../components/LoginForm'
const Login = () => {
    return(
        <div>
          <LoginForm / >
        </div>
    )
}

const mapStateToProps = (globalState)=>{
  return{
    siteName: globalState.siteName
  }
}
const mapDispatchToProps = {
  siteChange: changeSiteName
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)