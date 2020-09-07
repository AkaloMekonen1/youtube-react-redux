const { bindActionCreators } = require("redux");

const initState ={}
const userReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CHANGE_USER_NAME':
            return state = {...state, userName: action.payload}
            default: return state
    }
}
export default userReducer