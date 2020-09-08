export const loginUser = (email, password) => {
    console.log(email, password)
    const body = {
        email,
        password
    }
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
         body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => console.log(data));
    return {
        type: 'LOGIN',
        payload: true
    }
}