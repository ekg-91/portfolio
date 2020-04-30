import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const closeNav = () => {
    let checked = document.getElementById('nav-toggle').checked;
    return checked ? document.getElementById('nav-toggle').click() : null;
  }

  return (
    <div className="nav">
      <input type="checkbox" id="nav-toggle" className="nav__checkbox"/>
      <label htmlFor="nav-toggle" className="nav__button">
        <span className="nav__icon">&nbsp;</span>
      </label>

      <div className="nav__bg">&nbsp;</div>

      <div className="nav__nav">
        <ul className="nav__list">
          <li className="nav__item" onClick={e => closeNav()}><Link to="/" className="nav__link">Home</Link></li>
          <li className="nav__item" onClick={e => closeNav()}><Link to="/about" className="nav__link">About</Link></li>
          <li className="nav__item" onClick={e => closeNav()}><Link to="/projects" className="nav__link">Projects</Link></li>
          <li className="nav__item" onClick={e => closeNav()}><Link to="/contact" className="nav__link">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
