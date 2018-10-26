import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';

const App = () => (
  <Router>
    <div className="container mainContainer">
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);

export default App;
