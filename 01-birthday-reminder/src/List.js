import React from 'react';

const List = ({ people }) => {
  return (
    <React.Fragment>
      {people.map(({ id, name, age, image }) => {
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </React.Fragment>
  );
};

export default List;
