const localLoginUser = window.localStorage.getItem('loginUser')
const initState ={
    loginUser: (localLoginUser !== null ? (localLoginUser==='true'): false),
    users: {}
}
const userReducer = (state = initState, action)=>{
    switch(action.type){
        case 'LOGIN':
            window.localStorage.setItem('loginUser', action.payload)
            return state = {...state, loginUser: action.payload}
            default: 
    }

    console.log('user reducer',state)
    return state
}
export default userReducer