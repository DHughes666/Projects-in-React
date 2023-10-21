import { useState, useContext, createContext } from 'react'
import sublinks from './data'


const AppContext = createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
    
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    const values = {
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
    }

    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>;
}

// custom hook

export const useGlobalContext = () => {
    return useContext(AppContext)
}


export { AppProvider}
