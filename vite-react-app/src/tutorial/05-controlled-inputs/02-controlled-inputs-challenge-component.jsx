import { useState } from "react";
import { data } from "../../data";


const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const ControlledInputChallenge = () => {
    const [name, setName] = useState('')
    const [users, setUsers] = useState(data)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        let userId = randomInt(1, 15)
        const newUser = {id: userId, name}
        const updateUsers = [...users, newUser]
        setUsers(updateUsers);
        setName('')
        
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h4>Add User</h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    type="text" 
                    name="" 
                    id="name" 
                    placeholder="" 
                    className="form-input" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            {users.map((user) =>(
                <h4>{user.name}</h4>
            ))}
            
            <button type="submit" className="btn btn-block">Add</button>
        </form>
    )
}

export default ControlledInputChallenge;