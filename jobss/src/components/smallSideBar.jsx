import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FaTimes } from 'react-icons/fa'

import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./logo";
import { toggleSidebar } from "../features/user/userSlice";
import links from "../utils/links";

const SmallSideBar = () => {
    const { isSidebarOpen } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleSidebar());
    }

    return (
        <Wrapper>
            <div 
                className={
                    isSidebarOpen ? 
                        'sidebar-container show-sidebar' : 'sidebar-container'
                }>
                <div className="content">
                    <button
                        className="close-btn"
                        onClick={toggle}
                    >
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <div className="nav-links">
                        {links.map((link) => {
                            const {text, path, id, icon} = link;
                            return (
                                <NavLink
                                    to={path}
                                    className={({isActive}) =>
                                        isActive ? 'nav-link active' : 'nav-link'
                                    }
                                    key={id}
                                    onClick={toggle}
                                >
                                    <span className="icon">{icon}</span>
                                    {text}
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSideBar;