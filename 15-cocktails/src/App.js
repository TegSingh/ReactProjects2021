import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* Colon used to pass the id to the url */}
          <Route path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          {/* A * path signifies the default path */}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
