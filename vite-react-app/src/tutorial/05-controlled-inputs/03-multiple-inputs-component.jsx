import { useState } from "react";


const MultipleInputs = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleNameChange = (event) => {
        setUser((prev) => {
            return {...prev, name: event.target.value}
        })
        console.log(user.name);
    }
    const handleEmailChange = (event) => {
        setUser((prev) => {
            return {...prev, email: event.target.value}
        })
        console.log(user.email);
    }
    const handlePasswordChange = (event) => {
        setUser((prev) => {
            return {...prev, password: event.target.value}
        })
        console.log(user.password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.name || !user.email) return;
        console.log('name: ', user.name, 'email: ', user.email);
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
            <h4>Multiple inputs</h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    type="text" 
                    name="" 
                    id="name" 
                    placeholder="" 
                    className="form-input" 
                    value={user.name}
                    onChange={handleNameChange}
                />
            </div>
            <div className="form-row">
                <label htmlFor="email" className="form-label">email</label>
                <input 
                    type="email" 
                    name="" 
                    id="email" 
                    placeholder="" 
                    className="form-input" 
                    value={user.email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className="form-row">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                    type="password" 
                    name="" 
                    id="password" 
                    placeholder="" 
                    className="form-input" 
                    value={user.password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button type="submit" className="btn btn-block">Submit</button>
        </form>
        </div>
    )
}

export default MultipleInputs;