import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    console.log(`Remove Tour called for tour id=${id}`);
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  // Following is an async await method
  const fetchTours = async () => {
    // Precaution to show the user that we are fetching the data
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("Fetching tours from API");
    fetchTours();
  }, [])
  // Conditional Rendering
  if (loading === true) {
    return (
      <React.Fragment>
        <Loading />
      </React.Fragment>
    );
  } else if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        {/* The methods that dont use arguments can be set up as Reference */}
        <button className='btn' onClick={() => fetchTours()}>Refresh</button>
      </div>
    </main>
  } else {
    return (
      <React.Fragment>
        <Tours tours={tours} removeTour={removeTour} />
      </React.Fragment>
    );
  }
}

export default App
