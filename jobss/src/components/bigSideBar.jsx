import { useSelector } from "react-redux";

import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./logo";
import NavLinks from "./navlinks";


const BigSideBar = () => {
    const {isSidebarOpen} = useSelector((store) => store.user);
    
    return (
        <Wrapper>
            <div 
                className={
                    isSidebarOpen 
                    ? "sidebar-container" : "sidebar-container show-sidebar"
                }
            >
                <div>
                    <header className="content">
                        <Logo />
                    </header>
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    )
}

export default BigSideBar;