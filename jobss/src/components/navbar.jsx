import {useState} from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';

import { useDispatch, useSelector } from "react-redux";

import Logo from "./logo";
import Wrapper from "../assets/wrappers/Navbar";

import { toggleSidebar, logoutUser } from "../features/user/userSlice";

const Navbar = () => {
    const {user} = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [showLogout, setShowLogout] = useState(false);

    const toggle = () => {
        dispatch(toggleSidebar());
    }

    const logouthandler = () => {
        dispatch(logoutUser('Logging out...'));
    }

    return (
        <Wrapper>
            <div className="nav-center">
                <button
                    type="button"
                    className="toggle-btn"
                    onClick={toggle}
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
                        onClick={() => setShowLogout(!showLogout)}
                    >
                        <FaUserCircle />
                        {user?.name}
                        <FaCaretDown />
                    </button>
                    <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                        <button
                            type="button"
                            className="dropdown-btn"
                            onClick={logouthandler}
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