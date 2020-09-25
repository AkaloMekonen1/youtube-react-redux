const localLoginUser = window.localStorage.getItem('loginUser')
const initState ={
    loginUser: (localLoginUser !== null ? (localLoginUser==='true'): false),
    users: {
        
            page: null,
            per_page: null,
            total: null,
            total_pages: null,
            data: []
    },
    userActive: {
        id: null,
        email: null,
        first_name: null,
        last_name: null,
        avatar: null
    }
}
const userReducer = (state = initState, action)=>{
    switch(action.type){
        case 'LOGIN':
            window.localStorage.setItem('loginUser', action.payload)
            state = {...state, loginUser: action.payload}
            break
        case 'SET_USERS':
            state = {...state, users: action.payload}
            break 
        case 'SET_USER':
            state = {...state, userActive: action.payload}    
            default: 
            break
    }

    console.log('user reducer',state)
    return state
}
export default userReducer