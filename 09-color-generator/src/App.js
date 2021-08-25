import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('')
  const [error, setError] = useState(false) // Initially no errors
  const [list, setList] = useState(new Values('#f15025').all(10)); // Containing the list of colors

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello');
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };


  return <React.Fragment>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
          className={`${error ? 'error' : null}`}
        />
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color, index) => {
        return <SingleColor key={index} {...color} index={index} />
      })}
    </section>
  </React.Fragment>
}

export default App
