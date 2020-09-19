import React from 'react';
import {connect} from 'react-redux'
import { loginUser } from '../actions/loginUser';
const PrivateRouter = ({path, component=Component, loginUser , ...rest})=>{
    return()
}
const mapStateToProps = (globalState)=>{
    return {loginUser: globalState.UserReducer.loginUser}
}
const mapDispatchToProps = {
   
}
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter);