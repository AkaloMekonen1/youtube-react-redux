const { bindActionCreators } = require("redux");

const initState ={
    loginUser: false
}
const userReducer = (state = initState, action)=>{
    console.log('user reducer')
    switch(action.type){
        case 'LOGIN':
            return state = {...state, loginUser: action.payload}
            default: return state
    }
}
export default userReducer