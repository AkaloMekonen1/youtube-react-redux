export const loginUser = (email, password) => {
    console.log(email, password)
    return async(dispatch)=>{
        const body = {
            email,
            password
        }
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
             body: JSON.stringify(body)
        }
        fetch('https://reqres.in/api/login',option )
            .then(response => response.json())
            .then(data => {console.log(data)
                const isLoggedIn = (typeof data.token !== 'undefined' && data.token !== '')
                return dispatch({
                    type: 'LOGIN',
                    payload: isLoggedIn
                })});
    }
    
}