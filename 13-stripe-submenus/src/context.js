import React, { useState, useContext } from 'react'
import { FaLastfm } from 'react-icons/fa';
import App from './App';
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });

    const openSidebar = () => {
        console.log("Open sidebar method")
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text, coordinates) => {
        // Gets the object whose ID matches with the linkn passed as text from navbar
        const found = sublinks.find((link) => link.page === text)
        setPage(found);
        setLocation(coordinates);

        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (<AppContext.Provider
        value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
            location,
            page,
        }}>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}