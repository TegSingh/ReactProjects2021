import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data); // state for data
  const [index, setIndex] = useState(0); // State for index of value shown in the slider

  // Slider moves right every 3 seconds
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index])

  return (
    <React.Fragment>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }
            if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
              position = 'lastSlide';
            }
            return (
              <article key={id} className={position}>
                {/* The following h4 and images are overlapped due to the css */}
                <img src={image} alt={name} className='person-img' />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon"></FaQuoteRight>
              </article>
            )
          })}
          <button className="prev" onClick={() => setIndex((index + people.length - 1) % people.length)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex((index + 1) % people.length)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
