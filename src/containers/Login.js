import React from 'react'
import { connect } from 'react-redux';
import{ changeSiteName } from '../actions/changeSiteName'
const Login = () => {
    return(
        <div>
          Login
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