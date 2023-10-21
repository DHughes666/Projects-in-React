import { useState, useContext, createContext } from 'react'
import sublinks from './data'


const AppContext = createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page: '', links: []})
    
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find(link => link.page === text)
        setPage(page)
        setLocation(coordinates);
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
        location,
        page
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
