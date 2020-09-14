export const loginUser = (email, password) => {
    return async(dispatch) => {
        console.log(email, password)
        const body = {
            email,
            password
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