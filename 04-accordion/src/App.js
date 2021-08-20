import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  // Note that setQuestions will never be used as per the requirements of the project
  const [questions, setQuestions] = useState(data);

  return (
    <React.Fragment>
      <main>
        <div className="container">
          <h3>Questions and Answers about Login</h3>
          <section className="info">
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })}
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
