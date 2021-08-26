import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

// Note that a list being passed as props cannot be destructured although objects can
const List = ({ items, removeItem, editItem }) => {
  return (<React.Fragment>
    <div className="grocery-list">
      {items.map(({ id, title }) => {
        return (<article className="grocery-item" key={id}>
          <p className="title">{title}</p>
          <div className="btn-container">
            <button type="button" className="edit-btn" onClick={() => editItem(id)}>
              <FaEdit />
            </button>
            <button type="button" className="delete-btn" onClick={() => removeItem(id)}>
              <FaTrash />
            </button>
          </div>
        </article>);
      })}
    </div>
  </React.Fragment>)
}

export default List
