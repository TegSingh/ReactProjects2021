import React, { useState, useContext } from 'react'

// Context has one for provider and one for consumer
const AppContext = React.createContext();

// Provider is element nearest above the calling component is the document tree
const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    return <AppContext.Provider value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar
    }}>{children}</AppContext.Provider>
}

// Custom Hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }