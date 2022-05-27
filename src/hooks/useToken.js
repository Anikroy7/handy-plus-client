import { useEffect, useState } from "react";
const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const userEmail = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(userEmail)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside token', data);
                    setToken(data.token)
                    localStorage.setItem('access-token', data.token)
                })
        }
    }, [user])

    return [token];

}


export default useToken;