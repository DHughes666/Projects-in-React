import React from "react";
import styled from 'styled-components'
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';


const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img 
                    src={logo} 
                    alt="jobster logo"
                    className="logo"
                />
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
                    <button className="btn btn-hero">Login/Register</button>
                </div>
                <img 
                    src={main} alt="job hunt" 
                    className="img main-img"
                />
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.main`
    nav{
        width:var(--fluid-width);
        max-width:var(--max-width);
        margin: 0 auto;
        height:var(--nav-height);
        display: flex;
        align-items: center;
    }

    .page{
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }

    h1 {
        font-weight: 700;
        span {
            color: var(--primary-500);
        }
    }

    p {
        color: var(--grey-600);
    }

    .main-img {
        display: none;
    }

    @media (min-width: 992px) {
        .page {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`;

export default Landing;