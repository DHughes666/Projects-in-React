import React from "react";
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
    return (
        <main>
            <nav>
                <img 
                    src={logo} 
                    alt="jobster logo"
                    className="logo"
                />
            </nav>
            <div className="container page">
                <div className="info">
                    dd
                </div>
                <img 
                    src={main} alt="job hunt" 
                    className="img main-img"
                />
            </div>
        </main>
    )
};

export default Landing;