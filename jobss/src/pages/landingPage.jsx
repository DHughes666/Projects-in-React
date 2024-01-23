import React from "react";
import { Link } from "react-router-dom";

import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage'

import { Logo } from "../components";


const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby cornhole hoodie quinoa microdosing 
                        next level chicharrones trust fund polaroid 
                        af try-hard farm-to-table same helvetica 
                        pour-over sriracha. Photo booth mlkshk truffaut, 
                        mukbang poutine artisan ethical XOXO hashtag 
                        church-key man braid fashion axe authentic 
                        microdosing next level. Hoodie semiotics JOMO 
                        skateboard unicorn chambray gochujang keytar 
                        kinfolk activated charcoal post-ironic neutral 
                        milk hotel four loko venmo. Gentrify poke 
                        put a bird on it, tumblr tousled mixtape offal. 
                    
                    </p>
                    <Link to="/register" className="btn btn-hero">
                        Login/Register
                    </Link>
                </div>
                <img 
                    src={main} alt="job hunt" 
                    className="img main-img"
                />
            </div>
        </Wrapper>
    )
};



export default Landing;