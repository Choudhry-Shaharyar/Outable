import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleRestaurant from './pages/SingleRestaurant'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Welcome to CORS server 😁')
// })
// app.get('/cors', (req, res) => {
//     res.send('This has CORS enabled 🎈')
// })
// app.listen(8080, () => {
//     console.log('listening on port 8080')
// })
function App() {
  return (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/restaurant/:id">
        <SingleRestaurant />
      </Route>
      <Route exact path="*">
        <Error />
      </Route>
    </Switch>
      
  </Router>
    
  )
}

export default App
