import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {

  const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext();
  // console.log(page, links);
  const container = useRef(null);
  const [column, setColumn] = useState('col-2')

  // Make changes every time location of the mouse changes
  useEffect(() => {
    setColumn('col-2')
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumn('col-3');
    }
    if (links.length > 3) {
      setColumn('col-4');
    }
  }, [location, links]);

  return (
    <React.Fragment>
      <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
        <h4>{page}</h4>
        <div className={`submenu-center ${column}`}>
          {
            links.map((link, index) => {
              console.log(link)
              const { label, icon, url } = link;
              return (
                <a href={url}>
                  {icon}
                  {label}
                </a>
              )
            })
          }
        </div>
      </aside>
    </React.Fragment>
  )
}

export default Submenu
