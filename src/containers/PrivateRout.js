import React from 'react';
import {connect} from 'react-redux'
import { Route, Redirect } from "react-router-dom";
const PrivateRouter = ({path, component: Component, loginUser , ...rest})=>{
    return(
        <Route path={path} {...rest}/>
    )
}
const mapStateToProps = (globalState)=>{
    return {loginUser: globalState.UserReducer.loginUser}
}
const mapDispatchToProps = {
   
}
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter);