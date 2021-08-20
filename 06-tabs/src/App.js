import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {

  const [loading, setLoading] = useState(true); // loading state value while the program is fetching data from url
  const [jobs, setJobs] = useState([]); // state to store data
  const [value, setValue] = useState(2); // Used for indexing the jobs array

  // Fetch jobs only on the first render
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setJobs(result);
    setLoading(false);
  }

  if (loading) {
    return (<React.Fragment>
      <section className='section loading'>
        <h1>Loading</h1>
      </section>
    </React.Fragment>)
  } else {
    const { company, dates, duties, title } = jobs[value];
    return (<React.Fragment>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          {/* button container */}
          {jobs.map((job, index) => {
            return (
              <button key={job.id}
                className={`job-btn ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}>
                {job.company}
              </button>
            )
          })}
          {/* jobs info */}
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
      </section>
    </React.Fragment>)
  }
}

export default App
