import React from 'react';
import Review from './Review';
function App() {


  return (
    <React.Fragment>
      <main>
        <section className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
          <Review />
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
