export const loginUser = (email, password) =>{
    console.log(email, password)
    return{
        type: 'LOGIN',
        payload: true
    }
}