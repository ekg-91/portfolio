import React from 'react';

import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';

export default function Projects(props) {
  return (
    <div>
      <Hero title={props.title} />
      <ProjectsGrid />
    </div>
  );
}
