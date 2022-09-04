import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Create from './Components/create';
import BlogDetails from './Components/BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/blog/:id">
            <BlogDetails />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
