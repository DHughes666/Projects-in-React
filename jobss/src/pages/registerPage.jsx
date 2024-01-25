import { useState, useEffect } from "react";
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { registerUser, loginUser } from "../features/user/userSlice";

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState);
    const {user, isLoading} = useSelector(store => store.user)
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {name, email, password, isMember} = values;
        if (!email || !password || (!isMember && !name)) {
            toast.error('Please Fill Out All Fields');
            return;
        }
        if (isMember) {
            dispatch(loginUser({email, password}));
            return;
        }
        dispatch(registerUser({name, email, password}));
    }

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember});
    }

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigator('/');
            }, 3000);
        }
    }, [user, navigator]);

    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {!values.isMember && (
                    <FormRow
                        type='text'
                        name='name'
                        value={values.name}
                        handleChange={handleChange}
                        labelText={values.name}
                    />
                )}
                <FormRow 
                    type='email'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                />
                <FormRow 
                    type='password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                />
                <button
                    type="submit" 
                    className="btn btn-block"
                    onClick={handleChange}
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "submit"}
                </button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type="button" onClick={toggleMember}
                    className="member-btn"
                    >
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
    
            </form>
        </Wrapper>
    )
}

export default Register;