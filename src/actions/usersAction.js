export const loginUser = (email, password) => {
    return async(dispatch) => {
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

export const handleUsers = (pageNumber) => {
    return async(dispatch) => {
        
        fetch(`https://reqres.in/api/users?page=${pageNumber}`)
            .then(response => response.json())
            .then(data => {
                return dispatch({
                    type: 'SET_USERS',
                    payload: data
                })
            });
    }

}

export const handleUser = (userID) => {
    return async(dispatch) => {
        
        fetch(`https://reqres.in/api/users/${userID}`)
            .then(response => response.json())
            .then(data => {
                return dispatch({
                    type: 'SET_USER',
                    payload: data
                })
            });
    }

}