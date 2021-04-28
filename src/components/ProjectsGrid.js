import React from 'react';

import ProjectCard from './ProjectCard';

import ReactLogo from '../assets/images/react-logo.png';

const projects = [
  {
    id: 0,
    title: 'Project 1',
    description: 'This is sample text',
    imgSrc: ReactLogo,
    gitLink: '',
    demoLink: '/',
    selected: false,
  },
  {
    id: 1,
    title: 'Project 2',
    description: 'This is a fake description',
    imgSrc: ReactLogo,
    gitLink: '',
    demoLink: '/',
    selected: false,
  },
  {
    id: 2,
    title: 'Project 3',
    description: 'This will say something about this project',
    imgSrc: ReactLogo,
    gitLink: '',
    selected: false,
  },
];

export default function ProjectsGrid() {
  // const chunk = (items) => {
  //   const chunked = [];

  //   while (items.length) {
  //     chunked.push(items.splice(0, 3));
  //   }

  //   return chunked;
  // };

  // const makeItems = (items) => {
  //   const gridItems = chunk(items);
  //   const rows = [];

  //   for (let i = 0; i < gridItems.length; i++) {
  //     rows.push([...gridItems[i]]);
  //   }

  //   let incr = 0;
  //   const mappedRows = rows.map((row) => {
  //     incr++;
  //     return
  //     <div key={incr} className="row">
  //       {row.map(item => <ProjectCard item={item} title={item.title} key={item.id} />)}
  //     </div>
  //   });

  //   return mappedRows;
  // };

  return (
    <div className="projects__grid">
      {projects.map((item) => (
        <ProjectCard item={item} title={item.title} key={item.id} />
      ))}
    </div>
  );
}
