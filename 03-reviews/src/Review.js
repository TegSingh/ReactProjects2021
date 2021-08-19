import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)
  // Set such that if index changes the value of name, job, image and text also change
  const { name, job, image, text } = people[index]

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = (index + 1) % people.length
    }
    setIndex(randomNumber)
  }


  return (
    <React.Fragment>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className='job'>{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button onClick={() => setIndex((index - 1) % people.length)} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={() => setIndex((index + 1) % people.length)} className='next-btn'>
            <FaChevronRight />
          </button>
          <button className="random-btn" onClick={randomPerson}>
            Surprise Me
          </button>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Review;
