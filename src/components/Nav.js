import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav () {
  return(
    <div class="nav">
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
}
