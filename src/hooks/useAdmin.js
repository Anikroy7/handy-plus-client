import { useEffect, useState } from "react"

const useAdmin = user => {

    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },

            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside admin', data);
                    setAdmin(data.admin)
                })
        }
    }, [user])
    return [admin]
}

export default useAdmin;