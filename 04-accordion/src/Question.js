import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <React.Fragment>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setToggle(!toggle)}>
            {toggle ? '-' : '+'}
          </button>
        </header>
        {toggle && <p>{info}</p>}
      </article>
    </React.Fragment>
  );
};

export default Question;
