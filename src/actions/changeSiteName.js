export const changeSiteName=()=>{
    console.log('changeSiteName - dispatch action')
    return{
        type:'CHANGE_SITE_NAME',
        payload: "New site"
    }
}