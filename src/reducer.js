const initState = {
    siteName: "Youtube site name"
}
const reducer = (state = initState, action)=>{
    switch(action.type){
        case 'CHANGE_SITE_NAME':
            return state = {...state, siteName: action.payload}
            default: return state
    }
}
export default reducer