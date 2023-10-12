import { createContext, useState } from "react";

const GlobalContext = createContext();

const AppContext = ({children}) => {
    const [name, setName] = useState('peter')
    return (
        <GlobalContext.Provider value={{name, setName}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;