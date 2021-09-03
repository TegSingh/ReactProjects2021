import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()


  return (
    <React.Fragment>
      <main>
        <button className="sidebar-toggle" onClick={openSidebar}>
          <FaBars />
        </button>
        <button className="btn" onClick={openModal}>Show Modal</button>
      </main>
    </React.Fragment>
  )
}

export default Home
