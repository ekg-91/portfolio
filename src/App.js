import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App () {
  const [state] = useState({
    title: 'Elliot Gallagher',
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' }
    ],
    home: {
      title: 'Elegant Design',
      subTitle: 'Performance Driven',
      text: 'Check out my work below'
    },
    projects: {
      title: 'Projects'
    },
    about: {
      title: 'About Me'
    },
    contact: {
      title: 'Get in touch'
    }
  })

  return (
    <Router>
      {/* <Container className='p-0' fluid>
        <Navbar className='border-bottom' bg='transparent' expand='lg'>
          <Navbar.Brand>Elliot Gallagher</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-toggle' />
          <Navbar.Collapse id='navbar-toggle'>
            <Nav className='ml-auto'>
              <Link className='nav-link' to='/'>Home</Link>
              <Link className='nav-link' to='/projects'>Projects</Link>
              <Link className='nav-link' to='/about'>About</Link>
              <Link className='nav-link' to='/contact'>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path='/' exact render={() => <HomePage title={state.home.title} subTitle={state.home.subTitle} text={state.home.text} />} />
        <Route path='/projects' render={() => <ProjectsPage title={state.projects.title} />} />
        <Route path='/about' render={() => <AboutPage title={state.about.title} />} />
        <Route path='/contact' render={() => <ContactPage title={state.contact.title} />} />
        <Footer />
      </Container> */}
    </Router>
  );
}
