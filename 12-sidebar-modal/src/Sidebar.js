import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (<React.Fragment>
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(({ id, url, text, icon }) => {
          return (<li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>)
        })}
      </ul>
      <ul className="social-icons">
        {social.map(({ id, url, icon }) => {
          return (<li key={id}>
            <a href={url}>
              {icon}
            </a>
          </li>)
        })}
      </ul>
    </aside>
  </React.Fragment>)
}

export default Sidebar
