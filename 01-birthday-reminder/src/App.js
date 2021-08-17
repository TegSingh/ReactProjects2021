import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';


function App() {

  // Initialize the state value with the value specified in data.js file
  const [people, setPeople] = useState(data);

  return (
    <React.Fragment>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
