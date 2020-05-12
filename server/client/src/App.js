import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="app">
      <Router>
        <div className="logo">
          <a href="/">Elliot Gallagher</a>
        </div>
        <Nav />

        <Route path="/" exact render={() => <Home />} />
        <Route path="/projects" render={() => <Projects />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Footer />
      </Router>
    </div>
  );
}
