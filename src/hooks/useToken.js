import { useEffect, useState } from "react";
const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const userEmail = { email: email };
        if (email) {
            fetch(`https://morning-thicket-25612.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('access-token')}`
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