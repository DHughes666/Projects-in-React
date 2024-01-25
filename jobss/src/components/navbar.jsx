import {useState} from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';

import { useDispatch, useSelector } from "react-redux";

import Logo from "./logo";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
    const {user} = useSelector((store) => store.user);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <div className="nav-center">
                <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => console.log('toggle sidebar')}
                >
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className="logo-text">dashboard</h3>
                </div>
                <div className="btn-container">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => console.log('toggle logout dropdown')}
                    >
                        <FaUserCircle />
                        {user?.name}
                        <FaCaretDown />
                    </button>
                    <div className="dropdown show-dropdown">
                        <button
                            type="button"
                            className="dropdown-btn"
                            onClick={() => console.log('logout user')}
                        >
                            logout
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar;