import React from 'react';

import ProjectsGrid from '../components/ProjectsGrid';

export default function Projects(props) {
  return (
    <div className="projects">
      <div className="projects__heading">
        <h1 className="heading-primary--sub">Projects</h1>
      </div>
      <ProjectsGrid />
    </div>
  );
}
