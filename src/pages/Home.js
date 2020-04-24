import React from 'react';

import Hero from '../components/Hero';

export default function Home (props) {
  return (
    <div class="home">
      <h1 className="heading-primary--main">Elegant Design</h1>
      <h2 className="heading-primary--sub">Performance Driven</h2>
      <h3 className="heading-secondary">Full-Stack UI/UX Architecture and Design</h3>
      <Hero className="home__carousel" />
    </div>
  );
}
