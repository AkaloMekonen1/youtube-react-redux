const localLoginUser = window.localStorage.getItem('loginUser')
const initState ={
    loginUser: (localLoginUser !== null ? localLoginUser: false)
}
const userReducer = (state = initState, action)=>{
    console.log('user reducer',state)
    switch(action.type){
        case 'LOGIN':
            window.localStorage.getItem('loginUser', action.payload)
            return state = {...state, loginUser: action.payload}
            default: return state
    }
}
export default userReducer