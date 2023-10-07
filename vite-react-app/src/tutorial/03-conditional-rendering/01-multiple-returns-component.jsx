import { useEffect, useState } from "react";

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsBasics = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return
                }
                const user = await response.json();
                setUser(user);
                console.log(user);
            } catch (e) {
                setIsError(true);
                console.log(e);
            }
            setIsLoading(false);
        }
        fetchData();
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>There was an error...</h2>
    }
    return (
        <>
            <h2>Multiple Returns Basics</h2>
            <img 
                style={{width: '150px', borderRadius: '25px'}}
                src={user.avatar_url} alt={user.name}
            />
            <h3>{user.name}</h3>
            <h4>Works at {user.company}</h4>
            <p>{user.bio}</p>
        </>
    )
}

export default MultipleReturnsBasics;