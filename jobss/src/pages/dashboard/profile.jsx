import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../components";


const Profile = () => {
    const {isLoading, user} = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        lastName: user?.lastName || '',
        location: user?.location || '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, lastName, location} = userData
        if (!name || !email || !lastName || !location) {
            toast.error('Please Fill Out All Fields');
            return;
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [name]: value});
    }

    const {name, email, lastName, location} = userData

    return (
        <Wrapper>
            <form className="form" onSubmit={handleSubmit}>
                <h3>Profile</h3>

                <div className="form-center">
                    <FormRow 
                        type='text'
                        name='name'
                        value={name}
                        handleChange={handleChange}
                    />
                    <FormRow 
                        type='text'
                        labelText='last name'
                        name='lastName'
                        value={lastName}
                        handleChange={handleChange}
                    />
                    <FormRow 
                        type='email'
                        name='email'
                        value={email}
                        handleChange={handleChange}
                    />
                    <FormRow 
                        type='text'
                        name='location'
                        value={location}
                        handleChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-block"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Please wait...' : 'save changes'}
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}

export default Profile;