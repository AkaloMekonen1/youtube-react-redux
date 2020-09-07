const initState = {
    siteName: "Youtube site name"
}
const reducer = (state = initState, action)=>{
    console.log('reducer')
    switch(action.type){
        case 'CHANGE_SITE_NAME':
            console.log('CHANGE_SITE_NAME')
            return state = {...state, siteName: action.payload}
            default: return state
    }
}
export default reducer