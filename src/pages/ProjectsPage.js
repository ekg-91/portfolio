import React from 'react';

import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';

function ProjectsPage (props) {
  return (
    <div>
      <Hero title={props.title} />
      <ProjectsGrid />
    </div>
  );
}

export default ProjectsPage;
