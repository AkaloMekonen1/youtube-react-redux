import React from 'react'
import { connect } from 'react-redux';
import {changeSiteName} from '../actions/changeSiteName'
const Home = () => {
    return(
        <div>
          Home
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)