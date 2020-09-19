export const loginUser = (email, password) => {
    return async(dispatch) => {
        console.log(email, password)
        const body = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
        fetch('https://reqres.in/api/login', options)
            .then(response => response.json())
            .then(data => {
                const isLoggedIn = (typeof data.token !== 'undefined' && data.token !== '')
                console.log(data)
                return dispatch({
                    type: 'LOGIN',
                    payload: isLoggedIn
                })
            });
    }

}
export const logoutUser = ()=>{
    return {
        type: 'LOGIN',
        payload: false
    }
}