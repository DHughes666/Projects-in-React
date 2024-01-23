import img from '../assets/images/logo.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Logo = () => {
    return (
        <Wrapper>
            <img 
                src={img} 
                alt="jobster logo"
                className="logo"
            />
        </Wrapper>
    )
};

export default Logo;