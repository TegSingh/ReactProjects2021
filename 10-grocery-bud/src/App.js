import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState(''); // State to store the input of the form
  const [list, setList] = useState([]); // State to store the list
  const [isEditing, setIsEditing] = useState(false); // Flag to indicate that a value is being edited when a form is being filled
  const [editID, setEditID] = useState(null); // ID/index to update
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' }) // Alert to show item added/removed messages

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // Display Alert
      showAlert(true, 'danger', 'Please Enter a value');
    } else if (name && isEditing) {
      // Edit name
      setList(list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name };
        } else {
          return item;
        }
      }))
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Item updated');
    } else {
      // Add items as per the original case
      showAlert(true, 'success', 'Item Added');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName(''); // Reset the value for form input
    }
  }

  // Speeds up the process of setting state for the Alert object
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg })
  }

  const removeItem = (id) => {
    showAlert(true, 'success', 'Item removed');
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }

  return (<React.Fragment>
    <section className="section-center">
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input type="text"
            className='grocery'
            placeholder='Example: Eggs'
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <button className="submit-btn" type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={() => {
            showAlert(true, 'success', 'Grocery List cleared')
            setList([]);
          }}>Clear Items</button>
        </div>
      )}
    </section>
  </React.Fragment>);
}

export default App
