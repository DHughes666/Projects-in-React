import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const UseEffectBasics = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const users = await response.json();
                setUsers(users);
                console.log(users);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [])

    return (
        <section>
            <h3>Github users</h3>
            <ul className="users">
                {users.map(user =>{
                    const {id, login, avatar_url, html_url} = user
                    return <li key={id}>
                        <img 
                            src={avatar_url} alt={login} 
                        />
                        <h5>{login}</h5>
                        
                        <a href={html_url}>Profile</a>
                    </li>
                })}
            </ul>
        </section>
    )
}

export default UseEffectBasics;