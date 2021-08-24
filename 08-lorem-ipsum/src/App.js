import React, { useState } from 'react';
import data from './data';
function App() {

  // Number of paragraphs we need to display
  const [count, setCount] = useState(0)
  // Text to be displayed
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(count)
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    } else if (count > data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  }

  return (
    <React.Fragment>
      <section className="section-center">
        <h3>Tired of boring Lorem Ipsum</h3>
        <form onSubmit={handleSubmit} className="lorem-form">
          <label htmlFor="amount">
            Paragraphs:
          </label>
          <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
          <button type="submit" className="btn">Generate</button>
        </form>
        <article className="lorem-text">
          {text.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>
          })}
        </article>
      </section>
    </React.Fragment>
  )
}

export default App;
