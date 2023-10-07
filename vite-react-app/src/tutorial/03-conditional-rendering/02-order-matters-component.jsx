import { useEffect, useState } from "react";

const url = 'https://api.github.com/users/QuincyLarson';

const OrderMatters = () => {
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
    const {avatar_url, name, company, bio} = user;
    return (
        <>
            <h2>Multiple Returns Basics</h2>
            <img 
                style={{width: '150px', borderRadius: '25px'}}
                src={avatar_url} alt={name}
            />
            <h3>{name}</h3>
            <h4>Works at {company}</h4>
            <p>{bio}</p>
        </>
    )
}

export default OrderMatters;