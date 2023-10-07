import { useState } from "react";

const UserChallenge = () => {
    const [user, setUser] = useState(null);

    const login = () => {
        // normally connect to db or api
        setUser({name: 'Chaolin Jun'});
    }
    const logout = () => {
        // normally connect to db or api
        setUser(null);
    }

    return (
        <div>
            {user ? (<div>
            <h4>hello there, {user.name}</h4>
            <button className="btn" onClick={logout}>Logout</button>
            </div>): (<div>
                <h4>Please login</h4>
                <button className="btn" onClick={login}>Login</button>
            </div>) }
        </div>
    )
}

export default UserChallenge;